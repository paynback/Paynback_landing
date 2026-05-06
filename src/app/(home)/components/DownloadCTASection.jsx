"use client";

import Image from "next/image";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { cn } from "@/lib/utils";
const QR_IMG = "/images/c06b42d0f732be45d4b2fbaa6d59d55d1aa88ea8.png";
const COIN_SWIRL_IMG = "/images/33b06127ad13c66d1ea9ad4918ed9018d0d01e8a.png";
const BUBBLE_IMG = "/images/e9eaa1ec2bb31dedd4c5ca5b5780dc6bb78f2b36.png";
const STORE_BADGES = "/Icons/app%26play_store_icons_hero.png";

export default function DownloadCTASection() {
  return (
    <section
      className="relative isolate w-full overflow-hidden font-sans text-white flex items-center justify-center"
      style={{
        "--brand-accent": "#99BAEC",
        minHeight: "515px",
        background: "radial-gradient(86.94% 140.47% at -1.42% 134.08%, #99BAEC 0%, #1B519C 34.31%, #080F18 100%)",
        opacity: 1,
      }}
    >

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-6 lg:px-20 lg:py-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* ── Left: copy ── */}
          <div className="flex max-w-lg flex-col gap-5">

            <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-sm text-white/85">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full",
                    "border border-white/20 bg-white/5",
                  )}
                >
                  <Info className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="font-normal tracking-tight">
                  App Available For
                </span>
              </div>
              <StoreBadges />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-normal leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="font-semibold" style={{ color: "var(--brand-accent)" }}>
                Download
              </span>{" "}
              the app now!
            </h2>

            {/* Sub-text */}
            <p className="text-sm leading-relaxed text-white/55">
              Experience seamless online payment only on PayNback app
            </p>
          </div>

          {/* ── Right: coin swirl LEFT + QR card RIGHT ── */}
          <div className="relative flex w-full items-center justify-center sm:w-auto sm:justify-start gap-4 mt-8 sm:mt-0">

            {/* Coin swirl — sits to the left of the QR card */}
            <div className="absolute -z-10 -top-8 left-1/2 -translate-x-[120%] w-[150px] sm:relative sm:z-auto sm:top-auto sm:left-auto sm:translate-x-2 sm:-translate-y-4 sm:w-[clamp(120px,16vw,250px)]">
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                <Image
                  src={COIN_SWIRL_IMG}
                  alt="PayNback Coin Swirl"
                  width={400}
                  height={400}
                  className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(153,186,236,0.25)]"
                />
              </motion.div>
            </div>

            {/* QR card */}
            <div
              className="relative isolate z-10 flex flex-col items-center gap-3 rounded-2xl px-6 pb-5 pt-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.12)",
                width: "clamp(180px, 22vw, 240px)",
              }}
            >
              {/* QR code image */}
              <div className="overflow-hidden rounded-xl bg-white p-2">
                <Image
                  src={QR_IMG}
                  alt="Scan QR code to download PayNback"
                  width={160}
                  height={160}
                  className="h-auto w-[clamp(120px,14vw,160px)]"
                />
              </div>

              {/* Label */}
              <p className="text-xs font-medium tracking-wide text-white/60">
                Scan to Download
              </p>

              {/* Bubble coin */}
              <div
                className="pointer-events-none absolute -z-10 -bottom-6 -right-16 w-[90px] sm:z-30 sm:bottom-2 sm:-right-[46px] sm:w-[82px]"
              >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
                  <Image
                    src={BUBBLE_IMG}
                    alt=""
                    width={100}
                    height={100}
                    className="h-auto w-full object-contain drop-shadow-[0_4px_12px_rgba(153,186,236,0.4)]"
                  />
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
