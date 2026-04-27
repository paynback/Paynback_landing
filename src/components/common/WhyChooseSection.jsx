"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SALE_IMG = "/images/09b3196ae2b68dd5cfe0c65d459c42330889ebb7.png";

const REASONS = [
  {
    id: 1,
    title: "Exclusive Discounts",
    desc: "PayNback offers exclusive discounts, limited-time deals, and special coupons to help users maximize savings and get the best value on every purchase.",
  },
  {
    id: 2,
    title: "Rewarding Points System",
    desc: "Earn reward points on every purchase and redeem them for exciting benefits, making every shopping experience more rewarding and worthwhile.",
  },
  {
    id: 3,
    title: "Modern and User-Friendly Experience",
    desc: "Navigate effortlessly through a sleek, intuitive interface designed to make discovering deals and managing rewards simple and enjoyable.",
  },
  {
    id: 4,
    title: "Secure and Reliable Transactions",
    desc: "Shop with confidence knowing every transaction is protected by advanced security measures, ensuring your data and payments are always safe.",
  },
  {
    id: 5,
    title: "Personalized Recommendations",
    desc: "Receive tailored offers and product suggestions based on your preferences and shopping history, helping you find the best deals effortlessly.",
  },
];

export default function WhyChooseSection() {
  const [activeId, setActiveId] = useState(1);
  const active = REASONS.find((r) => r.id === activeId);

  return (
    <section
      className="w-full bg-[#F2F2F2] font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <motion.div
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-20 lg:py-20"
        initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ── Heading ── */}
        <h2 className="mb-8 text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:mb-10 lg:text-[2.5rem]">
          <span className="text-(--brand-primary)">Why</span>{" "}
          Choose{" "}
          <span className="text-(--brand-primary)">PayNback?</span>
        </h2>

        {/* ── 3-col grid ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">

          {/* Col 1 — Numbered list */}
          <div className="flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-sm">
            {REASONS.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveId(r.id)}
                className={[
                  "w-full rounded-xl px-4 py-3.5 text-left transition-all duration-200",
                  activeId === r.id
                    ? "bg-(--brand-primary) text-white shadow-md"
                    : "text-slate-800 hover:bg-slate-50",
                ].join(" ")}
              >
                <span
                  className={[
                    "text-sm font-semibold leading-snug",
                    activeId === r.id ? "text-white" : "text-slate-800",
                  ].join(" ")}
                >
                  {r.id}.&nbsp; {r.title}
                </span>
              </button>
            ))}
          </div>

          {/* Col 2 — Description card */}
          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm">
            {/* Animated description — key forces re-mount on change */}
            <p
              key={activeId}
              className="animate-[fadeIn_0.25s_ease] text-sm leading-relaxed text-slate-600"
            >
              {active.desc}
            </p>

            {/* Services footer line */}
            <div className="mt-8 flex items-center gap-3 pt-4">
              <span className="shrink-0 text-xs font-medium text-slate-400">
                Services
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </div>

          {/* Col 3 — Image card */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ minHeight: "clamp(220px, 40vw, 340px)", background: "#1565D8" }}
          >
            <Image
              src={SALE_IMG}
              alt="Woman in blue outfit holding a SALE badge, representing PayNback exclusive discounts"
              fill
              className="object-cover object-center"
              sizes="(max-width:768px) 100vw, 33vw"
            />
          </div>
        </div>
      </motion.div>

      {/* Keyframe for description fade */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
      `}</style>
    </section>
  );
}
