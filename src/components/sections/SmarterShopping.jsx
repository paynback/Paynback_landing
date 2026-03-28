"use client"

import { motion } from "framer-motion"

const SmarterShopping = () => {
    return (
        <section className="relative w-full py-16 px-6 lg:py-24  overflow-hidden">
            {/* Fade White Overlay (at the top) */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '240px',
                background: 'linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.1) 80%, transparent 100%)',
                pointerEvents: 'none', zIndex: 10,
            }} />

            <div className="max-w-4xl mx-auto text-center relative z-20 mt-12">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight"
                >
                    Smarter In-Store Shopping <span className="text-white/80 font-medium">Starts Here</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-white/90 leading-relaxed font-medium"
                >
                    PayNback is India's first in-store shopping support app that connects users with nearby merchants offering exclusive discounts, cashback rewards, and pre-reduced prices. It helps customers discover better deals while also managing purchase bills and budgeting in one convenient platform.
                </motion.p>
            </div>
        </section>
    );
};

export default SmarterShopping;
