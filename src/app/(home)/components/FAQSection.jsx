"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "Is my money and personal data secure?",
    answer:
      "Yes. We use advanced encryption, secure authentication, and strict privacy protocols to protect your transactions and personal information at all times.",
  },
  {
    id: 2,
    question: "Are there any hidden charges?",
    answer:
      "No. PayNback is completely transparent with zero hidden charges. You pay only what is shown — no surprises, no fine print.",
  },
  {
    id: 3,
    question: "Can I track my spending and transaction history?",
    answer:
      "Absolutely. The app provides a detailed transaction history and spending tracker so you always know where your money is going.",
  },
  {
    id: 4,
    question: "How do I earn and redeem reward points?",
    answer:
      "You earn points automatically on every qualifying purchase. Points can be redeemed against future purchases or converted to cashback directly within the app.",
  },
  {
    id: 5,
    question: "Is PayNback available across India?",
    answer:
      "Yes. PayNback is available nationwide and is rapidly expanding its network of partnered merchants across every major city in India.",
  },
];

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
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:px-6 sm:pb-20 lg:px-20 lg:pb-32 lg:pt-20">

        {/* Heading */}
        <h2 className="mb-8 text-2xl font-normal leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:mb-10 lg:text-[2.4rem]">
          <span className="text-(--brand-primary)">Frequently</span>{" "}
          asked{" "}
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
