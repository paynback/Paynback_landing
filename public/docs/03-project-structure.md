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
└── home2/
    └── page.jsx             # Alternate landing (legacy)
```

### Route groups

Parentheses in folder names `(home)` and `(guidelines)` are **route groups** — they organize files without affecting the URL.

## `src/components/` — Shared components

```
src/components/
├── layout/
│   ├── Header.jsx           # Fixed nav, mobile menu (portal)
│   └── Footer.jsx           # Site footer
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
    ├── ScrollReveal.jsx     # IntersectionObserver reveal
    ├── StoreBadges.jsx      # App Store / Play Store links
    └── LiquidChrome.jsx     # WebGL background effect
```

## `src/lib/` — Utilities & services

```
src/lib/
├── axiosInstance.js         # Configured Axios client
├── utils.js                 # cn() — class name merge helper
├── blogService.js           # Blog API
├── careerService.js         # Careers API
├── employeeService.js       # Team/employer API
├── enrollService.js         # Enrollment API
└── offerService.js          # Offers/deals API
```

Page-specific services live next to their routes:

```
src/app/contact/services/contactService.js
src/app/partners/services/partnerService.js
src/app/msme/services/merchantService.js
```

## `public/` — Static assets

| Path | Contents |
|------|----------|
| `public/Icons/` | PayNback logos, app store icons, certification badges |
| `public/assets/` | Kerala location data (CSV + JSON) for partner form |
| `public/images/` | Marketing images, blog placeholders, hero assets |
| `public/docs/` | Technical documentation |

Static files are served from the site root. Example: `/Icons/pnb-white-logo.svg`.

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
| App pages & route components | ~55 |
| Shared components | ~26 |
| Lib services | 7 |
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
