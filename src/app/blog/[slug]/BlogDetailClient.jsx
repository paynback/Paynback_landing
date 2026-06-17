"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchPublishedBlogBySlug } from "@/lib/blogService";

function renderContent(content) {
  if (!content) return null;
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return (
      <div
        className="prose prose-slate max-w-none text-[15px] leading-[1.8] text-gray-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return content.split(/\n\s*\n/).map((block, index) => (
    <p key={index} className="text-gray-600 text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-5">
      {block.trim()}
    </p>
  ));
}

export default function BlogDetailPage({ slug }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const row = await fetchPublishedBlogBySlug(slug);
        if (!active) return;
        if (!row) {
          setNotFound(true);
        } else {
          setBlog(row);
        }
      } catch {
        if (active) setNotFound(true);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-28 sm:pt-32 pb-24">
        <div className="container mx-auto max-w-5xl px-6 text-slate-500">Loading article...</div>
      </main>
    );
  }

  if (notFound || !blog) {
    return (
      <main className="min-h-screen bg-white pt-28 sm:pt-32 pb-24">
        <div className="container mx-auto max-w-5xl px-6">
          <p className="text-slate-600 mb-4">This blog post could not be found.</p>
          <Link href="/blog" className="text-[#0964BC] font-medium hover:underline">
            Back to blogs
          </Link>
        </div>
      </main>
    );
  }

  const cover = blog.cover_image || "";
  const isExternal = /^https?:\/\//i.test(cover);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 pt-28 sm:pt-32 lg:pt-36 pb-12">
        <div className="container mx-auto max-w-5xl px-6 sm:px-6 md:px-8">
          {cover ? (
            <div className="mb-8 overflow-hidden rounded-[24px] shadow-sm">
              {isExternal ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cover} alt={blog.title} className="h-[320px] w-full object-cover md:h-[420px]" />
              ) : (
                <img src={cover} alt={blog.title} className="h-[320px] w-full object-cover md:h-[420px]" />
              )}
            </div>
          ) : (
            <div className="mb-8 flex h-[220px] items-center justify-center rounded-[24px] bg-slate-100 text-sm text-slate-400 md:h-[280px]">
              No cover image
            </div>
          )}

          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {blog.display_date ? <span>{blog.display_date}</span> : null}
            {blog.author_name ? <span>By {blog.author_name}</span> : null}
            {blog.is_new ? (
              <span className="rounded-full bg-[#CB7C91] px-3 py-1 text-xs font-medium text-white">
                New
              </span>
            ) : null}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{blog.title}</h1>

          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-[1.8] font-normal mb-10 max-w-4xl">
            {blog.excerpt}
          </p>

          <article className="mb-20">{renderContent(blog.content)}</article>
        </div>
      </div>
    </main>
  );
}
