"use client";

import Image from "next/image";
import { Info, Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StoreBadges } from "@/components/ui/StoreBadges";

const IMG_BUBBLE = "/images/e9eaa1ec2bb31dedd4c5ca5b5780dc6bb78f2b36.png";
const IMG_COIN_SWIRL = "/images/33b06127ad13c66d1ea9ad4918ed9018d0d01e8a.png";

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

export default function HomeHero() {
  const reduceMotion = useReducedMotion();



  const floatTransition = {
    duration: reduceMotion ? 0 : 3.5,
    repeat: reduceMotion ? 0 : Infinity,
    ease: "easeInOut",
  };

  return (
    <section className="relative isolate z-100 min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      {/* Atmospheric gradient base (blob lights) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80"
        aria-hidden
      >
        {/* Deep Primary Blue Flare (Bottom Right) */}
        <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] rounded-full bg-[#2433A8] blur-[1110px] opacity-70" />

        {/* Mid Blue Glow (Center Bottom) */}
        <div className="absolute bottom-[-10%] left-[20%] h-[60%] w-[60%] rounded-full bg-[#3E72E0] blur-[100px] opacity-40" />

        {/* Light Azure Accent (Right Middle) */}
        <div className="absolute top-[20%] right-[-15%] h-[50%] w-[50%] rounded-full bg-[#87B3E0] blur-[110px] opacity-45" />

        {/* Violet/Purple Bloom (Bottom Left) */}
        <div className="absolute bottom-[-15%] left-[-10%] h-[50%] w-[45%] rounded-full bg-[#6D349F] blur-[90px] opacity-40" />

        {/* Soft Magenta/Pink Edge (Far Bottom Left) */}
        <div className="absolute bottom-[5%] left-[-5%] h-[30%] w-[30%] rounded-full bg-[#A24F93] blur-[80px] opacity-25" />

        {/* Muted Rose Accent (Far Bottom Right) */}
        <div className="absolute bottom-[0%] right-[0%] h-[25%] w-[25%] rounded-full bg-[#CB7C91] blur-[70px] opacity-20" />

        {/* Bright Cyan Highlight (Lower Right Core) */}
        <div className="absolute bottom-[10%] right-[15%] h-[35%] w-[35%] rounded-full bg-[#338BCB] blur-[90px] opacity-25" />

        {/* Soft White Highlight (Bottom Right) */}
        <div className="absolute bottom-[-6%] right-[-6%] h-[40%] w-[58%] rounded-full bg-[#c5d7e9] blur-[110px] opacity-60" />

        {/* Vignette for depth/contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_42%,rgba(0,0,0,0.42)_100%)]" />
      </div>

      {/* ── FLOATING HOLLOW RECTANGLES ── */}
      <div className="hero-floating-rects hidden md:block">
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-6 pt-24 sm:px-6 md:pt-18 lg:pt-20 lg:px-8 xl:pt-32">
        <div className="flex flex-col items-center w-full h-full flex-1">
          <div className="flex flex-col items-center justify-center flex-1 w-full mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hero-text"
            >
              {/* <div className="hero-badge">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-white" />
                      ))} &nbsp;4.3/5 from 1k reviews
                    </div> */}

              <h1 className="">
                Shopping Made Simple, Secure and Smart
              </h1>

              <p className="hero-subtitle leading-[1.6] tracking-[-0.56px] text-white/90 sm:text-white/80 text-[16px] sm:text-[15px] lg:text-[18px]">
                Sign up and become a member today to get exclusive offers in your area and other benefits.
              </p>

              <div className="hero-stores flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 mb-2">
                <div className="flex items-center gap-2 text-sm text-white/85">
                  <span
                    className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full",
                      "border border-white/20 bg-white/5",
                    )}
                  >
                    <Info className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="font-normal tracking-tight text-white">
                    App Available on
                  </span>
                </div>
                <StoreBadges />
              </div>
            </motion.div>
          </div>


          {/* ── Mobile visual: bubble + coin swirl ── */}
          <div className="relative mx-auto mt-auto h-[270px] sm:h-[350px] md:h-[450px] w-full max-w-2xl lg:hidden">
            <motion.div
              className="absolute left-[4%] top-[-10%] z-20 w-[41%] max-w-[152px] sm:max-w-[200px] md:max-w-[260px]"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -220 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 35, damping: 20, duration: 1.8, delay: 0.2 }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -20, 0] }}
                transition={floatTransition}
              >
                <Image
                  src={IMG_BUBBLE}
                  alt="PayNback Bubble"
                  width={600}
                  height={600}
                  className="h-auto w-full drop-shadow-[0_20px_45px_rgba(56,189,248,0.4)]"
                  sizes="48vw"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-[14%] md:bottom-[10%] right-[0%] z-10 w-[66%] max-w-[258px] sm:max-w-[320px] md:max-w-[420px]"
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 240 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 35, damping: 20, duration: 1.8, delay: 0.3 }}
            >
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 36, 0] }}
                transition={{
                  ...floatTransition,
                  duration: reduceMotion ? 0 : 3.4,
                }}
              >
                <Image
                  src={IMG_COIN_SWIRL}
                  alt="PayNback Coin Swirl"
                  width={800}
                  height={800}
                  className="h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(14,165,233,0.32)]"
                  sizes="72vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ── PHONE + ORBITAL SYSTEM (desktop/tablet) ── */}
          <div className="hero-orbital-wrapper relative w-full max-w-[600px] h-[550px] lg:h-[600px] shrink-0 mt-auto -mb-40 lg:-mb-48 xl:-mb-56 hidden lg:flex items-start justify-center">


            {/* Cashback badges */}
            <motion.div
              className="hero-cashback hero-cashback--left"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/Icons/2_cashback.png" alt="Cashback credited" fill sizes="(max-width: 768px) 160px, 220px" style={{ objectFit: 'contain' }} />
            </motion.div>
            <motion.div
              className="hero-cashback hero-cashback--right"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image src="/Icons/2_cashback.png" alt="Cashback credited" fill sizes="(max-width: 768px) 160px, 220px" style={{ objectFit: 'contain' }} />
            </motion.div>

            {/* Orbit */}
            <div className="hidden md:block" style={{
              position: 'absolute', left: '50%', top: '6%',
              width: '900px', height: '560px',
              transform: 'translateX(-50%)', overflow: 'hidden',
              pointerEvents: 'none', zIndex: 8,
            }}>
              <div style={{
                position: 'absolute', left: '50%', top: '52%',
                width: '800px', height: '800px',
                transform: 'translate(-50%, -50%) scaleY(0.55)',
                transformOrigin: 'center', borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.22)',
                boxShadow: '0 10px 30px rgba(255,255,255,0.04)',
                zIndex: 1,
              }} />
              <div style={{
                position: 'absolute', left: '50%', top: '52%',
                width: 0, height: 0,
                transform: 'translate(-50%, -50%) scaleY(0.55)',
                transformOrigin: 'center', zIndex: 2,
              }}>
                {ORBITAL_ICONS.map((icon) => (
                  <OrbitalIcon key={icon.id} icon={icon} reduced={!!reduceMotion} ellipseY={0.55} />
                ))}
              </div>
            </div>

            {/* Phone */}
            <motion.div
              initial={{ y: reduceMotion ? 0 : 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-[350px] w-[320px] shrink-0 sm:h-[480px] sm:w-[450px] md:h-[550px] md:w-[550px] lg:h-[600px] lg:w-[600px]"
            >
              <Image
                src="/Icons/Hand2.png"
                alt="PayNback App on Phone"
                fill
                sizes="(max-width: 480px) 320px, (max-width: 768px) 450px, (max-width: 1024px) 550px, 600px"
                style={{ objectFit: 'contain', objectPosition: 'bottom', filter: 'brightness(0.85) contrast(1.05)' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`
        /* Text content */
        .hero-text {
          text-align: center; z-index: 10; margin-top: 2rem; margin-bottom: 2rem;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(255,255,255,0.25); backdrop-filter: blur(8px);
          border-radius: 999px; padding: 0.35rem 0.9rem;
          font-size: 0.8rem; color: #fff; font-weight: 500;
          margin-bottom: 1.25rem; border: 1px solid rgba(255,255,255,0.35);
        }
        .hero-title {
          color: #fff;
          max-width: 900px; margin: 0 auto 0.5rem;
          text-shadow: 0 2px 20px rgba(0,80,180,0.2);
        }
        .hero-subtitle {
          max-width: 720px; margin: 0 auto 1.25rem;
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

        .hero-cashback {
          position: absolute;
          width: 165px;
          height: 49px;
          z-index: 12;
          pointer-events: none;
        }
        .hero-cashback--left { left: 40px; top: 100px; }
        .hero-cashback--right { right: 30px; top: 140px; }

        @keyframes orbit-glide {
          0% { transform: rotate(var(--start-angle)) translateX(var(--radius)) rotate(calc(-1 * var(--start-angle))); }
          100% { transform: rotate(calc(var(--start-angle) + 360deg)) translateX(var(--radius)) rotate(calc(-1 * (var(--start-angle) + 360deg))); }
        }
        @media (prefers-reduced-motion: reduce) {
          .orbital-icon { animation: none !important; }
        }
        @media (max-width: 1024px) {
          .hero-cashback { width: 150px; height: 50px; }
          .hero-cashback--left { left: 20px; top: 90px; }
          .hero-cashback--right { right: 15px; top: 120px; }
          .hero-text { margin-top: 1rem; margin-bottom: 1.25rem; }
        }
        @media (max-width: 640px) {
          .hero-text { margin-top: 2.75rem; }
          .hero-cashback { width: 110px; height: 36px; }
          .hero-cashback--left { left: -6px; top: 110px; }
          .hero-cashback--right { right: -2px; top: 138px; }
        }
      `}</style>
    </section>
  );
}

// Orbital icon component
function OrbitalIcon({ icon, reduced, ellipseY = 1 }) {
  const startAngleDeg = icon.angle;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 + (icon.id.length % 5) * 0.1, type: 'spring' }}
      className="orbital-icon"
      style={{
        position: 'absolute', top: 0, left: 0,
        width: icon.size, height: icon.size,
        marginLeft: -icon.size / 2, marginTop: -icon.size / 2,
        ['--start-angle']: `${startAngleDeg}deg`,
        ['--radius']: `${icon.orbitRadius}px`,
        animation: reduced ? 'none' : `orbit-glide ${icon.duration}s linear infinite`,
        zIndex: 5,
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
          padding: '0 8px', fontSize: icon.size * 0.35, fontWeight: 600, color: '#1e293b',
          whiteSpace: 'nowrap', transform: `scaleY(${1 / ellipseY})`, transformOrigin: 'center',
        }}
      >
        {typeof icon.emoji === 'string' && icon.emoji.startsWith('/') ? (
          <div style={{ position: 'relative', width: `${icon.size * 0.75}px`, height: `${icon.size * 0.75}px`, flexShrink: 0 }}>
            <Image src={icon.emoji} alt={icon.id} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain' }} />
          </div>
        ) : (
          <span style={{ fontSize: icon.size * 0.4 }}>{icon.emoji}</span>
        )}
      </motion.div>
    </motion.div>
  );
}




