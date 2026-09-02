"use client";

import { useEffect, useMemo, useState } from "react";
import { preloadImages } from "@/lib/preloadImages";

/**
 * Preloads image URLs and returns true once all are cached (or timeout / no URLs).
 * @param {string[]} urls
 * @param {boolean} enabled — when false, immediately returns true
 */
export function usePreloadImages(urls, enabled = true) {
  const urlKey = useMemo(() => JSON.stringify((urls || []).filter(Boolean)), [urls]);
  const hasUrls = urlKey !== "[]";

  const [loadedKey, setLoadedKey] = useState(null);

  useEffect(() => {
    if (!enabled || !hasUrls) return;

    let active = true;

    preloadImages(JSON.parse(urlKey)).then(() => {
      if (active) setLoadedKey(urlKey);
    });

    return () => {
      active = false;
    };
  }, [enabled, hasUrls, urlKey]);

  if (!enabled || !hasUrls) return true;
  return loadedKey === urlKey;
}
