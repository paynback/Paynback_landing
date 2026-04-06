import HomeHero from "./components/Hero";
import DiscoverDealsSection from "./components/DiscoverDealsSection";
import HowIntoSection from "./components/HowIntoSection";
import AmazingFeaturesSection from "./components/AmazingFeaturesSection";
import AppShowcaseSection from "./components/AppShowcaseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadCTASection from "./components/DownloadCTASection";
import BlogsSection from "./components/BlogsSection";
import FAQSection from "./components/FAQSection";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
