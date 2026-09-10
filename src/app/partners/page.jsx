import ScrollReveal from "@/components/ui/ScrollReveal";
import PartnerHero from "./component/PartnerHero";
import PartnerSection from "./component/PartnerSection";
import BlurReveal from "@/components/sections/BlurReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Partners",
  description:
    "Partner with PayNback for profit — growth-driven programs with market exposure, training, and company-supported merchant pitching.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <PartnerHero />
      </ScrollReveal>
      <BlurReveal>
        <PartnerSection />
      </BlurReveal>
    </main>
  );
}
