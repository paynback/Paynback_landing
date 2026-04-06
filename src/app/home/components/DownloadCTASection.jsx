"use client";

import Image from "next/image";
import { Info } from "lucide-react";

const QR_IMG         = "/images/c06b42d0f732be45d4b2fbaa6d59d55d1aa88ea8.png";
const COIN_SWIRL_IMG = "/images/33b06127ad13c66d1ea9ad4918ed9018d0d01e8a.png";
const BUBBLE_IMG     = "/images/e9eaa1ec2bb31dedd4c5ca5b5780dc6bb78f2b36.png";
const STORE_BADGES   = "/Icons/app%26play_store_icons_hero.png";

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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-20 lg:py-14">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* ── Left: copy ── */}
          <div className="flex max-w-lg flex-col gap-5">

            {/* "App Available For" badge row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm text-white/70">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <Info className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-normal tracking-tight">App Available For</span>
              </div>

              {/* Combined store badges image */}
              <div
                className="flex items-center rounded-full px-3 py-1"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <Image
                  src={STORE_BADGES}
                  alt="Get it on Google Play and the App Store"
                  width={120}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>

            {/* Heading */}
            <h2 className="whitespace-nowrap text-3xl font-normal leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="font-semibold" style={{ color: "var(--brand-accent)" }}>
                Download
              </span>{" "}
              the app now!
            </h2>

            {/* Sub-text */}
            <p className="text-sm leading-relaxed text-white/55">
              Experience seamless online payment only on payNback app
            </p>
          </div>

          {/* ── Right: coin swirl LEFT + QR card RIGHT ── */}
          <div className="flex items-center gap-4">

            {/* Coin swirl — sits to the left of the QR card */}
            <div style={{ width: "clamp(120px, 16vw, 250px)", transform: "translateY(-24px) translateX(12px)" }}>
              <Image
                src={COIN_SWIRL_IMG}
                alt="PayNBack Coin Swirl"
                width={400}
                height={400}
                className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(153,186,236,0.25)]"
              />
            </div>

            {/* QR card */}
            <div
              className="relative flex flex-col items-center gap-3 rounded-2xl px-6 pb-5 pt-6"
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
                  alt="Scan QR code to download payNback"
                  width={160}
                  height={160}
                  className="h-auto w-[clamp(120px,14vw,160px)]"
                />
              </div>

              {/* Label */}
              <p className="text-xs font-medium tracking-wide text-white/60">
                Scan to Download
              </p>

              {/* Bubble coin — moved up, larger */}
              <div
                className="pointer-events-none absolute z-30"
                style={{ bottom: "8px", right: "-46px", width: "82px" }}
              >
                <Image
                  src={BUBBLE_IMG}
                  alt=""
                  width={100}
                  height={100}
                  className="h-auto w-full object-contain drop-shadow-[0_4px_12px_rgba(153,186,236,0.4)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
