'use client'
import { useEffect } from 'react'

const STORAGE_KEY = 'paynback_user_location'

/**
 * Silently fetches the user's geolocation on app load and caches it
 * in localStorage. If a cached location already exists, it skips
 * the geolocation request to avoid repeated permission prompts.
 *
 * Renders nothing – just a side-effect provider.
 */
export default function GeolocationProvider() {
  useEffect(() => {
    // Check if we already have a cached location
    try {
      const cached = localStorage.getItem(STORAGE_KEY)
      if (cached) {
        const { lat, lng } = JSON.parse(cached)
        if (typeof lat === 'number' && typeof lng === 'number') {
          return // Already have valid location, skip geolocation request
        }
      }
    } catch {
      console.error('Error while fetching location from cache')
    }

    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(locationData))
        } catch {
          // localStorage not available, silently ignore
        }
      },
      () => {
        // User denied or error – do nothing
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 }
    )
  }, [])

  return null
}
