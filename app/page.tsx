import Camp from '@/components/Camp'
import Features from '@/components/Features'
import GetApp from '@/components/GetApp'
import Guide from '@/components/Guide'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
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
