import dynamic from "next/dynamic";
import AboutHero from "@/app/about/components/Hero";
import AboutDetails from "@/app/about/components/AboutDetails";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { buildMetadata } from "@/lib/seo";

const WhyChooseSection = dynamic(
  () => import("@/components/sections/WhyChooseSection"),
  { loading: () => <SectionSkeleton className="min-h-[400px]" ariaLabel="Loading why choose" /> },
);

const Activities = dynamic(
  () => import("@/components/sections/Activities"),
  { loading: () => <SectionSkeleton className="min-h-[360px]" ariaLabel="Loading activities" /> },
);

const Founders = dynamic(
  () => import("@/app/about/components/Founders"),
  { loading: () => <SectionSkeleton className="min-h-[480px]" ariaLabel="Loading founders" /> },
);

const HowToWork = dynamic(
  () => import("@/app/about/components/HowToWork"),
  { loading: () => <SectionSkeleton className="min-h-[360px]" ariaLabel="Loading how it works" /> },
);

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
