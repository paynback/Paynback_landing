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
      <ScrollReveal>
        <AboutHero />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <AboutDetails />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Activities />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Founders />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <HowToWork />
      </ScrollReveal>
    </main>
  );
}
