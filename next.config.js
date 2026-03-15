/** @type {import('next').NextConfig} */
const nextConfig = {
  // Azure Static Web Apps supports hybrid Next.js rendering natively.
  // Remove output: 'export' so dynamic routes work with ISR/SSR.
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
