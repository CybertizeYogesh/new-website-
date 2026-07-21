import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://speedexrelocation.com';

  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/network-us',
    '/house-relocation',
    '/office-relocation',
    '/car-transportation',
    '/bike-transportation',
    '/domestic-moving',
    '/international-moving',
    '/packing-unpacking',
    '/warehouse-service',
    '/privacy-policy',
    '/terms-and-conditions',
    '/packers-and-movers-in-electronic-city',
    '/packers-and-movers-in-begur',
    '/packers-and-movers-in-bellandur',
    '/packers-and-movers-in-bommasandra',
    '/packers-and-movers-in-hulimangala',
    '/packers-and-movers-in-marathahalli',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
