"use client";

import {
  Users,
  Gift,
  ShoppingBag,
  Tag,
  TrendingUp,
  ChartLine
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Users,
    title: "Community Building",
    description:
      "Become part of a collaborative business community. PayNback brings together merchants—partners and even competitors—to support each other, share opportunities, and grow collectively.",
  },
  {
    icon: Gift,
    title: "Experiential Rewards",
    description:
      "Rewards go beyond savings and cashback. Designed to support business growth, they drive promotions, enhance visibility, and increase customer footfall.",
  },
  {
    icon: ChartLine,
    title: "Business Growth Support",
    description:
      "Empowering businesses with data-driven promotions, improved discoverability, and consistent customer engagement to accelerate growth.",
  },
  {
    icon: ShoppingBag,
    title: "Effortless Shopping Experience",
    description:
      "Shop smarter with a user-friendly platform that makes discovering deals, navigating stores, and connecting with merchants quick and effortless.",
  },
  {
    icon: Tag,
    title: "Exclusive Discounts & Rewards",
    description:
      "Curated offers and exclusive discounts from nearby businesses—delivering relevant savings and enhanced shopping value.",
  },
  {
    icon: TrendingUp,
    title: "Engagement Driven Rewards",
    description:
      "Experience a dynamic reward system that keeps users engaged. Progress tracking and interactive elements encourage continued participation, boosting loyalty and repeat visits.",
  },
];

export default function   AmazingFeaturesSection() {
  return (
    <section
      className="w-full bg-white font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <motion.div
        className="mx-auto max-w-7xl px-6 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20"
        initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section heading */}
        <h2 className="pb-10">
          <span className="text-(--brand-primary)">What</span>{" "}
          <span className="">Makes</span>{" "}
          <span className="text-(--brand-primary)">PayNback</span>{" "}
          <br/>
           Different?
        </h2>

        {/* Feature grid — 1 col on mobile, 3 cols on md+ */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-16 md:gap-y-12 lg:gap-x-20 lg:gap-y-14">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              {/* Icon box */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
                <Icon
                  className="h-5 w-5 text-(--brand-primary)"
                  strokeWidth={1.5}
                />
              </div>

              {/* Feature title */}
              <h3>
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
