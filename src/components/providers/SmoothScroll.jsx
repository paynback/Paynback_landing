"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';

function RouteChangeTracker() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }) {
  // Lerp is the linear interpolation factor. A lower lerp creates a significantly slower, "butter smooth" drag.
  const lenisOptions = {
    lerp: 0.05,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <RouteChangeTracker />
      {children}
    </ReactLenis>
  );
}
