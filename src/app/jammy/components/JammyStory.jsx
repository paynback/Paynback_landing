"use client";

import { Zap, Target, Bug, Store } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function JammyStory() {
  const reduceMotion = useReducedMotion();

  const cardBg = {
    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderTop: "1px solid rgba(255,255,255,0.22)",
    borderLeft: "1px solid rgba(255,255,255,0.18)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    borderRight: "1px solid rgba(255,255,255,0.06)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15), inset -1px 0 0 rgba(255,255,255,0.06), 0 0 0 0.5px rgba(255,255,255,0.04)",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative w-full py-20 sm:py-28 lg:py-32 font-sans text-white overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-20">
        
        {/* Header */}
        <motion.div 
          className="mb-12 sm:mb-16 lg:mb-20"
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={cardVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-[100%] tracking-[-0.56px] mb-4">
            <span className="text-[#4EA8E9]">Who</span> is Jammy ?
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Unveiling the heart, history, and inspiration behind every reward.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1: Full Width */}
          <motion.div 
            className="w-full rounded-3xl relative overflow-hidden"
            style={cardBg}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* White fade bottom-right inner glow */}
            <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="text-[#4EA8E9] text-5xl font-serif leading-none mb-4 tracking-tighter">“</div>
              <p className="text-lg sm:text-xl font-semibold text-white mb-4">
                Every great idea starts with a simple question: What if everyday shopping could give something back?
              </p>
              <p className="text-white/70 leading-relaxed sm:text-lg">
                That question became the foundation of PayNback — a platform created to connect customers and local businesses through meaningful rewards and everyday value.
              </p>
            </div>
          </motion.div>

          {/* Row 2: Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 2 */}
            <motion.div 
              className="w-full rounded-3xl flex flex-col relative overflow-hidden"
              style={cardBg}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
              <div className="relative z-10 p-6 sm:p-8 flex flex-col">
                <div className="h-12 w-12 rounded-[14px] bg-[#4EA8E9]/10 flex items-center justify-center mb-4" style={{ boxShadow: "inset 1px 1px 0px rgba(78,168,233,0.3), inset 0 0 12px rgba(78,168,233,0.08)" }}>
                  <Zap className="text-[#4EA8E9] w-5 h-5" fill="currentColor" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  The Spark of a Friendly Face
                </h3>
                <p className="text-white/70 leading-relaxed">
                  As PayNback grew, we felt it needed more than technology and a platform. It needed a friendly face — someone who could represent rewards, discovery, excitement, and the joy of getting something back. That&apos;s when Jammy was born.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="w-full rounded-3xl flex flex-col relative overflow-hidden"
              style={cardBg}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
              <div className="relative z-10 p-6 sm:p-8 flex flex-col">
                <div className="h-12 w-12 rounded-[14px] bg-[#D946EF]/10 flex items-center justify-center mb-4" style={{ boxShadow: "inset 1px 1px 0px rgba(217,70,239,0.3), inset 0 0 12px rgba(217,70,239,0.08)" }}>
                  <Target className="text-[#D946EF] w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  The Origin of &quot;Jammy&quot;
                </h3>
                <p className="text-white/70 leading-relaxed">
                  The story behind the name goes back to the World War II era, when the British slang word &quot;jam&quot; was associated with money, luck, and good fortune.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Full Width */}
          <motion.div 
            className="w-full rounded-3xl relative overflow-hidden"
            style={cardBg}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="text-[#4EA8E9] text-5xl font-serif leading-none mb-4 tracking-tighter">“</div>
              <p className="text-white/70 leading-relaxed sm:text-lg">
                We loved the meaning behind the word — something valuable, something fortunate, and something extra. It perfectly matched the idea behind PayNback: when you make an everyday purchase, why shouldn&apos;t there be a little something extra waiting for you? So, we took that simple idea of &quot;jam&quot; and gave it a personality. We called him Jammy.
              </p>
            </div>
          </motion.div>

          {/* Row 5: Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 5 */}
            <motion.div 
              className="w-full rounded-3xl flex flex-col relative overflow-hidden"
              style={cardBg}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
              <div className="relative z-10 p-6 sm:p-8 flex flex-col">
                <div className="h-12 w-12 rounded-[14px] bg-[#22C55E]/10 flex items-center justify-center mb-4" style={{ boxShadow: "inset 1px 1px 0px rgba(34,197,94,0.3), inset 0 0 12px rgba(34,197,94,0.08)" }}>
                  <Bug className="text-[#22C55E] w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  More Than a Mascot
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Jammy is more than a mascot. He is a friendly companion who loves discovering local businesses, meeting people, and finding ways to make everyday experiences more rewarding. Whether it&apos;s a neighbourhood grocery store, a restaurant, a fashion shop, or a family-run business, Jammy believes every visit can create something valuable.
                </p>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div 
              className="w-full rounded-3xl flex flex-col relative overflow-hidden"
              style={cardBg}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
              <div className="relative z-10 p-6 sm:p-8 flex flex-col">
                <div className="h-12 w-12 rounded-[14px] bg-[#EAB308]/10 flex items-center justify-center mb-4" style={{ boxShadow: "inset 1px 1px 0px rgba(234,179,8,0.3), inset 0 0 12px rgba(234,179,8,0.08)" }}>
                  <Store className="text-[#EAB308] w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                  For Customers &amp; Local Businesses
                </h3>
                <p className="text-white/70 leading-relaxed">
                  For customers, Jammy represents the excitement of earning rewards and discovering new places. For local businesses, he represents growth, connection, and the opportunity to build lasting relationships with their customers.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Card 7: Full Width */}
          <motion.div 
            className="w-full rounded-3xl relative overflow-hidden"
            style={cardBg}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", pointerEvents: "none", background: "linear-gradient(225deg, transparent 40%, rgba(255,255,255,0.04) 70%, rgba(255,255,255,0.09) 100%), linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.05) 100%), linear-gradient(270deg, transparent 50%, rgba(255,255,255,0.04) 100%)" }} />
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="text-[#4EA8E9] text-5xl font-serif leading-none mb-4 tracking-tighter">“</div>
              <p className="text-white/70 leading-relaxed sm:text-lg mb-4">
                At the heart of Jammy is one simple belief: everyday spending should have a little more value. He represents rewards, local commerce, discovery, and connection — all the things that make PayNback more than just another shopping platform.
              </p>
              <p className="italic text-white/50 text-sm sm:text-base">
                Shop. Earn. Enjoy. Repeat.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
