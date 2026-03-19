import { Camp, Features, GetApp, Guide } from '@/components/sections'
import { Hero } from '@/components/hero'
import { HeroSkeleton } from '@/components/hero'
import { Suspense } from 'react'
import { SectionDivider } from '@/components/ui'

/**
 * Home page component for the Travel/Camping Next.js application.
 *
 * Renders the main landing page with multiple sections separated by colored dividers:
 * - Hero section with lazy loading fallback
 * - Camp section
 * - Guide section
 * - Features section
 * - GetApp section
 *
 * @returns {JSX.Element} The complete home page layout with all sections and dividers
 */
export default function Home() {
  return (
    <>
      {/* Hero section with lazy loading fallback */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      {/* Colored dividers between sections */}
      <SectionDivider color="#06B6D4" />
      {/* Campsite section */}
      <Camp />
      {/* Colored dividers between sections */}
      <SectionDivider color="#0611D4" />
      <Guide />
      {/* Colored dividers between sections */}
      <SectionDivider color="#564699" />
      <Features />
      {/* Colored dividers between sections */}
      <SectionDivider color="#99B074" />
      <GetApp />
    </>
  )
}
