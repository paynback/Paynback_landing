"use client";

import { useRef, useEffect } from "react";

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
// A Map ID is required for AdvancedMarkerElement.
// Create one at https://console.cloud.google.com/google/maps-apis/studio/maps
// Falls back to "DEMO_MAP_ID" which renders a default pin style.
const MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID ?? "DEMO_MAP_ID";
const LOCATION = { lat: 10.0556148, lng: 76.3543769 };
const SCRIPT_ID = "google-maps-script";

function initMap(container) {
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

export default function MapEmbed() {
  const mapRef = useRef(null);

  useEffect(() => {
    const load = () => {
      if (mapRef.current) initMap(mapRef.current);
    };

    // Already loaded (hot reload / second visit)
    if (window.google?.maps) {
      load();
      return;
    }

    if (!document.getElementById(SCRIPT_ID)) {
      window._mapCallback = load;
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&loading=async&libraries=marker&callback=_mapCallback`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      if (window.google?.maps?.marker) {
        load();
      } else {
        const existingCallback = window._mapCallback;
        window._mapCallback = () => {
          if (existingCallback) existingCallback();
          load();
        };
      }
    }
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}
