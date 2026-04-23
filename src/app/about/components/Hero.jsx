"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
    // --- Reused ticker logic from BlogHero for identical animation behavior ---
    const MAX_SHIFT = -35;
    const TOTAL_STEPS = 7;
    const TIME_FORWARD = 0.85;
    const tickerX = ["0%"];
    const tickerTimes = [0];
    const SEGMENT_PCT = TIME_FORWARD / TOTAL_STEPS;

    for (let i = 1; i <= TOTAL_STEPS; i++) {
        const xVal = `${(MAX_SHIFT / TOTAL_STEPS) * i}%`;
        const arrivalTime = (i - 1) * SEGMENT_PCT + (SEGMENT_PCT * 0.4);
        const departureTime = i * SEGMENT_PCT;

        tickerX.push(xVal, xVal);
        tickerTimes.push(arrivalTime, departureTime);
    }

    tickerX.push("0%", "0%");
    tickerTimes.push(0.96, 1);

    return (
        <section className="relative isolate z-100 min-h-screen w-full flex flex-col overflow-hidden bg-black font-sans text-white">
            {/* ── Atmospheric gradient base ── */}
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

            <div className="relative z-10 mx-auto flex w-full flex-1 max-w-7xl flex-col px-6 sm:px-6 lg:px-8">
                {/* Content Centered Vertically */}
                <div className="relative flex-1 flex w-full flex-col justify-start pt-28 sm:pt-0 sm:justify-center pb-32 sm:pb-40">
                    <div className="relative z-10 flex w-full max-w-3xl flex-col items-start gap-3 sm:gap-5 mt-16 sm:mt-24 lg:mt-32 drop-shadow-md lg:pr-12">
                        <span className="text-[18px] sm:text-[24px] font-semibold sm:font-normal leading-[124%] tracking-[-0.56px] text-[#4EA8E9] sm:text-white/90">
                            About Us
                        </span>
                        <h1 className="text-balance text-[38px] sm:text-4xl font-semibold sm:font-normal leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                            Vision & Mission
                        </h1>
                        <p className="pr-4 leading-[1.5] tracking-[-0.56px] text-white/90 sm:text-white/75 text-[15px] sm:text-xs lg:text-sm">
                            <span className="block sm:hidden">
                                To be the leading platform for seamless, secure,<br />and rewarding cashless shopping worldwide
                            </span>
                            <span className="hidden sm:block">
                                To be the world&apos;s leading platform for seamless and secure shopping experiences, empowering individuals and businesses everywhere with the freedom and flexibility of a rewarding and cashless future.
                            </span>
                        </p>
                    </div>

                    {/* Right-aligned or Centered Hero Image */}
                    <motion.div 
                        className="pointer-events-none relative mx-auto mt-16 sm:mt-0 sm:absolute sm:right-[-5%] sm:top-[50%] z-0 h-[300px] w-[300px] sm:-translate-y-1/2 opacity-100 drop-shadow-2xl sm:h-[320px] sm:w-[320px] sm:opacity-50 lg:right-[2%] lg:top-[254px] lg:h-[407px] lg:w-[407px] lg:translate-y-0 lg:opacity-100 xl:right-[4%]"
                        initial={{ opacity: 0, y: -400 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 45, damping: 20, duration: 1.8, delay: 0.3 }}
                    >
                        <motion.div
                            animate={{ y: [0, -35, 0] }}
                            transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
                            className="h-full w-full"
                        >
                            <Image 
                                src="/images/water-profile-swirl.png"
                                alt="Water Profile Swirl"
                                width={407}
                                height={407}
                                className="h-full w-full object-contain drop-shadow-[0_15px_35px_rgba(255,255,255,0.15)]"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Full-width screen bleed text (Ticker) ── */}
            {/* <div className="z-40 absolute bottom-0 sm:bottom-2 lg:bottom-4 left-0 w-full overflow-hidden flex items-center h-10 justify-start">
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
