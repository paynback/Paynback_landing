import AboutHero from "@/app/about/components/Hero";
import AboutDetails from "@/app/about/components/AboutDetails";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import Founders from "@/app/about/components/Founders";
import HowToWork from "@/app/about/components/HowToWork";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Activities from "@/components/sections/Activities";

export const metadata = {
  title: "About Us - PayNback",
  description: "Vision & Mission of PayNback",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <ScrollReveal delay={80}>
        <AboutDetails />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <Activities />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Founders />
      </ScrollReveal>
      <ScrollReveal delay={240}>
        <HowToWork />
      </ScrollReveal>
    </main>
  );
}
