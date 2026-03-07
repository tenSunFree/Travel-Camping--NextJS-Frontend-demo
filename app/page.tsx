import { Camp, Features, GetApp, Guide } from '@/components/sections'
import { Hero } from '@/components/hero'
import { HeroSkeleton } from '@/components/ui'
import { Suspense } from 'react'

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <hr
          aria-hidden="true"
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#06B6D4',
          }}
        />
      </div>
      {/* Campsite section */}
      <Camp />
      {/* Colored dividers between sections */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <hr
          aria-hidden="true"
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#0611D4',
          }}
        />
      </div>
      <Guide />
      {/* Colored dividers between sections */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <hr
          aria-hidden="true"
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#564699',
          }}
        />
      </div>
      <Features />
      {/* Colored dividers between sections */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <hr
          aria-hidden="true"
          style={{
            width: '100%',
            height: '6px',
            backgroundColor: '#99B074',
          }}
        />
      </div>
      <GetApp />
    </>
  )
}
