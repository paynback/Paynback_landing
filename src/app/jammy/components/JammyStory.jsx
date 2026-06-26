"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const storySegments = [
  {
    id: 1,
    imageSrc: "/images/page-jammy-img-2.png",
    text: "This playful term perfectly reflects the effortless way you earn rewards with PayNback.",
  },
  {
    id: 2,
    imageSrc: "/images/page-jammy-img-3.png",
    text: "Just like jamming to your favorite music, using PayNback is a fun and easy way to earn rewards on every transaction...",
  },
  {
    id: 3,
    imageSrc: "/images/page-jammy-img-4.png",
    text: "...even without making a direct payment yourself.",
  },
  {
    id: 4,
    imageSrc: "/images/page-jammy-img-5.png",
    text: "Refer a friend and watch your rewards pile up passively, just like a growing jam session!",
  },
];

export default function JammyStory() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {storySegments.map((segment, index) => (
              <div
                key={segment.id}
                className={`flex flex-col gap-8 lg:gap-16 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center justify-center`}
              >
                <motion.div
                  className="w-full lg:w-1/2 flex justify-center"
                  initial={reduceMotion ? undefined : { opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square drop-shadow-[0_20px_40px_rgba(78,168,233,0.15)] hover:scale-105 transition-transform duration-500">
                    <Image
                      src={segment.imageSrc}
                      alt={`Jammy Story Part ${segment.id}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="w-full lg:w-1/2 flex items-center"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="text-center lg:text-left w-full px-4 sm:px-8 lg:px-12">
                    <div className="relative inline-block">
                      <span className="absolute -top-10 -left-6 text-6xl text-[#4EA8E9] opacity-20 hidden md:block font-serif">
                        &quot;
                      </span>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight text-gray-800">
                        {segment.text}
                      </p>
                      <span className="absolute -bottom-10 -right-6 text-6xl text-[#4EA8E9] opacity-20 hidden md:block font-serif">
                        &quot;
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
