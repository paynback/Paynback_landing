import dynamic from "next/dynamic";
import CareersHero from "./components/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { buildMetadata } from "@/lib/seo";

const Team = dynamic(() => import("./components/Team"), {
  loading: () => (
    <SectionSkeleton
      className="mx-auto min-h-[480px] max-w-7xl"
      ariaLabel="Loading team"
    />
  ),
});

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the PayNback team. Explore open roles and help build India's first in-store shopping rewards experience.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <CareersHero />
      </ScrollReveal>
      <Team />
    </main>
  );
}
