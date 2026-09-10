"use client";

import { useRef, useEffect, useState } from "react";

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
// A Map ID is required for AdvancedMarkerElement.
// Create one at https://console.cloud.google.com/google/maps-apis/studio/maps
// Falls back to "DEMO_MAP_ID" which renders a default pin style.
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID ?? "DEMO_MAP_ID";
const LOCATION = { lat: 10.0556148, lng: 76.3543769 };
const SCRIPT_ID = "google-maps-script";

function initMap(container) {
  if (!container || !window.google?.maps) return;

  const map = new window.google.maps.Map(container, {
    center: LOCATION,
    zoom: 18,
    mapId: MAP_ID,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  });

  new window.google.maps.marker.AdvancedMarkerElement({
    position: LOCATION,
    map,
    title: "PayNback",
  });
}

function loadMapsScript(onReady) {
  if (typeof window === "undefined") return;

  if (window.google?.maps?.marker) {
    onReady();
    return;
  }

  if (!document.getElementById(SCRIPT_ID)) {
    window._mapCallback = onReady;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&loading=async&libraries=marker&callback=_mapCallback`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return;
  }

  if (window.google?.maps?.marker) {
    onReady();
  } else {
    const existingCallback = window._mapCallback;
    window._mapCallback = () => {
      if (existingCallback) existingCallback();
      onReady();
    };
  }
}

export default function MapEmbed() {
  const mapRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Defer script + map init until the embed is near the viewport
  useEffect(() => {
    const node = mapRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const load = () => {
      if (mapRef.current) initMap(mapRef.current);
    };

    loadMapsScript(load);
  }, [shouldLoad]);

  return (
    <div
      ref={mapRef}
      className="h-full w-full bg-slate-100"
      aria-label="Map showing PayNback location"
      role="img"
    />
  );
}
