'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Store } from 'lucide-react'
import { fetchLatestShops } from '../services/merchantService'

export default function ShopsCarousel() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLatestShops()
      .then((data) => setShops(data))
      .catch(() => setShops([]))
      .finally(() => setLoading(false))
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  if (!loading && shops.length === 0) {
    return null
  }

  return (
    <section className="py-16 mb-40 px-4 md:px-8 lg:px-16 bg-white font-sans text-gray-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto" ref={containerRef}>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Shops For You
        </motion.h2>

        {/* Loading skeletons */}
        {loading && (
          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[280px] shrink-0 rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden animate-pulse"
              >
                <div className="h-10 bg-gray-200" />
                <div className="h-48 bg-gray-100" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Carousel */}
        {!loading && (
          <motion.div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {shops.map((shop) => (
              <motion.div
                key={shop.merchant_id}
                className="min-w-[280px] max-w-[280px] sm:min-w-[300px] sm:max-w-[300px] shrink-0 snap-start bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                {/* Image Area */}
                <div className="relative h-48 w-full bg-gray-100">
                  {shop.shopThumbnailUrl ? (
                    <Image
                      src={shop.shopThumbnailUrl}
                      alt={shop.shopName}
                      fill
                      className="object-cover"
                      sizes="300px"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-2">
                      <Store className="w-10 h-10 text-gray-300" />
                      <span className="text-xs text-gray-400">No image</span>
                    </div>
                  )}
                </div>

                {/* Details Footer */}
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-base text-gray-900 truncate max-w-[60%]">
                      {shop.shopName}
                    </h3>
                    {shop.category && (
                      <div className="bg-gray-100 text-gray-600 text-[11px] px-2 py-1 rounded font-medium shrink-0">
                        {shop.category}
                      </div>
                    )}
                  </div>

                  {shop.location && (
                    <div className="flex items-center text-gray-500 text-sm mt-2">
                      <MapPin className="w-4 h-4 mr-1 text-gray-400 shrink-0" />
                      <span className="truncate">{shop.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
