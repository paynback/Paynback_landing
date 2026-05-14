'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Store, Send, ChevronLeft, ChevronRight } from 'lucide-react'
import { fetchNearbyShops } from '../services/merchantService'
import { useMsmeLocation } from '@/app/msme/components/MsmeLocationProvider'

export default function ShopsCarousel() {
  const { enableShopsPayload } = useMsmeLocation()
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const loadSeqRef = useRef(0)

  const [shops, setShops] = useState([])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -309, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 309, behavior: 'smooth' })
    }
  }
  const [loading, setLoading] = useState(true)

  const loadShops = async () => {
    const seq = ++loadSeqRef.current
    let lat
    let lng
    try {
      const cached = localStorage.getItem('paynback_user_location')
      if (cached) {
        const parsed = JSON.parse(cached)
        lat = parsed.lat
        lng = parsed.lng
      }
    } catch {
      // Invalid cache – proceed without location
    }

    try {
      const data = await fetchNearbyShops(lat, lng)
      if (seq !== loadSeqRef.current) return
      setShops(data)
    } catch {
      if (seq !== loadSeqRef.current) return
      setShops([])
    } finally {
      if (seq !== loadSeqRef.current) return
      setLoading(false)
    }
  }

  useEffect(() => {
    loadShops()

    const onStorage = () => {
      setLoading(true)
      loadShops()
    }

    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    if (!enableShopsPayload) return
    ++loadSeqRef.current
    setShops(enableShopsPayload.shops)
    setLoading(false)
  }, [enableShopsPayload])

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
    <section className="py-14 mb-12 px-4 md:px-8 lg:px-16 font-sans text-gray-800 overflow-hidden">
      <div className="max-w-[1400px] mx-auto" ref={containerRef}>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Shops near you
        </motion.h2>

        {/* Loading skeletons */}
        {loading && (
          <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4 pt-2 px-2 -mx-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="relative shrink-0 rounded-[24px] border border-gray-100 bg-white shadow-sm overflow-hidden animate-pulse"
                style={{ width: 285, height: 378 }}
              >
                <div className="absolute top-0 bg-gray-200" style={{ width: 303.35, height: 278, left: -9.18 }} />
                <div
                  className="absolute bg-white"
                  style={{ width: 285, height: 135, top: 243, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
                >
                  <div className="px-5 pt-5 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-2/3" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-100 rounded w-1/4" />
                      <div className="h-5 bg-gray-100 rounded w-1/4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Carousel */}
        {!loading && (
          <>
            <motion.div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {shops.map((shop) => (
                <motion.div
                  key={shop.merchant_id}
                  className="relative shrink-0 snap-start bg-white rounded-[24px] shadow-sm hover:shadow-md border border-gray-100 transition-shadow duration-300 overflow-hidden"
                  style={{ width: 285, height: 378 }}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  {/* Image Area */}
                  <div
                    className="absolute top-0 bg-gray-100"
                    style={{ width: 303.35, height: 278, left: -9.18 }}
                  >
                    {shop.shopThumbnailUrl ? (
                      <Image
                        src={shop.shopThumbnailUrl}
                        alt={shop.shopName}
                        fill
                        className="object-cover"
                        sizes="305px"
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
                  <div
                    className="absolute bg-white z-10 flex flex-col justify-center"
                    style={{
                      width: 285,
                      height: 135,
                      top: 243,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    }}
                  >
                    <div className="px-5">
                      <h3 className="font-semibold text-lg text-gray-900 truncate w-full">
                        {shop.shopName}
                      </h3>

                      {shop.location && (
                        <div className="flex items-center text-gray-500 text-sm mt-1.5">
                          <MapPin className="w-4 h-4 mr-1.5 text-gray-400 shrink-0" />
                          <span className="truncate">{shop.location}</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center bg-[#B5D3E433] text-(--brand-primary) text-[11px] px-2.5 py-1 rounded-md font-medium shrink-0">
                          <Send className="w-3 h-3 mr-1.5 shrink-0" />
                          <span>
                            {shop.distance_km !== null && shop.distance_km !== undefined
                              ? `${shop.distance_km} km`
                              : '—'}
                          </span>
                        </div>
                        {shop.category && (
                          <div className="bg-[#ee372d]/80 text-white text-[11px] px-2.5 py-1 rounded-md font-medium shrink-0">
                            {shop.category}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {shops.length > 5 && (
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={scrollLeft}
                  className="p-3 cursor-pointer rounded-full border border-gray-200 bg-white shadow-sm hover:shadow hover:bg-gray-50 transition-all text-gray-600 focus:outline-none focus:ring-2 focus:ring-(--brand-primary)/80 focus:ring-offset-2"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-3 cursor-pointer rounded-full border border-gray-200 bg-white shadow-sm hover:shadow hover:bg-gray-50 transition-all text-gray-600 focus:outline-none focus:ring-2 focus:ring-(--brand-primary)/80 focus:ring-offset-2"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
