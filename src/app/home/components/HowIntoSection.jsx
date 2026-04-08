"use client";

import { cn } from "@/lib/utils";

const STATS = [
  {
    value: "1M",
    caption:
      "Intelligent capabilities that prioritize usability, speed, and security.",
    symbol: "+",
  },
  {
    value: "70",
    caption:
      "Intelligent capabilities that prioritize usability, speed, and security.",
    symbol: "%",
  },
  {
    value: "30",
    caption:
      "Intelligent capabilities that prioritize usability, speed, and security.",
    symbol: "sec",
  },
];

export default function HowIntoSection() {
  return (
    <section
      className="w-full bg-white"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-30 lg:py-30">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-26">
          {/* Left heading */}
          <div className="max-w-xl leading-tight">
            <h2 className="text-balance text-2xl font-normal tracking-tight sm:text-3xl lg:text-5xl">
              <span className="text-(--brand-primary)">How</span> we
              turn data{" "}
              <span className="text-(--brand-primary)">into</span>{" "}
              clarity
            </h2>
          </div>

          {/* Right paragraph */}
          <div className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
            <p>
              PayNBack is India’s first in-store shopping support app that
              connects users with nearby merchants offering exclusive discounts,
              cashback rewards, and pre-reduced prices.It helps customers
              discover better deals while also managing purchase bills and
              budgeting in one convenient platform.
            </p>
            <p className="mt-6 text-(--brand-primary)">
              Clarity, speed and security - all in one platform
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-12 lg:gap-26">
          {STATS.map((s, idx) => (
            <div
              key={s.value}
              className={cn(
                "relative pt-2",
                idx !== 0 &&
                "sm:pl-16 sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-20 sm:before:w-[2px] sm:before:-translate-y-1/2 sm:before:bg-slate-400",
              )}
            >
              <div className="text-5xl font-semibold leading-none tracking-tight text-(--brand-primary) sm:text-6xl lg:text-7xl">
                {s.value}
                <span className="ml-1 text-3xl font-medium leading-none text-slate-900">
                  {s.symbol}
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

