"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

function shouldEnableLenis() {
  if (typeof window === "undefined") return false;

  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isSafari =
    /Safari/i.test(navigator.userAgent) &&
    !/Chrome|Chromium|CriOS|Edg|OPR/i.test(navigator.userAgent);

  // Lenis on desktop Chrome/Edge/Firefox only — native scroll on iOS & touch
  return !isTouch && !reducedMotion && !isSafari && !isIOS;
}

export function SmoothScroll({ children }) {
  const [enableLenis, setEnableLenis] = useState(false);

  useEffect(() => {
    setEnableLenis(shouldEnableLenis());
  }, []);

  if (!enableLenis) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
