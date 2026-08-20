/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://stealthcyber.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/studio', '/studio/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      // All crawlers — allow site, block admin/API
      { userAgent: '*', allow: '/', disallow: ['/studio', '/studio/*', '/api/'] },
      // Explicitly allow AI answer engine crawlers for AEO
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
    ],
    additionalSitemaps: [],
  },
  // Higher priority for key conversion pages
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      // Flagship product page — ranks alongside /services, not with the
      // long-tail content at the 0.7 default.
      '/nerv': 0.9,
      '/services': 0.9,
      '/contact': 0.9,
      '/about': 0.8,
      '/blog': 0.8,
      '/resources': 0.8,
    }
    // Nerv module pages sit just under the platform overview.
    if (path.startsWith('/nerv/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: priorities[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/nerv'),
    await config.transform(config, '/services'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/resources'),
  ],
}
