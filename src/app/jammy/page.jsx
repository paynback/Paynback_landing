import JammyHero from "./components/JammyHero";
import JammyStory from "./components/JammyStory";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlurReveal from "@/components/sections/BlurReveal";

export const metadata = {
  title: "Meet Jammy - PayNback",
  description: "Learn more about Jammy, the PayNback mascot, bringing effortless rewards.",
};

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
