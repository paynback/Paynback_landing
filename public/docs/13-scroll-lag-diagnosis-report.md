# Scroll Lag Diagnosis Report

Follow-up to [`scroll-lag-diagnosis-prompt.md`](./scroll-lag-diagnosis-prompt.md). This report
confirms/refutes each suspected root cause (A–G) against the actual code and documents the fixes
applied.

> **Scope note:** No live browser Performance-panel trace was recorded for this pass (no browser
> automation available in this environment). Findings below are evidence-based static analysis —
> every claim cites the specific file/behavior confirmed by reading the code. Recording a Chrome
> DevTools / Safari Web Inspector trace before and after these fixes on an actual Mac is still the
> best way to verify the subjective "before/after" feel.

## Root cause confirmation

| # | Cause | Verdict | Evidence |
|---|-------|---------|----------|
| A | Competing rAF loops (Lenis vs Framer Motion) | **Mostly refuted**, one real nuance | Lenis drives `window.scrollY` directly, so Framer Motion's `useScroll()` in `Header.jsx` reads an already-in-sync position — not a broken/competing source. However, `Activities.jsx` (About page) uses a genuinely scroll-linked `useTransform(scrollYProgress, ...)` that recomputes a `scale` value every scroll frame while in view — real, ongoing per-frame cost stacked on top of Lenis. Left as-is; lower priority than B/D/G. |
| B | Lenis config causes "stuck" feel on trackpads | **Confirmed** | Config was exactly `{ lerp: 0.1, duration: 1.2, smoothWheel: true, wheelMultiplier: 1.0 }` with no trackpad-specific tuning. `shouldEnableLenis()` only excludes touch (`pointer: coarse`), Safari, and iOS — a MacBook trackpad in Chrome/Edge/Firefox reports `pointer: fine`, so Lenis is active there with this config. |
| C | WebGL (`LiquidChrome`) stealing frame budget | **Refuted — already optimized** | `LazyLiquidChrome.jsx` lazy-mounts via `IntersectionObserver` (`rootMargin: 200px`). `LiquidChrome.jsx` already starts/stops its `requestAnimationFrame` loop via a visibility `IntersectionObserver` (`threshold: 0.05`) and pauses on `document.visibilitychange`. It never sets a custom `dpr`, and OGL's `Renderer` default `dpr` is `1` (verified in `node_modules/ogl/src/core/Renderer.js`) — already rendering at a capped resolution, not device pixel ratio. No changes made. |
| D | `ScrollReveal`/`BlurReveal` — expensive `filter: blur()` | **Confirmed — primary cause of Hero→next-section stutter** | `BlurReveal.jsx` animated `filter: blur(6px) → blur(0px)` via Framer Motion. `filter` forces paint, not just composite. It wraps `HowIntoSection` (2nd section, right after Hero) and `AmazingFeaturesSection` on the homepage, and `AboutDetails` (right after Hero) plus `HowToWork` on the About page — matching the reported symptom exactly. `ScrollReveal.jsx` itself only animates `opacity`/`transform` (fine) but does create one `IntersectionObserver` per instance — a minor, non-blocking inefficiency, left unchanged. |
| E | Team/deals marquee animating layout properties | **Partially refuted** | Both marquees already animate `x` (a transform) via Framer Motion with `willChange: "transform"` — not `left`/`margin` as suspected, so they were already compositor-friendly. The real (minor) gap: neither paused while scrolled off-screen, so their `requestAnimationFrame` loops ran continuously everywhere, adding to cumulative main-thread load. |
| F | No loading UI on refresh | **Confirmed (partial gap)** | No `loading.jsx` existed anywhere in `src/app`. Home/About already used `next/dynamic` + `SectionSkeleton` for below-fold sections, and the Careers page already dynamic-imports `Team` with a skeleton — but `/blog`, `/blog/[slug]`, and `/careers/[slug]` had no route-level fallback, and `BlogList.jsx` showed a plain "Loading blogs..." text instead of a skeleton. |
| G | Hydration timing vs. first scroll | **Confirmed — matches "stuck then catches up"** | `SmoothScroll.jsx` rendered plain `{children}` (native scroll) until a `useEffect` ran, dynamically `import()`ed `lenis/react`, then `setState`d to swap in `<ReactLenis>`. Scrolling during that window meant native scroll ran first, then Lenis grabbed control mid-scroll — on every page load. |

## Fixes applied

### 1. Removed `filter: blur()` from `BlurReveal` (cause D)

**File:** [`src/components/sections/BlurReveal.jsx`](./../../src/components/sections/BlurReveal.jsx)

- **Before:** `initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}` → `whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}`, `willChange: "filter, transform, opacity"`.
- **After:** `filter` removed entirely; reveal is now opacity + `y` transform only, `willChange: "transform, opacity"`.
- **Verified by:** Code review — the transition no longer touches a paint-triggering CSS property. No visual regression: the fade + slide-up motion is preserved, just without the blur.

### 2. Shrunk the native-scroll → Lenis handoff window (cause G)

**File:** [`src/components/providers/SmoothScroll.jsx`](./../../src/components/providers/SmoothScroll.jsx)

- **Before:** `lenis/react` was only requested via `import()` inside a `useEffect`, after mount.
- **After:** `ReactLenis` is now a module-level `next/dynamic(() => import("lenis/react")..., { ssr: false })`, so the chunk starts fetching as soon as this module is evaluated on the client (in parallel with hydration) instead of waiting for the mount effect to fire first. The device-detection gate (`shouldEnableLenis()`) still runs in an effect (it needs `window`/`matchMedia`, which isn't available during SSR), but the actual component code is ready sooner.
- **Verified by:** Code review — the import is no longer gated behind an extra effect+promise round trip before it can even start.

### 3. Lenis duration tuned for trackpad input (cause B)

**File:** [`src/components/providers/SmoothScroll.jsx`](./../../src/components/providers/SmoothScroll.jsx)

- **Before:** `duration: 1.2`.
- **After:** `duration: 0.9`. `smoothWheel` and `wheelMultiplier` left unchanged for now — recommend adjusting `wheelMultiplier` further only if trackpad flicks still feel absorbed after this change.
- **Verified by:** Config change only; recommend a manual trackpad test on a Mac to confirm the "absorb & snap" feeling is reduced.

### 4. Route-level loading states added (cause F)

**Files added:**
- [`src/app/blog/loading.jsx`](./../../src/app/blog/loading.jsx)
- [`src/app/blog/[slug]/loading.jsx`](./../../src/app/blog/[slug]/loading.jsx)
- [`src/app/careers/[slug]/loading.jsx`](./../../src/app/careers/[slug]/loading.jsx)

**File updated:** [`src/app/blog/components/BlogList.jsx`](./../../src/app/blog/components/BlogList.jsx) — the plain "Loading blogs..." text was replaced with a 6-card `SectionSkeleton` grid matching the real card layout.

- Each new `loading.jsx` uses the existing `SectionSkeleton` component with heights matched to the page's hero + content sections, following the same pattern already used on Home/About.
- **Verified by:** Code review — these routes fetch data in an `async` server component (`await fetchPublishedBlogBySlug`/`fetchPublicCareerBySlug`), which Next.js's App Router now wraps in a Suspense boundary backed by `loading.jsx`, replacing the previous blank-screen wait with an immediate skeleton.

### 5. Marquees now pause off-screen (cause E)

**Files:**
- [`src/app/careers/components/Team.jsx`](./../../src/app/careers/components/Team.jsx) — extracted the inline marquee into a `TeamMarquee` component.
- [`src/app/(home)/components/DiscoverDealsSection.jsx`](./../../src/app/(home)/components/DiscoverDealsSection.jsx) — extracted into a `DealsMarquee` component.

- **Before:** `animate={{ x: [...] }}` ran unconditionally, forever, regardless of visibility.
- **After:** Each marquee uses `useAnimation()` controls + an `IntersectionObserver` (same pattern as `LiquidChrome.jsx`) to `.start()` the loop when the marquee scrolls into view and `.stop()` it when it scrolls out — the transform itself is unchanged (still `x` only, still compositor-friendly).
- **Verified by:** Code review — behavior when visible is identical; the only change is that the `requestAnimationFrame`-driven loop no longer runs while the section is off-screen.

## Not changed

- **`LiquidChrome`/OGL setup (C):** already optimal (lazy mount, visibility-based pause/resume, `dpr` already effectively capped at `1`).
- **`Header.jsx` / `Activities.jsx` scroll-linked motion (A):** Lenis and Framer Motion are in sync, not fighting; `Activities.jsx`'s scroll-linked scale transform is a real but low-priority cost. Revisit with an actual DevTools trace if lag persists on the About page after the above fixes.

## Suggested next step

Record a Chrome DevTools Performance trace (and Safari Web Inspector on a Mac) scrolling from Hero
to the next section on Home, About, and Careers, before and after these changes, to confirm long
tasks (>50ms) and forced-reflow warnings are reduced — particularly around the Hero→`BlurReveal`
transition and the initial Lenis handoff.
