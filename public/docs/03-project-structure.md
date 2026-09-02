# Project Structure

## Root directory

```
Paynback_landing/
├── components.json          # Shadcn UI configuration
├── eslint.config.mjs        # ESLint configuration
├── jsconfig.json            # Path aliases (@/*)
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS (Tailwind v4)
├── public/                  # Static files served at /
│   ├── docs/                # Technical documentation (this folder)
│   ├── Icons/               # SVG logos and icons
│   ├── assets/              # CSV location data, JSON
│   └── images/              # Static images (referenced in components)
└── src/
    ├── app/                 # Next.js App Router pages
    ├── components/          # Shared React components
    └── lib/                 # Utilities and API services
```

## `src/app/` — App Router

Next.js 16 App Router convention. Each folder with a `page.jsx` becomes a route.

```
src/app/
├── layout.jsx               # Root layout (Header, Footer, SmoothScroll)
├── globals.css              # Global styles, Tailwind, design tokens
├── not-found.jsx            # Custom 404 page
├── icon.svg                 # Favicon (SVG)
│
├── (home)/                  # Route group — URL is still /
│   ├── page.jsx             # Homepage
│   └── components/          # Homepage-only sections
│
├── (guidelines)/            # Route group for legal pages
│   ├── layout.jsx           # Dark theme + sidebar layout
│   ├── terms/page.jsx
│   ├── privacy/page.jsx
│   └── merchant-terms/page.jsx
│
├── about/
│   ├── page.jsx
│   └── components/
├── blog/
│   ├── page.jsx
│   ├── components/
│   └── [slug]/
│       ├── page.jsx
│       └── BlogDetailClient.jsx
├── careers/
│   ├── page.jsx
│   ├── components/
│   └── [slug]/
│       ├── page.jsx
│       └── JobDetailClient.jsx
├── contact/
│   ├── page.jsx
│   ├── components/
│   └── services/
├── partners/
│   ├── page.jsx
│   ├── component/
│   └── services/
├── msme/
│   ├── page.jsx
│   ├── MsmePageClient.jsx
│   ├── components/
│   └── services/
├── jammy/
│   ├── page.jsx
│   └── components/
├── robots.js                # Generates /robots.txt
└── sitemap.js               # Generates /sitemap.xml (static + API routes)
```

### Route groups

Parentheses in folder names `(home)` and `(guidelines)` are **route groups** — they organize files without affecting the URL.

## `src/components/` — Shared components

```
src/components/
├── layout/
│   ├── Header.jsx           # Fixed nav, mobile menu (portal)
│   └── Footer.jsx           # Site footer (client — pathname-aware hide on legal routes)
│
├── seo/
│   ├── JsonLd.jsx           # Renders schema.org JSON-LD script tags
│   └── Analytics.jsx        # Optional GA4 (NEXT_PUBLIC_GA_MEASUREMENT_ID)
│
├── providers/
│   ├── SmoothScroll.jsx     # Lenis smooth scroll wrapper
│   └── GeolocationProvider.jsx  # Silent location cache on load
│
├── sections/                # Reusable page sections
│   ├── CommonHero.jsx       # Shared hero for inner pages
│   ├── WhyChooseSection.jsx # Feature carousel
│   ├── AppShowcaseSection.jsx
│   ├── Activities.jsx
│   ├── BlurReveal.jsx       # Blur-in animation wrapper
│   ├── Hero.jsx             # Legacy hero (home2)
│   ├── ChoseUs.jsx          # Legacy why-choose (home2)
│   ├── DownloadApp.jsx
│   ├── DownloadAppFinal.jsx
│   ├── StepsJoin.jsx
│   ├── SmarterShopping.jsx
│   ├── OnboardingDialog.jsx
│   └── LastUpdateDate.jsx
│
├── legal/
│   ├── GuidelinesSidebar.jsx
│   ├── LegalGuidelinesLayout.jsx
│   └── LegalSection.jsx
│
└── ui/                      # Shadcn / base UI primitives
    ├── button.jsx
    ├── dialog.jsx
    ├── BlogCard.jsx
    ├── EdgeFade.jsx         # Gradient edge fade overlay
    ├── LazyLiquidChrome.jsx # Dynamic import wrapper for LiquidChrome
    ├── LiquidChrome.jsx     # WebGL background effect (OGL)
    ├── ScrollReveal.jsx     # IntersectionObserver reveal
    ├── SectionSkeleton.jsx  # Loading placeholder for dynamic sections
    └── StoreBadges.jsx      # App Store / Play Store links
```

## `src/lib/` — Utilities & services

```
src/lib/
├── axiosInstance.js         # Configured Axios client
├── utils.js                 # cn() — class name merge helper
├── seo.js                   # Metadata, absolute URLs, JSON-LD builders
├── useDebouncedSubmit.js    # Debounced form submit hook
├── blogService.js           # Blog API
├── careerService.js         # Careers API
├── employeeService.js       # Team/employer API
├── enrollService.js         # Enrollment API
└── offerService.js          # Offers/deals API

src/data/
└── homeFaqs.js              # Homepage FAQ content (FAQPage JSON-LD)
```

Page-specific services live next to their routes:

```
src/app/contact/services/contactService.js
src/app/partners/services/partnerService.js
src/app/msme/services/merchantService.js
```

## `public/` — Static assets

Files in `public/` are served at the URL root (no `/public` prefix).

| Path | Contents | Examples |
|------|----------|----------|
| `public/Icons/` | Brand logos, app store badges, UI icons, certification marks | `pnb-white-logo.svg`, `Startup india.svg`, `ksum_logo_white.svg` |
| `public/images/` | Page heroes, marketing art, founder photos, Jammy story images, 404 art | `aboutus-hero-image.png`, `msme-hero-image.png`, `404.png` |
| `public/assets/` | Kerala location hierarchy for partner form dropdowns | `districts.01May2026.csv`, `blocks.01May2026.csv`, `location_data.json` |
| `public/docs/` | Technical documentation (this folder) | `01-overview.md`, `04-routes-and-pages.md` |

**Usage in code:** Next.js `<Image src="/images/..." />` or string paths in components.

**Not in `public/`:** Favicon is `src/app/icon.svg` (App Router convention). Remote images (blog covers, S3) use `next/image` with hosts in `next.config.mjs`.

## Naming conventions

| Type | Convention | Example |
|------|------------|---------|
| Pages | `page.jsx` | `src/app/about/page.jsx` |
| Layouts | `layout.jsx` | `src/app/(guidelines)/layout.jsx` |
| Client components | `"use client"` at top | `Header.jsx`, `MsmeForm.jsx` |
| Services | `*Service.js` | `blogService.js` |
| Route-specific components | `components/` subfolder | `about/components/Hero.jsx` |
| Shared sections | `src/components/sections/` | `WhyChooseSection.jsx` |

## File count summary

| Area | Approx. files |
|------|---------------|
| App pages & route components | ~60 |
| Shared components (`src/components/`) | ~31 |
| Lib (`src/lib/`) | 9 |
| Static data (`src/data/`) | 1 |
| Public static assets (`public/`) | ~90+ (images, icons, CSVs) |
| Config files | 6 |

## Import patterns

```javascript
// Path alias (preferred)
import ScrollReveal from "@/components/ui/ScrollReveal";
import axiosInstance from "@/lib/axiosInstance";

// Relative (within same route)
import AboutHero from "@/app/about/components/Hero";

// Next.js built-ins
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
```
