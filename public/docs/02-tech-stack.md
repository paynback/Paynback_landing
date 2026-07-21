# Tech Stack & Packages

## Core framework

| Package | Version | Purpose |
|---------|---------|---------|
| **next** | 16.2.1 | React framework — App Router, SSR, image optimization, routing |
| **react** | 19.2.4 | UI library |
| **react-dom** | 19.2.4 | React DOM renderer |

## Styling & UI

| Package | Version | Purpose |
|---------|---------|---------|
| **tailwindcss** | ^4 | Utility-first CSS framework |
| **@tailwindcss/postcss** | ^4 | PostCSS plugin for Tailwind v4 |
| **tw-animate-css** | ^1.4.0 | Animation utilities for Tailwind |
| **shadcn** | ^4.1.0 | Shadcn UI component system (style: `base-nova`) |
| **class-variance-authority** | ^0.7.1 | Variant-based component class composition |
| **clsx** | ^2.1.1 | Conditional class name utility |
| **tailwind-merge** | ^3.5.0 | Merge Tailwind classes without conflicts |
| **lucide-react** | ^0.577.0 | Icon library (primary) |
| **react-icons** | ^5.6.0 | Additional icon sets |
| **@radix-ui/react-dialog** | ^1.1.15 | Accessible dialog primitive |
| **@radix-ui/react-slot** | ^1.2.4 | Slot composition for components |
| **@radix-ui/react-icons** | ^1.3.2 | Radix icon set |
| **@base-ui/react** | ^1.3.0 | Base UI primitives (Shadcn dependency) |

## Animation & scroll

| Package | Version | Purpose |
|---------|---------|---------|
| **framer-motion** | ^12.38.0 | Page transitions, scroll animations, mobile menu, marquees |
| **lenis** | ^1.3.21 | Smooth scroll (global `ReactLenis` wrapper) |
| **ogl** | ^1.0.11 | WebGL library — powers `LiquidChrome` background effect on About page |

## Forms & validation

| Package | Version | Purpose |
|---------|---------|---------|
| **react-hook-form** | ^7.72.0 | Form state management |
| **@hookform/resolvers** | ^5.2.2 | Schema resolver bridge for react-hook-form |
| **zod** | ^4.3.6 | Schema validation |

## HTTP & data

| Package | Version | Purpose |
|---------|---------|---------|
| **axios** | ^1.15.2 | HTTP client for backend API calls |

## Development dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **eslint** | ^9 | JavaScript linter |
| **eslint-config-next** | 16.2.1 | Next.js ESLint rules (core-web-vitals) |
| **eslint-config-prettier** | ^10.1.8 | Disable ESLint rules that conflict with Prettier |
| **prettier** | ^3.8.1 | Code formatter |
| **lint-staged** | ^16.4.0 | Run linters on staged git files |
| **cross-env** | ^10.1.0 | Cross-platform environment variables in npm scripts |
| **typescript** | ^6.0.3 | TypeScript (dev only — app source is JSX) |
| **@next/bundle-analyzer** | ^16.2.1 | Bundle size analysis (optional) |

## Testing (installed, not wired)

These packages are in `devDependencies` but no test scripts or config files are present yet:

| Package | Version | Purpose |
|---------|---------|---------|
| **vitest** | ^4.1.0 | Unit test runner |
| **@vitejs/plugin-react** | ^6.0.1 | Vite React plugin for Vitest |
| **jsdom** | ^29.0.1 | DOM environment for tests |
| **@testing-library/react** | ^16.3.2 | React component testing |
| **@testing-library/jest-dom** | ^16.9.1 | DOM assertion matchers |
| **@testing-library/user-event** | ^14.6.1 | User interaction simulation |
| **playwright** | ^1.58.2 | End-to-end browser testing |
| **@playwright/test** | ^1.58.2 | Playwright test runner |

## Shadcn configuration

Configured in `components.json`:

```json
{
  "style": "base-nova",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

## Path aliases

Defined in `jsconfig.json`:

| Alias | Maps to |
|-------|---------|
| `@/*` | `./src/*` |

Example: `import Header from "@/components/layout/Header"`

## Font loading

- **Poppins** — Loaded via `next/font/google` in root layout
- Weights: 300, 400, 500, 600, 700, 800
- CSS variable: `--font-poppins`

## Image optimization

Next.js `<Image>` is used throughout. Remote image hosts allowed in `next.config.mjs`:

- `images.unsplash.com`
- `**.amazonaws.com` (S3 buckets for blog/career/offer images)

## What is NOT used

- No Redux, Zustand, or global state library
- No Prisma or direct database access
- No Next.js API routes (`src/app/api/`)
- No i18n / localization framework
- No CMS (content comes from backend API)
- No CSS Modules or styled-components (Tailwind only)
