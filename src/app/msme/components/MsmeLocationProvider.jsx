'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  getCurrentUserCoordinates,
  LOCATION_UPDATED_EVENT,
  persistUserLocation,
} from '@/components/providers/GeolocationProvider'
import { fetchNearbyShops } from '../services/merchantService'

const LS_LOCATION = 'paynback_user_location'

const MsmeLocationContext = createContext(null)

export function useMsmeLocation() {
  const ctx = useContext(MsmeLocationContext)
  if (!ctx) {
    throw new Error('useMsmeLocation must be used within MsmeLocationProvider')
  }
  return ctx
}

function readCoordsFromStorage() {
  let lat
  let lng
  try {
    const cached = localStorage.getItem(LS_LOCATION)
    if (cached) {
      const parsed = JSON.parse(cached)
      const nLat = Number(parsed.lat)
      const nLng = Number(parsed.lng)
      if (Number.isFinite(nLat) && Number.isFinite(nLng)) {
        lat = nLat
        lng = nLng
      }
    }
  } catch {
    // ignore
  }
  return { lat, lng }
}

export default function MsmeLocationProvider({ children }) {
  const [sessionCoords, setSessionCoords] = useState(null)
  const [isEnablingLocation, setIsEnablingLocation] = useState(false)
  const [shops, setShops] = useState([])
  const [shopsLoading, setShopsLoading] = useState(true)
  const loadSeqRef = useRef(0)
  const inFlightRef = useRef(false)

  const refreshShops = useCallback(async (coords) => {
    const seq = ++loadSeqRef.current
    const { lat, lng } = coords ?? readCoordsFromStorage()

    try {
      const raw = await fetchNearbyShops(lat, lng)
      const list = Array.isArray(raw) ? raw : []
      if (seq !== loadSeqRef.current) return
      setShops(list)
      return list
    } catch {
      if (seq !== loadSeqRef.current) return
      setShops([])
      return []
    } finally {
      if (seq !== loadSeqRef.current) return
      setShopsLoading(false)
    }
  }, [])

  useEffect(() => {
    void refreshShops()

    const onStorage = (e) => {
      if (e.key !== null && e.key !== LS_LOCATION) return
      setShopsLoading(true)
      void refreshShops()
    }

    const onLocationUpdated = (event) => {
      if (inFlightRef.current) return
      setShopsLoading(true)
      void refreshShops(event.detail)
    }

    window.addEventListener('storage', onStorage)
    window.addEventListener(LOCATION_UPDATED_EVENT, onLocationUpdated)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(LOCATION_UPDATED_EVENT, onLocationUpdated)
    }
  }, [refreshShops])

  const enableLocation = useCallback(async () => {
    if (typeof window === 'undefined' || inFlightRef.current) return
    inFlightRef.current = true
    ++loadSeqRef.current
    setIsEnablingLocation(true)
    setShopsLoading(true)
    try {
      const coords = await getCurrentUserCoordinates()
      if (!coords) {
        setShopsLoading(false)
        return
      }

      setSessionCoords(coords)
      await refreshShops(coords)
      persistUserLocation(coords)
    } finally {
      setIsEnablingLocation(false)
      inFlightRef.current = false
    }
  }, [refreshShops])

  const value = useMemo(
    () => ({
      sessionCoords,
      isEnablingLocation,
      enableLocation,
      shops,
      shopsLoading,
    }),
    [
      sessionCoords,
      isEnablingLocation,
      enableLocation,
      shops,
      shopsLoading,
    ]
  )

  return (
    <MsmeLocationContext.Provider value={value}>
      {children}
    </MsmeLocationContext.Provider>
  )
}
