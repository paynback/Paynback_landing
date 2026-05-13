'use client'
import { useEffect } from 'react'

const STORAGE_KEY = 'paynback_user_location'
export const LOCATION_CONSENT_KEY = 'paynback_location_consent'
export const LOCATION_UPDATED_EVENT = 'paynback:location-updated'

export function requestAndCacheLocation() {
  if (typeof window === 'undefined' || !navigator.geolocation) return

  try {
    const cached = localStorage.getItem(STORAGE_KEY)
    if (cached) {
      const { lat, lng } = JSON.parse(cached)
      if (typeof lat === 'number' && typeof lng === 'number') {
        return
      }
    }
  } catch {
    // Invalid cache, proceed to fetch
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const locationData = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(locationData))
        window.dispatchEvent(new Event(LOCATION_UPDATED_EVENT))
      } catch {
        // localStorage not available, silently ignore
      }
    },
    () => {
      // User denied or error – do nothing
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
  )
}

/**
 * Silently fetches the user's geolocation on app load and caches it
 * in localStorage. If a cached location already exists, it skips
 * the geolocation request to avoid repeated permission prompts.
 *
 * Renders nothing – just a side-effect provider.
 */
export default function GeolocationProvider() {
  useEffect(() => {
    try {
      const hasConsent = localStorage.getItem(LOCATION_CONSENT_KEY) === 'true'
      if (!hasConsent) return
    } catch {
      return
    }
    requestAndCacheLocation()
  }, [])

  return null
}
