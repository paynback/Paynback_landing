import dynamic from "next/dynamic";
import ContactHero from "./components/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import { buildMetadata } from "@/lib/seo";

const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => (
    <SectionSkeleton className="min-h-[560px]" ariaLabel="Loading contact form" />
  ),
});

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
