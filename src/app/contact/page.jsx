import ContactHero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Contact Us - PayNBack",
    description: "Contact Us - PayNBack",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactHero />
            <ContactSection />
            <Footer />
        </main>
    );
}