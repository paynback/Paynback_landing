import BlogHero from "@/app/blog/components/Hero";
import BlogList from "@/app/blog/components/BlogList";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Blogs - PayNBack",
  description: "Stories Behind the Screens - where design meets strategy and real-world impact.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  );
}