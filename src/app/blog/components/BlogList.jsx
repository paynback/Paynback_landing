"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

// Mock Data matching the design references
const BLOG_IMG = "/images/qr-with-hand.jpg";
const AVATAR_IMG = "/images/cartoon-char.jpg";

const MOCK_BLOGS = Array(6).fill({
  title: "Quietly Revolutionizing Offline Shopping",
  excerpt:
    "payNback, a groundbreaking new platform designed to elevate the offline shopping experience, made its stealth launch on July 1st...",
  author: "payNback Team",
  date: "July 1, 2025",
}).map((blog, idx) => ({ ...blog, id: idx + 1 }));

/* ── Single blog card ─────────────────────────────────────── */
function BlogCard({ title, excerpt, author, date }) {
  return (
    <article className="flex flex-col">
      {/* Image — all corners curved */}
      <div className="relative h-56 sm:h-60 lg:h-52 w-full overflow-hidden rounded-[20px] bg-slate-100">
        <Image
          src={BLOG_IMG}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {/* Featured badge */}
        <div
          className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5"
          style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <Bookmark className="h-[14px] w-[14px] text-slate-500" strokeWidth={2} />
          <span className="text-xs font-medium text-slate-600">Featured</span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 flex-col gap-2.5 pt-5">
        <h3 className="text-[20px] font-semibold leading-snug text-slate-900 font-['Poppins']">
          {title}
        </h3>
        <p className="line-clamp-3 text-[14px] leading-relaxed text-slate-500 font-['Poppins']">
          {excerpt}
        </p>

        {/* Author row */}
        <div className="mt-auto flex items-center gap-3 pt-4">
          <div className="relative h-9 w-9 overflow-hidden rounded-full">
            <Image
              src={AVATAR_IMG}
              alt={author}
              fill
              className="object-cover object-top"
              sizes="36px"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[13px] font-bold text-slate-800 font-['Poppins']">{author}</p>
            <p className="text-[12px] text-slate-500 font-['Poppins']">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function BlogList() {
  return (
    <section className="w-full bg-white font-['Poppins'] pb-32 lg:pb-48" style={{ "--brand-primary": "#0964BC" }}>
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-10 lg:px-18 lg:py-20">
        
        {/* ── Top row: heading + description ── */}
        <div className="mb-14 flex flex-col items-start gap-3">
          <h2 className="text-[48px] font-medium leading-[100%] tracking-[-0.56px] text-slate-900">
            <span style={{ color: "var(--brand-primary)" }}>Meet</span>{" "}
            the fresh{" "}
            <span style={{ color: "var(--brand-primary)" }}>Blogs.</span>
          </h2>
          <p className="text-[17px] font-normal leading-relaxed text-slate-700">
            Latest updates, insights, and articles in one place.
          </p>
        </div>

        {/* ── 3-col blog grid ── */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_BLOGS.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </div>
    </section>
  );
}
