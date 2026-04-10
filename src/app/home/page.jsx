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
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <ScrollReveal delay={80}>
        <HowIntoSection />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <DiscoverDealsSection />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <AmazingFeaturesSection />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <AppShowcaseSection />
      </ScrollReveal>
      <ScrollReveal delay={240}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={280}>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={320}>
        <DownloadCTASection />
      </ScrollReveal>
      <ScrollReveal delay={360}>
        <BlogsSection />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal delay={440}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
