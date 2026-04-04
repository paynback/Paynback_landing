// src/components/sections/Hero/Hero.jsx
'use client'

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Star, Info, Download } from 'lucide-react'

// --- Orbital icon data ---
const ORBITAL_ICONS = [
  { id: 'security', emoji: "/Icons/blue_lock.png", angle: 20, orbitRadius: 220, duration: 14, size: 72 },
  { id: 'gift_red', emoji: "/Icons/Gift_red.png", angle: 100, orbitRadius: 260, duration: 18, size: 60 },
  { id: 'coin_gold', emoji: "/Icons/gold_coin.png", angle: 190, orbitRadius: 200, duration: 16, size: 56 },
  { id: 'shopping', emoji: "/Icons/Green_shop_bag.png", angle: 285, orbitRadius: 240, duration: 20, size: 64 },
  { id: 'location', emoji: "/Icons/lcoaiton_red.png", angle: 145, orbitRadius: 230, duration: 22, size: 52 },
  { id: 'share', emoji: "/Icons/share_clip_blue.png", angle: 340, orbitRadius: 260, duration: 15, size: 50 },
]

// Floating hollow rectangles config — mimics your reference image
const FLOATING_RECTS = [
  // Top-left cluster
  { x: -18, y: 55, w: 100, h: 72, rx: 10, opacity: 0.22, strokeW: 1.2 },
  { x: -6, y: 67, w: 76, h: 50, rx: 7, opacity: 0.12, strokeW: 0.8 },
  // Mid-left
  { x: -22, y: 185, w: 92, h: 66, rx: 9, opacity: 0.20, strokeW: 1.1 },
  { x: -10, y: 197, w: 68, h: 44, rx: 6, opacity: 0.10, strokeW: 0.7 },
  // Lower-left
  { x: 24, y: 310, w: 82, h: 60, rx: 9, opacity: 0.17, strokeW: 1.0 },
  { x: 35, y: 320, w: 60, h: 40, rx: 6, opacity: 0.09, strokeW: 0.6 },
  // Top-right cluster
  { x: 'calc(100% - 88px)', y: 50, w: 100, h: 72, rx: 10, opacity: 0.22, strokeW: 1.2 },
  { x: 'calc(100% - 76px)', y: 62, w: 76, h: 50, rx: 7, opacity: 0.12, strokeW: 0.8 },
  // Mid-right
  { x: 'calc(100% - 80px)', y: 188, w: 92, h: 66, rx: 9, opacity: 0.20, strokeW: 1.1 },
  { x: 'calc(100% - 68px)', y: 200, w: 68, h: 44, rx: 6, opacity: 0.10, strokeW: 0.7 },
  // Lower-right
  { x: 'calc(100% - 92px)', y: 315, w: 82, h: 60, rx: 9, opacity: 0.17, strokeW: 1.0 },
  { x: 'calc(100% - 80px)', y: 327, w: 60, h: 40, rx: 6, opacity: 0.09, strokeW: 0.6 },
  // Top-center subtle pair
  { x: 'calc(50% - 160px)', y: 10, w: 60, h: 44, rx: 7, opacity: 0.11, strokeW: 0.8 },
  { x: 'calc(50% + 100px)', y: 16, w: 55, h: 38, rx: 6, opacity: 0.09, strokeW: 0.7 },
]

export function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #4f9fd4 0%, #72b8e8 50%, #a2d4f5 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        padding: '2rem 1rem 0',
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      {/* ── LIGHT BEAM — Top Left ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '65%',
        height: '100%',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      {/* Inner tighter beam left for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '38%',
        height: '100%',
        background: 'linear-gradient(140deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── LIGHT BEAM — Top Right ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '65%',
        height: '100%',
        background: 'linear-gradient(225deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />
      {/* Inner tighter beam right for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '38%',
        height: '100%',
        background: 'linear-gradient(220deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* ── FLOATING HOLLOW RECTANGLES ── */}
      {FLOATING_RECTS.map((rect, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: typeof rect.x === 'string' ? rect.x : `${rect.x}px`,
            top: `${rect.y}px`,
            width: `${rect.w}px`,
            height: `${rect.h}px`,
            borderRadius: `${rect.rx}px`,
            border: `${rect.strokeW}px solid rgba(255,255,255,${rect.opacity})`,
            background: 'transparent',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      ))}

      {/* Fade White Overlay (bottom) */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '240px',
        background: 'linear-gradient(to top, #fff 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.1) 80%, transparent 100%)',
        pointerEvents: 'none', zIndex: 15,
      }} />

      {/* ── NAVBAR ── */}
      <nav style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.25rem 5rem',
        zIndex: 20,
      }}>
        <div style={{ position: 'relative' }}>
          <Image
            src="/Icons/Paynback_logo.png"
            alt="Paynback Logo"
            width={160}
            height={48}
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            priority
          />
        </div>
        <button className='text-blue-800' style={{
          background: '#fff', border: 'none',
          borderRadius: '999px', padding: '0.6rem 1.4rem',
          fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        }}>
          <Download className="w-4 h-4" /> Download
        </button>
      </nav>

      {/* ── TEXT CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', zIndex: 10, marginTop: '4rem' }}
      >
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)',
          borderRadius: '999px', padding: '0.35rem 0.9rem',
          fontSize: '0.8rem', color: '#fff', fontWeight: 500,
          marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.35)',
        }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-white" />
          ))} &nbsp;4/5 from 1k reviews
        </div>

        <h1 style={{
          fontSize: 'clamp(1rem, 4vw, 2.25rem)',
          fontWeight: 500, color: '#fff',
          lineHeight: 1.15,
          maxWidth: '800px', margin: '0 auto 1rem',
          textShadow: '0 2px 20px rgba(0,80,180,0.2)',
        }}>
          Banking Made Simple, Secure and Smart
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.85)', fontSize: '1rem',
          maxWidth: '720px', margin: '0 auto 1.75rem', lineHeight: 1.65,
        }}>
          Sign up and become a member today to get exclusive offers in your area and other benefits.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
          <span className='flex gap-1' style={{ color: 'white', fontSize: '1rem', fontWeight: 500 }}>
            <Info className="w-5 h-5 opacity-80" /> App Available For
          </span>
          <div style={{ position: 'relative', width: '280px', height: '50px' }}>
            <Image
              src="/Icons/app&play_store_icons_hero.png"
              alt="Available on App Store and Google Play"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </motion.div>

      {/* ── PHONE + ORBITAL SYSTEM ── */}
      <div style={{
        position: 'relative', marginTop: '2.5rem',
        width: '520px', height: '420px',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {/* Orbital rings */}
        {[200, 240, 265].map((r, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: r * 2, height: r * 2,
            marginLeft: -r, marginTop: -r,
            borderRadius: '50%',
            border: '1px dashed rgba(255,255,255,0.18)',
            pointerEvents: 'none',
          }} />
        ))}

        {/* Orbiting icons */}
        {ORBITAL_ICONS.map((icon) => (
          <OrbitalIcon key={icon.id} icon={icon} reduced={!!prefersReduced} />
        ))}

        {/* Phone */}
        <motion.div
          initial={{ y: prefersReduced ? 0 : 160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            width: '550px',
            height: '550px',
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <Image
            src="/Icons/Hand2.png"
            alt="Phone Mockup"
            fill
            sizes="550px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle))); }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) + 360deg))); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-6px) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbital-icon { animation: none !important; }
        }
      `}</style>
    </section>
  )
}

// Orbital icon component
function OrbitalIcon({ icon, reduced }) {
  const startAngleDeg = icon.angle

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 + (icon.id.length % 5) * 0.1, type: 'spring' }}
      className="orbital-icon"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: icon.size,
        height: icon.size,
        marginLeft: -icon.size / 2,
        marginTop: -icon.size / 2,
        ['--start-angle']: `${startAngleDeg}deg`,
        ['--radius']: `${icon.orbitRadius}px`,
        animation: reduced ? 'none' : `orbit ${icon.duration}s linear infinite`,
        zIndex: 20,
      }}
    >
      <motion.div
        style={{
          width: '100%', height: '100%',
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderRadius: '999px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
          boxShadow: '0 4px 20px rgba(0,60,180,0.18)',
          border: '1px solid rgba(255,255,255,0.8)',
          padding: '0 8px',
          fontSize: icon.size * 0.35,
          fontWeight: 600,
          color: '#1e293b',
          whiteSpace: 'nowrap',
          animation: `iconFloat ${2 + (icon.id.length % 3)}s ease-in-out infinite`,
          animationDelay: `${(icon.id.length % 4) * 0.5}s`,
        }}
      >
        {typeof icon.emoji === 'string' && icon.emoji.startsWith('/') ? (
          <div style={{ position: 'relative', width: `${icon.size * 0.75}px`, height: `${icon.size * 0.75}px`, flexShrink: 0 }}>
            <Image
              src={icon.emoji}
              alt={icon.id}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        ) : (
          <span style={{ fontSize: icon.size * 0.4 }}>{icon.emoji}</span>
        )}
      </motion.div>

      <motion.div>

      </motion.div>
    </motion.div>
  )
}