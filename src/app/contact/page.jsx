import ContactHero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Contact Us - PayNback",
    description: "Contact Us - PayNback",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ScrollReveal delay={80}>
                <ContactSection />
            </ScrollReveal>
        </main>
    );
}