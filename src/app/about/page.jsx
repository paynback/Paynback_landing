import AboutHero from "@/app/about/components/Hero";
import AboutDetails from "@/app/about/components/AboutDetails";
import Statistics from "@/app/about/components/Statistics";
import AppShowcaseSection from "@/components/common/AppShowcaseSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import Founders from "@/app/about/components/Founders";
import HowToWork from "@/app/about/components/HowToWork";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us - PayNBack",
  description: "Vision & Mission of PayNBack",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutDetails />
      <AppShowcaseSection />
      <WhyChooseSection />
      <Statistics />
      <Founders />
      <HowToWork />
      <Footer />
    </main>
  );
}
