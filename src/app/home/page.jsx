import HomeHero from "./components/Hero";
import DiscoverDealsSection from "./components/DiscoverDealsSection";
import HowIntoSection from "./components/HowIntoSection";
import AmazingFeaturesSection from "./components/AmazingFeaturesSection";
import AppShowcaseSection from "@/components/common/AppShowcaseSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadCTASection from "./components/DownloadCTASection";
import BlogsSection from "./components/BlogsSection";
import FAQSection from "./components/FAQSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <HowIntoSection />
      <ScrollReveal delay={120}>
        <DiscoverDealsSection />
      </ScrollReveal>
      <AmazingFeaturesSection />
      <ScrollReveal delay={200}>
        <AppShowcaseSection />
      </ScrollReveal>
      <WhyChooseSection />
      <ScrollReveal delay={280}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={320}>
        <DownloadCTASection />
      </ScrollReveal>
      <BlogsSection />
      <ScrollReveal delay={400}>
        <FAQSection />
      </ScrollReveal>
    </main>
  );
}
