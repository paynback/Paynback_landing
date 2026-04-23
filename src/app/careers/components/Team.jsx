"use client";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function Team() {
  const reduceMotion = useReducedMotion();
  const teamMembers = [
    { name: "Danniel Rand", role: "UI/UX Designer", image: "/images/founder-image.png" },
    { name: "Danniel Rand", role: "UI/UX Designer", image: "/images/founder-image.png" },
    { name: "Danniel Rand", role: "UI/UX Designer", image: "/images/founder-image.png" },
    { name: "Danniel Rand", role: "UI/UX Designer", image: "/images/founder-image.png" },
  ];

  const openings = [
    { title: "React Native Developer", location: "Kochi", slug: "react-native-developer" },
    { title: "React Native Developer", location: "Kochi", slug: "react-native-developer" },
  ];

  const sectionMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  const cardMotion = (index) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.65,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          },
        };

  return (
    <section className="py-28 bg-background min-h-[calc(100vh-70px)] flex items-center">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Team Section */}
        <motion.div className="mb-24" {...sectionMotion}>
          <h2 className="text-2xl md:text-5xl font-medium mb-4 text-foreground">
            <span className="text-[#0964BC]">Meet</span> our <span className="text-[#0964BC]">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-[15px] sm:text-[16px] leading-[1.8] font-normal mb-12">
            Be part of a culture that values creativity, collaboration, and innovation.
          </p>
          
          <div className="flex sm:grid flex-nowrap overflow-x-auto sm:overflow-x-visible pb-6 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4 gap-5 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden group bg-black/5 rounded-2xl aspect-[4/5] min-w-[75vw] sm:min-w-0 shrink-0 snap-center"
                {...cardMotion(index)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay card */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl text-center shadow-lg transition-all duration-300">
                  <h3 className="text-white font-semibold text-[15px] leading-tight">{member.name}</h3>
                  <p className="text-gray-200 text-[12px] font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Openings Section */}
        <motion.div className="pb-40" {...sectionMotion}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {openings.map((job, index) => (
              <Link href={`/careers/${job.slug}`} key={index}>
                <motion.div 
                  className="p-5 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between min-h-[140px]"
                  {...cardMotion(index + 1)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{job.title}</h3>
                    <Plus className="w-5 h-5 text-foreground shrink-0" strokeWidth={2} />
                  </div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mt-6">{job.location}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
