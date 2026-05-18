import ScrollReveal from "@/components/ui/ScrollReveal";
import PartnerHero from "./component/PartnerHero";
import PartnerSection from "./component/PartnerSection";
import BlurReveal from "@/components/sections/BlurReveal";

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal> {/**scroll reveal */} 
        <PartnerHero />
      </ScrollReveal>
      <BlurReveal> {/**blur reveal */} 
        <PartnerSection />
      </BlurReveal>
    </main>
  );
}