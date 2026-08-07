import HomeHero from "./components/Hero";
import DiscoverDealsSection from "./components/DiscoverDealsSection";
import HowIntoSection from "./components/HowIntoSection";
import AmazingFeaturesSection from "./components/AmazingFeaturesSection";
import AppShowcaseSection from "@/components/sections/AppShowcaseSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import DownloadCTASection from "./components/DownloadCTASection";
import EnrollSection from "./components/EnrollSection";
import BlogsSection from "./components/BlogsSection";
import FAQSection from "./components/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import JsonLd from "@/components/seo/JsonLd";
import { HOME_FAQS } from "@/data/homeFaqs";
import { buildMetadata, faqPageJsonLd } from "@/lib/seo";

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
