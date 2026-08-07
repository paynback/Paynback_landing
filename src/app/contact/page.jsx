import ContactHero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with PayNback for partnerships, support, or general inquiries. We're here to help shoppers and merchants.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <ContactHero />
      </ScrollReveal>
      <BlurReveal>
        <ContactSection />
      </BlurReveal>
    </main>
  );
}
