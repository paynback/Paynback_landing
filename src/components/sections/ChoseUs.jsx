// src/components/sections/WhyChoose/WhyChoose.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

// import trophy from '../public/images/trophy.png'

const FEATURES = [
  {
    id: 1,
    title: 'Exclusive Discounts',
    description:
      'payNback rewards every purchase with points that can be redeemed for cashback, gift cards, and exclusive benefits — adding more value to every transaction.',
    image: '/images/trophy.png', // replace with your actual image
    imageAlt: 'Exclusive discounts trophy',
    tag: 'Discounts',
  },
  {
    id: 2,
    title: 'Rewarding Points System',
    description:
      'Earn points on every rupee you spend. Watch your rewards grow and redeem them instantly for cashback or vouchers at your favourite brands.',
    image: '/images/rewards.png',
    imageAlt: 'Rewards points',
    tag: 'Rewards',
  },
  {
    id: 3,
    title: 'Modern and User-Friendly Experience',
    description:
      'A clean, intuitive interface designed for everyone. Manage payments, track spending, and access all features with just a few taps.',
    image: '/images/ux.png',
    imageAlt: 'User experience',
    tag: 'Experience',
  },
  {
    id: 4,
    title: 'Secure and Reliable Transactions',
    description:
      'Bank-grade encryption and real-time fraud monitoring keep every transaction safe. Your money and data are always protected.',
    image: '/images/secure.png',
    imageAlt: 'Security shield',
    tag: 'Security',
  },
  {
    id: 5,
    title: 'Personalized Recommendations',
    description:
      'Smart AI analyses your spending habits to surface offers and deals tailored specifically to you — saving you money without the search.',
    image: '/images/ai.png',
    imageAlt: 'Personalized AI',
    tag: 'Smart',
  },
]

export function WhyChoose() {
  const [active, setActive] = useState(0)
  const current = FEATURES[active]

  return (
    <section style={{
      background: '#f1f5f9',
      padding: '5rem 1.5rem',
      fontFamily: "'Poppins', sans-serif",
    }}>
      {/* Heading */}
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.25rem',
        fontWeight: 500,
        color: '#1e293b',
        marginBottom: '3rem',
        letterSpacing: '-0.025em',
        lineHeight: 1.15,
      }}>
        Why Choose{' '}
        <span style={{ color: '#1d70b8' }}>payNback?</span>
      </h2>

      {/* 3-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '1.25rem',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'stretch',
      }}>

        {/* --- Col 1: Feature list --- */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          height: '480px',
        }}>
          {FEATURES.map((f, i) => (
            <button
              key={f.id}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '1.25rem 2rem',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '1.05rem',
                fontWeight: active === i ? 600 : 500,
                color: active === i ? '#fff' : '#1e293b',
                background: active === i
                  ? '#1d70b8'
                  : 'transparent',
                transition: 'all 0.2s ease',
              }}
            >
              {f.id}.&nbsp;&nbsp;{f.title}
            </button>
          ))}
        </div>

        {/* --- Col 2: Description card --- */}
        <div style={{
          background: '#fff',
          borderRadius: '20px',
          padding: '2rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          height: '480px',
        }}>
          <div>
            {/* Animated tag */}
            <span
              key={current.tag}
              style={{
                display: 'inline-block',
                background: '#eff6ff',
                color: '#2563eb',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                marginBottom: '1rem',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                animation: 'fadeSlideIn 0.3s ease',
              }}
            >
              {current.tag}
            </span>

            <p
              key={current.id}
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.65,
                color: '#64748b',
                fontWeight: 400,
                animation: 'fadeSlideIn 0.3s ease',
              }}
            >
              {current.description}
            </p>
          </div>

          {/* Bottom label */}
          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
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
        </div>

        {/* --- Col 3: Image card --- */}
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          background: '#cbd5e1',
          boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
          height: '480px',
          position: 'relative',
        }}>
          {/* Swap image based on active — use next/image in real project */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            }}
          >
            <Image 
              src="/Icons/trophy.png" 
              alt="Why Choose payNback Trophy"
              width={280}
              height={280}
              style={{ 
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
              }} 
            />
          </div>

          {/* Overlay label bottom */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            padding: '1rem 1.25rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
          }}>
            <span
              key={current.title}
              style={{
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                animation: 'fadeSlideIn 0.3s ease',
              }}
            >
              {current.title}
            </span>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}