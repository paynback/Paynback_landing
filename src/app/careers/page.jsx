import CareersHero from "./components/Hero";
import Team from "./components/Team";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Join the PayNback team. Explore open roles and help build India's first in-store shopping rewards experience.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <CareersHero />
      </ScrollReveal>
      <Team />
    </main>
  );
}
