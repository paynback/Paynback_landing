# Styling & Theming

## CSS architecture

The project uses **Tailwind CSS v4** with the new CSS-first configuration (no `tailwind.config.js`).

**Entry point:** `src/app/globals.css`

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
```

PostCSS processes this via `@tailwindcss/postcss` in `postcss.config.mjs`.

## Design tokens

### Brand color

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#0964BC` | Primary brand blue |
| `--color-brand-primary` | `#0964BC` | Tailwind theme alias |

### CSS custom properties (Shadcn)

Defined in `:root` using OKLCH color space:

| Token | Purpose |
|-------|---------|
| `--background` / `--foreground` | Page background and text |
| `--primary` / `--primary-foreground` | Primary action colors |
| `--secondary` / `--secondary-foreground` | Secondary surfaces |
| `--muted` / `--muted-foreground` | Subdued text and backgrounds |
| `--accent` / `--accent-foreground` | Accent highlights |
| `--destructive` | Error/danger color |
| `--border` / `--input` / `--ring` | Borders, inputs, focus rings |
| `--card` / `--popover` | Card and popover surfaces |
| `--radius` | Base border radius (`0.625rem`) |

Radius scale: `--radius-sm` through `--radius-4xl` (calculated from base).

### Dark mode

A `.dark` class variant is configured via:

```css
@custom-variant dark (&:is(.dark *));
```

Dark mode tokens are defined but not actively toggled in the current UI.

## Typography

| Setting | Value |
|---------|-------|
| Font family | Poppins (Google Fonts) |
| CSS variable | `--font-poppins` |
| Tailwind class | `font-sans` maps to Poppins |
| Weights loaded | 300, 400, 500, 600, 700, 800 |
| Rendering | `antialiased` on `<html>` |

### Common text sizes

| Class | Size | Usage |
|-------|------|-------|
| `text-sm` | 14px | Form inputs (⚠️ causes iOS zoom) |
| `text-base` | 16px | Body text, recommended for inputs |
| `text-lg` | 18px | Subheadings |
| `text-2xl`–`text-4xl` | 24–36px | Section headings |
| `text-5xl`–`text-7xl` | 48–72px | Hero headings |

## Layout utilities

| Pattern | Classes | Usage |
|---------|---------|-------|
| Full-width section | `w-full` | All sections |
| Centered content | `max-w-7xl mx-auto px-4 md:px-8` | Content containers |
| Full viewport height | `min-h-screen` / `h-screen` | Heroes, 404, mobile menu |
| Grid layouts | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | Cards, features |
| Flex layouts | `flex flex-col md:flex-row` | Hero splits, forms |

## Animation classes

### Scroll reveal (`globals.css`)

```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Blur reveal

Applied via `BlurReveal` component with CSS filter transitions.

### Tailwind animate

`tw-animate-css` provides utility classes like `animate-in`, `fade-in`, `slide-in-from-bottom`.

## Responsive breakpoints

Tailwind v4 default breakpoints (no custom overrides):

| Breakpoint | Min width | Typical usage |
|------------|-----------|---------------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets, 2-column layouts |
| `lg` | 1024px | Desktop nav, 3-column grids |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

Mobile-first: base styles target mobile, breakpoints add desktop enhancements.

## Image handling

- **Next.js `<Image>`** — Used for local and optimized remote images
- **`fill` prop** — Common for responsive containers (requires parent `position: relative`)
- **`sizes` prop** — Should be set for `fill` images (some missing, causes console warnings)
- **`priority`** — Used on above-fold hero images
- **Raw `<img>`** — Used for dynamic remote URLs in blog cards, team photos, deal images

## Common visual patterns

### Gradient backgrounds

```jsx
// Hero dark gradient
className="bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]"

// Guidelines page orbs
className="bg-[#1B519C] blur-[150px] opacity-20"
```

### Glass morphism

```jsx
className="backdrop-blur-md bg-white/10 border border-white/20"
```

Used in header (scrolled state) and some cards.

### Scroll snap carousels

```css
scroll-snap-type: x mandatory;
scroll-snap-align: start;
-webkit-overflow-scrolling: touch;
```

Used in: WhyChooseSection, ShopsCarousel, Team, DiscoverDealsSection.

## Utility helper

**File:** `src/lib/utils.js`

```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

Used throughout components for conditional class merging:

```javascript
className={cn("base-class", isActive && "active-class", className)}
```

## Icons

| Library | Import | Usage |
|---------|--------|-------|
| Lucide React | `import { Menu, X } from "lucide-react"` | Header, UI controls |
| React Icons | `import { FaFacebook } from "react-icons/fa"` | Social media in footer |
| Radix Icons | Via Shadcn components | Dialog close, etc. |
| Custom SVG | `/public/Icons/*.svg` | Logos, store badges |

## CSS organization

All styles are co-located with components via Tailwind utility classes. There are no separate `.module.css` files. Global-only styles live in `globals.css`:

- Design token definitions (`:root`, `.dark`)
- Scroll reveal animation
- Legal page typography overrides
- Custom scrollbar hiding utilities
