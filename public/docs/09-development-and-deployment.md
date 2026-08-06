# Development & Deployment

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | 18.x or later (20+ recommended) |
| npm | 9.x or later |
| PayNback backend | Running on port 3001 (or configured URL) |

## Local setup

### 1. Clone and install

```bash
cd Paynback_landing
npm install
```

### 2. Configure environment

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3001
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=your_map_id
```

### 3. Start development server

```bash
npm run dev
```

- Runs on `http://localhost:3000`
- Uses Turbopack (Next.js 16 default)
- Hot Module Replacement (HMR) enabled
- Network access available at `http://<your-ip>:3000`

### 4. Start production build locally

```bash
npm run build
npm run start
```

---

## NPM scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `cross-env NODE_OPTIONS="--max-old-space-size=4096" next dev` | Development server with 4GB heap |
| `build` | `cross-env NODE_OPTIONS="--max-old-space-size=4096" next build` | Production build |
| `start` | `next start` | Serve production build |
| `lint` | `eslint` | Run ESLint across project |

---

## Development workflow

### Adding a new page

1. Create folder under `src/app/<route>/`
2. Add `page.jsx` with default export
3. Optionally add `layout.jsx` for route-specific layout
4. Add page-specific components in `components/` subfolder
5. Add navigation link in `Header.jsx` and `Footer.jsx` if needed

### Adding a new API integration

1. Create service file in `src/lib/` or `src/app/<route>/services/`
2. Import `axiosInstance` from `@/lib/axiosInstance`
3. Export async functions for each endpoint
4. Call from client component form handlers or server component page files

### Adding a Shadcn component

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
```

Components install to `src/components/ui/`.

---

## Code quality

### ESLint

```bash
npm run lint
```

Current rules extend `eslint-config-next/core-web-vitals`. Key enforced rules:

- React hooks rules
- Next.js image/link best practices
- Core Web Vitals optimizations

### Prettier

Configured via `eslint-config-prettier`. Format on save recommended in IDE.

### Lint-staged

Pre-commit hook configuration exists in `package.json` but requires a git hook runner (e.g., Husky) to be active.

---

## Build output

```bash
npm run build
```

Produces:

```
.next/               # Build output (gitignored)
├── static/          # Static assets with hashes
├── server/          # Server-side bundles
└── ...
```

### Build considerations

- Server Components are pre-rendered at build time where possible
- Dynamic routes (`[slug]`) may use ISR or SSR depending on `generateStaticParams`
- Images are optimized at request time (not at build)
- `minimumCacheTTL: 0` means image cache refreshes on each deploy

---

## Deployment

### Recommended platform

Next.js apps deploy best on **Vercel**, but any Node.js hosting works.

### Environment variables (production)

Set these in your hosting platform:

```
NEXT_PUBLIC_SERVER_BASE_URL=https://api.paynback.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<production-key>
NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID=<production-map-id>
```

### Build command

```bash
npm run build
```

### Start command

```bash
npm run start
```

### Docker (example)

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Testing (future)

Testing libraries are installed but not configured:

| Tool | Purpose | Status |
|------|---------|--------|
| Vitest | Unit tests | Not configured |
| Testing Library | Component tests | Not configured |
| Playwright | E2E tests | Not configured |

To set up Vitest, create `vitest.config.js` and add a `test` script to `package.json`.

---

## Troubleshooting

### Port already in use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <pid> /F

# Or use a different port
npx next dev -p 3001
```

### Out of memory during build

The project already sets `--max-old-space-size=4096`. If still failing, increase to 8192.

### API calls failing locally

1. Ensure backend is running on the URL in `NEXT_PUBLIC_SERVER_BASE_URL`
2. Check CORS configuration on the backend allows `localhost:3000`
3. Verify the endpoint exists: `curl http://localhost:3001/api/v1/web/blogs`

### Images not loading

1. Check `remotePatterns` in `next.config.mjs` includes the image hostname
2. Verify the S3 URL is publicly accessible
3. Check browser console for 403/404 on image URLs

### Lenis scroll warning

Console may show: *"Please ensure that the container has a non-static position"*. This is a Lenis initialization warning and does not block functionality.

---

## Git workflow

Standard feature branch workflow:

```bash
git checkout -b feature/my-feature
# make changes
git add .
git commit -m "description"
git push -u origin feature/my-feature
# create PR
```

No commit hooks are enforced by default in this repo.
