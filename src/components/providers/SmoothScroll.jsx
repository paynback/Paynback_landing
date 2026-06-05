"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';


export function SmoothScroll({ children }) {
  // Lerp is the linear interpolation factor. A lower lerp creates a significantly slower, "butter smooth" drag.
  const lenisOptions = {
    lerp: 0.1,       // 0.05 was too sluggish — 0.1 is the sweet spot for smooth-but-responsive
    duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 1.0,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
