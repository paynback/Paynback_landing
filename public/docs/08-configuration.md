# Configuration

## Environment variables

All environment variables use the `NEXT_PUBLIC_` prefix, making them available in both server and client code.

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production | `https://paynback.com` | Canonical site origin (no trailing slash); used for metadataBase, sitemap, robots, OG |
| `NEXT_PUBLIC_SERVER_BASE_URL` | No | `http://localhost:3001` | PayNback backend API base URL |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | — | Google Search Console content verification meta |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | No | — | Bing Webmaster `msvalidate.01` value |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | — | Optional Google Analytics 4 ID (`G-…`) |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | For map | — | Google Maps JavaScript API key |
| `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` | No | `DEMO_MAP_ID` | Google Maps custom map style ID |

### Example `.env` file

```env
NEXT_PUBLIC_SITE_URL=https://paynback.com
NEXT_PUBLIC_SERVER_BASE_URL=https://api.paynback.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id
# NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
# NEXT_PUBLIC_BING_SITE_VERIFICATION=
# NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

> **Security note:** Only `NEXT_PUBLIC_*` variables are embedded in the client bundle. Never put secrets (API secrets, database URLs) in `NEXT_PUBLIC_` variables.

---

## Next.js configuration

**File:** `next.config.mjs`

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
    ],
    minimumCacheTTL: 60 * 60 * 24,
  },
  async redirects() {
    return [{ source: "/home2", destination: "/", permanent: true }];
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
};
```

### Image remote patterns

| Hostname | Purpose |
|----------|---------|
| `images.unsplash.com` | Stock/placeholder images |
| `**.amazonaws.com` | S3-hosted content (blog covers, team photos, offer images) |

To add a new image host, add an entry to `remotePatterns`.

### Dev indicators

ISR status and build activity indicators are disabled in development.

---

## ESLint configuration

**File:** `eslint.config.mjs`

- Extends `eslint-config-next/core-web-vitals`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Known lint issues (as of audit)

| Severity | Count | Common rules |
|----------|-------|-------------|
| Errors | 10 | `react-hooks/set-state-in-effect`, `react/no-unescaped-entities` |
| Warnings | 10 | `@next/next/no-img-element`, `react-hooks/exhaustive-deps` |

---

## PostCSS configuration

**File:** `postcss.config.mjs`

```javascript
const config = {
  plugins: { "@tailwindcss/postcss": {} },
};
export default config;
```

Tailwind v4 uses PostCSS plugin directly — no separate `tailwind.config.js`.

---

## JSConfig (path aliases)

**File:** `jsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## Shadcn UI configuration

**File:** `components.json`

| Setting | Value |
|---------|-------|
| Style | `base-nova` |
| RSC | `true` |
| TypeScript | `false` (JSX project) |
| Base color | `neutral` |
| CSS variables | `true` |
| Icon library | `lucide` |
| CSS entry | `src/app/globals.css` |

### Adding new Shadcn components

```bash
npx shadcn@latest add <component-name>
```

Components are installed to `src/components/ui/`.

---

## Lint-staged (pre-commit)

**File:** `package.json` → `lint-staged`

```json
{
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

Runs ESLint fix and Prettier on staged files before commit (requires Husky or similar hook setup).

---

## Node.js memory

Dev and build scripts allocate extra memory:

```json
"dev": "cross-env NODE_OPTIONS=\"--max-old-space-size=4096\" next dev",
"build": "cross-env NODE_OPTIONS=\"--max-old-space-size=4096\" next build"
```

This prevents out-of-memory errors during large builds.

---

## Metadata & SEO

Root metadata in `src/app/layout.jsx`:

```javascript
export const metadata = {
  title: "PayNback — India's first in-store shopping reward app",
  description: "PayNback connects users with nearby merchants offering exclusive discounts, cashback and rewards.",
};
```

Individual pages override with their own `metadata` exports.

### Not configured

| Feature | Status |
|---------|--------|
| `robots.txt` | Not present |
| `sitemap.xml` | Not present |
| Open Graph tags | Not configured |
| Twitter cards | Not configured |
| PWA manifest | Not present |
| Apple touch icon | Not present (only `icon.svg`) |
| `viewport-fit=cover` | Not set |
| Theme color | Not set |

---

## Favicon

**File:** `src/app/icon.svg`

Next.js App Router automatically serves this as the site favicon. SVG format — no PNG/ICO fallback.
