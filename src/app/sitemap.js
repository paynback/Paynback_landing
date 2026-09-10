import { fetchPublishedBlogs } from "@/lib/blogService";
import { fetchPublicCareers } from "@/lib/careerService";
import { absoluteUrl } from "@/lib/seo";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/blog",
  "/careers",
  "/msme",
  "/partners",
  "/jammy",
  "/contact",
  "/terms",
  "/privacy",
  "/merchant-terms",
];

export default async function sitemap() {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" || path === "/careers" ? 0.8 : 0.7,
  }));

  let blogEntries = [];
  let careerEntries = [];

  try {
    const blogs = await fetchPublishedBlogs();
    blogEntries = (Array.isArray(blogs) ? blogs : [])
      .filter((b) => b?.slug)
      .map((blog) => ({
        url: absoluteUrl(`/blog/${blog.slug}`),
        lastModified: blog.updated_at || blog.published_at || blog.display_date || now,
        changeFrequency: "monthly",
        priority: 0.6,
      }));
  } catch {
    blogEntries = [];
  }

  try {
    const careers = await fetchPublicCareers();
    careerEntries = (Array.isArray(careers) ? careers : [])
      .filter((c) => c?.slug)
      .map((job) => ({
        url: absoluteUrl(`/careers/${job.slug}`),
        lastModified: job.updated_at || job.created_at || now,
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  } catch {
    careerEntries = [];
  }

  return [...staticEntries, ...blogEntries, ...careerEntries];
}
