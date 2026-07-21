'use client'

import { useEffect, useRef, useState } from 'react'

const FALLBACK_MS = 2000

export default function ScrollReveal({ children, delay = 0, className = '' }) {
  const rootRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = rootRef.current
    if (!element) return

    const reveal = () => setVisible(true)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      reveal()
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      reveal()
      return
    }

    const fallbackTimer = window.setTimeout(reveal, FALLBACK_MS)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal()
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    observer.observe(element)

    return () => {
      window.clearTimeout(fallbackTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
