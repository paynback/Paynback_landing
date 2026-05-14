"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PHONE_IMG = "/images/b8485b8034de2d844a4e8c1cb4ee22d60b2b54ae.png";



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
  return (
    <section
      className="relative isolate w-full font-sans text-white"
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
        overflow-hidden on the wrapper clips the lower half,
        leaving only the perfect top semicircle visible.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none md:hidden">
        <div
          className="absolute left-1/2 bottom-0"
          style={{
            width: "130%",
            aspectRatio: "1 / 1",
            transform: "translateX(-50%) translateY(50%)",
            borderRadius: "50%",
            border: "1px solid rgba(153, 186, 236, 0.25)",
          }}
          aria-hidden
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-6 pb-0 sm:px-6 lg:px-20 lg:pt-10">

        {/* Heading */}
        <div className="max-w-5xl">
          <h2 className="text-2xl font-medium leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px]">
            Turning <span className="font-semibold text-[#1468C5]">Transactions</span> 
          </h2>

          <div className="mt-1 sm:mt-2 md:mt-4 flex flex-col-reverse md:flex-row md:items-start gap-6 sm:gap-8 md:gap-14">
            <p className="max-w-[320px] text-[13px] leading-[1.7] text-white/70">
             With PayNback, every purchase boosts engagement, improves operations, and adds value for both merchants and users.
            </p>

            <h2 className="text-2xl font-medium leading-[1.1] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] md:whitespace-nowrap">
              <span className="font-semibold text-[#1468C5]">into Growth</span>{" "}
              <span className="block md:inline mt-1 md:mt-0">Opportunities</span>
            </h2>
          </div>
        </div>

        {/* Mobile Cards (Steps) */}
        <div className="mt-10 flex flex-col items-center gap-4 md:hidden relative z-20">
          <MobileCard step="1" title="Referral link" desc="Get a referral link from a friend." />
          <MobileCard step="2" title="Download" desc="From Play Store & App Store" />
          <MobileCard step="3" title="Sign up" desc="Open the referral link and sign up." />
        </div>

        {/* Phone + background graphics */}
        <div
          className="relative mt-10 md:mt-6 flex items-end justify-center lg:mt-8"
          style={{ minHeight: "clamp(300px, 50vw, 460px)" }}
        >
          {/* ── Desktop background image (Arc + Cards) ── */}
          <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ zIndex: 0 }}>
            <Image
              src="/images/half-circle-card.png"
              alt="App flow steps background"
              fill
              className="object-contain object-bottom scale-[1.30] origin-bottom"
              priority
            />
          </div>

          {/* ── Phone image ── */}
          <motion.div
            className="relative z-50"
            style={{
              width: "clamp(320px, 42vw, 580px)",
              aspectRatio: "1024 / 1080",
            }}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src={PHONE_IMG}
              alt="PayNback app running on an iPhone held in a hand"
              fill
              className="object-contain"
              sizes="(max-width:640px) 320px, (max-width:1024px) 440px, 580px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
