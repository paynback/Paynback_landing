# Performance & iOS / Safari Notes

This document records known performance issues and Safari/iOS compatibility findings from a static audit of the codebase. Use it as a prioritized improvement backlog.

---

## Reported symptoms

| Symptom | Affected devices |
|---------|-------------------|
| Scroll lag after page load | iPhone 13, 14 (pre-15), some M1 MacBooks |
| Page stuck — cannot scroll past hero | iPhone 13, 14, some iPads |
| Input zoom on form focus | All iPhones |
| Hidden controls on touch | MSME image upload |

---

## Root causes (ranked by impact on scroll performance)

### 1. Global Lenis smooth scroll

**File:** `src/components/providers/SmoothScroll.jsx`

Lenis intercepts native scrolling on every page. On iOS Safari and older MacBooks, this competes with:

- Momentum/rubber-band scrolling
- `position: fixed` header
- Nested horizontal scroll containers (carousels)

**Recommendation:**

- Disable Lenis on touch/coarse-pointer devices
- Or disable when `prefers-reduced-motion: reduce`
- Test with Lenis removed entirely as a baseline

```javascript
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
if (isTouchDevice) return <>{children}</>;
```

### 2. Heavy GPU effects on hero and about pages

| Effect | File | Impact |
|--------|------|--------|
| Large `blur-[70px]`–`blur-[1110px]` divs | `Hero.jsx`, `CommonHero.jsx` | GPU texture pressure |
| WebGL shader loop (OGL) | `LiquidChrome.jsx` | Continuous GPU + CPU |
| `backdrop-blur` on header/menu | `Header.jsx` | Compositing cost per frame |
| Framer Motion scroll listeners | Multiple sections | Main thread work |

**Recommendation:**

- Replace large blurs with pre-rendered PNG/WebP gradients on mobile
- Pause/stop `LiquidChrome` when off-screen or on `visibilitychange`
- Use `will-change` sparingly; remove after animation completes
- Reduce `priority` image count on homepage (currently preloads 4+ image sets)

### 3. Scroll reveal starts content invisible

**Files:** `ScrollReveal.jsx`, `globals.css`

Every section starts at `opacity: 0`. If `IntersectionObserver` fires late or fails during scroll jank, content appears stuck or blank.

**Recommendation:**

- Add timeout fallback to force `.visible` after 2s
- Feature-detect `IntersectionObserver` and show content immediately if unsupported
- Reduce number of wrapped sections (currently 8+ on homepage)

### 4. `100vh` / `min-h-screen` on heroes and menus

**Files:** `Hero.jsx`, `CommonHero.jsx`, `Header.jsx`, `not-found.jsx`

iOS Safari calculates `100vh` against the large viewport (with browser chrome), causing layout jumps when the address bar collapses.

**Recommendation:**

```css
min-height: 100vh;      /* fallback */
min-height: 100dvh;     /* dynamic viewport */
```

---

## Confirmed functional bugs on iOS

### Carousel index crash (rubber-band scroll)

**Files:** `WhyChooseSection.jsx:63-70`, `ChoseUs.jsx:74-81`

Safari reports `scrollLeft` beyond valid range during edge bounce. Unclamped index can access `undefined` and crash the component.

**Fix:**

```javascript
const index = Math.max(0, Math.min(REASONS.length - 1, Math.round(scrollLeft / width)));
```

### Location consent stays checked after denial

**File:** `MsmeForm.jsx:174-190`

Checkbox is set to `true` before iOS permission dialog resolves. Denial leaves form submittable without coordinates.

**Fix:** Set consent only after successful `getCurrentPosition()`.

### Form inputs trigger auto-zoom

Multiple forms use `text-sm` (14px). iOS Safari zooms when focusing inputs below 16px.

**Fix:** Use `text-base` (16px) on all `input`, `textarea`, `select` at mobile breakpoints.

### Hover-only image controls

**File:** `MsmeForm.jsx:445-480`

Change/Remove buttons hidden behind `group-hover`. Not discoverable on touch.

**Fix:** Keep controls visible on coarse pointers:

```css
@media (hover: none), (pointer: coarse) {
  .image-actions { opacity: 1; }
}
```

### Mobile menu doesn't lock body scroll

**File:** `Header.jsx:195-242`

Background page scrolls behind the overlay on iOS rubber-band.

**Fix:** Set `document.body.style.overflow = 'hidden'` while menu is open; restore on close.

---

## Touch target sizes

Apple recommends minimum 44×44 CSS pixels.

| Element | Current size | File |
|---------|-------------|------|
| Carousel dots | 8×8px | `WhyChooseSection.jsx` |
| Dialog close button | 28×28px | `dialog.jsx` |
| Header menu button (scrolled) | 32×32px | `Header.jsx` |
| Store badge links | ~28–32px wide | `StoreBadges.jsx` |
| Form checkboxes | 16×16px | `EnrollSection.jsx`, `MsmeForm.jsx` |

**Fix:** Enlarge hit area with padding while keeping visual size small.

---

## Accessibility issues affecting iOS

| Issue | File | Impact |
|-------|------|--------|
| Custom `<div>` dropdowns (no ARIA) | `PartenrForm.jsx` | VoiceOver cannot operate selects |
| Labels not linked to inputs (`htmlFor`) | Multiple forms | Screen reader announces placeholders only |
| No `aria-live` on form errors | Multiple forms | Validation errors not announced |

---

## Image performance

| Issue | Impact |
|-------|--------|
| Multiple `priority` images on homepage | Competes with JS/CSS on cellular |
| Raw `<img>` for remote URLs | No format negotiation or responsive sizing |
| Missing `sizes` on `fill` images | Console warnings, suboptimal srcset |

---

## Recommended fix priority

| Priority | Fix | Effort | Impact |
|----------|-----|--------|--------|
| P0 | Disable Lenis on touch devices | Low | High — likely fixes scroll stuck |
| P0 | Clamp carousel scroll index | Low | High — prevents crash |
| P1 | Pause WebGL (LiquidChrome) off-screen | Medium | High — GPU relief |
| P1 | Replace hero blurs on mobile | Medium | High — GPU relief |
| P1 | Lock body scroll in mobile menu | Low | Medium |
| P2 | 16px form inputs | Low | Medium — iOS zoom |
| P2 | Use `100dvh` for full-screen layouts | Low | Medium |
| P2 | Visible touch controls (MSME upload) | Low | Medium |
| P3 | Enlarge touch targets | Low | Low–Medium |
| P3 | ScrollReveal fallback timeout | Low | Low |
| P3 | Native selects on mobile (partners) | Medium | Accessibility |

---

## Testing checklist (real devices)

Test on these before releasing performance fixes:

- [ ] iPhone 13 / iOS 17 — scroll past hero on `/`
- [ ] iPhone 14 / iOS 17 — scroll past hero on `/about`
- [ ] iPad (any) — horizontal carousels swipe correctly
- [ ] M1 MacBook / Safari — smooth scroll without jank
- [ ] MSME form — location deny → checkbox resets
- [ ] Contact form — no zoom on input focus
- [ ] Mobile menu — background doesn't scroll behind overlay
- [ ] Why Choose carousel — swipe to last slide, rubber-band doesn't crash

### Tools

- Safari Web Inspector (connect iPhone via USB)
- BrowserStack for device matrix testing
- Chrome DevTools → Performance tab for main-thread profiling
- Lighthouse mobile audit for LCP/CLS/TBT scores

---

## Browser support statement (recommended)

Add to project documentation:

> **Supported browsers:** Safari 15.4+, Chrome 100+, Firefox 100+, Edge 100+  
> **Supported iOS:** iOS 15.4+ (iPhone 11 and later)  
> **Not supported:** iOS 14 and below

This aligns with dependencies used (flex `gap`, smooth `scrollBy`, OKLCH colors, `ResizeObserver`).
