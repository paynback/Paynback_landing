# Prompt: Diagnose & Fix Site-Wide Scroll Lag / Stutter (PayNback Landing)

Paste this into Claude Code (or give to a developer) with the actual repo attached.

---

## Context

This is the **PayNback Landing** Next.js 16 (App Router) site. Stack: React 19, Tailwind 4,
**Lenis** for smooth scroll (`components/providers/SmoothScroll.jsx`), **Framer Motion** for
section/marquee animations, **OGL** (WebGL) for the `LiquidChrome` background on the About page,
and `IntersectionObserver`-based `ScrollReveal` / `BlurReveal` wrappers on almost every section.

## Symptoms

1. On nearly every page, scrolling from the Hero into the next section feels laggy or
   momentarily "stuck" — sometimes this recurs further down the page too (not just at the top).
2. On `/careers`, the auto-scrolling employers/team row (right-to-left marquee) also stutters
   or freezes briefly.
3. Worse on MacBook Air (trackpad), but present on first load on Windows/other devices too.
4. There is no loading UI while JS bundles and API data (blogs, careers, offers, etc.) load —
   users see a blank/unstyled flash on refresh, which compounds the perceived jank.

## Task

Investigate and fix the root causes below. Don't just patch symptoms — profile first, confirm
which of these apply in this codebase, then fix. Report back what was actually found before
making changes.

---

## Suspected root causes to verify

### A. Competing rAF (animation frame) loops
- `SmoothScroll.jsx` runs Lenis's own `requestAnimationFrame` loop.
- Framer Motion's `useScroll`/`animate` (used in `Header.jsx`, the marquee in
  `DiscoverDealsSection`, and the careers employers row) also drives its own rAF-based updates.
- If Framer Motion's scroll-linked values aren't wired through Lenis's `scroll` event (instead of
  the native `window.scroll` event), you get two independent loops fighting for the same frame
  budget → visible micro-stutters, especially on lower-power GPUs like the M-series MacBook Air
  integrated graphics under Safari/Chrome.
- **Check:** is `lenis.on('scroll', ...)` bridged to anything, or is Framer Motion just reading
  native scroll position independently of Lenis's virtual scroll position?
- **Fix direction:** sync Framer Motion scroll progress off Lenis's scroll callback rather than
  the native scroll event, or reduce reliance on scroll-linked Framer Motion values in favor of
  Lenis-driven CSS transforms.

### B. Lenis config causing perceived "stuck" feel on trackpads
- Current config: `{ lerp: 0.1, duration: 1.2, smoothWheel: true, wheelMultiplier: 1.0 }`.
- MacBook trackpads emit much higher-frequency, finer-grained wheel deltas than a mouse wheel.
  Combined with `smoothWheel: true` and a 1.2s duration, rapid trackpad flicks can get
  "absorbed" and produce a visible catch-up/snap, which reads as lag or a stuck scroll.
- **Check:** does Lenis have `syncTouch` set for touch/trackpad devices? Is there any device
  detection to reduce `duration`/increase `wheelMultiplier` responsiveness on trackpad input?
- **Fix direction:** lower `duration` (e.g. 0.8–1.0), test `syncTouch: true`, and/or detect
  trackpad-style wheel events (deltaMode, small deltaY increments) and adjust Lenis options
  accordingly.

### C. WebGL background (`LiquidChrome`, OGL) stealing frame budget
- Runs a continuous `requestAnimationFrame` render loop, used on the About page.
- If it keeps rendering while off-screen, or renders at full device pixel ratio without
  throttling, it competes with Lenis/Framer Motion for the same thread and drops frames during
  scroll — this would explain why the lag is worse on integrated-GPU laptops.
- **Check:** does `LazyLiquidChrome` actually pause rendering when the element scrolls out of
  view? Is pixel ratio capped (e.g. `Math.min(devicePixelRatio, 1.5)`)?
- **Fix direction:** pause the OGL render loop via `IntersectionObserver` when off-screen, cap
  DPR, and confirm it's not mounted on pages other than About.

### D. `ScrollReveal` / `BlurReveal` — observer + transition cost
- These wrap "most sections" (per docs) and toggle `opacity`/`transform`/`filter: blur()` on
  intersect.
- **Check:** are these components creating a *new* `IntersectionObserver` instance per section
  instance (potentially dozens per page) instead of sharing one observer? Is `will-change`
  applied, or is the browser forced into layout/paint (not just compositing) for these
  transitions? `filter: blur()` in particular is expensive to animate and not GPU-composited the
  same way `transform`/`opacity` are — this is a strong candidate for the "stuck" feeling right
  as a section enters view.
- **Fix direction:** consolidate to a single shared observer where possible; ensure only
  `transform`/`opacity` are animated (avoid animating `filter: blur()` on scroll-triggered
  reveals, or reduce blur radius); add `will-change: transform, opacity` only while animating,
  then remove it.

### E. Employers/team marquee (careers page) specifically
- Docs describe this as a Framer Motion `animate()` infinite loop marquee.
- **Check:** is it animating `left`/`margin` (layout-triggering) instead of `x`/`transform`? Is
  it re-mounting or restarting the animation loop on re-render (e.g. due to a parent state
  update, API refetch, or a `key` prop that changes)?
- **Fix direction:** ensure it animates `transform: translateX()` only, confirm `layout` prop
  isn't set unnecessarily on the motion component, and consider replacing the JS-driven loop with
  a pure CSS `@keyframes` marquee (as used elsewhere, e.g. Activities section) — CSS animations
  are compositor-only and immune to main-thread jank from Lenis/other JS.

### F. No loading state on refresh (compounding factor)
- Per docs, below-the-fold homepage sections use `next/dynamic` + `SectionSkeleton`, but:
  - Confirm every SSR data page (`/blog`, `/blog/[slug]`, `/careers`, `/careers/[slug]`) has a
    route-level `loading.jsx` (Next App Router streaming fallback) — the docs don't list one.
  - Confirm `next/dynamic` imports actually pass a `loading` fallback, not just lazy-load with a
    blank gap.
  - GeolocationProvider "silently caches user coordinates in `localStorage` on load" — confirm
    this isn't doing synchronous work on the main thread during initial hydration that delays
    Lenis/Framer Motion setup.
- **Fix direction:** add `loading.jsx` per dynamic route with a lightweight skeleton matching
  each page's hero, so first paint isn't blank and hydration doesn't visually "jump" right as the
  user starts scrolling (a jump during early scroll reads identically to "lag").

### G. Hydration timing vs. first scroll
- If a user starts scrolling immediately after the page appears but before hydration completes
  (Lenis isn't initialized yet, event listeners aren't attached yet), the browser's native scroll
  runs first, then Lenis "grabs" control mid-scroll — this produces exactly the "stuck then
  catches up" feeling described, and would explain why it happens right at Hero→next-section
  (the point right after initial paint) more than deeper in the page.
- **Fix direction:** confirm `SmoothScroll` mounts as early as possible in the tree (root layout,
  before heavy client components), consider `autoRaf`/`autoStart` timing, and check whether large
  above-the-fold client bundles (Header animations, Hero) are delaying Lenis's `useEffect` init.

---

## Deliverables requested

1. A short profiling report: use Chrome DevTools Performance panel (and Safari Web Inspector
   Timelines on an actual Mac, since that's the worst-affected device) recording a scroll from
   Hero to the next section on 2–3 representative pages (Home, About, Careers). Identify long
   tasks (>50ms), forced reflows, and which specific script (Lenis, Framer Motion, OGL,
   ScrollReveal) is on the main thread during the stutter.
2. Root cause confirmation for each of A–G above (confirm/rule out with evidence, not
   assumption).
3. Fixes implemented for confirmed causes, prioritizing:
   - CSS-only marquee for the careers employers row (drop the JS-driven loop if that's confirmed
     as the cause).
   - Lenis config tuning for trackpad input.
   - Pausing/capping the OGL WebGL loop when off-screen.
   - Route-level `loading.jsx` for all SSR/API-backed pages.
4. Before/after note on how each fix was verified (e.g. "Performance panel shows no long tasks
   during scroll on About page after capping LiquidChrome DPR to 1.5").

Do not guess at fixes without profiling first — confirm which of A–G are actually occurring in
this codebase before changing code.
