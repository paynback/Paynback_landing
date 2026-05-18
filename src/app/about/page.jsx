import AboutHero from "@/app/about/components/Hero";
import AboutDetails from "@/app/about/components/AboutDetails";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import Founders from "@/app/about/components/Founders";
import HowToWork from "@/app/about/components/HowToWork";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import Activities from "@/components/sections/Activities";

export const metadata = {
  title: "About Us - PayNback",
  description: "Vision & Mission of PayNback",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal> {/**scroll reveal */} 
        <AboutHero />
      </ScrollReveal>
      <BlurReveal> {/**blur reveal */} 
        <AboutDetails />
      </BlurReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */} 
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */} 
        <Activities />
      </ScrollReveal>
      <ScrollReveal delay={100}> {/**scroll reveal */} 
        <Founders />
      </ScrollReveal>
      <BlurReveal> {/**blur reveal */} 
        <HowToWork />
      </BlurReveal>
    </main>
  );
}
