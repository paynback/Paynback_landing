'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const STAT_CARDS = [
  { id: 1, value: 93, label: "Happy Customers", color: "#FBBF24", angle: -90 },
  { id: 2, value: 1000, label: "Tech-Savvy Users", color: "#4C1D95", angle: -30 },
  { id: 3, value: 453, label: "Smart Influencers", color: "#EF4444", angle: 30 },
  { id: 4, value: 1000, label: "Search Listing", color: "#2563EB", angle: 90 },
  { id: 5, value: 93, label: "Referral Bonus", color: "#C084FC", angle: 150 },
  { id: 6, value: 276, label: "Downloads", color: "#10B981", angle: 210 },
]

function CountUpNumber({ end, duration = 850 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setHasAnimated(true)

        const start = performance.now()
        const frame = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(end * eased))
          if (progress < 1) requestAnimationFrame(frame)
        }

        requestAnimationFrame(frame)
        observer.disconnect()
      },
      { threshold: 0.25 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [duration, end, hasAnimated])

  return <span ref={ref}>{value}</span>
}

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
            const radius = 42; 
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
                    <CountUpNumber end={stat.value} />
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
          max-width: 64rem;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activities-orbit-spinner {
          position: absolute;
          width: 82%;
          height: 82%;
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
          width: 8.25rem;
          height: 8.25rem;
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
          font-size: 1.75rem;
          font-weight: 800;
          display: block;
          line-height: 1;
        }

        .activities-stat-label {
          color: #6b7280;
          font-size: 0.56rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: -0.025em;
          margin-top: 0.25rem;
          padding: 0 0.25rem;
        }


        .activities-inner-circle {
          position: absolute;
          width: 54%;
          height: 54%;
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
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          pointer-events: none;
          width: 100%;
          max-width: 1020px;
        }

        .activities-branding-img {
          position: relative;
          aspect-ratio: 4 / 1;
          width: 100%;
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .activities-section { padding: 4rem 0; }
          .activities-orbit-container { max-width: 50rem; }
          .activities-orbit-spinner { width: 80%; height: 80%; }
          .activities-stat-card { width: 6.4rem; height: 6.4rem; }
          .activities-stat-value { font-size: 1.35rem; }
          .activities-stat-label { font-size: 0.48rem; }
          .activities-branding {
            bottom: 12%;
            max-width: 470px;
          }
        }

        /* ── Mobile (max-width: 640px) ── */
        @media (max-width: 640px) {
          .activities-section { padding: 2.5rem 0; }
          .activities-orbit-container { max-width: 26rem; }
          .activities-orbit-spinner { width: 78%; height: 78%; }
          .activities-stat-card {
            width: 4.5rem;
            height: 4.5rem;
            box-shadow: 0 4px 20px rgb(0 0 0 / 0.15);
          }
          .activities-stat-value { font-size: 0.95rem; }
          .activities-stat-label { font-size: 0.34rem; letter-spacing: -0.04em; }
          .activities-branding {
            bottom: 10%;
            max-width: 310px;
          }
          .activities-mascot { border-width: 2px; }
        }
      `}</style>
    </section>
  )
}
