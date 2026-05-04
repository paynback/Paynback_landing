import ScrollReveal from "@/components/ui/ScrollReveal";
import PartnerHero from "./component/PartnerHero";
import PartnerSection from "./component/PartnerSection";

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <PartnerHero />
      <ScrollReveal delay={80}>
        <PartnerSection />
      </ScrollReveal>
    </main>
  );
}