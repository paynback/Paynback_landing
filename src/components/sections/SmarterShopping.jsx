"use client"

import { motion } from "framer-motion"

const SmarterShopping = () => {
    return (
        <section className="relative w-full py-20 px-6 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-4xl font-medium text-[#1e293b] mb-10 tracking-tight leading-tight"
                >
                    Smarter In-Store Shopping <span className="text-[#1d70b8] font-medium">Starts Here</span>
                </motion.h2>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-[#64748b] leading-relaxed font-normal"
                >
                    PayNback is India’s first in-store shopping support app that connects users with nearby merchants offering exclusive discounts, cashback rewards, and pre-reduced prices. It helps customers discover better deals while also managing purchase bills and budgeting in one convenient platform.
                </motion.p>
            </div>
        </section>
    );
};

export default SmarterShopping;
