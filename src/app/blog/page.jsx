import BlogHero from "@/app/blog/components/Hero";
import BlogList from "@/app/blog/components/BlogList";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blogs",
  description:
    "Stories behind the screens — insights on design, strategy, local commerce, and how PayNback is changing offline shopping rewards.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <ScrollReveal>
        <BlogHero />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <BlogList />
      </ScrollReveal>
    </main>
  );
}
