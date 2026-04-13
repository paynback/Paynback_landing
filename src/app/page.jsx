import { WhyChoose } from "@/components/sections/ChoseUs";
import { Hero } from "@/components/sections/Hero";
import SmarterShopping from "@/components/sections/SmarterShopping";
import { HowItWorks } from "@/components/sections/StepsJoin";
import DownloadApp from "@/components/sections/DownloadAppFinal";
import Activities from "@/components/sections/Activities";
import ScrollReveal from "@/components/ui/ScrollReveal";

/** Marketing landing at `/` — distinct from `/home`. */
export default function LandingPage() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal delay={80}>
        <SmarterShopping />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <WhyChoose />
      </ScrollReveal>
      <ScrollReveal delay={160}>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <DownloadApp />
      </ScrollReveal>
      <ScrollReveal delay={240}>
        <Activities />
      </ScrollReveal>
    </>
  );
}

