"use client";

import BlogCard from "@/components/ui/BlogCard";
import { motion } from "framer-motion";

const BLOGS = [
{
    id: 1,
    title: "How PayNback is Turning Everyday UPI Payments into Real Rewards",
    excerpt: "Discover how PayNback transforms simple offline purchases at your local kirana store, supermarket, or restaurant into cashback and loyalty points — making every UPI scan more rewarding than ever.",
    image: "/images/blog-image.png"
  },
  {
    id: 2,
    title: "Why Local Merchants Love PayNback: Real Stories from Kochi",
    excerpt: "From increased footfall to higher repeat purchases — see how supermarket owners, clothing stores, and food outlets in Kerala are growing their business with PayNback’s loyalty tools and cashback offers.",
    image: "/images/blog-image.png"
  },
  {
    id: 3,
    title: "Bridging Online Convenience with Offline Trust: The PayNback Edge",
    excerpt: "PayNback brings the best of both worlds — instant digital deals and rewards for your favourite brick-and-mortar stores. Shop locally, save smartly, and enjoy a seamless experience.",
    image: "/images/blog-image.png"
  },
];


/* ── Section ──────────────────────────────────────────────── */
export default function BlogsSection() {
  return (
    <section
      className="w-full bg-white font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <motion.div
        className="mx-auto max-w-7xl px-6 py-12 sm:px-6 lg:px-20 lg:py-20"
        initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ── Top row: heading (left) + description + CTA (right) ── */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

          {/* Heading */}
          <h2 className="text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-[2.4rem]">
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

      </motion.div>
    </section>
  );
}
