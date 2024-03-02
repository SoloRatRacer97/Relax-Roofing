import { siteConfig } from '@/config/site';

module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // TODO: Remove blog post pages IF blog not included at this point. 
  exclude: ['/server-sitemap.xml', '/design-credit'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteConfig.url}/server-sitemap.xml`, 
    ],
  },
};
