'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  getCurrentUserCoordinates,
  persistUserLocation,
} from '@/components/providers/GeolocationProvider'
import { fetchNearbyShops } from '../services/merchantService'

const MsmeLocationContext = createContext(null)

export function useMsmeLocation() {
  const ctx = useContext(MsmeLocationContext)
  if (!ctx) {
    throw new Error('useMsmeLocation must be used within MsmeLocationProvider')
  }
  return ctx
}

export default function MsmeLocationProvider({ children }) {
  const [sessionCoords, setSessionCoords] = useState(null)
  const [isEnablingLocation, setIsEnablingLocation] = useState(false)
  /** Bumped after each successful enable + shops fetch so ShopsCarousel can sync without relying on window events. */
  const [enableShopsPayload, setEnableShopsPayload] = useState(null)
  const inFlightRef = useRef(false)

  const enableLocation = useCallback(async () => {
    if (typeof window === 'undefined' || inFlightRef.current) return
    inFlightRef.current = true
    setIsEnablingLocation(true)
    try {
      const coords = await getCurrentUserCoordinates()
      if (!coords) return

      setSessionCoords(coords)

      let rawShops = []
      try {
        rawShops = await fetchNearbyShops(coords.lat, coords.lng)
      } catch {
        rawShops = []
      }
      const shops = Array.isArray(rawShops) ? rawShops : []

      persistUserLocation(coords)
      setEnableShopsPayload({ key: Date.now(), shops: [...shops] })
    } finally {
      setSessionCoords(null)
      setIsEnablingLocation(false)
      inFlightRef.current = false
    }
  }, [])

  const value = useMemo(
    () => ({
      sessionCoords,
      isEnablingLocation,
      enableLocation,
      enableShopsPayload,
    }),
    [sessionCoords, isEnablingLocation, enableLocation, enableShopsPayload]
  )

  return (
    <MsmeLocationContext.Provider value={value}>
      {children}
    </MsmeLocationContext.Provider>
  )
}
