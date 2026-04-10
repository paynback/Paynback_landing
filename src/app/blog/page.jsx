import BlogHero from "@/app/blog/components/Hero";
import BlogList from "@/app/blog/components/BlogList";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
export const metadata = {
  title: "Blogs - PayNBack",
  description: "Stories Behind the Screens - where design meets strategy and real-world impact.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <ScrollReveal delay={80}>
        <BlogList />
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}