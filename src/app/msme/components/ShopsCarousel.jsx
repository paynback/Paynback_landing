'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Navigation } from 'lucide-react'

// Dummy data for shops
const shops = [
  { id: 1, name: 'Prestige', category: 'Kitchen & home', location: 'Kochi', distance: '2.3 km', image: '/Icons/enhanced_activity_status.png' }, // using a placeholder image
  { id: 2, name: 'Prestige', category: 'Kitchen & home', location: 'Kochi', distance: '2.3 km', image: '/Icons/enhanced_activity_status.png' },
  { id: 3, name: 'Prestige', category: 'Kitchen & home', location: 'Kochi', distance: '2.3 km', image: '/Icons/enhanced_activity_status.png' },
  { id: 4, name: 'Prestige', category: 'Kitchen & home', location: 'Kochi', distance: '2.3 km', image: '/Icons/enhanced_activity_status.png' },
  { id: 5, name: 'Prestige', category: 'Kitchen & home', location: 'Kochi', distance: '2.3 km', image: '/Icons/enhanced_activity_status.png' },
]

export default function ShopsCarousel() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section className="py-16 mb-40 px-4 md:px-8 lg:px-16 bg-white font-sans text-gray-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Shops near you
        </motion.h2>

        {/* Carousel Container */}
        <motion.div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {shops.map((shop) => (
            <motion.div 
              key={shop.id} 
              className="min-w-[280px] max-w-[280px] sm:min-w-[300px] sm:max-w-[300px] flex-shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-300 overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div className="bg-[#E41E26] px-4 py-3 text-white flex items-center justify-center">
                <span className="font-bold text-lg italic tracking-wider">Prestige</span>
                <span className="text-[10px] ml-2 opacity-80 uppercase tracking-widest mt-1">Smart Kitchen</span>
              </div>

              {/* Image Area - Using a simple div with background color as placeholder if image fails, but trying to use an existing icon */}
              <div className="relative h-48 w-full bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center border-y border-gray-300 relative overflow-hidden">
                      {/* Placeholder graphic simulating a storefront */}
                      <div className="absolute bottom-0 w-full h-1/2 bg-gray-300"></div>
                      <div className="absolute bottom-1/2 w-3/4 h-1/2 bg-white/50 left-1/2 -translate-x-1/2 border-4 border-gray-400"></div>
                      <span className="relative z-10 text-sm font-medium text-gray-500 bg-white/80 px-2 py-1 rounded">Shop Image</span>
                   </div>
                </div>
              </div>

              {/* Details Footer */}
              <div className="p-4 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">{shop.name}</h3>
                  <div className="flex items-center gap-1 text-blue-500 bg-blue-50 px-2 py-1 rounded-full text-xs font-medium border border-blue-100">
                    <Navigation className="w-3 h-3" />
                    <span>{shop.distance}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                    {shop.location}
                  </div>
                  <div className="bg-gray-100 text-gray-600 text-[11px] px-2 py-1 rounded font-medium">
                    {shop.category}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  )
}
