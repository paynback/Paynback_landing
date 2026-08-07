import BlogDetailClient from "./BlogDetailClient";
import JsonLd from "@/components/seo/JsonLd";
import { fetchPublishedBlogBySlug } from "@/lib/blogService";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const blog = await fetchPublishedBlogBySlug(slug);
    if (blog) {
      return buildMetadata({
        title: blog.title || "Blog",
        description:
          blog.excerpt ||
          blog.meta_description ||
          "Read the latest insights from PayNback.",
        path: `/blog/${slug}`,
        image: blog.cover_image || undefined,
        type: "article",
      });
    }
  } catch {
    // fall through
  }

  return buildMetadata({
    title: "Blog article",
    description: "Read the latest insights from PayNback.",
    path: `/blog/${slug}`,
    type: "article",
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  let schemas = [];

  try {
    const blog = await fetchPublishedBlogBySlug(slug);
    if (blog) {
      schemas = [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blog" },
          { name: blog.title || slug, path: `/blog/${slug}` },
        ]),
        articleJsonLd({
          title: blog.title || slug,
          description: blog.excerpt || blog.meta_description || "",
          path: `/blog/${slug}`,
          image: blog.cover_image,
          datePublished: blog.published_at || blog.display_date,
          dateModified: blog.updated_at || blog.published_at || blog.display_date,
        }),
      ];
    }
  } catch {
    schemas = [];
  }

  return (
    <>
      <JsonLd data={schemas} />
      <BlogDetailClient slug={slug} />
    </>
  );
}
