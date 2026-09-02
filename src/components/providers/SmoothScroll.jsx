"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Module-level dynamic import: the Lenis chunk starts fetching as soon as this
// module is evaluated on the client (in parallel with hydration), instead of
// only kicking off inside a useEffect after mount. This shrinks the window
// where native scroll is active before Lenis takes over.
const ReactLenis = dynamic(
  () => import("lenis/react").then((mod) => mod.ReactLenis),
  { ssr: false }
);

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
  const [lenisEnabled, setLenisEnabled] = useState(false);

  useEffect(() => {
    setLenisEnabled(shouldEnableLenis());
  }, []);

  if (!lenisEnabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 0.9,
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
