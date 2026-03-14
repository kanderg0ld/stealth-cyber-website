/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://stealthcyber.io',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/studio', '/studio/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/', disallow: ['/studio', '/studio/*'] },
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/resources'),
  ],
}
