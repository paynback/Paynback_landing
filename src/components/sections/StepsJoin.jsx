// src/components/sections/HowItWorks/HowItWorks.jsx
'use client'

import { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    id: 1,
    icon: '👥',
    title: 'Get a referral link from a friend.',
  },
  {
    id: 2,
    icon: '⬇️',
    title: 'Download the payNback app from Play Store & App Store',
  },
  {
    id: 3,
    icon: '🔗',
    title: 'Open the referral link to start your simple signup.',
  },
]

export function HowItWorks() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  // Trigger animation when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="steps-section">
      {/* Heading */}
      <div className="steps-header">
        <h2 className="steps-title">
          Steps to join in{' '}
          <span style={{ color: '#1d70b8' }}>payNback?</span>
        </h2>
        <p className="steps-subtitle">
          Follow these simple steps to quickly download and install the app on your device.
        </p>
      </div>

      {/* Steps row */}
      <div className="steps-row">
        {STEPS.map((step, i) => (
          <div key={step.id} className="steps-item-wrapper">

            {/* Step card */}
            <div
              className="steps-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`,
              }}
            >
              {/* Icon circle */}
              <div className="steps-icon-circle">
                {step.icon}

                {/* Step number badge */}
                <div className="steps-badge">
                  {step.id}
                </div>
              </div>

              {/* Label */}
              <p className="steps-label">
                {step.id}.&nbsp;{step.title}
              </p>
            </div>

            {/* Curved dashed arrow between steps */}
            {i < STEPS.length - 1 && (
              <div
                className="steps-arrow"
                style={{
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.6s ease ${i * 0.2 + 0.4}s`,
                }}
              >
                <CurvedArrow flip={i % 2 === 1} />
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .steps-section {
          background: #fff;
          padding: 5rem 1.5rem 6rem;
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
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .steps-item-wrapper {
          display: contents;
        }

        .steps-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 0 0 220px;
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
          max-width: 180px;
        }

        .steps-arrow {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-top: 40px;
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .steps-section { padding: 3.5rem 1rem 4rem; }
          .steps-header { margin-bottom: 3rem; }
          .steps-title { font-size: 1.75rem; }
          .steps-subtitle { font-size: 1rem; }
          .steps-card { flex: 0 0 180px; }
          .steps-icon-circle { width: 75px; height: 75px; font-size: 1.6rem; }
          .steps-label { font-size: 0.95rem; max-width: 160px; }
          .steps-arrow svg { width: 80px; height: 40px; }
        }

        /* ── Mobile (max-width: 640px) ── */
        @media (max-width: 640px) {
          .steps-section { padding: 2.5rem 1rem 3rem; }
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
            max-width: 280px;
          }
          .steps-arrow {
            margin-top: 0;
            transform: rotate(90deg);
          }
          .steps-arrow svg {
            width: 60px;
            height: 30px;
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

// SVG curved dashed arrow
function CurvedArrow({ flip = false }) {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? 'scaleY(-1)' : 'none',
        overflow: 'visible',
      }}
    >
      <path
        d="M 10 45 Q 60 5 110 45"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeDasharray="6 5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 103 38 L 110 45 L 101 47"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}