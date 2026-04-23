import MsmeHero from "@/app/msme/components/MsmeHero";
import MsmeForm from "@/app/msme/components/MsmeForm";
import ShopsCarousel from "@/app/msme/components/ShopsCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MsmePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollReveal>
        <MsmeHero />
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <MsmeForm />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ShopsCarousel />
      </ScrollReveal>
    </main>
  );
}
