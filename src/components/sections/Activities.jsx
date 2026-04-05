'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const STAT_CARDS = [
  { id: 1, value: "93", label: "Happy Customers", color: "#FBBF24", angle: -90 },
  { id: 2, value: "1000", label: "Tech-Savvy Users", color: "#4C1D95", angle: -30 },
  { id: 3, value: "453", label: "Smart Influencers", color: "#EF4444", angle: 30 },
  { id: 4, value: "1000", label: "Search Listing", color: "#2563EB", angle: 90 },
  { id: 5, value: "93", label: "Referral Bonus", color: "#C084FC", angle: 150 },
  { id: 6, value: "276", label: "Downloads", color: "#10B981", angle: 210 },
]

export default function Activities() {
  const rotationDuration = 40 // Smooth, steady rotation

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden flex flex-col items-center justify-center font-['Poppins',sans-serif]">
      {/* Container for the Orbital System */}
      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
        
        {/* Orbit Rotating Container - Ring and Cards rotate together */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
          className="absolute w-[75%] h-[75%] z-20 pointer-events-none"
        >
          {/* Outer Ring Image - Now inside the rotating container */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/Icons/outer_cirlce_only.png"
              alt="Outer Orbital Circle Line"
              fill
              className="object-contain"
            />
          </div>

          {/* Placing Stat Cards along the outer ring */}
          {STAT_CARDS.map((stat) => {
            // Radius 40% ensures cards are perfectly centered on the line
            const radius = 40; 
            const x = 50 + radius * Math.cos((stat.angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((stat.angle * Math.PI) / 180);

            return (
              <div
                key={stat.id}
                style={{
                  position: 'absolute',
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Counter-rotating card - SMALLER and PERFECT ROUND */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
                  className="bg-white rounded-full w-24 h-24 md:w-28 md:h-28 shadow-2xl flex flex-col items-center justify-center border border-gray-100 pointer-events-auto p-2 text-center"
                >
                  <span style={{ color: stat.color }} className="text-xl md:text-2xl font-extrabold block leading-none">
                    {stat.value}
                  </span>
                  <span className="text-gray-500 text-[8px] md:text-[10px] font-semibold uppercase tracking-tighter mt-1 px-1">
                    {stat.label}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Inner Circle - Anti-clockwise Rotation */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[50%] h-[50%] z-10 pointer-events-none"
        >
          <Image
            src="/Icons/inner_circle.png"
            alt="Inner Orbital Circle"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Center Character (Jaami) - Static */}
        <div className="relative w-[15%] h-[15%] z-30 flex items-center justify-center">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-blue-50">
             <Image
                src="/Icons/jaami.png"
                alt="Jaami character"
                fill
                className="object-cover"
              />
          </div>
          {/* Glow effect behind mascot */}
          <div className="absolute w-[180%] h-[180%] bg-blue-50 rounded-full blur-3xl -z-10 opacity-70" />
        </div>

        {/* Static Branding Image - Positioned ON TOP of the outer circle at the bottom */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-[320px] md:max-w-[420px]">
          <div className="relative aspect-[4/1] w-full">
            <Image
              src="/Icons/enhanced_activity_status.png"
              alt="Enhanced activity status"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
