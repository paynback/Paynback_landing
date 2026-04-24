"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function CareersHero() {
  const reduceMotion = useReducedMotion();
  const IMG_APP_HAND = "/images/app-with-two-hand.png";
  const IMG_BIG_LOGO = "/images/big-logo.png";

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

      <div className="relative z-10 mx-auto flex w-full flex-1 max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {/* Content Centered Vertically */}
        <div className="relative flex-1 flex w-full flex-col justify-start sm:justify-center pt-28 sm:pt-0 pb-32 sm:pb-40">

          <motion.div
            className="relative z-10 flex w-full max-w-3xl flex-col items-start gap-5 mt-16 sm:mt-24 lg:mt-32 drop-shadow-md lg:pr-12"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="text-[24px] font-normal leading-[124%] tracking-[-0.56px] mb-8 drop-shadow-md"
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Careers
            </motion.span>
            <motion.h1
              className="text-balance text-4xl font-medium leading-[1.30] tracking-tight sm:text-4xl lg:text-6xl -ml-[2px] lg:-ml-[4px]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              Build the Future With Us
            </motion.h1>
            <motion.p
              className="pr-4 leading-[144%] tracking-[-0.56px] text-white/75 sm:text-xs lg:text-sm"
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Be part of a culture that values creativity, collaboration, and innovation.
            </motion.p>
          </motion.div>



          {/* Right Images Container - absolute to overlap */}
          <div className="absolute right-0 bottom-[-3%] top-10 w-full lg:w-[65%] xl:w-[60%] pointer-events-none z-20 flex justify-end items-end overflow-hidden sm:overflow-visible">
            {/* Big Logo in background */}
            <div className="absolute right-[2%] bottom-[-20%] w-[110%] h-[110%] z-0 opacity-20">
              <Image
                src={IMG_BIG_LOGO}
                alt="Big PayNBack Logo"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain object-bottom-right transform rotate-[-5deg] scale-125"
                priority
              />
            </div>
            {/* Hand Image */}
            <motion.div
              className="relative z-10 w-[135%] sm:w-[95%] max-w-[800px] flex justify-end items-end mr-[-35%] sm:mr-[-20%] mb-[-5%] sm:mb-[-2%]"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 96 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            >
              <Image
                src={IMG_APP_HAND}
                alt="App With Two Hand"
                width={1000}
                height={1300}
                className="w-full h-auto object-bottom object-contain"
                priority
              />
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
          Find your favourite stores, discover exclusive deals, and connect directly with them on payNback through calls or chats. Need directions? We've got you covered. Enjoy seamless bill payments using UPI, your personal wallet, or by redeeming rewards.
        </motion.p>
      </div> */}
    </section>
  );
}
