"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function JammyHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section 
      className="relative w-full overflow-hidden flex items-center justify-center lg:min-h-[837px] pt-24 lg:pt-32 pb-16 lg:pb-16"
      style={{
        background: 'radial-gradient(76.18% 60.67% at 84.97% 45.9%, #0B3571 0%, #060B18 100%)',
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-20">
        <div className="mx-auto flex w-full flex-col-reverse gap-y-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Left Content */}
          <div className="flex w-full min-w-0 flex-col gap-y-5 text-left z-10 lg:w-1/2">
            <motion.span
              className="text-xl font-normal leading-[124%] tracking-[-0.56px] text-[#4EA8E9] sm:text-[24px]"
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              Jammy
            </motion.span>

            <motion.h1
              className="text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              Meet Jammy
            </motion.h1>

            <motion.p
              className="max-w-lg text-pretty text-base leading-relaxed text-white/75 sm:text-sm lg:text-sm"
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Jammy represents our spirit, our values and our mission to make every transaction rewarding and meaningful.
            </motion.p>

            {/* Capsules */}
            <motion.div 
              className="flex flex-row flex-wrap gap-4 justify-start max-w-lg"
              initial={reduceMotion ? undefined : { opacity: 0, y: 15 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {[
                "Rewarding Companion",
                "Local Store Supporter",
                "Shopping Companion"
              ].map((text, i) => (
                <div 
                  key={i}
                  className="flex items-center justify-center backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
                  style={{
                    background: '#11223033',
                    borderRadius: '16px',
                    padding: '10px 16px',
                    gap: '10px',
                    height: '40px',
                    width: 'fit-content'
                  }}
                >
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M1 5L4.5 8.5L13 1" stroke="#4EA8E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-200 text-sm font-medium whitespace-nowrap">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10 relative">
            <motion.div
              className="relative w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect-square flex items-center justify-center"
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 45, damping: 20, duration: 1.2, delay: 0.2 }}
            >
              {/* Radial background behind the image */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: '391px',
                  height: '391px',
                  background: 'radial-gradient(70.08% 70.08% at 49.87% 36.96%, #1B7FE4 0%, #08162C 100%)',
                  filter: 'blur(100px)',
                  WebkitFilter: 'blur(100px)',
                  borderRadius: '50%',
                  zIndex: 0,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.8
                }}
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/images/Jammy-hero-img.png"
                  alt="Jammy Hero Image"
                  fill
                  className="object-contain relative z-10"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
