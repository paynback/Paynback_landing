'use client'

import MsmeHero from '@/app/msme/components/MsmeHero'
import MsmeForm from '@/app/msme/components/MsmeForm'
import LocationAccessPrompt from '@/app/msme/components/LocationAccessPrompt'
import ShopsCarousel from '@/app/msme/components/ShopsCarousel'
import MsmeLocationProvider from '@/app/msme/components/MsmeLocationProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function MsmePageClient() {
  return (
    <MsmeLocationProvider>
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <ScrollReveal>
          <MsmeHero />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <MsmeForm />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <LocationAccessPrompt />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <ShopsCarousel />
        </ScrollReveal>
      </main>
    </MsmeLocationProvider>
  )
}
