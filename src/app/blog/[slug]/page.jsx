import BlogDetailClient from "./BlogDetailClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `${slug} - Blogs - PayNback`,
    description: "Read the latest insights from PayNback.",
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
