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
import { Hero } from "@/components/sections/Hero";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <HomeHero />
      </ScrollReveal>

        <HowIntoSection /> 

      <ScrollReveal delay={100}>
        <DiscoverDealsSection />
      </ScrollReveal>
      <AmazingFeaturesSection />
      <ScrollReveal delay={100}>
        <AppShowcaseSection />
      </ScrollReveal>
      <WhyChooseSection />
      <ScrollReveal delay={100}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <DownloadCTASection />
      </ScrollReveal>
      <BlogsSection />
      <ScrollReveal delay={100}>
        <FAQSection />
      </ScrollReveal>
    </main>
  );
}
