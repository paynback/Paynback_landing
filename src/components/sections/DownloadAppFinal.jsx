'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const DownloadAppFinal = () => {
  return (
    <section className="dl-section">
      {/* --- Text Content --- */}
      <div className="dl-text">
        <h2 className="dl-title">
          Download the app now!
        </h2>
        <p className="dl-subtitle">
          Experience seamless online payment only on payNback app
        </p>

        <div className="dl-store-btns">
          <StoreButton 
            src="/Icons/get_iton_playstore.png" 
            alt="Get it on Play Store" 
          />
          <StoreButton 
            src="/Icons/get_iton_appstore.png" 
            alt="Get it on App Store" 
          />
        </div>
      </div>

      <div className="dl-phones-wrapper">
        {/* Phone 1 */}
        <div className="dl-phone dl-phone--1">
          <Image src="/Icons/phone_history.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
        {/* Phone 2 */}
        <div className="dl-phone dl-phone--2">
          <Image src="/Icons/phone_home_page.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
        {/* Phone 3 */}
        <div className="dl-phone dl-phone--3">
          <Image src="/Icons/phone_profile_page.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
        {/* Phone 4 */}
        <div className="dl-phone dl-phone--4">
          <Image src="/Icons/phone_cashback.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
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
    </section>
  );
};

const StoreButton = ({ src, alt }) => (
  <a href="#" className="dl-store-link">
    <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
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
