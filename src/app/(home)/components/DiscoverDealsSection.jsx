"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Clock, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fetchPublicOffers } from "@/lib/offerService";
import EdgeFade from "@/components/ui/EdgeFade";

/*
 * ARCHIVED — hardcoded homepage deals (replaced by API: fetchPublicOffers).
 *
 * const MERCHANT_LOGO = "/images/3c0116fa484f774824ac2f339552f593418ec815.png";
 * const IMG_DISH_WITH_JAMMY = "/images/dish-with-jammy.png";
 *
 * const DEALS_DATA = [
 *   {
 *     title: "Buy 1 Get 1",
 *     subtitle: "on all fresh juices",
 *     logoSrc: "/images/juice-shop-logo.png",
 *     imageSrc: "/images/juice-with-jammy.png",
 *     alt: "Juice Shop",
 *   },
 *   {
 *     title: "Flat ₹100 Off",
 *     subtitle: "on purchase above ₹699",
 *     logoSrc: "/images/footwear-shop-logo.png",
 *     imageSrc: "/images/footwear-with-jammy.png",
 *     alt: "Footwear Shop",
 *   },
 *   {
 *     title: "Get 30% Off",
 *     subtitle: "for every orders",
 *     logoSrc: MERCHANT_LOGO,
 *     imageSrc: IMG_DISH_WITH_JAMMY,
 *     alt: "Pachu's Kitchen",
 *   },
 * ];
 *
 * const DEAL_END_OFFSET_MS = [
 *   30 * 86400000 + 7 * 3600000 + 36 * 60000 + 47 * 1000,
 *   28 * 86400000 + 12 * 3600000 + 5 * 60000 + 12 * 1000,
 *   31 * 86400000 + 2 * 3600000 + 50 * 60000 + 33 * 1000,
 * ];
 */

function pad2(n) {
  return String(n).padStart(2, "0");
}

function isExternalImage(src) {
  return typeof src === "string" && /^https?:\/\//i.test(src);
}

function useCountdown(endMs) {
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

function OfferImage({ src, alt, className, sizes, fill = false, priority = false }) {
  if (!src) return null;
  if (isExternalImage(src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className={cn("absolute inset-0 h-full w-full", className)} />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} />
    );
  }
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }
  return <Image src={src} alt={alt} width={104} height={78} className={className} sizes={sizes} />;
}

function LogoPlaceholder({ label }) {
  const initial = (label || "?").charAt(0).toUpperCase();
  return (
    <div className="relative z-0 -mt-2 max-w-[30%] -translate-y-6 overflow-visible sm:-mt-3 sm:max-w-[96px] sm:-translate-y-7 md:-mt-4 md:max-w-[104px] md:-translate-y-8">
      <div className="flex aspect-4/3 w-full items-center justify-center rounded-lg bg-white/15 text-lg font-bold text-white ring-1 ring-white/25 sm:text-xl">
        {initial}
      </div>
    </div>
  );
}

function HeroPlaceholder() {
  return (
    <div
      className="pointer-events-none absolute bottom-[-10%] left-[8%] right-0 z-20 h-[36%] min-h-24 sm:bottom-[-12%] sm:left-[14%] sm:h-[40%] sm:min-h-28 md:bottom-[-13%] md:left-[16%] md:h-[42%]"
      aria-hidden
    >
      <div className="flex h-full items-end justify-center rounded-2xl border border-dashed border-white/25 bg-white/5 pb-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/55">
          Offer visual
        </span>
      </div>
    </div>
  );
}

function CountdownFooter({ endMs }) {
  const { days, hrs, mins, secs } = useCountdown(endMs);

  return (
    <div className="relative z-30 flex min-h-0 flex-[79_1_0%] flex-col justify-center overflow-hidden bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4">
      <div className="pointer-events-none absolute -top-[19px] -left-[19px] z-1 size-10 rounded-full bg-[#F2F2F2]" />
      <div className="pointer-events-none absolute -top-[19px] -right-[19px] z-1 size-10 rounded-full bg-[#F2F2F2]" />
      <div
        className="pointer-events-none absolute top-0 left-10 right-10 z-1 h-px bg-slate-100 sm:left-11 sm:right-11 md:left-12 md:right-12"
        aria-hidden
      />
      <div className="relative z-10 flex w-full flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-2 md:gap-3">
        <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-sky-100 px-2 py-1 text-brand-primary md:px-2.5 md:py-1">
          <Clock className="h-3 w-3 shrink-0 md:h-3.5 md:w-3.5" strokeWidth={2.25} />
          <span className="text-[10px] font-semibold leading-none md:text-[11px]">Ending in</span>
        </div>
        <div className="flex w-full min-w-0 flex-1 flex-wrap items-center justify-center gap-x-1.5 gap-y-1 sm:w-auto sm:flex-nowrap sm:justify-end sm:gap-x-1 md:gap-x-1.5">
          <TimeBlock value={days} label="days" />
          <span className="block h-5 w-px shrink-0 bg-slate-200 sm:h-6 md:h-7" aria-hidden />
          <TimeBlock value={hrs} label="hrs" />
          <span className="block h-5 w-px shrink-0 bg-slate-200 sm:h-6 md:h-7" aria-hidden />
          <TimeBlock value={mins} label="mins" />
          <span className="block h-5 w-px shrink-0 bg-slate-200 sm:h-6 md:h-7" aria-hidden />
          <TimeBlock value={secs} label="secs" />
        </div>
      </div>
    </div>
  );
}

function StaticFooter({ offer }) {
  const label =
    offer.offer_source === "PAYNBACK"
      ? "PayNback exclusive"
      : offer.merchant_name?.trim() || "Merchant offer";

  return (
    <div className="relative z-30 flex min-h-0 flex-[79_1_0%] flex-col justify-center overflow-hidden bg-white px-3 py-2 sm:px-4 sm:py-3">
      <div className="pointer-events-none absolute -top-[19px] -left-[19px] z-1 size-10 rounded-full bg-[#F2F2F2]" />
      <div className="pointer-events-none absolute -top-[19px] -right-[19px] z-1 size-10 rounded-full bg-[#F2F2F2]" />
      <div
        className="pointer-events-none absolute top-0 left-10 right-10 z-1 h-px bg-slate-100 sm:left-11 sm:right-11 md:left-12 md:right-12"
        aria-hidden
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-sky-50 to-blue-50 px-3 py-1.5 text-brand-primary ring-1 ring-sky-100">
          <Sparkles className="h-3.5 w-3.5 shrink-0" strokeWidth={2.25} />
          <span className="text-[11px] font-semibold leading-none sm:text-xs">{label}</span>
        </div>
        <p className="text-[10px] font-medium text-slate-500 sm:text-[11px]">
          Grab this deal in-store with PayNback
        </p>
      </div>
    </div>
  );
}

function DealCard({ offer }) {
  const timerEndMs = offer.timer_ends_at ? new Date(offer.timer_ends_at).getTime() : null;
  const hasTimer = Number.isFinite(timerEndMs) && timerEndMs > 0;
  const alt = offer.merchant_name || offer.title;

  return (
    <article
      className={cn(
        "mx-auto flex min-h-0 w-full max-w-[385px] flex-col overflow-hidden rounded-[1rem]",
        "aspect-385/296",
      )}
    >
      <div className="relative min-h-0 flex-[230_1_0%] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080F18_0%,#1B519C_55%,#99BAEC_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(153,186,236,0.70)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_92%,rgba(8,15,24,0.38)_0%,transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,15,24,0.45)_0%,rgba(8,15,24,0)_55%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/25" />
        <div className="absolute -bottom-[19px] -left-[19px] z-11 size-10 rounded-full bg-[#F2F2F2]" />
        <div className="absolute -bottom-[19px] -right-[19px] z-11 size-10 rounded-full bg-[#F2F2F2]" />

        <div className="relative z-10 flex h-full min-h-0 flex-col p-3 pb-8 sm:p-4 sm:pb-10 md:p-5 md:pb-14">
          <div className="flex items-start justify-end gap-2 sm:gap-3">
            <div className="min-w-0 text-right text-white drop-shadow-sm">
              <p className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">{offer.title}</p>
              {offer.subtitle ? (
                <p className="mt-0.5 text-xs font-medium text-white/90 sm:text-sm md:text-base">
                  {offer.subtitle}
                </p>
              ) : null}
            </div>
          </div>

          {offer.logo_image ? (
            <div className="relative z-0 -mt-2 max-w-[30%] -translate-y-6 overflow-visible sm:-mt-3 sm:max-w-[96px] sm:-translate-y-7 md:-mt-4 md:max-w-[104px] md:-translate-y-8">
              <div className="relative aspect-4/3 w-full">
                <OfferImage
                  src={offer.logo_image}
                  alt={alt}
                  className="h-full w-full object-contain"
                  sizes="(max-width:640px) 80px, 104px"
                  fill
                />
              </div>
            </div>
          ) : (
            <LogoPlaceholder label={offer.merchant_name || offer.title} />
          )}

          {offer.hero_image ? (
            <div
              className="pointer-events-none absolute bottom-[-10%] left-[8%] right-0 z-20 h-[36%] min-h-24 sm:bottom-[-12%] sm:left-[14%] sm:h-[40%] sm:min-h-28 md:bottom-[-13%] md:left-[16%] md:h-[42%]"
              aria-hidden
            >
              <OfferImage
                src={offer.hero_image}
                alt=""
                className="object-contain object-bottom drop-shadow-xl scale-[1.25] origin-bottom"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 340px, 385px"
                fill
              />
            </div>
          ) : (
            <HeroPlaceholder />
          )}
        </div>
      </div>

      {hasTimer ? <CountdownFooter endMs={timerEndMs} /> : <StaticFooter offer={offer} />}
    </article>
  );
}

function DealCardSlide({ offer }) {
  return (
    <div className="w-[85vw] max-w-[385px] shrink-0 snap-center sm:w-[320px] md:w-[360px] lg:w-[385px]">
      <DealCard offer={offer} />
    </div>
  );
}

export default function DiscoverDealsSection() {
  const reduceMotion = useReducedMotion();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const rows = await fetchPublicOffers();
        if (!active) return;
        setOffers(Array.isArray(rows) ? rows : []);
      } catch {
        if (active) setOffers([]);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const useMarquee = offers.length >= 2 && !reduceMotion;

  return (
    <section
      className="w-full bg-[#F2F2F2] font-sans"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-6 md:px-10 lg:px-20 lg:py-30">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-6 lg:gap-x-16 lg:gap-y-8">
          <div className="max-w-xl leading-tight md:max-w-none">
            <h2 className="text-[1.65rem] font-normal tracking-tight sm:text-3xl md:text-[clamp(1.75rem,2.2vw,2.25rem)] lg:text-4xl xl:text-5xl">
              <span className="block lg:inline">
                <span className="text-(--brand-primary)">Experience</span> the Future{" "}
              </span>
              <span className="block lg:inline">
                <span className="text-(--brand-primary)">of </span> Deals
              </span>
            </h2>
          </div>

          <div className="max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base sm:leading-relaxed md:max-w-none md:pt-1 lg:text-lg">
            <p>
              A new way to shop begins here. PayNback introduces India&apos;s first in-store
              shopping support app, bringing you closer to nearby merchants and exclusive offers.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 w-full max-w-6xl sm:mt-10 md:mt-12">
          {loading ? (
            <p className="text-center text-sm text-slate-500">Loading offers...</p>
          ) : offers.length === 0 ? (
            <p className="text-center text-sm text-slate-500">No offers available right now.</p>
          ) : useMarquee ? (
            <EdgeFade
              className="group/marquee w-full"
              fadeColor="#F2F2F2"
            >
              <motion.div
                className="flex w-max gap-6 sm:gap-7 md:gap-8 lg:gap-10"
                animate={{ x: ["0%", "-25%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: offers.length * 5,
                }}
                style={{ willChange: "transform" }}
              >
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex gap-6 sm:gap-7 md:gap-8 lg:gap-10 pr-6 sm:pr-7 md:pr-8 lg:pr-10">
                    {offers.map((offer) => (
                      <DealCardSlide key={`${offer.offer_id}-${i}`} offer={offer} />
                    ))}
                  </div>
                ))}
              </motion.div>
            </EdgeFade>
          ) : (
            <EdgeFade fadeColor="#F2F2F2" mode="scroll-until-md">
              <div
                className="
                  flex gap-6 overflow-x-auto snap-x snap-mandatory
                  sm:gap-7 md:grid md:grid-cols-2 md:justify-items-stretch md:gap-8 md:overflow-visible
                  lg:grid-cols-3 lg:gap-10
                  [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                "
              >
                {offers.map((offer) => (
                  <DealCardSlide key={offer.offer_id} offer={offer} />
                ))}
              </div>
            </EdgeFade>
          )}
        </div>
      </div>
    </section>
  );
}
