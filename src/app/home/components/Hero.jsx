"use client";

import Image from "next/image";
import { Info } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StoreBadges } from "@/components/ui/StoreBadges";

export default function HomeHero() {
  const reduceMotion = useReducedMotion();

  // Kept inside the component to avoid TS/JS language-service
  // global-scope collisions when the editor opens the file
  // with different casing or treats it as a script.
  const IMG_BUBBLE = "/images/e9eaa1ec2bb31dedd4c5ca5b5780dc6bb78f2b36.png";
  const IMG_COIN_SWIRL = "/images/33b06127ad13c66d1ea9ad4918ed9018d0d01e8a.png";



  const floatTransition = {
    duration: reduceMotion ? 0 : 3.5,
    repeat: reduceMotion ? 0 : Infinity,
    ease: "easeInOut",
  };

  return (
    <section className="relative isolate z-100 min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Atmospheric gradient base (blob lights) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
        aria-hidden
      >
        {/* Deep Primary Blue Flare (Bottom Right) */}
        <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-[#2433A8] blur-[1110px] opacity-70" />

        {/* Mid Blue Glow (Center Bottom) */}
        <div className="absolute bottom-[-10%] left-[20%] h-[60%] w-[60%] rounded-full bg-[#3E72E0] blur-[100px] opacity-40" />

        {/* Light Azure Accent (Right Middle) */}
        <div className="absolute top-[20%] right-[-15%] h-[50%] w-[50%] rounded-full bg-[#87B3E0] blur-[110px] opacity-45" />

        {/* Violet/Purple Bloom (Bottom Left) */}
        <div className="absolute bottom-[-15%] left-[-10%] h-[50%] w-[45%] rounded-full bg-[#6D349F] blur-[90px] opacity-40" />

        {/* Soft Magenta/Pink Edge (Far Bottom Left) */}
        <div className="absolute bottom-[5%] left-[-5%] h-[30%] w-[30%] rounded-full bg-[#A24F93] blur-[80px] opacity-25" />

        {/* Muted Rose Accent (Far Bottom Right) */}
        <div className="absolute bottom-[0%] right-[0%] h-[25%] w-[25%] rounded-full bg-[#CB7C91] blur-[70px] opacity-20" />

        {/* Bright Cyan Highlight (Lower Right Core) */}
        <div className="absolute bottom-[10%] right-[15%] h-[35%] w-[35%] rounded-full bg-[#338BCB] blur-[90px] opacity-25" />

        {/* Soft White Highlight (Bottom Right) */}
        <div className="absolute bottom-[-6%] right-[-6%] h-[40%] w-[58%] rounded-full bg-[#c5d7e9] blur-[110px] opacity-60" />

        {/* Vignette for depth/contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-0">
        <div className="grid flex-1 grid-cols-1 items-center gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-6 lg:pb-24 lg:pt-4">
          <div className="flex max-w-xl flex-col gap-y-4 mt-10 sm:mt-14 lg:mt-48 lg:pl-14 xl:pl-20">
            <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-sm text-white/85">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full",
                    "border border-white/20 bg-white/5",
                  )}
                >
                  <Info className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="font-normal tracking-tight">
                  App Available For
                </span>
              </div>
              <StoreBadges />
            </div>

            <h1>
              Finances that work for you
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-xs lg:text-sm">
              Sign up and become a member today to get exclusive offers in your
              area and other benefits.
            </p>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-xl sm:h-[380px] md:h-[520px] lg:mx-0 lg:h-[560px] lg:max-w-none">
            <motion.div
              className="absolute left-[0%] top-[0%] z-20 w-[46%] max-w-[170px] sm:left-[0%] sm:top-[0%] sm:w-[52%] sm:max-w-[260px] md:left-[2%] md:top-[6%] md:w-[44%] md:max-w-[280px] lg:left-[5%] lg:top-[18%] lg:w-[46%] lg:max-w-[240px]"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 35, damping: 20, duration: 2.2, delay: 0.3 }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -24, 0] }}
                transition={floatTransition}
              >
                <Image
                  src={IMG_BUBBLE}
                  alt="PayNBack Bubble"
                  width={600}
                  height={600}
                  className="h-auto w-full drop-shadow-[0_25px_55px_rgba(56,189,248,0.45)]"
                  sizes="(min-width: 1024px) 300px, 52vw"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-[-10%] right-[-10%] z-10 w-[86%] max-w-[360px] sm:bottom-[-14%] sm:right-[-14%] sm:w-[92%] sm:max-w-[520px] md:bottom-[-12%] md:right-[-14%] md:w-[78%] md:max-w-[560px] lg:bottom-[-18%] lg:right-[-12%] lg:w-[64%] lg:max-w-[420px]"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 35, damping: 20, duration: 2.2, delay: 0.45 }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 44, 0] }}
                transition={{
                  ...floatTransition,
                  duration: reduceMotion ? 0 : 3.4,
                }}
              >
                <Image
                  src={IMG_COIN_SWIRL}
                  alt="PayNBack Coin Swirl"
                  width={800}
                  height={800}
                  className="h-auto w-full max-w-[250px] md:max-w-[420px] object-contain drop-shadow-[0_30px_70px_rgba(14,165,233,0.35)]"
                  sizes="(min-width: 1024px) 420px, (min-width: 668px) 460px, 60vw"
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




