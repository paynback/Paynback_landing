# Routes & Pages

## Route map

| URL | Page file | Type | Description |
|-----|-----------|------|-------------|
| `/` | `(home)/page.jsx` | Static + client sections | Main homepage |
| `/about` | `about/page.jsx` | Static + client sections | About Us, founders, activities |
| `/blog` | `blog/page.jsx` | SSR (API fetch) | Blog listing |
| `/blog/[slug]` | `blog/[slug]/page.jsx` | SSR (API fetch) | Individual blog post |
| `/careers` | `careers/page.jsx` | SSR (API fetch) | Job listings + team |
| `/careers/[slug]` | `careers/[slug]/page.jsx` | SSR + client form | Job detail + application |
| `/contact` | `contact/page.jsx` | Static + client form | Contact form + map |
| `/partners` | `partners/page.jsx` | Static + client form | Partner lead form |
| `/msme` | `msme/page.jsx` | Client wrapper | MSME merchant onboarding |
| `/jammy` | `jammy/page.jsx` | Static sections | Jammy mascot story page |
| `/terms` | `(guidelines)/terms/page.jsx` | Static content | Terms & Conditions |
| `/privacy` | `(guidelines)/privacy/page.jsx` | Static content | Privacy Policy |
| `/merchant-terms` | `(guidelines)/merchant-terms/page.jsx` | Static content | Merchant Terms |
| `/home2` | `home2/page.jsx` | Legacy alternate | Old landing page design |
| `*` (404) | `not-found.jsx` | Client | Custom 404 with animation |

## Navigation links

Defined in `src/components/layout/Header.jsx`:

```javascript
const headerNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blogs" },
  { href: "/careers", label: "Careers" },
  { href: "/msme", label: "For MSME" },
];
```

Footer adds: Contact, Partners, Jammy, legal links, social media.

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
| 9 | `FAQSection` | ScrollReveal | Static (accordion) |
| 10 | `EnrollSection` | ScrollReveal | Form → API |

`TestimonialsSection` is commented out.

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

- **Listing:** Server-fetches published blogs via `fetchPublishedBlogs()`
- **Detail:** Server-fetches by slug via `fetchPublishedBlogBySlug(slug)`
- Client component `BlogDetailClient.jsx` renders rich content

### Careers (`/careers`, `/careers/[slug]`)

- **Listing:** Fetches jobs via `fetchPublicCareers()` and team via `fetchPublicEmployerGroups()`
- **Detail:** `JobDetailClient.jsx` — application form with file upload (multipart)

### Contact (`/contact`)

- Hero + contact form (`ContactSection.jsx`)
- Google Maps embed (`MapEmbed.jsx`) — requires `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

### Partners (`/partners`)

- Hero + partner lead form (`PartenrForm.jsx`)
- Custom dropdowns for State / District / Block Panchayat
- Location data from `public/assets/*.csv` and `location_data.json`

### MSME (`/msme`)

- Client-only page (`MsmePageClient.jsx`)
- Hero, merchant form, nearby shops carousel
- Geolocation via `MsmeLocationProvider` + `GeolocationProvider`
- Categories/shops from merchant API

### Jammy (`/jammy`)

- Brand mascot story page
- `JammyHero` + `JammyStory` components

### Legal pages (`/terms`, `/privacy`, `/merchant-terms`)

- Shared dark layout with sticky sidebar (`GuidelinesSidebar`)
- Static legal content in page files
- Footer is hidden on guideline routes

### 404 (`not-found.jsx`)

- Full-screen animated space theme
- Fixed `h-screen` layout with stars animation

---

## Layouts

### Root layout (`src/app/layout.jsx`)

Applies to all routes:

```jsx
<html>
  <body>
    <SmoothScroll>
      <Header />
      {children}
      <Footer />
    </SmoothScroll>
  </body>
</html>
```

### Guidelines layout (`src/app/(guidelines)/layout.jsx`)

- Dark background with blurred gradient orbs
- Two-column grid: sidebar + content
- Client component

---

## Metadata

Pages export Next.js `metadata` objects for SEO:

```javascript
export const metadata = {
  title: "About Us - PayNback",
  description: "Vision & Mission of PayNback",
};
```

Root default title: *"PayNback — India's first in-store shopping reward app"*

Dynamic metadata is set in `[slug]` pages based on fetched content.

## Dynamic routes

| Pattern | Param | Example |
|---------|-------|---------|
| `/blog/[slug]` | `slug` | `/blog/paynback-upi-rewards` |
| `/careers/[slug]` | `slug` | `/careers/frontend-developer` |

Slug pages use `generateStaticParams` or dynamic rendering depending on build configuration.
