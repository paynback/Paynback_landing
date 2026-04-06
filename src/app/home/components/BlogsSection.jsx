"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

const BLOG_IMG   = "/images/qr-with-hand.jpg";
const AVATAR_IMG = "/images/cartoon-char.jpg";

const BLOGS = [
  {
    id: 1,
    title: "Quietly Revolutionizing Offline Shopping",
    excerpt:
      "payNback, a groundbreaking new platform designed to elevate the offline shopping experience, made its stealth launch on July 1st...",
    author: "payNback",
    date: "July 1, 2025",
  },
  {
    id: 2,
    title: "Quietly Revolutionizing Offline Shopping",
    excerpt:
      "payNback, a groundbreaking new platform designed to elevate the offline shopping experience, made its stealth launch on July 1st...",
    author: "payNback",
    date: "July 1, 2025",
  },
  {
    id: 3,
    title: "Quietly Revolutionizing Offline Shopping",
    excerpt:
      "payNback, a groundbreaking new platform designed to elevate the offline shopping experience, made its stealth launch on July 1st...",
    author: "payNback",
    date: "July 1, 2025",
  },
];

/* ── Single blog card ─────────────────────────────────────── */
function BlogCard({ title, excerpt, author, date }) {
  return (
    <article className="flex flex-col">

      {/* Image — stays same, all corners curved */}
      <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={BLOG_IMG}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300 hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {/* Featured badge */}
        <div
          className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1"
          style={{
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <Bookmark className="h-3 w-3 text-slate-500" strokeWidth={2} />
          <span className="text-[11px] font-medium text-slate-600">Featured</span>
        </div>
      </div>

      {/* Text content — no card, plain layout below image */}
      <div className="flex flex-1 flex-col gap-2 pt-4">
        <h3 className="text-base font-semibold leading-snug text-slate-800">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
          {excerpt}
        </p>

        {/* Author row */}
        <div className="mt-auto flex items-center gap-2.5 pt-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={AVATAR_IMG}
              alt={author}
              fill
              className="object-cover object-top"
              sizes="32px"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700">{author}</p>
            <p className="text-[11px] text-slate-400">{date}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function BlogsSection() {
  return (
    <section
      className="w-full bg-white font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-20 lg:py-20">

        {/* ── Top row: heading (left) + description + CTA (right) ── */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* Heading */}
          <h2 className="text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.4rem]">
            <span className="text-(--brand-primary)">Meet</span>{" "}
            the fresh{" "}
            <span className="text-(--brand-primary)">Blogs.</span>
          </h2>

          {/* Description + load more */}
          <div className="flex max-w-sm flex-col gap-2">
            <p className="text-sm leading-relaxed text-slate-500">
              PayNback is India&apos;s first in-store shopping support app that connects
              users with nearby merchants offering exclusive discounts
            </p>
            <button
              className="self-start text-sm font-medium transition-opacity hover:opacity-75"
              style={{ color: "var(--brand-primary)" }}
            >
              Load more
            </button>
          </div>
        </div>

        {/* ── 3-col blog grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </div>
    </section>
  );
}
