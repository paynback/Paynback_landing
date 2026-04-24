'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const DownloadAppFinal = () => {
  return (
    <section style={{
      background: 'radial-gradient(circle at 50% 0%, #3086cf 0%, #175ba3 100%)',
      padding: '1.75rem 1rem 0',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflowX: 'hidden',
      // Prevent phone images from overflowing and creating a scroll area.
      overflowY: 'hidden',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* --- Text Content --- */}
      <div className="dl-text">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.35 }}
          className="dl-title"
        >
          Download the app now!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true, amount: 0.35 }}
          style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          maxWidth: '600px',
          margin: '0 auto 1.75rem',
        }}>
          Experience seamless online payment only on payNback app
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.35 }}
          style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '0.25rem',
        }}>
          <StoreButton 
            src="/Icons/get_iton_playstore.png" 
            alt="Get it on Play Store" 
          />
          <StoreButton 
            src="/Icons/get_iton_appstore.png" 
            alt="Get it on App Store" 
          />
        </motion.div>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        marginTop: '1.1rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 10
      }}>
        {/* Phone 1 */}
        <div
          id="phone-1"
          className="dl-phone-frame"
          style={{ position: 'absolute', width: '310px', height: '700px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% - 275px)) rotate(0deg)', zIndex: 5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 110, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Image src="/Icons/phone_history.png" alt="Phone" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
          </motion.div>
        </div>
        {/* Phone 2 */}
        <div
          id="phone-2"
          className="dl-phone-frame"
          style={{ position: 'absolute', width: '265px', height: '430px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% - 105px)) rotate(0deg)', zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 110, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Image src="/Icons/phone_home_page.png" alt="Phone" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain', objectPosition: 'bottom'  }} priority />
          </motion.div>
        </div>
        {/* Phone 3 */}
        <div
          id="phone-3"
          className="dl-phone-frame"
          style={{ position: 'absolute', width: '265px', height: '430px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% + 105px)) rotate(0deg)', zIndex: 10 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 110, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Image
              src="/Icons/phone_profile_page.png"
              alt="Phone"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              priority
            />
          </motion.div>
        </div>
        {/* Phone 4 */}
        <div
          id="phone-4"
          className="dl-phone-frame"
          style={{ position: 'absolute', width: '265px', height: '430px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% + 275px)) rotate(0deg)', zIndex: 5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 110, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.65, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Image src="/Icons/phone_cashback.png" alt="Phone" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
          </motion.div>
        </div>
      </div>

      <style>{`
        .dl-section {
          background: radial-gradient(circle at 50% 0%, #3086cf 0%, #175ba3 100%);
          padding: 3rem 1rem 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .dl-text { z-index: 20; }

        .dl-title {
          font-size: clamp(1.75rem, 5vw, 3rem);
          font-weight: 500;
          color: #fff;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .dl-subtitle {
          color: rgba(255,255,255,0.9);
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          margin: 0 auto 2.5rem;
          max-width: 600px;
        }

        .dl-store-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .dl-phones-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          margin-top: 5rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 10;
        }

        .dl-phone-frame {
          cursor: pointer;
          transition: transform 180ms ease;
          will-change: transform;
        }

        .dl-phone-frame:hover {
          transform: translateY(-3px) scale(1.03);
        }

        .dl-phone {
          position: absolute;
          width: 260px;
          height: 450px;
        }

        .dl-phone--1 {
          left: 50%; bottom: -20px;
          transform: translateX(calc(-50% - 260px));
          z-index: 5;
        }
        .dl-phone--2 {
          left: 50%; bottom: -85px;
          transform: translateX(calc(-50% - 90px));
          z-index: 10;
        }
        .dl-phone--3 {
          left: 50%; bottom: -50px;
          transform: translateX(calc(-50% + 90px));
          z-index: 10;
        }
        .dl-phone--4 {
          left: 50%; bottom: -20px;
          transform: translateX(calc(-50% + 260px));
          z-index: 5;
        }

        /* ── Tablet (max-width: 1024px) ── */
        @media (max-width: 1024px) {
          .dl-phones-wrapper { height: 400px; margin-top: 3rem; }
          .dl-phone { width: 200px; height: 360px; }
          .dl-phone--1 { transform: translateX(calc(-50% - 200px)); bottom: -15px; }
          .dl-phone--2 { transform: translateX(calc(-50% - 70px)); bottom: -65px; }
          .dl-phone--3 { transform: translateX(calc(-50% + 70px)); bottom: -40px; }
          .dl-phone--4 { transform: translateX(calc(-50% + 200px)); bottom: -15px; }
        }

        /* ── Mobile (max-width: 768px) ── */
        @media (max-width: 768px) {
          .dl-section { padding: 2rem 1rem 0; }
          .dl-subtitle { margin-bottom: 1.5rem; }
          .dl-phones-wrapper { height: 320px; margin-top: 2rem; }
          .dl-phone { width: 150px; height: 280px; }
          .dl-phone--1 { transform: translateX(calc(-50% - 150px)); bottom: -10px; }
          .dl-phone--2 { transform: translateX(calc(-50% - 50px)); bottom: -50px; }
          .dl-phone--3 { transform: translateX(calc(-50% + 50px)); bottom: -30px; }
          .dl-phone--4 { transform: translateX(calc(-50% + 150px)); bottom: -10px; }
        }

        /* ── Small Mobile (max-width: 480px) ── */
        @media (max-width: 480px) {
          .dl-phones-wrapper { height: 260px; margin-top: 1.5rem; }
          .dl-phone { width: 120px; height: 220px; }
          .dl-phone--1 { transform: translateX(calc(-50% - 115px)); bottom: -8px; }
          .dl-phone--2 { transform: translateX(calc(-50% - 40px)); bottom: -35px; }
          .dl-phone--3 { transform: translateX(calc(-50% + 40px)); bottom: -20px; }
          .dl-phone--4 { transform: translateX(calc(-50% + 115px)); bottom: -8px; }
          .dl-store-btns { gap: 0.5rem; }
        }
      `}</style>

      <style>{`
        .store-button {
          transition: transform 180ms ease, filter 180ms ease;
          will-change: transform;
          cursor: pointer;
          display: block;
        }
        .store-button:hover {
          transform: translateY(-2px) scale(1.06);
          filter: drop-shadow(0 10px 24px rgba(0, 60, 180, 0.25));
        }
      `}</style>
    </section>
  );
};

const StoreButton = ({ src, alt }) => (
  <a
    href="#"
    className="store-button"
    style={{
      width: '130px',
      height: '42px',
      position: 'relative',
      filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.18))',
    }}
  >
    <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
    <style>{`
      .dl-store-link {
        display: block;
        width: 180px;
        height: 60px;
        position: relative;
      }
      @media (max-width: 480px) {
        .dl-store-link { width: 140px; height: 48px; }
      }
    `}</style>
  </a>
);

export default DownloadAppFinal;
