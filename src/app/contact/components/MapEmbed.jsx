"use client";

import { useRef, useEffect } from "react";

export default function MapEmbed() {
  const mapRef = useRef(null);

  useEffect(() => {
    window.initMap = () => {
      if (!mapRef.current) return;
      const location = { lat: 10.0556148, lng: 76.3543769 };
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 18,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "PayNback",
      });
    };

    if (window.google && window.google.maps) {
      window.initMap();
    } else {
      const scriptId = "google-maps-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    }
  }, []);

  return <div ref={mapRef} className="w-full h-full" />;
}
