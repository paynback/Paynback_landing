// src/components/sections/HowItWorks/HowItWorks.jsx
'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    id: 1,
    iconSrc: '/Icons/stepstojoin_1.png',
    title: 'Get a referral link from a friend.',
  },
  {
    id: 2,
    iconSrc: '/Icons/steps2join_2.png',
    title: 'Download the PayNback app from Play Store & App Store',
  },
  {
    id: 3,
    iconSrc: '/Icons/steps2join_3.png',
    title: 'Open the referral link to start your simple signup.',
  },
]

const STEP_ARROWS = ['/Icons/steps2join_arrow1.png', '/Icons/stepstojoin_arrow2.png']

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
}

const arrowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
}

export function HowItWorks() {
  return (
    <section className="steps-section">
      {/* Heading */}
      <div className="steps-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="steps-title"
        >
          Steps to join in{' '}
          <span style={{ color: '#1d70b8' }}>PayNback?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="steps-subtitle"
        >
          Follow these simple steps to quickly download and install the app on your device.
        </motion.p>
      </div>

      {/* Steps row */}
      <motion.div
        className="steps-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {STEPS.map((step, i) => (
          <div key={step.id} className="steps-item-wrapper">

            {/* Step card */}
            <motion.div variants={itemVariants} className="steps-card">
              {/* Icon circle */}
              <div className="steps-icon-circle">
                <img className="steps-icon-image" src={step.iconSrc} alt={`Step ${step.id} icon`} />

                {/* Step number badge */}
                <div className="steps-badge">
                  {step.id}
                </div>
              </div>

              {/* Label */}
              <p className="steps-label">
                {step.id}.&nbsp;{step.title}
              </p>
            </motion.div>

            {/* Curved dashed arrow between steps */}
            {i < STEPS.length - 1 && (
              <motion.div
                variants={arrowVariants}
                className={`steps-arrow ${i === 0 ? 'steps-arrow-top' : 'steps-arrow-bottom'}`}
              >
                <img
                  className="steps-arrow-image"
                  src={STEP_ARROWS[i]}
                  alt={`Step ${i + 1} to step ${i + 2} arrow`}
                />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>

      <style>{`
        .steps-section {
          background: #fff;
          padding: 6.5rem 1.5rem 8rem;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .steps-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .steps-title {
          font-size: 2.25rem;
          font-weight: 500;
          color: #1e293b;
          letter-spacing: -0.025em;
          margin: 0 0 0.75rem;
          line-height: 1.15;
        }

        .steps-subtitle {
          color: #64748b;
          font-size: 1.125rem;
          font-weight: 400;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .steps-row {
          width: fit-content;
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0.75rem;
        }

        .steps-item-wrapper {
          display: contents;
        }

        .steps-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 0 0 250px;
        }

        .steps-icon-circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f9fd4, #1d70b8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 8px 30px rgba(29,112,184,0.35);
          position: relative;
          flex-shrink: 0;
        }

        .steps-icon-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .steps-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #0f172a;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
        }

        .steps-label {
          font-size: 1.05rem;
          font-weight: 500;
          color: #1e293b;
          line-height: 1.55;
          margin: 0;
          max-width: 230px;
        }

        .steps-arrow {
          flex: 0 0 auto;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 40px;
        }

        .steps-arrow-top {
          margin-top: 10px;
        }

        .steps-arrow-bottom {
          margin-top: 70px;
        }

        .steps-arrow-image {
          width: 300px;
          height: 150px;
          object-fit: contain;
          display: block;
          filter: saturate(1.35) contrast(1.2) drop-shadow(0 6px 12px rgba(16, 78, 120, 0.35));
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .steps-section { padding: 4.75rem 1rem 5.5rem; }
          .steps-header { margin-bottom: 3rem; }
          .steps-title { font-size: 1.75rem; }
          .steps-subtitle { font-size: 1rem; }
          .steps-card { flex: 0 0 210px; }
          .steps-icon-circle { width: 75px; height: 75px; font-size: 1.6rem; }
          .steps-label { font-size: 0.95rem; max-width: 200px; }
          .steps-arrow-top { margin-top: 6px; }
          .steps-arrow-bottom { margin-top: 56px; }
          .steps-arrow-image { width: 220px; height: 110px; }
        }

        /* ── Mobile (max-width: 640px) ── */
        @media (max-width: 640px) {
          .steps-section { padding: 3.5rem 1rem 4.5rem; }
          .steps-header { margin-bottom: 2rem; }
          .steps-title { font-size: 1.4rem; }
          .steps-subtitle { font-size: 0.9rem; }
          .steps-row {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .steps-item-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .steps-card {
            flex: none;
            width: 100%;
            max-width: 320px;
          }
          .steps-arrow {
            margin-top: 0;
            transform: rotate(90deg);
          }
          .steps-arrow-top,
          .steps-arrow-bottom {
            margin-top: 0;
          }
          .steps-arrow { min-width: 0; }
          .steps-arrow-image {
            width: 170px;
            height: 85px;
          }
          .steps-icon-circle {
            width: 70px; height: 70px;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .steps-label { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  )
}