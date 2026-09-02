# Components

## Component categories

| Category | Location | Count | Purpose |
|----------|----------|-------|---------|
| Layout | `components/layout/` | 2 | Header, Footer |
| SEO | `components/seo/` | 2 | JSON-LD, GA4 analytics |
| Providers | `components/providers/` | 2 | Scroll, geolocation |
| Sections | `components/sections/` | 14 | Reusable page sections |
| UI primitives | `components/ui/` | 9 | Buttons, dialogs, effects, skeletons |
| Legal | `components/legal/` | 3 | Guidelines layout |
| Page-specific | `app/*/components/` | ~30 | Route-scoped sections |

---

## Layout components

### Header (`components/layout/Header.jsx`)

- **Type:** Client component
- **Features:**
  - Fixed position with scroll-reactive sizing (Framer Motion `useScroll`)
  - Logo switches between white/blue variants based on scroll and page
  - Desktop nav links with active state
  - Mobile hamburger menu rendered via `createPortal` (full-screen overlay)
  - Phone number CTA button
- **Dependencies:** Framer Motion, Lucide icons, Next Image/Link

### Footer (`components/layout/Footer.jsx`)

- **Type:** Client component (`usePathname` to hide on legal routes)
- **Features:**
  - Multi-column link grid (PayNback, Guidelines, Support)
  - Social media links (Facebook, Instagram, LinkedIn, YouTube)
  - App store badges via `StoreBadges`
  - Certification logos (Startup India, KSUM)
  - Hidden on `/terms`, `/privacy`, `/merchant-terms`

---

## SEO components

### JsonLd (`components/seo/JsonLd.jsx`)

- Renders one or more `<script type="application/ld+json">` tags
- Used on homepage (FAQ), blog detail, career detail, root layout (Organization)

### Analytics (`components/seo/Analytics.jsx`)

- Loads Google Analytics 4 when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- Rendered in root layout after main content

---

## Provider components

### SmoothScroll (`components/providers/SmoothScroll.jsx`)

- **Type:** Client component
- **Library:** Lenis (`ReactLenis`)
- **Config:**
  ```javascript
  { lerp: 0.1, duration: 1.2, smoothWheel: true, wheelMultiplier: 1.0 }
  ```
- Wraps entire app in root layout

### GeolocationProvider (`components/providers/GeolocationProvider.jsx`)

- **Type:** Client component (renders nothing)
- **Purpose:** Silently caches user coordinates in `localStorage` on load if consent was previously given
- **Exports:**
  - `getCurrentUserCoordinates()` — returns cached or fresh coords
  - `persistUserLocation(coords)` — writes to storage + dispatches event
  - `requestAndCacheLocation()` — fetches and caches
  - `LOCATION_CONSENT_KEY`, `LOCATION_UPDATED_EVENT` constants

---

## UI primitives

### Button (`components/ui/button.jsx`)

- Shadcn button with CVA variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default`, `sm`, `lg`, `icon`

### Dialog (`components/ui/dialog.jsx`)

- Radix UI dialog wrapper
- Used in `OnboardingDialog`

### ScrollReveal (`components/ui/ScrollReveal.jsx`)

- **Type:** Client component
- Uses `IntersectionObserver` to add `.visible` class
- Starts at `opacity: 0; transform: translateY(32px)`
- Respects `prefers-reduced-motion`
- Props: `delay` (ms), `children`

### BlurReveal (`components/sections/BlurReveal.jsx`)

- Similar to ScrollReveal but uses blur-in animation
- Used on alternating homepage sections

### StoreBadges (`components/ui/StoreBadges.jsx`)

- Google Play and App Store download links
- Real HTTPS URLs with `target="_blank"` and `rel="noopener noreferrer"`

### LiquidChrome (`components/ui/LiquidChrome.jsx`)

- **Type:** Client component
- **Library:** OGL (WebGL)
- Animated liquid metal background effect
- Used in `AboutDetails` on the About page
- Continuous `requestAnimationFrame` render loop
- Supports mouse/touch interaction

### BlogCard (`components/ui/BlogCard.jsx`)

- Card component for blog listing
- Uses raw `<img>` for remote cover images

### SectionSkeleton (`components/ui/SectionSkeleton.jsx`)

- Loading placeholder for `next/dynamic` homepage sections
- Accessible `aria-label` for loading state

### EdgeFade (`components/ui/EdgeFade.jsx`)

- Gradient overlay for horizontal scroll edges

### LazyLiquidChrome (`components/ui/LazyLiquidChrome.jsx`)

- `next/dynamic` wrapper around `LiquidChrome` to defer WebGL bundle

---

## Key section components

### CommonHero (`components/sections/CommonHero.jsx`)

Shared hero for inner pages (About, Blog, Careers, Contact, Partners, MSME).

**Props:**

| Prop | Type | Description |
|------|------|-------------|
| `label` | string | Small label above title |
| `title` | string | Main heading |
| `description` | string | Subtitle text |
| `imageSrc` | string | Hero image path |
| `imageAlt` | string | Image alt text |

### WhyChooseSection (`components/sections/WhyChooseSection.jsx`)

- Desktop: side-by-side feature list + image
- Mobile: horizontal scroll carousel with snap + pagination dots
- 5 feature items with scroll-synced active state
- Used on Homepage and About page

### AppShowcaseSection (`components/sections/AppShowcaseSection.jsx`)

- Phone mockup carousel showing app screenshots
- Priority image loading for LCP

### Activities (`components/sections/Activities.jsx`)

- Rotating activity cards with continuous CSS animation
- Used on About page

### DiscoverDealsSection (`(home)/components/DiscoverDealsSection.jsx`)

- Fetches offers from API
- Desktop: grid layout
- Mobile: infinite marquee animation (Framer Motion)
- Countdown timers for deal expiry

---

## Page-specific components (highlights)

### MsmeForm (`app/msme/components/MsmeForm.jsx`)

- Merchant onboarding form with react-hook-form
- Image upload with preview (hover-only change/remove on desktop)
- Location consent checkbox → triggers geolocation
- Category/subcategory dropdowns from API

### ShopsCarousel (`app/msme/components/ShopsCarousel.jsx`)

- Horizontal scroll carousel of nearby shops
- Arrow buttons with `scrollBy({ behavior: 'smooth' })`
- CSS scroll-snap

### PartenrForm (`app/partners/component/PartenrForm.jsx`)

- Partner lead form with custom dropdown selects
- Location cascading: State → District → Block Panchayat
- CV file upload, Web Share API fallback

### ContactSection (`app/contact/components/ContactSection.jsx`)

- Standard contact form (name, email, phone, message)
- Submits to contact API

### EnrollSection (`(home)/components/EnrollSection.jsx`)

- Phone number enrollment with consent checkbox
- Submits to enroll API

### JobDetailClient (`app/careers/[slug]/JobDetailClient.jsx`)

- Job description display + application form
- File upload for resume
- Date and number inputs

### MapEmbed (`app/contact/components/MapEmbed.jsx`)

- Google Maps JavaScript API integration
- Requires API key environment variable

---

## Animation patterns

| Pattern | Implementation | Used in |
|---------|---------------|---------|
| Scroll reveal | IntersectionObserver + CSS transition | Most sections |
| Blur reveal | IntersectionObserver + blur filter | Homepage alternating sections |
| Framer Motion entrance | `initial` / `whileInView` / `viewport` | Heroes, cards, team |
| Infinite marquee | Framer Motion `animate` loop | Deals, team (mobile) |
| Smooth scroll | Lenis | Global |
| WebGL shader | OGL + requestAnimationFrame | About page background |
| CSS rotation | `@keyframes` | Activities section |

---

## Form handling pattern

All forms follow a consistent pattern:

```javascript
"use client";
import { useForm } from "react-hook-form";

// 1. Define form with react-hook-form
const { register, handleSubmit, formState: { errors } } = useForm();

// 2. Submit handler calls service
const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    const response = await submitXForm(data);
    setSuccessMessage(response.message);
  } catch (error) {
    setErrorMessage(error.message);
  } finally {
    setIsSubmitting(false);
  }
};

// 3. Render with Tailwind-styled inputs
```

Validation is mostly inline (required checks) rather than Zod schemas, though Zod is available as a dependency.
