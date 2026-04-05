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
    <section
      ref={ref}
      style={{
        background: '#fff',
        padding: '5rem 1.5rem 6rem',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 500,
          color: '#1e293b',
          letterSpacing: '-0.025em',
          margin: '0 0 0.75rem',
          lineHeight: 1.15,
        }}>
          Steps to join in{' '}
          <span style={{ color: '#1d70b8' }}>payNback?</span>
        </h2>
        <p style={{
          color: '#64748b',
          fontSize: '1.125rem',
          fontWeight: 400,
          maxWidth: '520px',
          margin: '0 auto',
          lineHeight: 1.65,
        }}>
          Follow these simple steps to quickly download and install the app on your device.
        </p>
      </div>

      {/* Steps row */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>

        {STEPS.map((step, i) => (
          <div key={step.id} style={{ display: 'contents' }}>

            {/* Step card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: '0 0 220px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`,
              }}
            >
              {/* Icon circle */}
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f9fd4, #1d70b8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 30px rgba(29,112,184,0.35)',
                position: 'relative',
                flexShrink: 0,
              }}>
                {step.icon}

                {/* Step number badge */}
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#0f172a',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                }}>
                  {step.id}
                </div>
              </div>

              {/* Label */}
              <p style={{
                fontSize: '1.05rem',
                fontWeight: 500,
                color: '#1e293b',
                lineHeight: 1.55,
                margin: 0,
                maxWidth: '180px',
              }}>
                {step.id}.&nbsp;{step.title}
              </p>
            </div>

            {/* Curved dashed arrow between steps */}
            {i < STEPS.length - 1 && (
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '40px',   // vertically center with icon circles
                opacity: visible ? 1 : 0,
                transition: `opacity 0.6s ease ${i * 0.2 + 0.4}s`,
              }}>
                <CurvedArrow flip={i % 2 === 1} />
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .how-steps { flex-direction: column; align-items: center; }
          .how-arrow { display: none; }
        }
      `}</style>
    </section>
  )
}

// SVG curved dashed arrow — flip prop mirrors it vertically (arrow curves down instead of up)
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
      {/* Dashed curved path */}
      <path
        d="M 10 45 Q 60 5 110 45"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeDasharray="6 5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrowhead at end of curve */}
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