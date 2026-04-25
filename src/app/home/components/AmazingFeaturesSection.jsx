"use client";

import {
  Users,
  Gift,
  Gamepad2,
  ShoppingBag,
  Tag,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Users,
    title: "Community Building",
    description:
      "The app fosters a sense of community by encouraging collaboration and friendly competitions.",
  },
  {
    icon: Gift,
    title: "Experiential Rewards",
    description:
      "Rewards are not just discounts or products, but experiences that connect users to their chosen cause.",
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    description:
      "The constellations, theme and progress tracking create a fun & engaging way to earn rewards.",
  },
  {
    icon: ShoppingBag,
    title: "Effortless Shopping Experience",
    description:
      "Enjoy a user-friendly platform with seamless navigation, instant offer notifications, and direct merchant support.",
  },
  {
    icon: Tag,
    title: "Exclusive Discounts & Rewards",
    description:
      "Unlock savings with PayNback's exclusive deals and reward points for discounts on every purchase.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Support",
    description:
      "Empower your business with PayNback's loan facilitation and growth support for enhanced success and shopping experiences.",
  },
];

export default function AmazingFeaturesSection() {
  return (
    <section
      className="w-full bg-white font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20"
        initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section heading */}
        <h2>
          Our{" "}
          <span className="text-(--brand-primary)">amazing</span>{" "}
          features
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
