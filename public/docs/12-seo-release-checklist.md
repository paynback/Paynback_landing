# SEO release checklist

Use this checklist before and after each production release of the landing site.

## Pre-release

- [ ] `NEXT_PUBLIC_SITE_URL` is set to the production origin (no trailing slash).
- [ ] `NEXT_PUBLIC_SERVER_BASE_URL` points to the production API.
- [ ] Optional: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` / Bing verification configured if GSC is not already claimed another way.
- [ ] Optional: `NEXT_PUBLIC_GA_MEASUREMENT_ID` only if analytics is approved (consider consent).
- [ ] No unintentional `noIndex` on public marketing pages.
- [ ] `/home2` redirects to `/` (permanent); sitemap does not include it.
- [ ] New public routes added to `src/app/sitemap.js` static list when applicable.

## After deploy

- [ ] Open `/robots.txt` — allows `/`, lists correct sitemap URL.
- [ ] Open `/sitemap.xml` — includes static routes plus blog/job slugs when API is reachable.
- [ ] Spot-check 3–5 pages for unique title, description, and canonical (View Source or DevTools).
- [ ] Spot-check homepage FAQ JSON-LD, Organization JSON-LD, one blog, one job (Rich Results Test optional).
- [ ] Soft-404s and broken internal links: home, about, blog, careers, msm e, partners, contact.
- [ ] Google Search Console: request indexing for major new URLs if needed; review Coverage for errors.

## Monthly

- [ ] Review Search Console: impressions, clicks, top queries, and crawl errors.
- [ ] Validate structured data sample URLs after template changes.
- [ ] Confirm Core Web Vitals report for mobile LCP / INP / CLS.
