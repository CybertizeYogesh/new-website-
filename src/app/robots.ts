import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/_next/'],
      },
    ],
    sitemap: 'https://speedexrelocation.com/sitemap.xml',
    host: 'https://speedexrelocation.com',
  };
}
