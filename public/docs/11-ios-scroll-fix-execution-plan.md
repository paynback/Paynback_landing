# iOS / macOS Scroll Performance — Issue & Execution Plan

**Status:** Open — needs implementation
**Reported by:** Field reports from users
**Scope:** `Paynback_landing` (Next.js 16 App Router site)
**Related doc:** [10-performance-and-ios.md](./10-performance-and-ios.md)

---

## 1. Problem Statement

Users on specific Apple devices experience broken or laggy scrolling across the site, most severely right after the initial page load, on the hero section.

| # | Symptom | Reported on |
|---|---------|-------------|
| 1 | Scroll lag / stutter after page load | iPhone 13, 14, and earlier (iPhone 15-and-below series), some M1/M2 MacBooks |
| 2 | Page **completely stuck** — cannot scroll past the hero section | iPhone 13, 14, some iPads |
| 3 | Scrolling feels "heavy" / not smooth | MacBook M1, M2 (Safari) |
| 4 | Form inputs trigger unwanted zoom on focus | All iPhones (secondary, related) |

**Business impact:** Users on the affected devices may perceive the site as broken and bounce before reaching enrollment/contact/MSME forms — this directly affects lead capture (goal #2 in [01-overview.md](./01-overview.md)).

---

## 2. Root Cause Analysis

Ranked by likely contribution to the "stuck scroll" bug, based on a static audit of the codebase.

### 2.1 Global Lenis smooth scroll (Primary suspect — P0)

**File:** `src/components/providers/SmoothScroll.jsx`

The entire app is wrapped in `ReactLenis` at the root layout level (`src/app/layout.jsx`), which **intercepts native scroll on every route**. On iOS Safari and Apple Silicon MacBooks, Lenis's scroll hijacking competes with:

- Native momentum / rubber-band scrolling
- The `position: fixed` header (scroll-reactive, Framer Motion `useScroll`)
- Nested horizontal scroll-snap carousels (WhyChooseSection, ShopsCarousel, DiscoverDealsSection, Team)

This is the most likely cause of the **"stuck at hero"** bug — if Lenis fails to properly initialize or hand off scroll ownership on a given device/gesture combination, the page can appear frozen.

### 2.2 Heavy GPU effects on hero / about pages (P1)

| Effect | File | Impact |
|--------|------|--------|
| Large `blur-[70px]`–`blur-[1110px]` decorative divs | `Hero.jsx`, `CommonHero.jsx` | GPU texture/compositing pressure |
| WebGL shader render loop (OGL) | `components/ui/LiquidChrome.jsx` | Continuous GPU + CPU usage, even off-screen |
| `backdrop-blur` on header (scrolled state) | `components/layout/Header.jsx` | Per-frame compositing cost |
| Framer Motion scroll listeners | Multiple sections | Main-thread work competing with scroll |

### 2.3 Scroll-reveal-starts-invisible pattern (P3, but worsens perceived "stuck" bug)

**Files:** `components/ui/ScrollReveal.jsx`, `globals.css`

Every wrapped section starts at `opacity: 0`. If `IntersectionObserver` fires late (likely during scroll jank caused by 2.1/2.2), sections can appear blank/stuck even if scrolling is technically working underneath.

### 2.4 Viewport height units (P2)

**Files:** `Hero.jsx`, `CommonHero.jsx`, `Header.jsx`, `not-found.jsx`

`100vh` / `min-h-screen` is calculated against the **large** viewport (including collapsed browser chrome) on iOS Safari, causing layout jumps and over-tall hero sections when the address bar shows/hides during scroll.

### 2.5 Known related functional bugs (independent of scroll lag, but same root files)

- **Carousel index crash on rubber-band overscroll** — `WhyChooseSection.jsx:63-70`, `ChoseUs.jsx:74-81` — unclamped `scrollLeft` math can access `undefined`.
- **Mobile menu doesn't lock body scroll** — `Header.jsx:195-242` — background scrolls behind the overlay on iOS rubber-band, which can feel like "stuck/broken scroll" to a user.

---

## 3. Execution Plan (in priority order)

Work top-down. P0 items are the primary suspects for the "can't scroll past hero" bug and should be fixed and tested on a real device **before** moving to P1+.

### ☐ P0-1 — Disable Lenis on touch devices

**File:** `src/components/providers/SmoothScroll.jsx`

- [ ] Detect coarse pointer / touch at mount time.
- [ ] If touch device, render `children` directly without wrapping in `ReactLenis`.
- [ ] Also bail out when `prefers-reduced-motion: reduce` is set.

```javascript
"use client";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  const [enableLenis, setEnableLenis] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnableLenis(!isTouch && !reducedMotion);
  }, []);

  if (!enableLenis) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, wheelMultiplier: 1.0 }}
    >
      {children}
    </ReactLenis>
  );
}
```

- [ ] **Test:** iPhone 13/14 (real device, not simulator) — scroll should be native, smooth, no stuck hero.
- [ ] **Test:** M1/M2 MacBook Safari — confirm trackpad scroll is smooth (Lenis still applies here since it's not touch — evaluate whether desktop Safari also needs throttling; see P0-1b below).

### ☐ P0-1b — Verify Lenis config on Apple Silicon desktop Safari

If M1/M2 MacBook scroll issues persist after P0-1 (since trackpads are not `pointer: coarse`):

- [ ] Test with Lenis fully removed as a baseline (temporarily comment out the wrapper) to confirm Lenis is the cause vs. GPU effects (section 2.2).
- [ ] If confirmed, consider reducing `wheelMultiplier` / `lerp` or switching to `syncTouch: false` explicitly, or scoping Lenis only to routes that need it instead of the root layout.

### ☐ P0-2 — Clamp carousel scroll index (prevents crash-like stuck state)

**Files:** `src/components/sections/WhyChooseSection.jsx` (lines ~63-70), `src/components/sections/ChoseUs.jsx` (lines ~74-81)

- [ ] Clamp the computed index so rubber-band overscroll can't produce an out-of-range value.

```javascript
const index = Math.max(
  0,
  Math.min(REASONS.length - 1, Math.round(scrollLeft / width))
);
```

- [ ] **Test:** On iPhone/iPad, swipe the carousel hard past the first and last slide (triggering rubber-band bounce) — no crash, no frozen UI.

### ☐ P1-1 — Pause WebGL (LiquidChrome) when off-screen

**File:** `src/components/ui/LiquidChrome.jsx`

- [ ] Use `IntersectionObserver` (or `document.visibilitychange`) to stop the `requestAnimationFrame` loop when the About page's LiquidChrome background is not visible.
- [ ] Resume when back in view.

### ☐ P1-2 — Replace large blur effects on mobile

**Files:** `Hero.jsx`, `CommonHero.jsx` (any `blur-[Npx]` decorative divs)

- [ ] Below `md` breakpoint, replace large CSS `blur()` divs with a pre-rendered PNG/WebP gradient image, or reduce blur radius significantly.
- [ ] Audit and reduce the number of `priority` images loaded on the homepage (currently 4+ preloaded image sets competing with JS/CSS on load).

### ☐ P1-3 — Lock body scroll when mobile menu is open

**File:** `src/components/layout/Header.jsx` (lines ~195-242)

```javascript
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);
```

- [ ] **Test:** Open mobile menu on iOS, attempt to scroll — background must not move behind the overlay.

### ☐ P2-1 — Use dynamic viewport height (`dvh`) instead of `100vh`

**Files:** `Hero.jsx`, `CommonHero.jsx`, `Header.jsx`, `not-found.jsx`

```css
min-height: 100vh;   /* fallback for older browsers */
min-height: 100dvh;  /* dynamic viewport, fixes iOS address-bar jump */
```

- [ ] Also add `viewport-fit=cover` to the viewport meta export if not present (see [08-configuration.md](./08-configuration.md) — currently not set).

### ☐ P2-2 — Fix 16px input rule for all form fields (prevents iOS auto-zoom)

**Files:** All form components — `EnrollSection.jsx`, `ContactSection.jsx`, `PartenrForm.jsx`, `MsmeForm.jsx`, `JobDetailClient.jsx`

- [ ] Replace `text-sm` with `text-base` (16px minimum) on every `input`, `textarea`, `select` at mobile breakpoints.

### ☐ P2-3 — Fix location consent checkbox race condition

**File:** `src/app/msme/components/MsmeForm.jsx` (lines ~174-190)

- [ ] Set the consent checkbox to `true` only **after** `getCurrentPosition()` resolves successfully — not before the iOS permission dialog resolves.

### ☐ P2-4 — Make image upload controls visible on touch

**File:** `src/app/msme/components/MsmeForm.jsx` (lines ~445-480)

```css
@media (hover: none), (pointer: coarse) {
  .image-actions {
    opacity: 1;
  }
}
```

### ☐ P3-1 — ScrollReveal fallback timeout

**File:** `src/components/ui/ScrollReveal.jsx`

- [ ] Add a `setTimeout` fallback (~2s) that forces the `.visible` class even if `IntersectionObserver` hasn't fired, to avoid content appearing permanently blank during scroll jank.
- [ ] Feature-detect `IntersectionObserver` support and show content immediately if unavailable.

### ☐ P3-2 — Enlarge touch targets to 44×44px minimum

| Element | Current | File |
|---------|---------|------|
| Carousel dots | 8×8px | `WhyChooseSection.jsx` |
| Dialog close button | 28×28px | `components/ui/dialog.jsx` |
| Header menu button (scrolled) | 32×32px | `Header.jsx` |
| Store badge links | ~28–32px | `components/ui/StoreBadges.jsx` |
| Form checkboxes | 16×16px | `EnrollSection.jsx`, `MsmeForm.jsx` |

- [ ] Keep visual size but add invisible padding to reach a 44×44px hit area (Apple HIG minimum).

### ☐ P3-3 (Optional, accessibility) — Native `<select>` on mobile for Partner form

**File:** `src/app/partners/component/PartenrForm.jsx`

- [ ] Custom `<div>`-based dropdowns are not operable by VoiceOver. Consider swapping to native `<select>` elements at mobile breakpoints, or adding proper ARIA roles (`combobox`, `listbox`, `option`) if the custom UI must be kept.

---

## 4. Suggested Implementation Order (sprints)

| Sprint | Tasks | Goal |
|--------|-------|------|
| **Sprint 1 (Critical fix)** | P0-1, P0-1b, P0-2 | Eliminate "stuck at hero" and scroll-lag bug on iPhone 13/14 and M1/M2 MacBooks |
| **Sprint 2 (GPU relief)** | P1-1, P1-2, P1-3 | Reduce jank, fix mobile menu scroll lock |
| **Sprint 3 (Polish)** | P2-1 → P2-4 | Layout stability, no input zoom, correct consent behavior |
| **Sprint 4 (Accessibility/UX)** | P3-1 → P3-3 | Touch targets, screen reader support, resilience |

---

## 5. Testing Checklist (must pass before closing this issue)

Run on **real devices**, not simulators — Lenis/WebGL/touch behavior does not reproduce reliably in DevTools device emulation.

- [ ] iPhone 13 / iOS 17 — scroll past hero on `/` works immediately after load
- [ ] iPhone 14 / iOS 17 — scroll past hero on `/about` works immediately after load
- [ ] iPhone 15 (and below) — general scroll smoothness across `/`, `/about`, `/msme`
- [ ] iPad (any) — horizontal carousels (WhyChoose, ShopsCarousel, DiscoverDeals) swipe correctly, no crash on rubber-band bounce
- [ ] M1 MacBook / Safari — trackpad scroll is smooth, no stutter
- [ ] M2 MacBook / Safari — trackpad scroll is smooth, no stutter
- [ ] MSME form — deny location permission → consent checkbox resets/stays unchecked
- [ ] Contact form — no zoom on input focus
- [ ] Partner form — no zoom on input focus
- [ ] Mobile menu — background page does not scroll behind the overlay
- [ ] Why Choose carousel — swipe to last slide with force (rubber-band) — no crash
- [ ] About page — LiquidChrome WebGL animation pauses when scrolled out of view (check via performance profiler, not just visually)
- [ ] Lighthouse mobile audit — record LCP/CLS/TBT before and after fixes for comparison

### Tools

- Safari Web Inspector (connect iPhone via USB — Settings → Safari → Advanced → Web Inspector must be on)
- BrowserStack (device matrix, if physical devices unavailable)
- Chrome DevTools → Performance tab (main-thread profiling; note: does not fully reproduce iOS Safari scroll behavior)
- Lighthouse mobile audit (LCP / CLS / TBT)

---

## 6. Acceptance Criteria

This issue is considered resolved when:

1. No user report of "stuck scroll" on iPhone 13/14/15-and-below across any page.
2. M1/M2 MacBook Safari scroll is subjectively smooth (no visible stutter) on `/`, `/about`, and `/msme`.
3. All checklist items in Section 5 pass on real hardware.
4. No new console errors/warnings introduced by the Lenis touch-detection change.
5. Lighthouse mobile performance score does not regress vs. pre-fix baseline (ideally improves, given P1-2's `priority` image reduction).

---

## 7. References

- [10-performance-and-ios.md](./10-performance-and-ios.md) — original static-audit source for this plan
- [02-tech-stack.md](./02-tech-stack.md) — `lenis@^1.3.21`, `ogl@^1.0.11`, `framer-motion@^12.38.0`
- [06-components.md](./06-components.md) — component reference for all files touched above
- [07-styling-and-theming.md](./07-styling-and-theming.md) — Tailwind breakpoints used in mobile-only overrides
