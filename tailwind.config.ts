/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Usage:
      // Text color: text-<color>-<shade> e.g. text-gray-90
      // Background color: bg-<color>-<shade> e.g. bg-green-50
      // Border color: border-<color>-<shade> e.g. border-gray-20
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      // Usage: bg-<key> (Note: this `bg-` is for background images)
      // e.g. className="bg-img-1 bg-cover bg-center"
      backgroundImage: {
        'img-1': "url('/img-1.png')",
        'img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      // Usage: font-sans
      // e.g. className="font-sans"
      fontFamily: {
        // Place 'Inter' first, followed by the system fallback fonts
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Usage: text-xs / text-sm / text-base / text-lg / text-xl / text-2xl / text-3xl / text-4xl
      // e.g. className="text-2xl"
      // Note: `text-` can also indicate a color (e.g. text-gray-90). Tailwind determines
      // whether it's a size or a color based on the token that follows.
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      // Usage:
      // padding: p-18 / px-22 / py-30 ...
      // margin: m-18 / mt-26 / mx-30 ...
      // gap: gap-18 / gap-26 ...
      // width/height: w-18 / h-30 ...
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      screens: {
        xs: '400px',
        '2xl': '1536px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
        '8xl': '1400px',
        '9xl': '1440px',
      },
      borderRadius: {
        '5xl': '40px',
        '4xl': '32px',
        '3xl': '24px',
      },
      // shadows(for cards and overlays)
      boxShadow: {
        soft: '0 10px 25px rgba(0,0,0,0.08)',
        card: '0 8px 30px rgba(0,0,0,0.12)',
      },
      // z-index
      zIndex: {
        1: '1',
        5: '5',
        60: '60',
      },
    },
  },
  plugins: [],
}
