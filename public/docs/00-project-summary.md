# PayNback Landing — Project Summary

> **Quick orientation doc.** A single-page overview of what this website is, its purpose, tech stack, design system, styling conventions, and layout patterns. For deeper detail, follow the links to individual docs.

---

## 1 · What Is This Website?

**PayNback Landing** is the public marketing and information website for **PayNback** — India's first in-store shopping reward app. It is a standalone Next.js project that sits in front of the PayNback mobile app and backend platform.

### Purpose

| Goal | How the site delivers it |
|------|--------------------------|
| **Brand & product marketing** | Hero sections, feature carousels, app showcase, animated deals section |
| **App downloads** | Apple App Store & Google Play CTAs on every page |
| **Lead capture** | Enrollment form, contact form, partner lead form, MSME merchant signup |
| **Content publishing** | Blog listing & article pages (fetched live from the backend API) |
| **Careers** | Job listings, team section, and in-page application form |
| **Legal & compliance** | Terms & Conditions, Privacy Policy, Merchant Terms |
| **Local merchant discovery** | MSME page with geolocation-based "nearby shops" carousel |

### Target audiences

- **Consumers** — looking to earn reward points at local shops
- **MSME merchants** — registering their shop on the PayNback network
- **Corporate partners** — exploring co-branding / loyalty partnerships
- **Job seekers** — browsing open roles and applying

---

## 2 · Pages & Routes

| URL | Type | Description |
|-----|------|-------------|
| `/` | Static + client | Homepage — hero, deals, features, app showcase, blogs, FAQ, enrollment |
| `/about` | Static + client | Company story, founders, activities, LiquidChrome WebGL hero |
| `/blog` | SSR | Blog listing (API) |
| `/blog/[slug]` | SSR + client | Article detail with JSON-LD |
| `/careers` | SSR | Job listings + team |
| `/careers/[slug]` | SSR + client | Job detail + application form |
| `/contact` | Static + client | Contact form + Google Maps embed |
| `/partners` | Static + client | Partner lead form with Kerala location cascades |
| `/msme` | Client | MSME merchant onboarding + nearby shops carousel |
| `/jammy` | Static | Jammy mascot brand story page |
| `/terms` | Static | Terms & Conditions |
| `/privacy` | Static | Privacy Policy |
| `/merchant-terms` | Static | Merchant Terms |
| `/home2` | Redirect | Permanent 301 → `/` |
| `*` | Client | Custom 404 animated space page |

**SEO routes:** `/robots.txt` and `/sitemap.xml` are generated from `src/app/robots.js` and `src/app/sitemap.js`.

---

## 3 · Tech Stack

### Core framework

| Technology | Version | Role |
|------------|---------|------|
| **Next.js** | 16.2.1 | React framework — App Router, SSR, image optimisation, routing |
| **React** | 19.2.4 | UI library |
| **JavaScript (JSX)** | — | Application language (no TypeScript in app source) |
| **Node.js** | 18+ (20+ recommended) | Runtime |
| **npm** | 9+ | Package manager |

### Styling & UI

| Package | Version | Role |
|---------|---------|------|
| **Tailwind CSS** | ^4 | Utility-first CSS (CSS-first config, no `tailwind.config.js`) |
| **@tailwindcss/postcss** | ^4 | PostCSS plugin for Tailwind v4 |
| **tw-animate-css** | ^1.4.0 | Animation utility classes (`animate-in`, `fade-in`, …) |
| **shadcn** | ^4.1.0 | Component system (style: `base-nova`, icon lib: lucide) |
| **class-variance-authority** | ^0.7.1 | Variant-based class composition |
| **clsx** | ^2.1.1 | Conditional class names |
| **tailwind-merge** | ^3.5.0 | Conflict-free Tailwind class merging |
| **lucide-react** | ^0.577.0 | Primary icon library |
| **react-icons** | ^5.6.0 | Additional icon sets (social media, etc.) |
| **react-shimmer-effects** | ^1.0.4 | Shimmer skeleton loading placeholders |
| **@radix-ui/react-dialog** | ^1.1.15 | Accessible modal/dialog primitive |
| **@radix-ui/react-slot** | ^1.2.4 | Slot composition for polymorphic components |

### Animation & scroll

| Package | Version | Role |
|---------|---------|------|
| **framer-motion** | ^12.38.0 | Page transitions, scroll animations, mobile menu, marquees |
| **lenis** | ^1.3.25 | Smooth scroll — global `ReactLenis` wrapper at root |
| **ogl** | ^1.0.11 | WebGL — powers `LiquidChrome` background on About page |

### Forms & validation

| Package | Version | Role |
|---------|---------|------|
| **react-hook-form** | ^7.72.0 | Form state management |
| **@hookform/resolvers** | ^5.2.2 | Zod schema bridge |
| **zod** | ^4.3.6 | Schema validation (available; most forms use inline validation) |

### HTTP & data

| Package | Version | Role |
|---------|---------|------|
| **axios** | ^1.15.2 | HTTP client — all API calls go through `axiosInstance` |

### What is NOT used

- No Redux, Zustand, or global state library
- No database or Next.js API routes — all dynamic data from external PayNback backend
- No CMS (content comes from backend API)
- No CSS Modules or styled-components (Tailwind only)
- No i18n framework

---

## 4 · Design System

### Brand colour

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-primary` | `#0964BC` | Primary blue — buttons, links, `h3` text, accents |
| `--color-brand-primary` | `#0964BC` | Tailwind theme alias (`text-(--brand-primary)`) |

### Shadcn design tokens (OKLCH)

Defined in `src/app/globals.css` under `:root` and `.dark`:

| Token | Light value | Purpose |
|-------|-------------|---------|
| `--background` | `oklch(1 0 0)` | Page background (white) |
| `--foreground` | `oklch(0.145 0 0)` | Default text (near-black) |
| `--primary` | `oklch(0.205 0 0)` | Primary action surfaces |
| `--secondary` | `oklch(0.97 0 0)` | Secondary surfaces (light grey) |
| `--muted` | `oklch(0.97 0 0)` | Subdued backgrounds |
| `--muted-foreground` | `oklch(0.556 0 0)` | Subdued text (grey) |
| `--accent` | `oklch(0.97 0 0)` | Accent highlights |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Error/danger colour |
| `--border` | `oklch(0.922 0 0)` | Borders |
| `--radius` | `0.625rem` | Base border radius |

Radius scale: `--radius-sm` … `--radius-4xl` (all derived from `--radius`).

### Dark mode

Defined via `.dark` class on a parent element. Not currently activated in the UI (defined for future use).

---

## 5 · Typography

### Font

| Setting | Value |
|---------|-------|
| Family | **Poppins** (Google Fonts, loaded via `next/font/google`) |
| CSS variable | `--font-poppins` |
| Tailwind class | `font-sans` (mapped to Poppins via `--font-sans` in `@theme inline`) |
| Weights | 300 · 400 · 500 · 600 · 700 · 800 |
| Applied | `@apply font-sans` on both `<html>` and `<body>` via `@layer base` |

### Heading defaults (`@layer base` in `globals.css`)

| Tag | Mobile | Tablet (`sm`) | Desktop (`lg`) | Notes |
|-----|--------|----------------|-----------------|-------|
| `h1` | `text-4xl` (36px) | `text-5xl` (48px) | `text-7xl` (72px) | `font-normal`, `tracking-tight`, `leading-[1.08]`, `text-balance` |
| `h2` | `text-2xl` (24px) | `text-3xl` (30px) | `text-5xl` (48px) | `font-normal`, `tracking-tight`, `text-balance` |
| `h3` | `text-xl` (20px) | `text-2xl` (24px) | — | `font-normal`, **brand blue** (`text-(--brand-primary)`) |
| `h4` | `text-base` (16px) | — | — | `font-semibold` |
| `h5` | `text-sm` (14px) | — | — | `font-semibold` |
| `h6` | `text-xs` (12px) | — | — | `font-semibold` |

### Body settings

- `overscroll-behavior-y: none` — prevents pull-to-refresh bounce on mobile browsers
- `-webkit-overflow-scrolling: touch` on `<html>` — smooth native scroll on iOS

---

## 6 · Layout & Alignment

### Philosophy

**Mobile-first** — base Tailwind classes target mobile; breakpoint prefixes add desktop enhancements.

### Breakpoints (Tailwind v4 defaults, no custom overrides)

| Prefix | Min width | Typical use |
|--------|-----------|-------------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets, 2-column layouts |
| `lg` | 1024px | Desktop nav, 3-column grids |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

### Standard spacing patterns

| Pattern | Classes | Where used |
|---------|---------|-----------|
| **Full-width section** | `w-full` | Every top-level section |
| **Content container** | `max-w-7xl mx-auto px-4 md:px-8` | Inside sections |
| **Full viewport height** | `min-h-screen` / `h-screen` | Heroes, 404, mobile menu |

### Grid & flex patterns

| Layout | Classes | Where used |
|--------|---------|-----------|
| 1 → 2 column | `grid grid-cols-1 md:grid-cols-2` | Hero splits, feature pairs |
| 1 → 3 column | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | Cards, blog cards |
| Horizontal flex | `flex flex-col md:flex-row` | Hero content + image |
| Centred column | `flex flex-col items-center text-center` | CTA sections |

### Navigation layout

- **Header** — `fixed` top, full-width, scroll-reactive (shrinks on scroll via Framer Motion `useScroll`)
- **Mobile menu** — full-screen overlay (`fixed inset-0`) rendered via `createPortal`
- **Footer** — multi-column `grid` with social links and app store badges; hidden on legal pages

---

## 7 · Visual Style & Patterns

### Colour palette in use

| Context | Value |
|---------|-------|
| Dark hero sections | `bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]` |
| Brand accent orbs / glow | `bg-[#1B519C] blur-[150px] opacity-20` |
| Glass morphism | `backdrop-blur-md bg-white/10 border border-white/20` |
| Section backgrounds | White (`bg-background`) or light grey (`bg-secondary`) |

### Animation system

| Technique | Library/CSS | Where used |
|-----------|------------|-----------|
| Scroll reveal | `IntersectionObserver` + `.scroll-reveal` / `.is-visible` CSS | Most page sections |
| Blur reveal | `IntersectionObserver` + blur filter transition | Alternating homepage sections |
| Framer Motion entrance | `initial` / `whileInView` / `viewport` | Heroes, cards, team |
| Infinite marquee | Framer Motion `animate` loop | Deals section (mobile), team |
| Smooth scroll | Lenis `ReactLenis` | Global |
| WebGL liquid chrome | OGL + `requestAnimationFrame` | About page background |
| CSS rotation | `@keyframes` | Activities section (About) |
| Tailwind animate | `tw-animate-css` (`animate-in`, `fade-in`, …) | Dialog, overlays |

### Scroll reveal CSS

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition-property: opacity, transform;
  transition-duration: 650ms;
  transition-timing-function: cubic-bezier(0.2, 0.7, 0.2, 1);
}
.scroll-reveal.is-visible {   /* toggled by IntersectionObserver */
  opacity: 1;
  transform: translateY(0);
}
```

### Horizontal scroll carousels

Used in WhyChooseSection, ShopsCarousel, Team, DiscoverDealsSection:

```css
scroll-snap-type: x mandatory;
scroll-snap-align: start;
-webkit-overflow-scrolling: touch;
```

Edge fades via the `EdgeFade` component (CSS gradient overlay on scroll container edges).

### Icons

| Library | Import | Usage |
|---------|--------|-------|
| Lucide React | `import { Menu, X } from "lucide-react"` | Header, UI controls |
| React Icons | `import { FaFacebook } from "react-icons/fa"` | Social media in footer |
| Custom SVG | `/public/Icons/*.svg` | Logos, app store badges, certifications |

---

## 8 · Key Development Conventions

### Path alias

```json
// jsconfig.json
{ "compilerOptions": { "paths": { "@/*": ["./src/*"] } } }
```

Example: `import Header from "@/components/layout/Header"`

### Class merging utility

```javascript
// src/lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) { return twMerge(clsx(inputs)); }
```

### Form pattern (consistent across all forms)

```javascript
"use client";
import { useForm } from "react-hook-form";

const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    const res = await submitForm(data); // calls axiosInstance → backend
    setSuccess(res.message);
  } catch (err) {
    setError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};
```

### Component split strategy

| Type | Rule | Examples |
|------|------|---------|
| **Server Component** | Default — data fetch, metadata, static layout | Page files, `generateMetadata` |
| **Client Component** (`"use client"`) | Any interactivity | Forms, carousels, animations, geolocation, mobile menu |
| **`next/dynamic`** | Below-fold sections needing lazy loading | Homepage sections 3–10 with `SectionSkeleton` fallback |

### API layer

```
src/lib/axiosInstance.js → NEXT_PUBLIC_SERVER_BASE_URL/api/v1/web/*
```

No direct database access. No Next.js API routes in this repo.

---

## 9 · Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical origin — metadata, sitemap, OG |
| `NEXT_PUBLIC_SERVER_BASE_URL` | Yes | PayNback backend API base URL |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Contact page | Google Maps JS API key |
| `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` | Optional | Custom Maps style ID |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 `G-…` ID |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console meta |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | Bing Webmaster meta |

---

## 10 · SEO Architecture

| Feature | Implementation |
|---------|----------------|
| Title template | `%s | PayNback` (root layout) |
| Per-page metadata | `buildMetadata()` helper in `src/lib/seo.js` |
| Canonical / OG / Twitter | `buildMetadata()` on every page |
| robots.txt | `src/app/robots.js` |
| sitemap.xml | `src/app/sitemap.js` (static routes + API blogs/careers) |
| JSON-LD structured data | `JsonLd` component — Organization, WebSite (root), FAQ (home), BlogPosting, JobPosting, BreadcrumbList |
| Google Analytics 4 | `Analytics.jsx` — conditional on `NEXT_PUBLIC_GA_MEASUREMENT_ID` |

---

## 11 · Document Index

| # | Document | Contents |
|---|----------|----------|
| ← **You are here** | `00-project-summary.md` | Single-page overview (this file) |
| 01 | [Overview](./01-overview.md) | Goals, architecture diagram, key user flows |
| 02 | [Tech Stack](./02-tech-stack.md) | Full dependency reference with versions |
| 03 | [Project Structure](./03-project-structure.md) | Full `src/` and `public/` folder tree |
| 04 | [Routes & Pages](./04-routes-and-pages.md) | Every route, section composition, layouts |
| 05 | [API Integration](./05-api-integration.md) | Backend endpoints and service layer |
| 06 | [Components](./06-components.md) | Shared UI, layout, sections, providers |
| 07 | [Styling & Theming](./07-styling-and-theming.md) | Tailwind, tokens, fonts, animations (detailed) |
| 08 | [Configuration](./08-configuration.md) | Env vars, Next.js config, ESLint, PostCSS |
| 09 | [Development & Deployment](./09-development-and-deployment.md) | Local setup, scripts, Docker, troubleshooting |
| 10 | [Performance & iOS Notes](./10-performance-and-ios.md) | Known Safari/iOS issues and mitigations |
| 12 | [SEO Release Checklist](./12-seo-release-checklist.md) | Pre/post-release SEO verification |
| 13 | [Scroll Lag Diagnosis](./13-scroll-lag-diagnosis-report.md) | Root-cause and fixes for scroll stutter |

---

*Last updated: September 8, 2026*
