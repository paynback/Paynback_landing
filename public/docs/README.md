# PayNback Landing — Technical Documentation

Official technical documentation for the **PayNback Landing** website (`Paynback_landing`).

| Document | Description |
|----------|-------------|
| [Overview](./01-overview.md) | Project summary, goals, and high-level architecture |
| [Tech Stack & Packages](./02-tech-stack.md) | Frameworks, libraries, and dependency reference |
| [Project Structure](./03-project-structure.md) | Folder layout, conventions, and file organization |
| [Routes & Pages](./04-routes-and-pages.md) | App Router pages, layouts, and section composition |
| [API Integration](./05-api-integration.md) | Backend endpoints, services, and data flow |
| [Components](./06-components.md) | Shared UI, layout, sections, and providers |
| [Styling & Theming](./07-styling-and-theming.md) | Tailwind, design tokens, fonts, and animations |
| [Configuration](./08-configuration.md) | Environment variables, Next.js, ESLint, and tooling |
| [Development & Deployment](./09-development-and-deployment.md) | Local setup, scripts, build, and release |
| [Performance & iOS Notes](./10-performance-and-ios.md) | Known Safari/iOS issues and improvement areas |
| [SEO release checklist](./12-seo-release-checklist.md) | Pre/post release SEO verification |
| [Scroll Lag Diagnosis Report](./13-scroll-lag-diagnosis-report.md) | Root-cause confirmation and fixes for site-wide scroll stutter |

---

## Quick reference

| Item | Value |
|------|-------|
| **Framework** | Next.js 16.2.1 (App Router) |
| **UI library** | React 19.2.4 |
| **Language** | JavaScript (JSX) — no TypeScript in app source |
| **Styling** | Tailwind CSS 4 + Shadcn UI |
| **Package manager** | npm |
| **Default dev URL** | `http://localhost:3000` |
| **Backend API base** | `NEXT_PUBLIC_SERVER_BASE_URL` (default: `http://localhost:3001`) |

## NPM scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Repository location

```
server-with-web/
└── Paynback_landing/     # This project
    ├── public/           # Static assets + this docs folder
    ├── src/              # Application source
    ├── next.config.mjs
    ├── package.json
    └── README.md         # Project entry point (summary + links here)
```

## `src/` vs `public/`

| Directory | Role |
|-----------|------|
| **`src/`** | React/Next.js application — routes, components, API services, SEO helpers. Compiled by Next.js; not served as raw files. |
| **`public/`** | Static files copied to the site root at build time. Referenced by path (`/images/...`, `/Icons/...`). Includes marketing images, icons, location CSVs, and this documentation. |

See [Project Structure](./03-project-structure.md) for the full folder tree.

---

*Last updated: September 2026*
