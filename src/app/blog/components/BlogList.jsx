"use client";

import BlogCard from "@/components/ui/BlogCard";

// Mock Data matching the design references
const MOCK_BLOGS = [
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
  {
    id: 4,
    title: "Maximize Your Savings: Pro Tips to Earn More Points with PayNback",
    excerpt: "From referral bonuses to multi-partner point redemption and personalized offers — here are practical ways to save more money and unlock exciting rewards while shopping offline.",
    image: "/images/blog-image.png"
  },
  {
    id: 5,
    title: "The Future of Offline Retail: How PayNback Empowers Small Businesses",
    excerpt: "In a world dominated by big e-commerce players, PayNback levels the playing field by helping local merchants attract loyal customers through cashback, loyalty programs, and easy digital tools.",
    image: "/images/blog-image.png"
  },
  {
    id: 6,
    title: "PayNback’s Stealth Launch: What Happened on July 1st & What’s Next",
    excerpt: "A quiet revolution began in Kochi. One year on, explore the journey so far, user success stories, and exciting upcoming features that will further enhance your offline shopping experience.",
    image: "/images/blog-image.png"
  }
];


/* ── Section ──────────────────────────────────────────────── */
export default function BlogList() {
    return (
        <section className="w-full bg-white pb-32 lg:pb-48" style={{ "--brand-primary": "#0964BC" }}>
            <div className="mx-auto max-w-7xl px-8 py-16 sm:px-10 lg:px-18 lg:py-20">

                {/* ── Top row: heading + description ── */}
                <div className="mb-14 flex flex-col items-start gap-3">
                    <h2 className="text-[48px] font-medium leading-[100%] tracking-[-0.56px] text-slate-900">
                        <span style={{ color: "var(--brand-primary)" }}>Meet </span>{""}
                        the fresh{" "}
                        <span style={{ color: "var(--brand-primary)" }}> Blogs.</span>
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
