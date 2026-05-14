'use client'
import { useEffect } from 'react'

const STORAGE_KEY = 'paynback_user_location'
export const LOCATION_CONSENT_KEY = 'paynback_location_consent'
export const LOCATION_UPDATED_EVENT = 'paynback:location-updated'

const GEO_OPTIONS = {
  enableHighAccuracy: false,
  timeout: 10000,
  maximumAge: 300000,
}

/**
 * Resolves current coordinates: valid cache first, otherwise geolocation.
 * Does not write to localStorage.
 */
export function getCurrentUserCoordinates() {
  if (typeof window === 'undefined' || !navigator.geolocation) {
    return Promise.resolve(null)
  }

  return new Promise((resolve) => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY)
      if (cached) {
        const { lat, lng } = JSON.parse(cached)
        if (typeof lat === 'number' && typeof lng === 'number') {
          resolve({ lat, lng })
          return
        }
      }
    } catch {
      // Invalid cache, request fresh position
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      },
      () => resolve(null),
      GEO_OPTIONS
    )
  })
}

/**
 * Writes coordinates to localStorage and notifies listeners.
 * Optional `extra` fields are merged into the CustomEvent `detail` (e.g. prefetched `shops`).
 */
export function persistUserLocation(coords, extra = {}) {
  if (typeof window === 'undefined' || !coords) return

  const payload = { lat: coords.lat, lng: coords.lng }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // localStorage not available
  }

  try {
    window.dispatchEvent(
      new CustomEvent(LOCATION_UPDATED_EVENT, {
        detail: { ...payload, ...extra },
      })
    )
  } catch {
    // dispatch failed
  }
}

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
      persistUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    },
    () => {
      // User denied or error – do nothing
    },
    GEO_OPTIONS
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
      const hasLocation = !!localStorage.getItem(STORAGE_KEY)
      if (!hasLocation) return
    } catch {
      return
    }
    // If they already have a location, we don't actually need to request it again since requestAndCacheLocation returns early if cached. 
    // But if we ever expire the cache or want to update it on load, we would do it here.
    requestAndCacheLocation()
  }, [])

  return null
}
