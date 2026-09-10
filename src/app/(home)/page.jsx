import dynamic from "next/dynamic";
import HomeHero from "./components/Hero";
import HowIntoSection from "./components/HowIntoSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import JsonLd from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/data/homeFaqs";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";

const DiscoverDealsSection = dynamic(
  () => import("./components/DiscoverDealsSection"),
  { loading: () => <SectionSkeleton className="min-h-[420px]" ariaLabel="Loading deals" /> },
);

const AmazingFeaturesSection = dynamic(
  () => import("./components/AmazingFeaturesSection"),
  { loading: () => <SectionSkeleton className="min-h-[360px]" ariaLabel="Loading features" /> },
);

const AppShowcaseSection = dynamic(
  () => import("@/components/sections/AppShowcaseSection"),
  { loading: () => <SectionSkeleton className="min-h-[520px] bg-[#080F18]" ariaLabel="Loading app showcase" /> },
);

const WhyChooseSection = dynamic(
  () => import("@/components/sections/WhyChooseSection"),
  { loading: () => <SectionSkeleton className="min-h-[400px]" ariaLabel="Loading why choose" /> },
);

const DownloadCTASection = dynamic(
  () => import("./components/DownloadCTASection"),
  { loading: () => <SectionSkeleton className="min-h-[320px]" ariaLabel="Loading download CTA" /> },
);

const BlogsSection = dynamic(
  () => import("./components/BlogsSection"),
  { loading: () => <SectionSkeleton className="min-h-[360px]" ariaLabel="Loading blogs" /> },
);

const FAQSection = dynamic(
  () => import("./components/FAQSection"),
  { loading: () => <SectionSkeleton className="min-h-[400px]" ariaLabel="Loading FAQ" /> },
);

const EnrollSection = dynamic(
  () => import("./components/EnrollSection"),
  { loading: () => <SectionSkeleton className="min-h-[280px]" ariaLabel="Loading enroll form" /> },
);

export const metadata = buildMetadata({
  title: "PayNback — India's first in-store shopping reward app",
  description:
    "PayNback connects users with nearby merchants offering exclusive discounts, cashback and rewards for in-store shopping across India.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <JsonLd data={faqPageJsonLd(HOME_FAQS)} />
      <ScrollReveal>
        <HomeHero />
      </ScrollReveal>
      <BlurReveal>
        <HowIntoSection />
      </BlurReveal>
      <ScrollReveal delay={100}>
        <DiscoverDealsSection />
      </ScrollReveal>
      <BlurReveal>
        <AmazingFeaturesSection />
      </BlurReveal>
      <ScrollReveal delay={100}>
        <AppShowcaseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <DownloadCTASection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <BlogsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <EnrollSection />
      </ScrollReveal>
    </main>
  );
}
