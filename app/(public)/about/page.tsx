import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui'

const FEATURE_ITEMS = ['Curated Camping Spots', 'Expert Travel Guides', 'Real-time Offline Maps']

const CORE_VALUES = [
  {
    title: 'Inspire',
    description:
      'Encourage more people to enjoy the beauty of nature and discover memorable outdoor experiences.',
    icon: '/globe.svg',
  },
  {
    title: 'Simplify',
    description:
      'Make trip planning easier through clean design, intuitive navigation, and practical tools.',
    icon: '/map.svg',
  },
  {
    title: 'Connect',
    description:
      'Build a stronger connection between people, destinations, and outdoor lifestyles.',
    icon: '/user.svg',
  },
]

const STATS = [
  {
    value: '100+',
    label: 'Camping Spots',
  },
  {
    value: '10K+',
    label: 'Happy Travelers',
  },
  {
    value: '24/7',
    label: 'Active Support',
  },
]

export default function AboutPage() {
  return (
    <main className="flexCenter relative flex-col overflow-hidden bg-white">
      {/* Floating back navigation for pages without the global navbar */}
      <nav className="fixed left-6 top-6 z-50 md:left-8 md:top-8">
        <Link href="/">
          <Button type="button" title="← Back to Home" variant="btn_dark_green" />
        </Link>
      </nav>
      {/* Hero section */}
      <section className="relative flex h-[60vh] w-full items-center justify-center bg-slate-900">
        <Image
          src="/img-2.png"
          alt="Camping landscape background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 max-w-4xl px-6 text-center text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-50">
            Our Journey
          </p>
          <h1 className="bold-64 lg:bold-88 mb-6">Explore Nature with Comfort</h1>
          <p className="regular-18 md:regular-20 text-gray-200">
            We build modern camping and travel experiences for people who love adventure, beautiful
            landscapes, and simple outdoor living.
          </p>
        </div>
      </section>
      {/* Brand story and introduction */}
      <section className="max-container padding-container py-20 lg:py-32">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Who We Are
            </p>
            <h2 className="bold-40 lg:bold-52 mb-6 text-gray-900">
              A modern platform for outdoor explorers
            </h2>
            <p className="regular-16 mb-4 leading-relaxed text-gray-30">
              We are a travel and camping platform focused on helping users discover amazing outdoor
              destinations, plan trips more easily, and enjoy a better camping lifestyle.
            </p>
            <p className="regular-16 leading-relaxed text-gray-30">
              Our goal is to combine clean design, useful travel information, and a smooth digital
              experience into one modern web application that feels inspiring, practical, and easy
              to use.
            </p>
          </div>
          <div className="relative h-[350px] w-full flex-1 lg:h-[450px]">
            <Image
              src="/img-1.png"
              alt="Camping team and outdoor lifestyle"
              fill
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-20 lg:flex-row-reverse lg:items-center">
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              What We Do
            </p>
            <h2 className="bold-40 lg:bold-52 mb-6 text-gray-900">
              Helping travelers plan better outdoor adventures
            </h2>
            <p className="regular-16 mb-4 leading-relaxed text-gray-30">
              We showcase camping locations, helpful travel guides, app features, and smart tools
              that make it easier for users to prepare for their next outdoor adventure.
            </p>
            <p className="regular-16 mb-6 leading-relaxed text-gray-30">
              From destination inspiration to useful planning resources, we aim to make outdoor
              exploration more accessible, enjoyable, and confidence-inspiring for every traveler.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {FEATURE_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Image src="/star.svg" alt="Feature bullet" width={20} height={20} />
                  <span className="regular-16 text-gray-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[350px] w-full flex-1 lg:h-[450px]">
            <Image
              src="/boat.png"
              alt="Travel guide and outdoor adventure"
              fill
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
      {/* Core mission and values */}
      <section className="bg-slate-10 w-full py-20">
        <div className="max-container padding-container">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Our Mission
            </p>
            <h2 className="bold-40 text-gray-900">What drives everything we build</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="flexCenter flex-col rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm"
              >
                <div className="mb-6 rounded-full bg-green-50 p-4">
                  <Image src={value.icon} alt={value.title} width={32} height={32} />
                </div>
                <h3 className="bold-24 mb-4 text-gray-900">{value.title}</h3>
                <p className="regular-16 text-gray-30">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats section */}
      <section className="max-container padding-container py-20">
        <div className="rounded-3xl bg-green-90 bg-pattern bg-cover bg-no-repeat p-12 text-white">
          <div className="grid gap-10 text-center md:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="bold-52">{stat.value}</span>
                <p className="regular-18 opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Closing call to action */}
      <section className="max-container padding-container py-24 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
          Start Your Journey
        </p>
        <h2 className="bold-40 lg:bold-64 mb-6 text-gray-900">Ready for your next adventure?</h2>
        <p className="regular-16 mx-auto mb-10 max-w-2xl text-gray-30">
          Whether you are planning a weekend camping trip or looking for your next big outdoor
          journey, we are here to help you explore with ease, confidence, and excitement.
        </p>
        <div className="flexCenter flex-wrap gap-4">
          <Link href="/">
            <Button type="button" title="Start Exploring" variant="btn_green" />
          </Link>
          <Button type="button" title="Contact Us" variant="btn_white_text" />
        </div>
      </section>
    </main>
  )
}
