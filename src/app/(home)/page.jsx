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
import BlurReveal from "@/components/sections/BlurReveal";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal> {/**scroll reveal */}
        <HomeHero />
      </ScrollReveal>
      <BlurReveal> {/**blur reveal */}
        <HowIntoSection />
      </BlurReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <DiscoverDealsSection />
      </ScrollReveal>
      <BlurReveal> {/**blur reveal */}
        <AmazingFeaturesSection />
      </BlurReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <AppShowcaseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <DownloadCTASection />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <BlogsSection />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */}
        <FAQSection />
      </ScrollReveal>
    </main>
  );
}
