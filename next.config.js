/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Hide information indicators in development mode
  devIndicators: false,
}

module.exports = nextConfig
