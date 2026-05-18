import ContactHero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";

export const metadata = {
    title: "Contact Us - PayNback",
    description: "Contact Us - PayNback",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ScrollReveal> {/**scroll reveal */} 
                <ContactHero />
            </ScrollReveal>
            <BlurReveal> {/**blur reveal */} 
                <ContactSection />
            </BlurReveal>
        </main>
    );
}