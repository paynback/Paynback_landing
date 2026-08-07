"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HOME_FAQS } from "@/data/homeFaqs";

const FAQS = HOME_FAQS;

/* ── Single accordion item ────────────────────────────────── */
function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="overflow-hidden rounded-2xl bg-white transition-shadow duration-200"
      style={{ border: "1px solid #EBEBEB" }}
    >
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-8 text-sm font-semibold text-slate-800 sm:text-base">
          {question}
        </span>
        <span className="shrink-0 text-slate-400">
          {isOpen ? (
            <Minus className="h-4 w-4" strokeWidth={2} />
          ) : (
            <Plus className="h-4 w-4" strokeWidth={2} />
          )}
        </span>
      </button>

      {/* Animated answer panel */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function FAQSection() {
  const [openId, setOpenId] = useState(1); // first item open by default

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className="w-full bg-[#F2F2F2] font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-14 sm:px-6 sm:pb-20 lg:px-20 lg:pb-32 lg:pt-30">

        {/* Heading */}
        <h2 className="mb-8 text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:mb-10 lg:text-[2.4rem]">
          <span className="text-(--brand-primary)">Frequently</span>{" "}
          Asked{" "}
          <span className="text-(--brand-primary)">Questions</span>
        </h2>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
