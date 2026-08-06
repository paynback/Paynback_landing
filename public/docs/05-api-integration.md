# API Integration

## HTTP client

All API calls go through a shared Axios instance:

**File:** `src/lib/axiosInstance.js`

```javascript
const baseURL = (process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3001").replace(/\/+$/, "");

const axiosInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
```

- Trailing slashes are stripped from the base URL
- Default Content-Type is `application/json`
- Multipart requests override headers per-call

## API base URL

| Environment | Variable | Default |
|-------------|----------|---------|
| All | `NEXT_PUBLIC_SERVER_BASE_URL` | `http://localhost:3001` |

All endpoints are prefixed with `/api/v1/web/`.

---

## Endpoint reference

### Blogs

**Service:** `src/lib/blogService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| GET | `/api/v1/web/blogs` | `fetchPublishedBlogs(options)` | List published blogs |
| GET | `/api/v1/web/blogs/:slug` | `fetchPublishedBlogBySlug(slug)` | Single blog by slug |

**Query params (listing):**

| Param | Type | Description |
|-------|------|-------------|
| `limit` | number | Max results |
| `featured` | `"true"` | Filter featured only |

**Response shape:** `{ data: [...] }` — service returns `data.data ?? []`

---

### Careers

**Service:** `src/lib/careerService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| GET | `/api/v1/web/careers` | `fetchPublicCareers()` | List open positions |
| GET | `/api/v1/web/careers/:slug` | `fetchPublicCareerBySlug(slug)` | Job detail |
| POST | `/api/v1/web/careers/:slug/apply` | `submitCareerApplication(slug, formData)` | Submit application |

**Apply payload:** `multipart/form-data` (includes resume/CV file)

---

### Employers (team)

**Service:** `src/lib/employeeService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| GET | `/api/v1/web/employers` | `fetchPublicEmployerGroups()` | Team member groups |

Used on the Careers page for the team carousel.

---

### Offers (deals)

**Service:** `src/lib/offerService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| GET | `/api/v1/web/offers` | `fetchPublicOffers()` | Homepage deal cards |

Used in `DiscoverDealsSection` with countdown timers.

---

### Enrollment

**Service:** `src/lib/enrollService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| POST | `/api/v1/web/enroll` | `submitEnrollForm(payload)` | Homepage phone enrollment |

**Payload (JSON):**

```json
{
  "phone": "9876543210",
  "consent": true
}
```

---

### Contact

**Service:** `src/app/contact/services/contactService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| POST | `/api/v1/web/contact` | `submitContactForm(payload)` | Contact form submission |

**Payload (JSON):**

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "message": "string"
}
```

---

### Partner leads

**Service:** `src/app/partners/services/partnerService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| POST | `/api/v1/web/partner-lead` | `submitPartnerLead(payload)` | Partner interest form |

**Payload:** `multipart/form-data`

| Field | Required | Type |
|-------|----------|------|
| `firstName` | Yes | string |
| `lastName` | Yes | string |
| `phone` | Yes | string |
| `email` | Yes | string |
| `state` | Yes | string |
| `district` | Yes | string |
| `blockPanchayat` | Yes | string |
| `locationPin` | Yes | string |
| `message` | No | string |
| `cv` | No | File |

---

### MSME / Merchants

**Service:** `src/app/msme/services/merchantService.js`

| Method | Endpoint | Function | Description |
|--------|----------|----------|-------------|
| GET | `/api/v1/web/merchant/categories` | `fetchShopCategories()` | Shop categories |
| GET | `/api/v1/web/merchant/categories/:id/subcategories` | `fetchSubCategories(categoryId)` | Sub-categories |
| GET | `/api/v1/web/merchant/shops` | `fetchNearbyShops(lat, lng)` | Nearby registered shops |
| POST | `/api/v1/web/merchant` | `submitMerchantForm(payload)` | Merchant onboarding |

**Shops query params:**

| Param | Type | Description |
|-------|------|-------------|
| `lat` | number | User latitude |
| `lng` | number | User longitude |

**Merchant form payload:** `multipart/form-data`

| Field | Required | Type |
|-------|----------|------|
| `name` | Yes | string |
| `phone` | Yes | string |
| `shopName` | Yes | string |
| `category` | Yes | string |
| `subCategory` | No | string |
| `address` | Yes | string |
| `pincode` | Yes | string |
| `shopThumbnail` | Yes | File (image) |
| `lat` | No | number |
| `lng` | No | number |

---

## Data flow diagram

```
┌──────────────┐     ┌─────────────────┐     ┌──────────────────┐
│  Page/Form   │────▶│  Service module  │────▶│  axiosInstance   │
│  Component   │     │  (lib/ or app/)  │     │  baseURL + path  │
└──────────────┘     └─────────────────┘     └────────┬─────────┘
                                                       │
                                                       ▼
                                            ┌──────────────────┐
                                            │ PayNback Backend │
                                            │ /api/v1/web/*    │
                                            └──────────────────┘
```

## Error handling

- Services do not wrap Axios calls in try/catch — errors propagate to calling components
- Form components catch errors and display user-facing messages
- No global error boundary or toast notification system

## Local storage (client-side)

| Key | Purpose | Set by |
|-----|---------|--------|
| `paynback_user_location` | Cached `{ lat, lng }` | `GeolocationProvider`, `MsmeLocationProvider` |
| `paynback_location_consent` | Location consent flag | MSME location flow |

Custom event: `paynback:location-updated` — dispatched when location is persisted.

## External services

| Service | Env variable | Used in |
|---------|-------------|---------|
| Google Maps JavaScript API | `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | `MapEmbed.jsx` |
| Google Maps Map ID | `NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID` | `MapEmbed.jsx` (default: `DEMO_MAP_ID`) |

## Static data (no API)

Partner form location dropdowns load from local files:

| File | Purpose |
|------|---------|
| `public/assets/districts.01May2026.csv` | Kerala districts |
| `public/assets/blocks.01May2026.csv` | Block panchayats |
| `public/assets/pri_local_bodies.01May2026.csv` | Local bodies |
| `public/assets/location_data.json` | Structured location hierarchy |
