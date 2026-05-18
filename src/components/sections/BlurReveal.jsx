"use client";

import { motion } from "framer-motion";

export default function BlurReveal({ children, className = "" }) {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ willChange: "filter, transform, opacity" }}
      initial={{ opacity: 0.6, filter: "blur(6px)", y: 30 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "0px 0px -25% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
