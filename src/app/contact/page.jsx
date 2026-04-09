import ContactHero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = {
    title: "Contact Us - PayNBack",
    description: "Contact Us - PayNBack",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ScrollReveal>
                <ContactHero />
            </ScrollReveal>
            <ScrollReveal delay={80}>
                <ContactSection />
            </ScrollReveal>
            <ScrollReveal delay={120}>
                <Footer />
            </ScrollReveal>
        </main>
    );
}