"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const STATS = [
  {
    end: 1,
    suffix: "M",
    caption:
      "Merchants Onboarded.Expanding rapidly with verified local businesses",
    symbol: "+",
  },
  {
    end: 70,
    suffix: "",
    caption:
      "Deals Discovered Monthly.Helping users save more with every visit.",
    symbol: "+",
  },
  {
    end: 30,
    suffix: "",
    caption:
      "User Satisfaction Rate.Built for seamless, reliable shopping experiences",
    symbol: "%",
  },
];

function CountUpNumber({ end, duration = 850, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasAnimated(true);

        const start = performance.now();
        const frame = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(end * eased));
          if (progress < 1) requestAnimationFrame(frame);
        };

        requestAnimationFrame(frame);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, end, hasAnimated]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function HowIntoSection() {
  return (
    <section className="w-full bg-white">
      <motion.div
        className="mx-auto max-w-7xl px-6 py-14 sm:px-6 lg:px-30 lg:py-30"
        initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-26">
          {/* Left heading */}
          <div className="max-w-xl leading-tight">
            <h2>
              <span className="text-(--brand-primary)">How</span> we
              turn data{" "}
              <span className="text-(--brand-primary)">into</span>{" "}
              clarity
            </h2>
          </div>

          {/* Right paragraph */}
          <div className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-relaxed">
            <p>
              PayNback is India’s first in-store shopping support app that
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
              key={`${s.end}${s.suffix}${s.symbol}`}
              className={cn(
                "relative pt-2 text-center sm:text-left",
                idx !== 0 &&
                "sm:pl-16 sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-20 sm:before:w-[2px] sm:before:-translate-y-1/2 sm:before:bg-slate-400",
              )}
            >
              <div className="text-5xl font-semibold leading-none tracking-tight text-(--brand-primary) sm:text-6xl lg:text-7xl">
                <CountUpNumber end={s.end} suffix={s.suffix} />
                <span className="ml-1 text-3xl font-medium leading-none text-slate-900">
                  {s.symbol}
                </span>
              </div>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600 sm:mx-0">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

