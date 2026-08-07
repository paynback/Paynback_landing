import AboutHero from "@/app/about/components/Hero";
import AboutDetails from "@/app/about/components/AboutDetails";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import Founders from "@/app/about/components/Founders";
import HowToWork from "@/app/about/components/HowToWork";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import Activities from "@/components/sections/Activities";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about PayNback's vision and mission — India's first in-store shopping support app connecting shoppers and local merchants with rewards.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <AboutHero />
      </ScrollReveal>
      <BlurReveal>
        <AboutDetails />
      </BlurReveal>
      <ScrollReveal delay={100}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Activities />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Founders />
      </ScrollReveal>
      <BlurReveal>
        <HowToWork />
      </BlurReveal>
    </main>
  );
}
