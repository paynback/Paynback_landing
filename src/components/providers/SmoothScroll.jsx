"use client";

import { ReactLenis } from 'lenis/react';

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
      {children}
    </ReactLenis>
  );
}
