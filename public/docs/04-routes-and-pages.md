# Routes & Pages

## Route map

| URL | Page file | Type | Description |
|-----|-----------|------|-------------|
| `/` | `(home)/page.jsx` | Static + client sections | Main homepage (+ FAQPage JSON-LD) |
| `/about` | `about/page.jsx` | Static + client sections | About Us, founders, activities |
| `/blog` | `blog/page.jsx` | SSR (API fetch) | Blog listing |
| `/blog/[slug]` | `blog/[slug]/page.jsx` | SSR metadata + client body | Article + BlogPosting JSON-LD |
| `/careers` | `careers/page.jsx` | SSR (API fetch) | Job listings + team |
| `/careers/[slug]` | `careers/[slug]/page.jsx` | SSR metadata + client form | Job detail + JobPosting JSON-LD |
| `/contact` | `contact/page.jsx` | Static + client form | Contact form + map |
| `/partners` | `partners/page.jsx` | Static + client form | Partner lead form |
| `/msme` | `msme/page.jsx` | Client wrapper | MSME merchant onboarding |
| `/jammy` | `jammy/page.jsx` | Static sections | Jammy mascot story page |
| `/terms` | `(guidelines)/terms/page.jsx` | Static content | Terms & Conditions |
| `/privacy` | `(guidelines)/privacy/page.jsx` | Static content | Privacy Policy |
| `/merchant-terms` | `(guidelines)/merchant-terms/page.jsx` | Static content | Merchant Terms |
| `/home2` | — | Removed | Permanent redirect → `/` |
| `*` (404) | `not-found.jsx` | Client | Custom 404 with animation |

## SEO endpoints

| URL | Generator |
|-----|-----------|
| `/robots.txt` | `app/robots.js` |
| `/sitemap.xml` | `app/sitemap.js` (static routes + blogs + careers from API) |

## Navigation links

Defined in `src/components/layout/Header.jsx`:

```javascript
const headerNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blogs" },
  { href: "/careers", label: "Careers" },
  { href: "/msme", label: "For MSME" },
  { href: "/partners", label: "Partners" },
];
```

Footer (`Footer.jsx`) includes: About, Blogs, Careers, MSME, Partners, Jammy, Contact, legal links, social media.

---

## Page details

### Homepage (`/`)

**File:** `src/app/(home)/page.jsx`

| # | Section component | Animation wrapper | Data source |
|---|-------------------|-------------------|-------------|
| 1 | `Hero` (HomeHero) | ScrollReveal | Static |
| 2 | `HowIntoSection` | BlurReveal | Static |
| 3 | `DiscoverDealsSection` | ScrollReveal | API: offers |
| 4 | `AmazingFeaturesSection` | BlurReveal | Static |
| 5 | `AppShowcaseSection` | ScrollReveal | Static |
| 6 | `WhyChooseSection` | ScrollReveal | Static |
| 7 | `DownloadCTASection` | ScrollReveal | Static |
| 8 | `BlogsSection` | ScrollReveal | API: blogs |
| 9 | `FAQSection` | ScrollReveal | Static (`src/data/homeFaqs.js`) |
| 10 | `EnrollSection` | ScrollReveal | Form → API |

`TestimonialsSection` is commented out when disabled.

### About (`/about`)

| Section | Component |
|---------|-----------|
| Hero | `about/components/Hero` |
| Details | `AboutDetails` (includes LiquidChrome WebGL) |
| Why Choose | `WhyChooseSection` |
| Activities | `Activities` |
| Founders | `Founders` |
| How it works | `HowToWork` |

### Blog (`/blog`, `/blog/[slug]`)

- **Listing:** Client/API via `fetchPublishedBlogs()`
- **Detail:** Server `generateMetadata` + client `BlogDetailClient.jsx`
- Structured data: BlogPosting + BreadcrumbList

### Careers (`/careers`, `/careers/[slug]`)

- **Listing:** Jobs via `fetchPublicCareers()` and team via `fetchPublicEmployerGroups()`
- **Detail:** Server `generateMetadata` + `JobDetailClient.jsx` application form
- Structured data: JobPosting + BreadcrumbList

### Contact (`/contact`)

- Hero + contact form (`ContactSection.jsx`)
- Google Maps embed (`MapEmbed.jsx`) — requires `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### Partners (`/partners`)

- Hero + partner lead form (`PartenrForm.jsx`)
- Custom dropdowns for State / District / Block Panchayat

### MSME (`/msme`)

- Client-only page (`MsmePageClient.jsx`)
- Hero, merchant form, nearby shops carousel

### Jammy (`/jammy`)

- Brand mascot story page (`JammyHero` + `JammyStory`)

### Legal pages (`/terms`, `/privacy`, `/merchant-terms`)

- Shared dark layout with sticky sidebar (`GuidelinesSidebar`)
- Footer is hidden on guideline routes

### 404 (`not-found.jsx`)

- Full-screen animated space theme

---

## Layouts

### Root layout (`src/app/layout.jsx`)

- Global metadataBase, title template, OG defaults
- Organization + WebSite JSON-LD
- Optional GA4 via `Analytics`
- Header / Footer / SmoothScroll

### Guidelines layout (`src/app/(guidelines)/layout.jsx`)

- Dark background with sidebar + content grid

---

## Metadata

Shared helper: `src/lib/seo.js` → `buildMetadata({ title, description, path, image, … })`

Includes canonical, Open Graph, Twitter, and robots. Title template on root: `%s | PayNback`.

Dynamic metadata on blog/job slug pages from API content.

## Dynamic routes

| Pattern | Param | Example |
|---------|-------|---------|
| `/blog/[slug]` | `slug` | `/blog/paynback-upi-rewards` |
| `/careers/[slug]` | `slug` | `/careers/frontend-developer` |
