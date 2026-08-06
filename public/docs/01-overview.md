# Overview

## What is PayNback Landing?

PayNback Landing is the public marketing and information website for **PayNback** — India's first in-store shopping reward app. The site promotes the mobile app, explains the product, captures leads, and provides content for users, merchants, partners, and job applicants.

## Primary goals

1. **Brand & product marketing** — Hero sections, feature highlights, app download CTAs
2. **Lead capture** — Contact forms, enrollment, partner leads, MSME merchant onboarding
3. **Content** — Blog posts and career listings (fetched from backend API)
4. **Legal & compliance** — Terms, privacy policy, merchant terms
5. **Local discovery** — MSME page with geolocation-based nearby shops carousel

## Architecture summary

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js App Router                       │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │   Layout    │  │    Pages     │  │  Client Components│  │
│  │ Header/Footer│  │  (RSC/SSR)  │  │  Forms, Carousels │  │
│  └─────────────┘  └──────────────┘  └──────────────────┘  │
│         │                  │                    │              │
│         └──────────────────┼────────────────────┘              │
│                            ▼                                   │
│              ┌─────────────────────────┐                       │
│              │   Service Layer (lib/)  │                       │
│              │   axiosInstance → API   │                       │
│              └─────────────────────────┘                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
              ┌─────────────────────────┐
              │  PayNback Backend API   │
              │  /api/v1/web/*          │
              └─────────────────────────┘
```

## Rendering model

- **Server Components** — Default for pages; used for metadata, static layout, and server-side data fetching (blogs, careers, offers)
- **Client Components** — Marked with `"use client"` for interactivity: forms, animations, carousels, geolocation, mobile menu
- **No API routes in this repo** — All dynamic data comes from the external PayNback backend

## Global shell

Every page is wrapped by the root layout (`src/app/layout.jsx`):

- **Font** — Poppins (Google Fonts via `next/font`)
- **Header** — Fixed navigation with mobile menu (portal)
- **Footer** — Links, social, app store badges
- **SmoothScroll** — Lenis smooth scrolling on the root element

## Key user flows

| Flow | Route | Backend endpoint |
|------|-------|------------------|
| Homepage enrollment | `/` | `POST /api/v1/web/enroll` |
| Contact message | `/contact` | `POST /api/v1/web/contact` |
| Partner lead | `/partners` | `POST /api/v1/web/partner-lead` |
| MSME merchant signup | `/msme` | `POST /api/v1/web/merchant` |
| Job application | `/careers/[slug]` | `POST /api/v1/web/careers/:slug/apply` |
| Read blogs | `/blog`, `/blog/[slug]` | `GET /api/v1/web/blogs` |
| View careers | `/careers`, `/careers/[slug]` | `GET /api/v1/web/careers` |
| Nearby shops | `/msme` | `GET /api/v1/web/merchant/shops` |

## Alternate / legacy pages

- **`/home2`** — Alternate landing page using older section components (`Hero`, `ChoseUs`, `DownloadAppFinal`, etc.). Not linked from main navigation.

## Browser support

The project targets modern browsers (Chrome, Firefox, Safari, Edge). No explicit Browserslist is configured. See [Performance & iOS Notes](./10-performance-and-ios.md) for Safari-specific considerations.
