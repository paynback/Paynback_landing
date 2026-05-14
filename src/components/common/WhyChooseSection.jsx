"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
};

const REASONS = [
  {
    id: 1,
    title: "Exclusive Discounts",
    desc: "PayNback offers exclusive discounts, limited-time deals, and special coupons to help users maximize savings and get the best value on every purchase.",
    tag: "Discounts",
    image: "/images/09b3196ae2b68dd5cfe0c65d459c42330889ebb7.png",
  },
  {
    id: 2,
    title: "Rewarding Points System",
    desc: "Every transaction with payNback unlocks more than just savings. Earn smart reward points on every eligible purchase and redeem them across a growing network of trusted merchants, turning everyday spending into continuous value.",
    tag: "Rewards",
    image: "/images/Why-chose_img2.png",
  },
  {
    id: 3,
    title: "Modern and User-Friendly Experience",
    desc: "Built for convenience and speed, payNback delivers a seamless digital experience with an intuitive interface, effortless navigation, and simplified access to offers, rewards, and transactions — all in one place",
    tag: "Experience",
    image: "/images/Why-chose_img3.png",
  },
  {
    id: 4,
    title: "Secure and Reliable Transactions",
    desc: "Security is at the core of every interaction. payNback ensures dependable and protected transactions through advanced security protocols, delivering a trusted ecosystem for both customers and merchants.",
    tag: "Security",
    image: "/images/Why-chose_img4.png",
  },
  {
    id: 5,
    title: "Personalized Recommendations",
    desc: "Discover offers that truly match your interests. Using intelligent insights and customer preferences, payNback curates personalized deals, recommendations, and shopping experiences designed around individual user behavior.",
    tag: "Smart",
    image: "/images/Why-chose_img5.png",
  },
];

export default function WhyChooseSection() {
  const [active, setActive] = useState(0);
  const current = REASONS[active];
  const carouselRef = useRef(null);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const width = carouselRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    if (index !== active) {
      setActive(index);
    }
  };

  const handleDotClick = (i) => {
    setActive(i);
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: width * i,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      className="w-full overflow-x-hidden bg-[#F2F2F2] font-sans why-section"
      style={{ "--brand-primary": "#0964BC" }}
    >
      <motion.div
        className="mx-auto max-w-7xl px-6 py-12 sm:px-6 lg:px-20 lg:py-20"
        initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* ── Heading ── */}
        <h2 className="mb-8 text-2xl font-normal tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:mb-10 lg:text-[2.5rem] text-left why-heading">
          <span className="text-(--brand-primary)">Why</span>{" "}
          Choose{" "}
          <span className="text-(--brand-primary)">PayNback?</span>
        </h2>

        {/* ── 3-column grid (Desktop) ── */}
        <motion.div
          className="why-grid-desktop"
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* --- Col 1: Feature list --- */}
          <motion.div variants={itemVars} className="why-feature-list">
            {REASONS.map((r, i) => (
              <button
                key={r.id}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`why-feature-btn ${active === i ? 'why-feature-btn--active' : ''}`}
              >
              {r.title}
              </button>
            ))}
          </motion.div>

          {/* --- Col 2: Description card --- */}
          <motion.div variants={itemVars} className="why-desc-card">
            <div>
              <AnimatePresence mode="wait">
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
                  {current.desc}
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
                {REASONS.map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: i === active ? '18px' : '6px',
                      height: '6px',
                      borderRadius: '999px',
                      background: i === active ? '#0964BC' : '#cbd5e1',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- Col 3: Image card --- */}
          <motion.div variants={itemVars} className="why-image-card" style={{ position: 'relative', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="why-image-inner"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))',
                    zIndex: 0
                  }}
                />
              </motion.div>
            </AnimatePresence>
            
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

        {/* ── Mobile Single Fixed Card with Swipeable Content ── */}
        <div className="why-mobile-container">
          <div 
            className="why-mobile-carousel"
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {REASONS.map((f, i) => (
              <div key={f.id} className="why-mobile-content-slide">
                <h3 className="why-mobile-title">{f.id}. {f.title}</h3>
                <p className="why-mobile-desc">{f.desc}</p>
                <div className="why-mobile-image-container">
                  <Image 
                    src={f.image} 
                    alt={f.title} 
                    fill sizes="(max-width: 640px) 100vw"
                    style={{objectFit: 'cover'}} 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="why-mobile-dots">
            {REASONS.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`why-dot ${i === active ? 'why-dot--active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Keyframes & Responsive */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .why-grid-desktop {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.25rem;
          width: 100%;
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
          height: 480px;
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
          color: #fff;
          background: #0964BC;
        }

        .why-desc-card {
          background: #fff;
          border-radius: 20px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          height: 480px;
        }

        .why-tag {
          display: inline-block;
          background: #eff6ff;
          color: #0964BC;
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
          background: #1565D8;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          height: 480px;
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
          background: #1565D8;
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

        .why-mobile-container {
          display: none;
        }
        
        .why-mobile-dots {
          display: none;
        }

        .why-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s;
        }
        .why-dot--active {
          background: #0964BC;
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .why-grid-desktop {
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
          .why-heading { font-size: 1.5rem; margin-bottom: 1.5rem; text-align: left; }
          .why-grid-desktop {
            display: none !important;
          }

          .why-mobile-container {
            display: flex;
            flex-direction: column;
            background: #fff;
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            height: 560px; /* Fixed card height */
            width: 100%;
            overflow: hidden;
          }

          .why-mobile-carousel {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
            flex-grow: 1;
            gap: 1.5rem;
          }
          .why-mobile-carousel::-webkit-scrollbar {
            display: none;
          }

          .why-mobile-content-slide {
            flex: 0 0 100%;
            scroll-snap-align: center;
            display: flex;
            flex-direction: column;
          }

          .why-mobile-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #000;
            margin-bottom: 1rem;
          }

          .why-mobile-desc {
            font-size: 0.95rem;
            color: #475569;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .why-mobile-image-container {
            position: relative;
            width: 100%;
            height: 280px; /* Fixed image height */
            flex-shrink: 0;
            border-radius: 12px;
            overflow: hidden;
            background: #1565D8;
            margin-top: auto;
          }

          .why-mobile-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
