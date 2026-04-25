// src/components/sections/Hero/Hero.jsx
'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Info, Download, ArrowRight, Menu, X } from 'lucide-react'

// --- Orbital icon data ---
// Repeat the icon set around the orbit so it feels continuous
const ORBIT_RADIUS = 400
const ORBIT_DURATION = 24
const ICON_SIZE = 44
const BASE_ICONS = [
  { id: 'security', emoji: "/Icons/blue_lock.png" },
  { id: 'gift_red', emoji: "/Icons/Gift_red.png" },
  { id: 'location', emoji: "/Icons/lcoaiton_red.png" },
  { id: 'coin_gold', emoji: "/Icons/gold_coin.png" },
  { id: 'shopping', emoji: "/Icons/Green_shop_bag.png" },
  { id: 'share', emoji: "/Icons/share_clip_blue.png" },
]

// 12 icons total, evenly spaced but clustered more tightly in the visible arc
const ORBITAL_ICONS = (() => {
  const startAngle = 180
  const step = 30 // 12 * 30deg = full 360deg loop with even spacing
  const repeats = 2

  const icons = []
  for (let r = 0; r < repeats; r++) {
    for (let i = 0; i < BASE_ICONS.length; i++) {
      const base = BASE_ICONS[i]
      const index = r * BASE_ICONS.length + i
      icons.push({
        id: `${base.id}_${r}`,
        emoji: base.emoji,
        angle: startAngle + index * step,
        orbitRadius: ORBIT_RADIUS,
        duration: ORBIT_DURATION,
        size: ICON_SIZE,
      })
    }
  }
  return icons
})()

// Floating hollow rectangles config
const FLOATING_RECTS = [
  { x: -18, y: 55, w: 100, h: 72, rx: 10, opacity: 0.22, strokeW: 1.2 },
  { x: -6, y: 67, w: 76, h: 50, rx: 7, opacity: 0.12, strokeW: 0.8 },
  { x: -22, y: 185, w: 92, h: 66, rx: 9, opacity: 0.20, strokeW: 1.1 },
  { x: -10, y: 197, w: 68, h: 44, rx: 6, opacity: 0.10, strokeW: 0.7 },
  { x: 24, y: 310, w: 82, h: 60, rx: 9, opacity: 0.17, strokeW: 1.0 },
  { x: 35, y: 320, w: 60, h: 40, rx: 6, opacity: 0.09, strokeW: 0.6 },
  { x: 'calc(100% - 88px)', y: 50, w: 100, h: 72, rx: 10, opacity: 0.22, strokeW: 1.2 },
  { x: 'calc(100% - 76px)', y: 62, w: 76, h: 50, rx: 7, opacity: 0.12, strokeW: 0.8 },
  { x: 'calc(100% - 80px)', y: 188, w: 92, h: 66, rx: 9, opacity: 0.20, strokeW: 1.1 },
  { x: 'calc(100% - 68px)', y: 200, w: 68, h: 44, rx: 6, opacity: 0.10, strokeW: 0.7 },
  { x: 'calc(100% - 92px)', y: 315, w: 82, h: 60, rx: 9, opacity: 0.17, strokeW: 1.0 },
  { x: 'calc(100% - 80px)', y: 327, w: 60, h: 40, rx: 6, opacity: 0.09, strokeW: 0.6 },
  { x: 'calc(50% - 160px)', y: 10, w: 60, h: 44, rx: 7, opacity: 0.11, strokeW: 0.8 },
  { x: 'calc(50% + 100px)', y: 16, w: 55, h: 38, rx: 6, opacity: 0.09, strokeW: 0.7 },
]

export function Hero() {
  const prefersReduced = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="hero-section">

      {/* ── LIGHT BEAM — Top Left ── */}
      <div className="hero-beam hero-beam--left" />
      <div className="hero-beam hero-beam--left-inner" />

      {/* ── LIGHT BEAM — Top Right ── */}
      <div className="hero-beam hero-beam--right" />
      <div className="hero-beam hero-beam--right-inner" />

      {/* ── FLOATING HOLLOW RECTANGLES ── */}
      <div className="hero-floating-rects">
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
      </div>

      {/* Fade White Overlay (bottom) */}
      <div className="hero-bottom-fade" />

      {/* ── NAVBAR ── */}
      <nav className="hero-nav">
        <div style={{ position: 'relative' }}>
          <Image
            src="/Icons/Paynback_logo.png"
            alt="PayNback Logo"
            width={160}
            height={48}
            className="hero-nav__logo"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        {/* Hamburger toggle — visible only on mobile */}
        <button
          className="hero-nav__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop nav buttons (always visible on md+) */}
        <div className={`hero-nav__actions ${menuOpen ? 'hero-nav__actions--open' : ''}`}>
          <Link href="/home">
            <button className='hero-nav__btn text-blue-800'>
              Go to home <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <button className='hero-nav__btn text-blue-800'>
            <Download className="w-4 h-4" /> Download
          </button>
        </div>
      </nav>

      {/* ── TEXT CONTENT ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="hero-text"
      >
        <div className="hero-badge">
          {Array.from({ length: 4 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-white" />
          ))} &nbsp;4.3/5 from 1k reviews
        </div>

        <h1 className="hero-title">
          Banking Made Simple, Secure and Smart
        </h1>

        <p className="hero-subtitle">
          Sign up and become a member today to get exclusive offers in your area and other benefits.
        </p>

        <div className="hero-stores">
          <span className='hero-stores__label'>
            <Info className="w-5 h-5 opacity-80" /> App Available For
          </span>
          <div className="hero-stores__images">
            <div className="hero-store-pill">
              <Image
                src="/Icons/home_playstore.png"
                alt="Google Play"
                width={100}
                height={100}
                className="hero-store-pill__icon"
              />
              <span className="hero-store-pill__divider" />
              <Image
                src="/Icons/home_appstore.png"
                alt="App Store"
                width={100}
                height={100}
                className="hero-store-pill__icon"
              />
            </div>
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
        {/* Cashback badges */}
        <motion.div
          className="hero-cashback hero-cashback--left"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/Icons/2_cashback.png"
            alt="Cashback credited"
            fill
            sizes="(max-width: 768px) 160px, 220px"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>
        <motion.div
          className="hero-cashback hero-cashback--right"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/Icons/2_cashback.png"
            alt="Cashback credited"
            fill
            sizes="(max-width: 768px) 160px, 220px"
            style={{ objectFit: 'contain' }}
          />
        </motion.div>

        {/* Orbit (clipped so it never appears above the phone) */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '6%',
            width: '900px',
            height: '560px',
            transform: 'translateX(-50%)',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 8,
          }}
        >
          {/* Elliptical orbit ring */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '52%',
              width: '800px',
              height: '800px',
              transform: 'translate(-50%, -50%) scaleY(0.55)',
              transformOrigin: 'center',
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 10px 30px rgba(255,255,255,0.04)',
              zIndex: 1,
            }}
          />

          {/* Orbiting icons (same ellipse as the ring) */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '52%',
              width: 0,
              height: 0,
              transform: 'translate(-50%, -50%) scaleY(0.55)',
              transformOrigin: 'center',
              zIndex: 2,
            }}
          >
            {ORBITAL_ICONS.map((icon) => (
              <OrbitalIcon
                key={icon.id}
                icon={icon}
                reduced={!!prefersReduced}
                ellipseY={0.55}
              />
            ))}
          </div>
        </div>

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
            zIndex: 10, // Phone behind bottom fade overlay
          }}
        >
          <Image
            src="/Icons/Hand2.png"
            alt="Phone Mockup"
            fill
            sizes="(max-width: 480px) 280px, (max-width: 768px) 380px, 550px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>

      {/* Keyframes & Responsive Styles */}
      <style>{`
        /* ── Base (Desktop) ── */
        .hero-section {
          background: linear-gradient(180deg, #4f9fd4 0%, #72b8e8 50%, #a2d4f5 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          padding: 2rem 1rem 0;
          font-family: 'Poppins', sans-serif;
        }

        /* Light beams */
        .hero-beam {
          position: absolute; top: 0; height: 100%;
          pointer-events: none; z-index: 1;
        }
        .hero-beam--left { left: 0; width: 65%; background: linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, transparent 65%); }
        .hero-beam--left-inner { left: 0; width: 38%; background: linear-gradient(140deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 65%); }
        .hero-beam--right { right: 0; width: 65%; background: linear-gradient(225deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, transparent 65%); }
        .hero-beam--right-inner { right: 0; width: 38%; background: linear-gradient(220deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 65%); }

        /* Floating rects */
        .hero-floating-rects { display: block; }

        /* Bottom fade */
        .hero-bottom-fade {
          position: absolute; bottom: 0; left: 0; right: 0; height: 240px;
          background: linear-gradient(to top, #fff 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.1) 80%, transparent 100%);
          pointer-events: none; z-index: 15;
        }

        /* Navbar */
        .hero-nav {
          position: absolute; top: 0; left: 0; right: 0;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.25rem 5rem;
          z-index: 20;
        }
        .hero-nav__logo {
          object-fit: contain; object-position: left;
          width: 160px; height: auto;
          cursor: pointer;
          transition: transform 0.28s ease, filter 0.28s ease;
          transform-origin: left center;
        }
        .hero-nav__logo:hover {
          transform: translateY(-2px) scale(1.03);
          filter: drop-shadow(0 8px 18px rgba(0, 60, 140, 0.22));
        }
        .hero-nav__hamburger {
          display: none;
          background: rgba(255,255,255,0.9); border: none; border-radius: 8px;
          padding: 0.5rem; cursor: pointer; color: #1e40af; z-index: 30;
        }
        .hero-nav__actions {
          display: flex; gap: 1rem; align-items: center;
        }
        .hero-nav__btn {
          background: #fff; border: none;
          border-radius: 999px; padding: 0.6rem 1.4rem;
          font-weight: 600; font-size: 0.9rem; cursor: pointer;
          display: flex; align-items: center; gap: 0.4rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          white-space: nowrap;
          transition: transform 0.24s ease, box-shadow 0.24s ease, background-color 0.24s ease;
        }
        .hero-nav__btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
          background-color: #f8fbff;
        }
        .hero-nav__btn:active {
          transform: translateY(0) scale(0.99);
        }

        /* Text content */
        .hero-text {
          text-align: center; z-index: 10; margin-top: 4rem;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(255,255,255,0.25); backdrop-filter: blur(8px);
          border-radius: 999px; padding: 0.35rem 0.9rem;
          font-size: 0.8rem; color: #fff; font-weight: 500;
          margin-bottom: 1.25rem; border: 1px solid rgba(255,255,255,0.35);
        }
        .hero-title {
          font-size: clamp(1rem, 4vw, 2.25rem);
          font-weight: 500; color: #fff;
          line-height: 1.15;
          max-width: 800px; margin: 0 auto 1rem;
          text-shadow: 0 2px 20px rgba(0,80,180,0.2);
        }
        .hero-subtitle {
          color: rgba(255,255,255,0.85); font-size: 1rem;
          max-width: 720px; margin: 0 auto 1.75rem; line-height: 1.65;
        }
        .hero-stores {
          display: flex; align-items: center; justify-content: center; gap: 1.25rem;
        }
        .hero-stores__label {
          display: flex; gap: 4px; align-items: center;
          color: white; font-size: 1rem; font-weight: 500;
        }
        .hero-stores__images {
          position: relative;
          width: auto;
          height: auto;
        }
        .hero-store-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.38rem 0.9rem;
          border-radius: 999px;
          border: 1.25px solid rgba(255, 255, 255, 0.9);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .hero-store-pill__icon {
          width: auto;
          height: 30px;
          cursor: pointer;
          transition: transform 0.22s ease, filter 0.22s ease;
        }
        .hero-store-pill__icon:hover {
          transform: translateY(-1px) scale(1.08);
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.22));
        }
        .hero-store-pill__icon:active {
          transform: scale(0.96);
        }
        .hero-store-pill__divider {
          width: 1.25px;
          height: 26px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 999px;
          flex-shrink: 0;
        }

        /* Orbital wrapper */
        .hero-orbital-wrapper {
          position: relative; margin-top: 2.5rem;
          width: 520px; height: 420px;
          display: flex; align-items: flex-start; justify-content: center;
          flex-shrink: 0;
        }
        .hero-orbital-ring {
          position: absolute; top: 50%; left: 50%;
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.18);
          pointer-events: none;
        }
        .hero-orbital-icons { display: block; }

        /* Phone */
        .hero-phone {
          position: relative;
          width: 550px; height: 550px;
          flex-shrink: 0; z-index: 10;
        }

        .hero-cashback {
          position: absolute;
          width: 165px;
          height: 49px;
          z-index: 12;
          pointer-events: none;
        }
        .hero-cashback--left {
          left: 24px;
          top: 102px;
        }
        .hero-cashback--right {
          right: 58px;
          bottom: 110px;
        }

        /* ── Keyframes ── */
        @keyframes orbit-glide {
          0% { 
            transform: rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle)));
          }
          100% { 
            transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) + 360deg)));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbital-icon { animation: none !important; }
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .hero-nav { padding: 1rem 2rem; }
          .hero-orbital-wrapper { width: 420px; height: 360px; }
          .hero-phone { width: 440px; height: 440px; }
          .hero-cashback { width: 150px; height: 50px; }
          .hero-cashback--left { left: 2px; top: 108px; }
          .hero-cashback--right { right: 20px; bottom: 98px; }
        }

        /* ── Mobile (max-width: 768px) ── */
        @media (max-width: 768px) {
          .hero-section { min-height: auto; padding: 1.5rem 1rem 0; }
          .hero-nav { padding: 1rem 1.25rem; }
          .hero-nav__logo { width: 120px; }
          .hero-nav__hamburger { display: flex; align-items: center; justify-content: center; }
          .hero-nav__actions {
            display: none;
            flex-direction: column;
            position: absolute; top: 100%; right: 1.25rem;
            background: rgba(255,255,255,0.97);
            backdrop-filter: blur(12px);
            border-radius: 16px;
            padding: 1rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.15);
            gap: 0.75rem;
          }
          .hero-nav__actions--open { display: flex; }
          .hero-text { margin-top: 5rem; padding: 0 0.5rem; }
          .hero-title { font-size: clamp(1.25rem, 6vw, 1.75rem); }
          .hero-subtitle { font-size: 0.9rem; margin-bottom: 1.25rem; }
          .hero-stores { flex-direction: column; gap: 0.75rem; }
          .hero-store-pill {
            padding: 0.32rem 0.52rem;
            gap: 0.42rem;
          }
          .hero-store-pill__icon { height: 24px; }
          .hero-store-pill__divider { height: 20px; }
          .hero-bottom-fade { height: 140px; }

          /* Scale down orbital system on mobile */
          .hero-orbital-wrapper {
            width: 300px; height: 280px;
            margin-top: 1.5rem;
          }
          .hero-phone { width: 320px; height: 320px; }
          .hero-cashback { width: 125px; height: 42px; }
          .hero-cashback--left { left: 0; top: 88px; }
          .hero-cashback--right { right: 14px; bottom: 78px; }
          .hero-orbital-icons { display: none; }
          .hero-orbital-ring { display: none; }
          .hero-floating-rects { display: none; }
        }

        /* ── Small mobile (max-width: 480px) ── */
        @media (max-width: 480px) {
          .hero-text { margin-top: 4.5rem; }
          .hero-title { font-size: clamp(1.1rem, 5.5vw, 1.5rem); }
          .hero-badge { font-size: 0.7rem; padding: 0.25rem 0.7rem; }
          .hero-orbital-wrapper {
            width: 260px; height: 240px;
            margin-top: 1rem;
          }
          .hero-phone { width: 280px; height: 280px; }
        }
      `}</style>
    </section>
  )
}

// Orbital icon component
function OrbitalIcon({ icon, reduced, ellipseY = 1 }) {
  const startAngleDeg = icon.angle

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 + (icon.id.length % 5) * 0.1, type: 'spring' }}
      className="orbital-icon"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: icon.size,
        height: icon.size,
        marginLeft: -icon.size / 2,
        marginTop: -icon.size / 2,
        ['--start-angle']: `${startAngleDeg}deg`,
        ['--radius']: `${icon.orbitRadius}px`,
        animation: reduced ? 'none' : `orbit-glide ${icon.duration}s linear infinite`,
        zIndex: 5, // Icons behind phone
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
          transform: `scaleY(${1 / ellipseY})`,
          transformOrigin: 'center',
        }}
      >
        {typeof icon.emoji === 'string' && icon.emoji.startsWith('/') ? (
          <div style={{ position: 'relative', width: `${icon.size * 0.75}px`, height: `${icon.size * 0.75}px`, flexShrink: 0 }}>
            <Image
              src={icon.emoji}
              alt={icon.id}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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