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

export default function BlogsSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const rows = await fetchPublishedBlogs({ limit: 3 });
        if (!active) return;
        setBlogs(Array.isArray(rows) ? rows.map(mapBlogRow) : []);
      } catch {
        if (active) setBlogs([]);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  if (!loading && blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white font-sans" style={{ "--brand-primary": "#0964BC" }}>
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-6 lg:px-20 lg:py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[2.4rem]">
            <span className="text-(--brand-primary)">Meet</span> the fresh{" "}
            <span className="text-(--brand-primary)">Blogs.</span>
          </h2>
        </div>

        {loading ? (
          <p className="text-sm text-slate-500">Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
