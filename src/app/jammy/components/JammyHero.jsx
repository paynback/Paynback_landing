"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function JammyHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-white pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col-reverse gap-y-12 lg:max-w-none lg:flex-row lg:items-center lg:justify-between">
          
          <div className="lg:w-1/2 flex flex-col gap-y-6 lg:pr-8 xl:pr-16 z-10 text-center lg:text-left">
            <motion.div
              initial={reduceMotion ? undefined : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-500/20 mb-4">
                Meet Jammy
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl text-pretty">
                Bringing Effortless Rewards
              </h1>
            </motion.div>
            
            <motion.p
              className="text-lg leading-8 text-gray-600 max-w-xl mx-auto lg:mx-0"
              initial={reduceMotion ? undefined : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              The name &quot;Jammy&quot; for our mascot is inspired by the British World War II slang for money - &quot;jam.&quot; This playful term perfectly reflects the effortless way you earn rewards with PayNback.
            </motion.p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10 mt-10 lg:mt-0">
            <motion.div
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square drop-shadow-[0_25px_55px_rgba(78,168,233,0.2)]"
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 45, damping: 20, duration: 1.2, delay: 0.2 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={reduceMotion ? undefined : { y: [0, -20, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              >
                <Image
                  src="/images/jammy-hero-image.png"
                  alt="Jammy Hero Image"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative subtle gradient blob for the white background */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
