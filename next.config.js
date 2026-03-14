/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true, // required for static export
  },
}

module.exports = nextConfig
