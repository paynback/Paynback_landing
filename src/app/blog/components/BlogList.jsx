"use client";

import BlogCard from "@/components/ui/BlogCard";
import { fetchPublishedBlogs } from "@/lib/blogService";
import { useEffect, useState } from "react";

// Blog list uses API only. Archived FALLBACK_BLOGS: see blogService.js

function mapBlogRow(row) {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    cover_image: row.cover_image || "",
    display_date: row.display_date || "",
    is_new: row.is_new,
    is_featured: row.is_featured,
  };
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const rows = await fetchPublishedBlogs();
        if (!active) return;
        setBlogs(Array.isArray(rows) ? rows.map(mapBlogRow) : []);
        setError(false);
      } catch {
        if (active) {
          setBlogs([]);
          setError(true);
        }
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="w-full bg-white pb-32 lg:pb-48" style={{ "--brand-primary": "#0964BC" }}>
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-10 lg:px-18 lg:py-20">
        <div className="mb-14 flex flex-col items-start gap-3">
          <h2 className="text-[48px] font-medium leading-[100%] tracking-[-0.56px] text-slate-900">
            <span style={{ color: "var(--brand-primary)" }}>Meet </span>
            the fresh <span style={{ color: "var(--brand-primary)" }}> Blogs.</span>
          </h2>
          <p className="text-[17px] font-normal leading-relaxed text-slate-700">
            Latest updates, insights, and articles in one place.
          </p>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500">Loading blogs...</p>
        ) : error ? (
          <p className="text-sm text-slate-500">
            Unable to load blogs right now. Please try again later.
          </p>
        ) : blogs.length === 0 ? (
          <p className="text-sm text-slate-500">No blog posts published yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
