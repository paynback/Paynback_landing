# PayNback Landing

Public marketing and information website for **PayNback** — India's first in-store shopping reward app. The site promotes the mobile app, explains the product, captures leads (contact, enrollment, partners, MSME merchants), and publishes blog and career content from the PayNback backend API.

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.2.1 (App Router, Turbopack dev) |
| UI | React 19.2.4 |
| Language | JavaScript (JSX) — path alias `@/*` → `src/*` |
| Styling | Tailwind CSS 4, Shadcn UI (`base-nova`) |
| Animation | Framer Motion, Lenis (smooth scroll), OGL (WebGL) |
| Forms | react-hook-form, Zod |
| HTTP | Axios → `NEXT_PUBLIC_SERVER_BASE_URL` |
| SEO | `src/lib/seo.js`, `robots.js`, `sitemap.js`, JSON-LD |

## Website pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage — hero, deals, features, blogs, FAQ, enrollment |
| `/about` | Company story, founders, activities |
| `/blog` | Blog listing (API) |
| `/blog/[slug]` | Blog article (API) |
| `/careers` | Job listings and team (API) |
| `/careers/[slug]` | Job detail and application form (API) |
| `/contact` | Contact form and Google Maps embed |
| `/partners` | Partner lead form (Kerala location dropdowns) |
| `/msme` | MSME merchant onboarding and nearby shops carousel |
| `/jammy` | Jammy mascot brand story |
| `/terms` | Terms & Conditions |
| `/privacy` | Privacy Policy |
| `/merchant-terms` | Merchant Terms |
| `/home2` | Permanent redirect → `/` |
| `*` | Custom 404 page |

SEO: `/robots.txt` and `/sitemap.xml` are generated from `src/app/robots.js` and `src/app/sitemap.js`.

## Project layout

```
Paynback_landing/
├── src/                 # Application source (pages, components, API services)
├── public/              # Static assets served at site root (/Icons, /images, …)
├── public/docs/         # Full technical documentation
├── next.config.mjs
└── package.json
```

### `src/`

- **`src/app/`** — App Router routes (`page.jsx`, `layout.jsx`), route groups `(home)` and `(guidelines)`
- **`src/components/`** — Shared layout, sections, UI primitives, SEO, providers
- **`src/lib/`** — Axios client, SEO helpers, blog/career/offer/enroll services
- **`src/data/`** — Static data (e.g. homepage FAQs)

### `public/`

- **`public/Icons/`** — Logos, app store badges, certification marks, UI icons
- **`public/images/`** — Hero images, marketing art, founder photos, Jammy assets
- **`public/assets/`** — Kerala location CSVs and `location_data.json` (partner form)
- **`public/docs/`** — Technical documentation (this doc set)

Static files are referenced by URL path, e.g. `/Icons/pnb-white-logo.svg`.

## Getting started

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+
- PayNback backend (default `http://localhost:3001`)

### Install and run

```bash
npm install
```

Create `.env` in the project root:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Optional: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, NEXT_PUBLIC_GA_MEASUREMENT_ID
```

```bash
npm run dev    # http://localhost:3000
npm run build  # production build
npm run start  # serve production build
npm run lint   # ESLint
```

## Full documentation

Detailed technical docs live in [`public/docs/`](./public/docs/README.md):

| Doc | Topic |
|-----|-------|
| [Overview](./public/docs/01-overview.md) | Goals, architecture, user flows |
| [Tech stack](./public/docs/02-tech-stack.md) | Dependencies reference |
| [Project structure](./public/docs/03-project-structure.md) | `src/` and `public/` layout |
| [Routes & pages](./public/docs/04-routes-and-pages.md) | Every route and section |
| [API integration](./public/docs/05-api-integration.md) | Backend endpoints |
| [Components](./public/docs/06-components.md) | Shared UI and patterns |
| [Styling](./public/docs/07-styling-and-theming.md) | Tailwind, tokens, fonts |
| [Configuration](./public/docs/08-configuration.md) | Env vars, Next.js config |
| [Development & deployment](./public/docs/09-development-and-deployment.md) | Build and release |

## Architecture

```
Next.js App Router (src/app)
    → Service layer (src/lib, app/*/services)
    → Axios (NEXT_PUBLIC_SERVER_BASE_URL)
    → PayNback Backend API (/api/v1/web/*)
```

No database or Next.js API routes in this repo — all dynamic content comes from the external backend.
