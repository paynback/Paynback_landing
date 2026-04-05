'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const PHONES = [
  { src: '/Icons/phone_history.png', x: -520, delay: 0.2 },
  { src: '/Icons/phone_home_page.png', x: -175, delay: 0.3, zIndex: 10 },
  { src: '/Icons/phone_profile_page.png', x: 175, delay: 0.4, zIndex: 10 },
  { src: '/Icons/phone_cashback.png', x: 520, delay: 0.5 },
]

const DownloadApp = () => {
  return (
    <section style={{
      background: 'radial-gradient(circle at 50% 0%, #3086cf 0%, #175ba3 100%)',
      padding: '3rem 1rem 0', // Reduced from 4rem
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* --- Text Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ zIndex: 20 }}
      >
        <h2 style={{
          fontSize: 'clamp(1.75rem, 5vw, 3rem)',
          fontWeight: 500,
          color: '#fff',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          Download the app Today!
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          fontWeight: 400,
          marginBottom: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto 2.5rem',
        }}>
          Experience seamless online payment only on payNback app
        </p>

        {/* --- Store Buttons --- */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
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
      </motion.div>

      {/* --- Phone Mockups --- */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '500px', // Increased for full view
        marginTop: '3rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 10
      }}>
        {PHONES.map((phone, i) => (
          <motion.div
            key={`${i}-v2`} // Force re-mount
            initial={{ opacity: 0, y: 100, rotate: 0, x: phone.x }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, x: phone.x }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: phone.delay,
              ease: [0.22, 1, 0.36, 1] 
            }}
            style={{
              position: 'absolute',
              width: '260px',
              height: '450px', // Match container height
              left: '50%',
              marginLeft: '-130px',
              zIndex: phone.zIndex || 5,
              bottom: 0, // Force to bottom
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
            }}
          >

            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '100%',
              transform: `scale(1.1) translate(0, 0)` // Scale up and reset translate
            }}>
              <Image 
                src={phone.src} 
                alt="Phone Mockup" 
                fill 
                style={{ objectFit: 'contain', objectPosition: 'bottom' }} // Force to bottom
                priority
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle light effect at bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150px',
        background: 'linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 15
      }} />
    </section>
  );
};

const StoreButton = ({ src, alt }) => (
  <motion.a
    href="#"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      display: 'block',
      width: '180px',
      height: '60px',
      position: 'relative',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
    }}
  >
    <Image 
      src={src} 
      alt={alt} 
      fill 
      style={{ objectFit: 'contain' }}
    />
  </motion.a>
);

export default DownloadApp;