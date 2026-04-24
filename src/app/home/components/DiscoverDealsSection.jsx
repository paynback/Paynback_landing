"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const MERCHANT_LOGO = "/images/3c0116fa484f774824ac2f339552f593418ec815.png";
const IMG_DISH_WITH_JAMMY = "/images/dish-with-jammy.png";
/** Small header mark on card (white treatment on blue) */
const PAYNBACK_ICON = "/Icons/Paynback_logo.png";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function useCountdown(endMs) {
  // Avoid hydration mismatch: don't use Date.now() during the SSR render.
  // We start ticking only after the component mounts on the client.
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    const diff = Math.max(0, endMs - now);
    return {
      days: Math.floor(diff / 86400000),
      hrs: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  }, [endMs, now]);
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex min-w-8 flex-col items-center sm:min-w-9 md:min-w-10">
      <span className="text-base font-bold leading-none text-slate-900 tabular-nums sm:text-lg md:text-xl">
        {label === "secs" ? pad2(value) : value}
      </span>
      <span className="mt-0.5 text-[8px] font-medium text-slate-500 sm:text-[9px] md:text-[10px]">
        {label}
      </span>
    </div>
  );
}

function DealCard({ endMs }) {
  const { days, hrs, mins, secs } = useCountdown(endMs);

  return (
    <article
      className={cn(
        "mx-auto flex min-h-0 w-full max-w-[385px] flex-col overflow-hidden rounded-[1rem] sm:rounded-[1rem]",
        /* Slightly shorter than 385:309 (~4%) */
        "aspect-385/296",
      )}
    >
      {/* Top promo panel — flex share ~230 : 79 with footer for any card width */}
      <div className="relative min-h-0 flex-[230_1_0%] overflow-hidden">
        {/* Gradient background (matches your palette) */}
        {/* Left top + left bottom dark -> right side lighter */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080F18_0%,#1B519C_55%,#99BAEC_100%)]" />

        {/* Right top light highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(153,186,236,0.70)_0%,transparent_55%)]" />

        {/* Bottom is a bit darker on the right */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_92%,rgba(8,15,24,0.38)_0%,transparent_58%)]" />

        {/* Make the bottom edge darker overall to keep text contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,15,24,0.45)_0%,rgba(8,15,24,0)_55%)]" />

        {/* Extra subtle dark fade */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/25" />

        {/* Inner curved corners at the bottom (white cutout) — smaller semicircle */}
        <div className="absolute -bottom-[19px] -left-[19px] z-11 size-10 rounded-full bg-[#F2F2F2]" />
        <div className="absolute -bottom-[19px] -right-[19px] z-11 size-10 rounded-full bg-[#F2F2F2]" />

        <div className="relative z-10 flex h-full min-h-0 flex-col p-3 pb-8 sm:p-4 sm:pb-10 md:p-5 md:pb-14">
          <div className="flex items-start justify-between gap-2 sm:gap-3">
            <div className="relative h-7 w-20 shrink-0 sm:h-8 sm:w-22 md:h-9 md:w-28">
              <Image
                src={PAYNBACK_ICON}
                alt="PayNBack"
                fill
                className="object-contain object-left drop-shadow"
                sizes="(max-width:640px) 80px, (max-width:768px) 88px, 112px"
              />
            </div>
            <div className="min-w-0 text-right text-white drop-shadow-sm">
              <p className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                Get 50% Off
              </p>
              <p className="mt-0.5 text-xs font-medium text-white/90 sm:text-sm md:text-base">
                for ever order
              </p>
            </div>
          </div>

          {/* Merchant logo — smaller, higher; stays under dish (z-0 vs z-20) */}
          <div className="relative z-0 mt-0 max-w-[30%] -translate-y-2 overflow-visible sm:max-w-[96px] sm:-translate-y-3 md:max-w-[104px] md:-translate-y-3.5">
            <div className="relative aspect-4/3 w-full">
              <Image
                src={MERCHANT_LOGO}
                alt="Pachu's Kitchen"
                fill
                className="object-contain"
                sizes="(max-width:640px) 80px, 104px"
              />
            </div>
          </div>

          {/* Food + mascot — overlap into footer; covers merchant */}
          <div
            className="pointer-events-none absolute bottom-[-10%] left-[8%] right-0 z-20 h-[36%] min-h-24 sm:bottom-[-12%] sm:left-[14%] sm:h-[40%] sm:min-h-28 md:bottom-[-13%] md:left-[16%] md:h-[42%]"
            aria-hidden
          >
            <Image
              src={IMG_DISH_WITH_JAMMY}
              alt=""
              fill
              className="object-contain object-bottom drop-shadow-xl"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 340px, 385px"
              priority={false}
            />
          </div>
        </div>
      </div>

      {/* Countdown footer */}
      <div className="relative z-30 flex min-h-0 flex-[79_1_0%] flex-col justify-center overflow-hidden bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4">
        {/* Inner curved corners at the top — smaller semicircle (matches promo panel) */}
        <div className="pointer-events-none absolute -top-[19px] -left-[19px] z-1 size-10 rounded-full bg-[#F2F2F2]" />
        <div className="pointer-events-none absolute -top-[19px] -right-[19px] z-1 size-10 rounded-full bg-[#F2F2F2]" />
        {/* Divider line kept away from the cutouts */}
        <div
          className="pointer-events-none absolute top-0 left-10 right-10 z-1 h-px bg-slate-100 sm:left-11 sm:right-11 md:left-12 md:right-12"
          aria-hidden
        />
        {/* Sit above decorations; single row on desktop so pill and timers align and never stack-draw over each other */}
        <div className="relative z-10 flex w-full flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2 md:gap-3">
          <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sky-100 px-2 py-1 text-[#0964BC] md:px-2.5 md:py-1">
            <Clock className="h-3 w-3 shrink-0 md:h-3.5 md:w-3.5" strokeWidth={2.25} />
            <span className="text-[10px] font-semibold leading-none md:text-[11px]">
              Ending in
            </span>
          </div>

          <div className="flex w-full min-w-0 flex-1 flex-wrap items-center justify-center gap-x-0.5 gap-y-1 sm:w-auto sm:flex-nowrap sm:justify-end sm:gap-x-1 md:gap-x-1.5">
            <TimeBlock value={days} label="days" />
            <span className="hidden h-6 w-px shrink-0 bg-slate-200 sm:block md:h-7" aria-hidden />
            <TimeBlock value={hrs} label="hrs" />
            <span className="hidden h-6 w-px shrink-0 bg-slate-200 sm:block md:h-7" aria-hidden />
            <TimeBlock value={mins} label="mins" />
            <span className="hidden h-6 w-px shrink-0 bg-slate-200 sm:block md:h-7" aria-hidden />
            <TimeBlock value={secs} label="secs" />
          </div>
        </div>
      </div>
    </article>
  );
}

const DEAL_END_OFFSET_MS = [
  30 * 86400000 + 7 * 3600000 + 36 * 60000 + 47 * 1000,
  28 * 86400000 + 12 * 3600000 + 5 * 60000 + 12 * 1000,
  31 * 86400000 + 2 * 3600000 + 50 * 60000 + 33 * 1000,
];

export default function DiscoverDealsSection() {
  // Avoid hydration mismatch by computing end timestamps only after mount.
  const [ends, setEnds] = useState(() => DEAL_END_OFFSET_MS.map(() => 0));

  useEffect(() => {
    const base = Date.now();
    setEnds(DEAL_END_OFFSET_MS.map((o) => base + o));
  }, []);

  return (
    <section
      className="w-full bg-[#F2F2F2] font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-20 lg:py-24 xl:py-28">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-16 lg:gap-y-8">
          {/* Left heading */}
          <div className="max-w-xl leading-tight md:max-w-none">
            <h2 className="text-balance text-[1.65rem] font-normal tracking-tight sm:text-3xl md:text-[clamp(1.75rem,2.2vw,2.25rem)] lg:text-4xl xl:text-5xl">
              <span className="text-(--brand-primary)">Discover</span>{" "}
              today's store {" "}
              <span className="text-(--brand-primary)">deals</span>
            </h2>
          </div>

          {/* Right paragraph */}
          <div className="max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-relaxed md:max-w-none md:pt-1 lg:text-lg">
            <p>
              PayNback is India’s first in-store shopping support app that connects users with nearby merchants offering exclusive discounts.
            </p>
          </div>
        </div>

        {/* <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-6 sm:mt-10 sm:gap-7 md:mt-12 md:grid-cols-2 md:justify-items-stretch md:gap-8 lg:grid-cols-3 lg:gap-10">
          {ends.map((endMs, i) => (
            <DealCard key={i} endMs={endMs} />
          ))}
        </div> */}

        <div
          className="
    mx-auto mt-8 w-full max-w-6xl

    flex gap-6 overflow-x-auto snap-x snap-mandatory px-4

    sm:mt-10 sm:gap-7
    md:mt-12 md:grid md:grid-cols-2 md:justify-items-stretch md:gap-8 md:overflow-visible
    lg:grid-cols-3 lg:gap-10
  "
        >
          {ends.map((endMs, i) => (
            <div key={i} className="min-w-[85%] snap-center md:min-w-0">
              <DealCard endMs={endMs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
