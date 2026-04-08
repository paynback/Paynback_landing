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
  const rotationDuration = 40

  return (
    <section className="activities-section">
      {/* Container for the Orbital System */}
      <div className="activities-orbit-container">
        
        {/* Orbit Rotating Container */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
          className="activities-orbit-spinner"
        >
          {/* Outer Ring Image */}
          <div className="activities-outer-ring">
            <Image
              src="/Icons/outer_cirlce_only.png"
              alt="Outer Orbital Circle Line"
              fill
              className="object-contain"
            />
          </div>

          {/* Stat Cards */}
          {STAT_CARDS.map((stat) => {
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
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
                  className="activities-stat-card"
                >
                  <span style={{ color: stat.color }} className="activities-stat-value">
                    {stat.value}
                  </span>
                  <span className="activities-stat-label">
                    {stat.label}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Inner Circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="activities-inner-circle"
        >
          <Image
            src="/Icons/inner_circle.png"
            alt="Inner Orbital Circle"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Center Character (Jaami) */}
        <div className="activities-center">
          <div className="activities-mascot">
             <Image
                src="/Icons/jaami.png"
                alt="Jaami character"
                fill
                className="object-cover"
              />
          </div>
          <div className="activities-mascot-glow" />
        </div>

        {/* Static Branding Image */}
        <div className="activities-branding">
          <div className="activities-branding-img">
            <Image
              src="/Icons/enhanced_activity_status.png"
              alt="Enhanced activity status"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>

      <style>{`
        .activities-section {
          position: relative;
          width: 100%;
          padding: 6rem 0;
          background: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
        }

        .activities-orbit-container {
          position: relative;
          width: 100%;
          max-width: 56rem;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activities-orbit-spinner {
          position: absolute;
          width: 75%;
          height: 75%;
          z-index: 20;
          pointer-events: none;
        }

        .activities-outer-ring {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.4;
        }

        .activities-stat-card {
          background: #fff;
          border-radius: 9999px;
          width: 7rem;
          height: 7rem;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #f3f4f6;
          pointer-events: auto;
          padding: 0.5rem;
          text-align: center;
        }

        .activities-stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          display: block;
          line-height: 1;
        }

        .activities-stat-label {
          color: #6b7280;
          font-size: 0.5rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: -0.025em;
          margin-top: 0.25rem;
          padding: 0 0.25rem;
        }

        .activities-inner-circle {
          position: absolute;
          width: 50%;
          height: 50%;
          z-index: 10;
          pointer-events: none;
        }

        .activities-center {
          position: relative;
          width: 15%;
          height: 15%;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activities-mascot {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          overflow: hidden;
          border: 4px solid #fff;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          background: #eff6ff;
        }

        .activities-mascot-glow {
          position: absolute;
          width: 180%;
          height: 180%;
          background: #eff6ff;
          border-radius: 9999px;
          filter: blur(48px);
          z-index: -10;
          opacity: 0.7;
        }

        .activities-branding {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          pointer-events: none;
          width: 100%;
          max-width: 420px;
        }

        .activities-branding-img {
          position: relative;
          aspect-ratio: 4 / 1;
          width: 100%;
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .activities-section { padding: 4rem 0; }
          .activities-orbit-container { max-width: 42rem; }
          .activities-stat-card { width: 5.5rem; height: 5.5rem; }
          .activities-stat-value { font-size: 1.15rem; }
          .activities-stat-label { font-size: 0.45rem; }
          .activities-branding { max-width: 320px; }
        }

        /* ── Mobile (max-width: 640px) ── */
        @media (max-width: 640px) {
          .activities-section { padding: 2.5rem 0; }
          .activities-orbit-container { max-width: 22rem; }
          .activities-stat-card {
            width: 3.5rem;
            height: 3.5rem;
            box-shadow: 0 4px 20px rgb(0 0 0 / 0.15);
          }
          .activities-stat-value { font-size: 0.75rem; }
          .activities-stat-label { font-size: 0.3rem; letter-spacing: -0.04em; }
          .activities-branding { max-width: 200px; }
          .activities-mascot { border-width: 2px; }
        }
      `}</style>
    </section>
  )
}
