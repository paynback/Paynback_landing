"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

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
    <section className="relative isolate z-100 min-h-screen w-full flex flex-col overflow-hidden bg-black font-sans text-white">
      {/* Atmospheric gradient base (blob lights) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
        aria-hidden
      >
        <div className="absolute top-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-[#2433A8] blur-[1110px] opacity-80" />
        <div className="absolute bottom-[-10%] left-[20%] h-[60%] w-[60%] rounded-full bg-[#3E72E0] blur-[100px] opacity-40" />
        <div className="absolute top-[10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-[#87B3E0] blur-[110px] opacity-50" />
        <div className="absolute bottom-[-15%] left-[-10%] h-[50%] w-[45%] rounded-full bg-[#6D349F] blur-[90px] opacity-40" />
        <div className="absolute bottom-[5%] left-[-5%] h-[30%] w-[30%] rounded-full bg-[#A24F93] blur-[80px] opacity-25" />
        <div className="absolute bottom-[0%] right-[0%] h-[25%] w-[25%] rounded-full bg-[#CB7C91] blur-[70px] opacity-20" />
        <div className="absolute top-[20%] right-[10%] h-[35%] w-[35%] rounded-full bg-[#338BCB] blur-[100px] opacity-30" />
        <div className="absolute top-[-10%] right-[-5%] h-[55%] w-[60%] rounded-full bg-[#c5d7e9] blur-[140px] opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-0">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-6 lg:pb-24 lg:pt-4">
          <div className="flex max-w-2xl flex-col gap-y-5 mt-10 sm:mt-14 lg:mt-32 lg:pl-14 xl:pl-20 drop-shadow-md">
            <motion.span
              className="relative inline-block text-xl sm:text-[24px] font-normal leading-[124%] tracking-[-0.56px] text-[#4EA8E9]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.span>
            <motion.h1
              className="relative text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl -ml-[2px] lg:-ml-[4px]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {heading}
            </motion.h1>
            <motion.p
              className="relative max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-xs lg:text-sm"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-xl sm:h-[380px] md:h-[520px] lg:mx-0 lg:h-[560px] lg:max-w-none flex items-center justify-center mt-8 lg:mt-20">
            <motion.div
              className={`relative z-10 flex justify-center items-center drop-shadow-2xl ${imageWrapperClassName}`}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -400 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 45, damping: 20, duration: 1.8, delay: 0.3 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={reduceMotion ? undefined : { y: [0, -35, 0] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  style={{ width: "auto", height: "auto" }}
                  className={`h-full w-full object-contain ${imageClassName}`}
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
