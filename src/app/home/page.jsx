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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HomeHero />
      <HowIntoSection />
      <DiscoverDealsSection />
      <AmazingFeaturesSection />
      <AppShowcaseSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <DownloadCTASection />
      <BlogsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
