import AboutHero from "@/app/about/components/Hero";
import AboutDetails from "@/app/about/components/AboutDetails";
import AppShowcaseSection from "@/components/common/AppShowcaseSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import Founders from "@/app/about/components/Founders";
import HowToWork from "@/app/about/components/HowToWork";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Activities from "@/components/sections/Activities";

export const metadata = {
  title: "About Us - PayNBack",
  description: "Vision & Mission of PayNBack",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <AboutHero />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <AboutDetails />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <AppShowcaseSection />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Activities />
      </ScrollReveal>
      <ScrollReveal delay={240}>
        <Founders />
      </ScrollReveal>
      <ScrollReveal delay={280}>
        <HowToWork />
      </ScrollReveal>
      <ScrollReveal delay={320}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
