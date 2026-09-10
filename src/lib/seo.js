/**
 * Shared SEO helpers for metadata, absolute URLs, and site identity.
 */

const DEFAULT_SITE_URL = "https://paynback.com";
const DEFAULT_OG_IMAGE = "/Icons/pnb-blue-logo.svg";

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_SITE_URL;
  return String(raw).replace(/\/+$/, "");
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/**
 * Build Next.js Metadata for indexable (or noindex) routes.
 * @param {{ title: string, description: string, path?: string, image?: string|null, noIndex?: boolean, type?: string }} opts
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  type = "website",
  absoluteTitle = false,
}) {
  const url = absoluteUrl(path);
  const imagePath = image || DEFAULT_OG_IMAGE;
  const ogImage = /^https?:\/\//i.test(imagePath)
    ? imagePath
    : absoluteUrl(imagePath);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "PayNback",
      locale: "en_IN",
      type,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PayNback",
    url,
    logo: absoluteUrl("/Icons/pnb-blue-logo.svg"),
    description:
      "PayNback is India's first in-store shopping support app that connects shoppers with nearby merchants offering exclusive discounts, cashback, and rewards.",
    sameAs: [
      // Add official social profile URLs when available
    ].filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PayNback",
    url: getSiteUrl(),
    publisher: {
      "@type": "Organization",
      name: "PayNback",
      url: getSiteUrl(),
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd({ title, description, path, image, datePublished, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image
      ? /^https?:\/\//i.test(image)
        ? image
        : absoluteUrl(image)
      : absoluteUrl(DEFAULT_OG_IMAGE),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: "PayNback",
    },
    publisher: {
      "@type": "Organization",
      name: "PayNback",
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/Icons/pnb-blue-logo.svg"),
      },
    },
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
  };
}

export function jobPostingJsonLd({
  title,
  description,
  path,
  datePosted,
  employmentType,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description: description || title,
    datePosted: datePosted || undefined,
    employmentType: employmentType || undefined,
    hiringOrganization: {
      "@type": "Organization",
      name: "PayNback",
      sameAs: getSiteUrl(),
      logo: absoluteUrl("/Icons/pnb-blue-logo.svg"),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    url: absoluteUrl(path),
  };
}
