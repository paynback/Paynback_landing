// src/components/sections/WhyChoose/WhyChoose.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import trophyImage from '../../../public/Icons/trophy.png'

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}
const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
}

// import trophy from '../public/images/trophy.png'

const FEATURES = [
  {
    id: 1,
    title: 'Exclusive Discounts',
    description:
      'payNback rewards every purchase with points that can be redeemed for cashback, gift cards, and exclusive benefits — adding more value to every transaction.',
    image: '/Icons/trophy.png',
    imageAlt: 'Exclusive discounts trophy',
    tag: 'Discounts',
  },
  {
    id: 2,
    title: 'Rewarding Points System',
    description:
      'Earn points on every rupee you spend. Watch your rewards grow and redeem them instantly for cashback or vouchers at your favourite brands.',
    image: '/Icons/trophy.png',
    imageAlt: 'Rewards points',
    tag: 'Rewards',
  },
  {
    id: 3,
    title: 'Modern and User-Friendly Experience',
    description:
      'A clean, intuitive interface designed for everyone. Manage payments, track spending, and access all features with just a few taps.',
    image: '/Icons/trophy.png',
    imageAlt: 'User experience',
    tag: 'Experience',
  },
  {
    id: 4,
    title: 'Secure and Reliable Transactions',
    description:
      'Bank-grade encryption and real-time fraud monitoring keep every transaction safe. Your money and data are always protected.',
    image: '/Icons/trophy.png',
    imageAlt: 'Security shield',
    tag: 'Security',
  },
  {
    id: 5,
    title: 'Personalized Recommendations',
    description:
      'Smart AI analyses your spending habits to surface offers and deals tailored specifically to you — saving you money without the search.',
    image: '/Icons/trophy.png',
    imageAlt: 'Personalized AI',
    tag: 'Smart',
  },
]

export function WhyChoose() {
  const [active, setActive] = useState(0)
  const current = FEATURES[active]

  return (
    <section className="why-section">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="why-heading"
      >
        Why Choose{' '}
        <span style={{ color: '#1d70b8' }}>payNback?</span>
      </motion.h2>

      {/* 3-column grid */}
      <motion.div 
        className="why-grid"
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >

        {/* --- Col 1: Feature list --- */}
        <motion.div variants={itemVars} className="why-feature-list">
          {FEATURES.map((f, i) => (
            <button
              key={f.id}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`why-feature-btn ${active === i ? 'why-feature-btn--active' : ''}`}
            >
              {f.id}.&nbsp;&nbsp;{f.title}
            </button>
          ))}
        </motion.div>

        {/* --- Col 2: Description card --- */}
        <motion.div variants={itemVars} className="why-desc-card">
          <div>
            <AnimatePresence mode="wait">
              {/* Animated tag */}
              <motion.span
                key={current.tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="why-tag"
              >
                {current.tag}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                className="why-desc-text"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bottom label */}
          <div className="why-dots-row">
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>
              Services
            </span>
            <div style={{ flex: 1, height: '1px', background: '#e2e8f0' }} />
            {/* Step dots */}
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {FEATURES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === active ? '18px' : '6px',
                    height: '6px',
                    borderRadius: '999px',
                    background: i === active ? '#2563eb' : '#cbd5e1',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Col 3: Image card --- */}
        <motion.div variants={itemVars} className="why-image-card">
          <div className="why-image-inner">
            <Image 
              src={trophyImage} 
              alt="Why Choose payNback Trophy"
              fill
              style={{ 
                objectFit: 'cover',
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
                zIndex: 0
              }} 
            />
          </div>

          {/* Overlay label bottom */}
          <div className="why-image-overlay">
            <AnimatePresence mode="wait">
              <motion.span
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="why-image-label"
              >
                {current.title}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Keyframes & Responsive */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .why-section {
          background: #f1f5f9;
          padding: 5rem 1.5rem;
          font-family: 'Poppins', sans-serif;
        }

        .why-heading {
          text-align: center;
          font-size: 2.25rem;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 3rem;
          letter-spacing: -0.025em;
          line-height: 1.15;
        }

        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.25rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }

        .why-feature-list {
          background: #fff;
          border-radius: 20px;
          padding: 0.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          overflow: hidden;
          min-height: 480px;
        }

        .why-feature-btn {
          width: 100%;
          text-align: left;
          padding: 1.25rem 2rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-family: inherit;
          font-size: 1.05rem;
          font-weight: 500;
          color: #1e293b;
          background: transparent;
          transition: all 0.2s ease;
        }
        .why-feature-btn--active {
          font-weight: 600;
          color: #fff;
          background: #1d70b8;
        }

        .why-desc-card {
          background: #fff;
          border-radius: 20px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          min-height: 480px;
        }

        .why-tag {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          animation: fadeSlideIn 0.3s ease;
        }

        .why-desc-text {
          font-size: 1.125rem;
          line-height: 1.65;
          color: #64748b;
          font-weight: 400;
          animation: fadeSlideIn 0.3s ease;
        }

        .why-dots-row {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .why-image-card {
          border-radius: 20px;
          overflow: hidden;
          background: #cbd5e1;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          min-height: 480px;
          position: relative;
        }

        .why-image-inner {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
          animation: fadeSlideIn 0.35s ease;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
        }

        .why-image-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem 1.25rem 1.25rem;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          z-index: 10;
        }

        .why-image-label {
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          animation: fadeSlideIn 0.3s ease;
          display: block;
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .why-section { padding: 3.5rem 1rem; }
          .why-heading { font-size: 1.75rem; margin-bottom: 2rem; }
          .why-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .why-feature-list { min-height: auto; }
          .why-desc-card { min-height: auto; }
          .why-image-card {
            min-height: 360px;
            grid-column: 1 / -1;
          }
          .why-feature-btn { padding: 1rem 1.5rem; font-size: 0.95rem; }
          .why-desc-text { font-size: 1rem; }
        }

        /* ── Mobile (max-width: 640px) ── */
        @media (max-width: 640px) {
          .why-section { padding: 2.5rem 0.75rem; }
          .why-heading { font-size: 1.5rem; margin-bottom: 1.5rem; }
          .why-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .why-feature-list {
            min-height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            border-radius: 14px;
          }
          .why-feature-btn {
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
            flex: 1 1 auto;
            text-align: center;
            min-width: 0;
          }
          .why-desc-card {
            min-height: auto;
            padding: 1.5rem 1.25rem;
            border-radius: 14px;
          }
          .why-desc-text { font-size: 0.95rem; }
          .why-image-card {
            min-height: 260px;
            border-radius: 14px;
          }
          .why-image-inner { font-size: 4rem; }
        }
      `}</style>
    </section>
  )
}