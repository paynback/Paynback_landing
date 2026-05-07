import BlogHero from "@/app/blog/components/Hero";
import BlogList from "@/app/blog/components/BlogList";
import ScrollReveal from "@/components/ui/ScrollReveal";
export const metadata = {
  title: "Blogs - PayNback",
  description: "Stories Behind the Screens - where design meets strategy and real-world impact.",
};

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