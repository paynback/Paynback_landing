"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const LiquidChrome = dynamic(() => import("@/components/ui/LiquidChrome"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black/40" aria-hidden />
  ),
});

/**
 * Loads WebGL LiquidChrome only when the host approaches the viewport.
 */
export default function LazyLiquidChrome(props) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className="absolute inset-0">
      {visible ? (
        <LiquidChrome {...props} />
      ) : (
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      )}
    </div>
  );
}
