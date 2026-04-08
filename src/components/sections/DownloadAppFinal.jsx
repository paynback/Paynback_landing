'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const DownloadAppFinal = () => {
  return (
    <section style={{
      background: 'radial-gradient(circle at 50% 0%, #3086cf 0%, #175ba3 100%)',
      padding: '1.75rem 1rem 0.5rem',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflowX: 'hidden',
      overflowY: 'visible',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* --- Text Content --- */}
      <div style={{ zIndex: 20 }}>
        <h2 style={{
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          fontWeight: 500,
          color: '#fff',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Download the app now!
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          maxWidth: '600px',
          margin: '0 auto 1.75rem',
        }}>
          Experience seamless online payment only on payNback app
        </p>

        <div style={{
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
        </div>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '360px',
        marginTop: '1.1rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 10
      }}>
        {/* Phone 1 */}
        <div id="phone-1" style={{ position: 'absolute', width: '210px', height: '350px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% - 220px)) rotate(0deg)', zIndex: 5 }}>
          <Image src="/Icons/phone_history.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
        {/* Phone 2 */}
        <div id="phone-2" style={{ position: 'absolute', width: '210px', height: '350px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% - 75px)) rotate(0deg)', zIndex: 10 }}>
          <Image src="/Icons/phone_home_page.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
        {/* Phone 3 */}
        <div id="phone-3" style={{ position: 'absolute', width: '210px', height: '350px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% + 75px)) rotate(0deg)', zIndex: 10 }}>
          <Image src="/Icons/phone_profile_page.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
        {/* Phone 4 */}
        <div id="phone-4" style={{ position: 'absolute', width: '210px', height: '350px', left: '50%', bottom: 0, transform: 'translateX(calc(-50% + 220px)) rotate(0deg)', zIndex: 5 }}>
          <Image src="/Icons/phone_cashback.png" alt="Phone" fill style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
        </div>
      </div>

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
    <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
  </a>
);

export default DownloadAppFinal;
