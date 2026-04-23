"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const PHONE_IMG = "/images/b8485b8034de2d844a4e8c1cb4ee22d60b2b54ae.png";

/* ── Dashed connector line + dot ─────────────────────────── */
function Connector({ side = "right" }) {
  const isRight = side === "right";
  return (
    <div className={`flex items-center gap-1 ${isRight ? "flex-row-reverse" : ""}`}>
      <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/40" />
      <span
        className="h-px"
        style={{
          minWidth: "52px",
          background:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 5px, transparent 5px, transparent 10px)",
        }}
      />
    </div>
  );
}

/* ── Callout label ─────────────────────────────────────────── */
function CalloutLabel({ corner, eyebrow, title, desc }) {
  const isRight = corner.includes("right");
  return (
    <div className={`flex flex-col gap-0.5 ${isRight ? "items-end text-right" : "items-start text-left"}`}>
      {eyebrow && (
        <span className="text-[11px] font-medium tracking-wide text-[#3B82F6] mb-0.5">
          {eyebrow}
        </span>
      )}
      <p className="text-sm font-semibold leading-tight text-white">{title}</p>
      <p className="max-w-[130px] text-xs leading-snug text-white/50">{desc}</p>
    </div>
  );
}

/* ── Mobile Card ───────────────────────────────────────────── */
function MobileCard({ step, title, desc }) {
  return (
    <div
      className="w-full max-w-sm rounded-2xl p-5"
      style={{
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <span className="mb-1 block text-[13px] font-medium tracking-wide text-[#3B82F6]">
        Step {step}
      </span>
      <h3 className="mb-1 text-base font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────── */
export default function AppShowcaseSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate w-full overflow-hidden font-sans text-white"
      style={{ "--brand-accent": "#99BAEC" }}
    >
      {/* Base dark navy */}
      <div className="absolute inset-0 z-0" style={{ background: "#080F18" }} aria-hidden />

      {/* Blue-white radial glow — extended towards center */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: [
            /* bright core shifted down — vertical from -5% → 12% so it sits lower */
            "radial-gradient(ellipse 0% 65% at 72% 12%, #ffffff 0%, #99BAEC 20%, #1B519C 48%, transparent 90%)",
            /* supporting mid-blue fill aligned with new core position */
            "radial-gradient(ellipse 75% 55% at 65% 20%, #1B519C 0%, transparent 85%)",
            /* wide wash shifted down slightly */
            "radial-gradient(ellipse 90% 70% at 80% 8%, rgba(27,81,156,0.45) 0%, transparent 70%)",
          ].join(", "),
        }}
        aria-hidden
      />

      {/*
        ── Half-ellipse arc — precisely 180° at the bottom ──
        Technique: place a full circle whose CENTER sits exactly
        on the bottom edge of the section (bottom:0 + translateY(50%)).
        overflow:hidden on <section> clips the lower half,
        leaving only the perfect top semicircle visible.
      */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 z-0"
        style={{
          width: "65%",
          aspectRatio: "1 / 1",
          transform: "translateX(-50%) translateY(50%)",
          borderRadius: "50%",
          border: "1px solid rgba(153, 186, 236, 0.25)",
        }}
        aria-hidden
      />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 pb-0 sm:px-6 lg:px-20 lg:pt-10">

        {/* Heading */}
        <div className="max-w-5xl">
          <h2 className="text-2xl font-medium leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]">
            Where <span className="font-semibold text-[#1468C5]">financial</span> data
          </h2>

          <div className="mt-4 flex flex-col md:flex-row md:items-start gap-10 md:gap-14">
            <p className="max-w-[320px] text-[13px] leading-[1.7] text-white/70">
              PayNback is India&apos;s first in-store shopping
              support app that connects users with nearby
              merchants offering exclusive discounts
            </p>

            <h2 className="text-2xl font-medium leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] whitespace-nowrap">
              <span className="font-semibold text-[#1468C5]">becomes</span> understanding
            </h2>
          </div>
        </div>

        {/* Mobile Cards (Steps) */}
        <div className="mt-10 flex flex-col items-center gap-4 md:hidden relative z-20">
          <MobileCard step="1" title="Referral link" desc="Get a referral link from a friend." />
          <MobileCard step="2" title="Download" desc="From Play Store & App Store" />
          <MobileCard step="3" title="Sign up" desc="Open the referral link and signup." />
        </div>

        {/* Phone + callouts */}
        <div
          className="relative mt-10 md:mt-6 flex items-end justify-center lg:mt-8"
          style={{ minHeight: "clamp(300px, 50vw, 460px)" }}
        >
          {/* Referral link — mid-left — glass card */}
          <div
            className="absolute bottom-[28%] left-0 hidden items-center gap-2 md:flex lg:left-[3%]"
          >
            <div
              className="rounded-xl px-3 py-2.5"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.13)",
              }}
            >
              <CalloutLabel corner="bottom-left" eyebrow="Step 1" title="Referral link" desc="Get a referral link from a friend." />
            </div>
            <Connector side="left" />
          </div>

          {/* ── Phone image ── */}
          <motion.div
            className="relative z-10 overflow-hidden"
            style={{
              width: "clamp(320px, 42vw, 580px)",
              aspectRatio: "1024 / 1080",
            }}
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 88 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={PHONE_IMG}
              alt="PayNBack app running on an iPhone held in a hand"
              fill
              className="object-contain"
              sizes="(max-width:640px) 320px, (max-width:1024px) 440px, 580px"
              priority
            />
          </motion.div>

          {/* Download — upper-right near arc — glass card */}
          <div className="absolute top-[12%] right-[26%] hidden items-center gap-2 md:flex">
            <Connector side="right" />
            <div
              className="rounded-xl px-3 py-2.5"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.13)",
              }}
            >
              <CalloutLabel corner="top-right" eyebrow="Step 2" title="Download" desc="From Play Store & App Store" />
            </div>
          </div>

          {/* Sign up — mid-right — glass card */}
          <div className="absolute bottom-[28%] right-0 hidden items-center gap-2 md:flex lg:right-[3%]">
            <Connector side="right" />
            <div
              className="rounded-xl px-3 py-2.5"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.13)",
              }}
            >
              <CalloutLabel corner="bottom-right" eyebrow="Step 3" title="Sign up" desc="Open the referral link and signup." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
