/**
 * Security headers are set here, not in staticwebapp.config.json. Azure Static
 * Web Apps does not apply that file's `globalHeaders` to responses served by
 * the Next.js server (every page and API route on this site), so none of them
 * reached browsers. HSTS is left to the platform, which already sends it.
 *
 * script-src keeps 'unsafe-inline' because Next.js 14 inlines its bootstrap
 * scripts and this site has no nonce middleware. frame-ancestors 'none' and
 * X-Frame-Options together stop the site being framed (clickjacking).
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io",
  "font-src 'self' data:",
  "connect-src 'self' https://*.api.sanity.io https://*.apicdn.sanity.io",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Azure Static Web Apps supports hybrid Next.js rendering natively.
  // Remove output: 'export' so dynamic routes work with ISR/SSR.
  // Only Sanity's image path can be fed to the optimiser, which narrows the
  // image-optimisation denial-of-service exposure in Next.js 14. (`domains`
  // allowed any path on the host.)
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' }],
  },
  // Don't advertise the framework in an `x-powered-by` header.
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
  // One canonical host: www served a full copy of the site. Azure does not
  // pass the visitor's hostname to the Next.js server as `Host`, so this
  // matches the forwarded host. Only www is matched: the default
  // *.azurestaticapps.net host is left out because a rule for the host the
  // server itself sees could redirect every request back to itself.
  // Canonical <link> tags already point search engines at stealthcyber.io.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-host', value: 'www.stealthcyber.io' }],
        destination: 'https://stealthcyber.io/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
