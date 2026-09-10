"use client";

import dynamic from "next/dynamic";
import MsmeHero from "@/app/msme/components/MsmeHero";
import MsmeLocationProvider from "@/app/msme/components/MsmeLocationProvider";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import SectionSkeleton from "@/components/ui/SectionSkeleton";

const MsmeForm = dynamic(() => import("@/app/msme/components/MsmeForm"), {
  loading: () => <SectionSkeleton className="min-h-[520px]" ariaLabel="Loading merchant form" />,
});

const LocationAccessPrompt = dynamic(
  () => import("@/app/msme/components/LocationAccessPrompt"),
  { loading: () => <SectionSkeleton className="min-h-[120px]" ariaLabel="Loading location prompt" /> },
);

const ShopsCarousel = dynamic(() => import("@/app/msme/components/ShopsCarousel"), {
  loading: () => <SectionSkeleton className="min-h-[280px]" ariaLabel="Loading nearby shops" />,
});

export default function MsmePageClient() {
  return (
    <MsmeLocationProvider>
      <main className="flex min-h-screen flex-col bg-gray-50">
        <ScrollReveal>
          <MsmeHero />
        </ScrollReveal>

        <BlurReveal>
          <MsmeForm />
        </BlurReveal>

        <ScrollReveal delay={100}>
          <LocationAccessPrompt />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ShopsCarousel />
        </ScrollReveal>
      </main>
    </MsmeLocationProvider>
  );
}
