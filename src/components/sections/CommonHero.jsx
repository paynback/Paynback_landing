"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Shared page hero. Horizontal padding matches homepage / about body sections:
 * max-w-7xl px-6 sm:px-6 lg:px-20
 */
export default function CommonHero({
  title,
  heading,
  description,
  imageSrc,
  imageAlt,
  imageWidth = 407,
  imageHeight = 407,
  imageWrapperClassName = "h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[407px] lg:w-[407px]",
  imageClassName = "drop-shadow-[0_25px_55px_rgba(56,189,248,0.35)]"
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate z-100 min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Atmospheric gradient base (blob lights) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
        aria-hidden
      >
        <div className="absolute top-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-[#2433A8] blur-[48px] md:blur-[1110px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[20%] h-[60%] w-[60%] rounded-full bg-[#3E72E0] blur-2xl md:blur-[100px] opacity-40" />
        <div className="absolute top-[10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-[#87B3E0] blur-2xl md:blur-[110px] opacity-50" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[50%] w-[45%] rounded-full bg-[#6D349F] blur-[36px] md:blur-[90px] opacity-40" />
        <div className="absolute bottom-[5%] left-[-5%] h-[30%] w-[30%] rounded-full bg-[#A24F93] blur-[32px] md:blur-[80px] opacity-25" />
        <div className="absolute bottom-[0%] right-[0%] h-[25%] w-[25%] rounded-full bg-[#CB7C91] blur-[28px] md:blur-[70px] opacity-20" />
        <div className="absolute top-[20%] right-[10%] h-[35%] w-[35%] rounded-full bg-[#338BCB] blur-[36px] md:blur-[100px] opacity-30" />
        <div className="absolute top-[-10%] right-[-5%] h-[55%] w-[60%] rounded-full bg-[#c5d7e9] blur-[48px] md:blur-[140px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      {/* Same horizontal shell as AboutDetails / homepage sections */}
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-6 sm:py-28 lg:px-20 lg:py-32">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy — starts at container padding edge (no extra pl/ml) */}
          <div className="flex w-full min-w-0 flex-col gap-y-5 text-left">
            <motion.span
              className="text-xl font-normal leading-[124%] tracking-[-0.56px] text-[#4EA8E9] sm:text-[24px]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.span>
            <motion.h1
              className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-sm lg:text-sm"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>
          </div>

          {/* Right: image */}
          <div className="relative mx-auto flex h-80 w-full max-w-xl items-center justify-center sm:h-95 md:h-120 lg:mx-0 lg:h-130 lg:max-w-none">
            <motion.div
              className={`relative z-10 flex items-center justify-center ${imageWrapperClassName}`}
              initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 45, damping: 20, duration: 1.8, delay: 0.3 }}
            >
              <motion.div
                className="relative h-full w-full"
                animate={reduceMotion ? undefined : { y: [0, -35, 0] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-contain ${imageClassName}`}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
