"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const SmarterShopping = () => {
    return (
        <section className="relative w-full py-20 px-6 lg:py-32 bg-white overflow-hidden">
            <motion.div 
                className="max-w-4xl mx-auto text-center relative z-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-semibold text-[#1e293b] mb-10 tracking-tight leading-tight"
                >
                    Smarter In-Store Shopping <span className="text-[#1d70b8] font-semibold">Starts Here</span>
                </motion.h2>

                <motion.p 
                    variants={itemVariants}
                    className="text-lg md:text-xl text-[#64748b] leading-relaxed font-normal"
                >
                    PayNback is India’s first in-store shopping support app that connects users with nearby merchants offering exclusive discounts, cashback rewards, and pre-reduced prices. It helps customers discover better deals while also managing purchase bills and budgeting in one convenient platform.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default SmarterShopping;
