'use client'

import { useEffect, useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { LOCATION_UPDATED_EVENT } from '@/components/providers/GeolocationProvider'
import { useMsmeLocation } from '@/app/msme/components/MsmeLocationProvider'

export default function LocationAccessPrompt() {
  const { enableLocation, isEnablingLocation } = useMsmeLocation()
  const [isLocationAllowed, setIsLocationAllowed] = useState(true)

  useEffect(() => {
    const syncConsent = () => {
      try {
        setIsLocationAllowed(!!localStorage.getItem('paynback_user_location'))
      } catch {
        setIsLocationAllowed(false)
      }
    }

    syncConsent()
    window.addEventListener(LOCATION_UPDATED_EVENT, syncConsent)
    window.addEventListener('storage', syncConsent)

    return () => {
      window.removeEventListener(LOCATION_UPDATED_EVENT, syncConsent)
      window.removeEventListener('storage', syncConsent)
    }
  }, [])

  const handleEnableLocation = () => {
    void enableLocation()
  }

  if (isLocationAllowed) return null

  return (
    <section className="px-4 md:px-8 lg:px-16 pb-4">
      <div className="max-w-4xl mx-auto">
        <div className="w-full rounded-2xl bg-gray-100 px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span>To view shops nearby we need to access your current location.</span>
          </div>
          <button
            type="button"
            onClick={handleEnableLocation}
            disabled={isEnablingLocation}
            className="text-sm font-medium text-(--brand-primary) hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isEnablingLocation ? 'Enabling…' : 'Enable'}
          </button>
        </div>
      </div>
    </section>
  )
}
