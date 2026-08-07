import JammyHero from "./components/JammyHero";
import JammyStory from "./components/JammyStory";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Meet Jammy",
  description:
    "Meet Jammy, the PayNback mascot — bringing effortless rewards and a friendly face to offline shopping.",
  path: "/jammy",
});

export default function JammyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <ScrollReveal>
        <JammyHero />
      </ScrollReveal>
      <BlurReveal>
        <JammyStory />
      </BlurReveal>
    </main>
  );
}
