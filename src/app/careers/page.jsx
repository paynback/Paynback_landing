import CareersHero from "./components/Hero";
import Team from "./components/Team";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Careers - PayNback",
    description: "Careers - PayNback",
};

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <ScrollReveal>
                <CareersHero />
            </ScrollReveal>

            <ScrollReveal delay={100}>
                <Team />
            </ScrollReveal>


        </main>
    );
}