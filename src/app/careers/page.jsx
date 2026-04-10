import CareersHero from "./components/Hero";
import Team from "./components/Team";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Careers - PayNBack",
    description: "Careers - PayNBack",
};

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <ScrollReveal>
                <CareersHero />
            </ScrollReveal>
            
            <ScrollReveal delay={50}>
                <Team />
            </ScrollReveal>
         
            <ScrollReveal delay={120}>
                <Footer />
            </ScrollReveal>
        </main>
    );
}