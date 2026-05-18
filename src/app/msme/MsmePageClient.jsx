'use client'

import MsmeHero from '@/app/msme/components/MsmeHero'
import MsmeForm from '@/app/msme/components/MsmeForm'
import LocationAccessPrompt from '@/app/msme/components/LocationAccessPrompt'
import ShopsCarousel from '@/app/msme/components/ShopsCarousel'
import MsmeLocationProvider from '@/app/msme/components/MsmeLocationProvider'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BlurReveal from '@/components/sections/BlurReveal'

export default function MsmePageClient() {
  return (
    <MsmeLocationProvider>
      <main className="min-h-screen bg-gray-50 flex flex-col">
        <ScrollReveal> {/**scroll reveal */}
          <MsmeHero />
        </ScrollReveal>

        <BlurReveal> {/**blur reveal */}
          <MsmeForm />
        </BlurReveal>

        <ScrollReveal delay={100}> {/**scroll reveal */}
          <LocationAccessPrompt />
        </ScrollReveal>

        <ScrollReveal delay={100}> {/**scroll reveal */}
          <ShopsCarousel />
        </ScrollReveal>
      </main>
    </MsmeLocationProvider>
  )
}
