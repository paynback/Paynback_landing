"use client";

import { Zap, Target, Bug, Store } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function JammyStory() {
  const reduceMotion = useReducedMotion();

  const cardGradient = "radial-gradient(49.04% 311.43% at 92.17% 38.79%, rgba(10, 45, 72, 0.2) 0%, rgba(11, 30, 58, 0.2) 100%)";

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
            className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
            style={{ background: cardGradient }}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="text-[#4EA8E9] text-5xl font-serif leading-none mb-4 tracking-tighter">“</div>
            <p className="text-lg sm:text-xl font-semibold text-white mb-4">
              Every great idea starts with a simple question: What if everyday shopping could give something back?
            </p>
            <p className="text-white/70 leading-relaxed sm:text-lg">
              That question became the foundation of PayNback — a platform created to connect customers and local businesses through meaningful rewards and everyday value.
            </p>
          </motion.div>

          {/* Row 2: Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 2 */}
            <motion.div 
              className="w-full p-6 sm:p-8 rounded-3xl flex flex-col backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
              style={{ background: cardGradient }}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="h-12 w-12 rounded-[14px] bg-[#4EA8E9]/10 flex items-center justify-center mb-4 shadow-[inset_1px_1px_0px_rgba(78,168,233,0.3)]">
                <Zap className="text-[#4EA8E9] w-5 h-5" fill="currentColor" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                The Spark of a Friendly Face
              </h3>
              <p className="text-white/70 leading-relaxed">
                As PayNback grew, we felt it needed more than technology and a platform. It needed a friendly face — someone who could represent rewards, discovery, excitement, and the joy of getting something back. That’s when Jammy was born.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="w-full p-6 sm:p-8 rounded-3xl flex flex-col backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
              style={{ background: cardGradient }}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="h-12 w-12 rounded-[14px] bg-[#D946EF]/10 flex items-center justify-center mb-4 shadow-[inset_1px_1px_0px_rgba(217,70,239,0.3)]">
                <Target className="text-[#D946EF] w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                The Origin of &quot;Jammy&quot;
              </h3>
              <p className="text-white/70 leading-relaxed">
                The story behind the name goes back to the World War II era, when the British slang word &quot;jam&quot; was associated with money, luck, and good fortune.
              </p>
            </motion.div>
          </div>

          {/* Card 4: Full Width */}
          <motion.div 
            className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
            style={{ background: cardGradient }}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="text-[#4EA8E9] text-5xl font-serif leading-none mb-4 tracking-tighter">“</div>
            <p className="text-white/70 leading-relaxed sm:text-lg">
              We loved the meaning behind the word — something valuable, something fortunate, and something extra. It perfectly matched the idea behind PayNback: when you make an everyday purchase, why shouldn’t there be a little something extra waiting for you? So, we took that simple idea of &quot;jam&quot; and gave it a personality. We called him Jammy.
            </p>
          </motion.div>

          {/* Row 5: Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 5 */}
            <motion.div 
              className="w-full p-6 sm:p-8 rounded-3xl flex flex-col backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
              style={{ background: cardGradient }}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="h-12 w-12 rounded-[14px] bg-[#22C55E]/10 flex items-center justify-center mb-4 shadow-[inset_1px_1px_0px_rgba(34,197,94,0.3)]">
                <Bug className="text-[#22C55E] w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                More Than a Mascot
              </h3>
              <p className="text-white/70 leading-relaxed">
                Jammy is more than a mascot. He is a friendly companion who loves discovering local businesses, meeting people, and finding ways to make everyday experiences more rewarding. Whether it’s a neighbourhood grocery store, a restaurant, a fashion shop, or a family-run business, Jammy believes every visit can create something valuable.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div 
              className="w-full p-6 sm:p-8 rounded-3xl flex flex-col backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
              style={{ background: cardGradient }}
              initial={reduceMotion ? undefined : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="h-12 w-12 rounded-[14px] bg-[#EAB308]/10 flex items-center justify-center mb-4 shadow-[inset_1px_1px_0px_rgba(234,179,8,0.3)]">
                <Store className="text-[#EAB308] w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                For Customers & Local Businesses
              </h3>
              <p className="text-white/70 leading-relaxed">
                For customers, Jammy represents the excitement of earning rewards and discovering new places. For local businesses, he represents growth, connection, and the opportunity to build lasting relationships with their customers.
              </p>
            </motion.div>
          </div>

          {/* Card 7: Full Width */}
          <motion.div 
            className="w-full p-6 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
            style={{ background: cardGradient }}
            initial={reduceMotion ? undefined : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="text-[#4EA8E9] text-5xl font-serif leading-none mb-4 tracking-tighter">“</div>
            <p className="text-white/70 leading-relaxed sm:text-lg mb-4">
              At the heart of Jammy is one simple belief: everyday spending should have a little more value. He represents rewards, local commerce, discovery, and connection — all the things that make PayNback more than just another shopping platform.
            </p>
            <p className="italic text-white/50 text-sm sm:text-base">
              Shop. Earn. Enjoy. Repeat.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
