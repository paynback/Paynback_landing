"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutHero() {
  const reduceMotion = useReducedMotion();
  const IMG_ABOUT_HERO = "/images/aboutus-hero-image.png";

  const MAX_SHIFT = -35; // Shorter max shift so the end isn't brought all the way left
  const TOTAL_STEPS = 7; // Exactly seven moves
  const TIME_FORWARD = 0.85; // Percent of total duration spent skipping left
  const tickerX = ["0%"];
  const tickerTimes = [0];
  const SEGMENT_PCT = TIME_FORWARD / TOTAL_STEPS;

  // Dynamically generate the micro steps
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    const xVal = `${(MAX_SHIFT / TOTAL_STEPS) * i}%`;
    const arrivalTime = (i - 1) * SEGMENT_PCT + (SEGMENT_PCT * 0.4); // 40% of segment moving
    const departureTime = i * SEGMENT_PCT; // 60% of segment paused

    tickerX.push(xVal, xVal);
    tickerTimes.push(arrivalTime, departureTime);
  }

  // Smooth slide back to 0 at the end
  tickerX.push("0%", "0%");
  tickerTimes.push(0.96, 1);

  return (
    <section className="relative isolate z-100 min-h-screen w-full flex flex-col overflow-hidden bg-black font-sans text-white">
      {/* Atmospheric gradient base (blob lights) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
        aria-hidden
      >
        {/* Deep Primary Blue Flare - moved to top right to bring light to top right corner */}
        <div className="absolute top-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-[#2433A8] blur-[1110px] opacity-80" />

        {/* Mid Blue Glow */}
        <div className="absolute bottom-[-10%] left-[20%] h-[60%] w-[60%] rounded-full bg-[#3E72E0] blur-[100px] opacity-40" />

        {/* Light Azure Accent */}
        <div className="absolute top-[10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-[#87B3E0] blur-[110px] opacity-50" />

        {/* Violet/Purple Bloom */}
        <div className="absolute bottom-[-15%] left-[-10%] h-[50%] w-[45%] rounded-full bg-[#6D349F] blur-[90px] opacity-40" />

        {/* Soft Magenta/Pink Edge */}
        <div className="absolute bottom-[5%] left-[-5%] h-[30%] w-[30%] rounded-full bg-[#A24F93] blur-[80px] opacity-25" />

        {/* Muted Rose Accent */}
        <div className="absolute bottom-[0%] right-[0%] h-[25%] w-[25%] rounded-full bg-[#CB7C91] blur-[70px] opacity-20" />

        {/* Bright Cyan Highlight */}
        <div className="absolute top-[20%] right-[10%] h-[35%] w-[35%] rounded-full bg-[#338BCB] blur-[100px] opacity-30" />

        {/* Soft White Highlight (Top Right) */}
        <div className="absolute top-[-10%] right-[-5%] h-[55%] w-[60%] rounded-full bg-[#c5d7e9] blur-[140px] opacity-70" />

        {/* Vignette for depth/contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-0">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-6 lg:pb-24 lg:pt-4">
          <div className="flex max-w-2xl flex-col gap-y-5 mt-10 sm:mt-14 lg:mt-32 lg:pl-14 xl:pl-20 drop-shadow-md">
            <motion.span
              className="inline-block text-xl sm:text-[24px] font-normal leading-[124%] tracking-[-0.56px] text-[#4EA8E9]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              About Us
            </motion.span>
            <motion.h1
              className="text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl -ml-[2px] lg:-ml-[4px]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="whitespace-nowrap">Vision & Mission</span>
            </motion.h1>
            <motion.p
              className="max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-xs lg:text-sm"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              To be the leading platform for seamless, secure, and rewarding cashless shopping worldwide.
            </motion.p>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-xl sm:h-[380px] md:h-[520px] lg:mx-0 lg:h-[560px] lg:max-w-none flex items-center justify-center mt-8 lg:mt-20">
            {/* About Us Hero Image */}
            <motion.div
              className="relative z-10 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] lg:h-[407px] lg:w-[407px] flex justify-center items-center drop-shadow-2xl"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -400 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 45, damping: 20, duration: 1.8, delay: 0.3 }}
            >
              <motion.div
                className="w-full h-full"
                animate={reduceMotion ? undefined : { y: [0, -35, 0] }}
                transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src={IMG_ABOUT_HERO}
                  alt="About Hero Image"
                  width={407}
                  height={407}
                  className="h-full w-full object-contain drop-shadow-[0_25px_55px_rgba(56,189,248,0.35)]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-width screen bleed text */}
      {/* <div className="z-40 absolute bottom-2 left-0 w-full overflow-hidden flex items-center h-10 justify-start">
        <motion.p
          className="text-[19px] font-normal text-white leading-[35.62px] tracking-[-0.66px] whitespace-nowrap drop-shadow-md px-4 sm:px-6 lg:px-8"
          animate={{ x: tickerX }}
          transition={{
            duration: 16,
            times: tickerTimes,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          Find your favourite stores, discover exclusive deals, and connect directly with them on PayNback through calls or chats. Need directions? We've got you covered. Enjoy seamless bill payments using UPI, your personal wallet, or by redeeming rewards.
        </motion.p>
      </div> */}
    </section>
  );
}
