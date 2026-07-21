import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://speedexrelocation.com';

  // High priority main routes
  const mainRoutes = [
    { path: '', priority: 1.0, changeFreq: 'daily' as const },
    { path: '/house-relocation', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/office-relocation', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/car-transportation', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/bike-transportation', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/domestic-moving', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/international-moving', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/packing-unpacking', priority: 0.9, changeFreq: 'daily' as const },
    { path: '/warehouse-service', priority: 0.9, changeFreq: 'daily' as const },
  ];

  // Location & info routes
  const infoRoutes = [
    { path: '/about-us', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/contact-us', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/gallery', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/packers-and-movers-in-electronic-city', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/packers-and-movers-in-begur', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/packers-and-movers-in-bellandur', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/packers-and-movers-in-bommasandra', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/packers-and-movers-in-hulimangala', priority: 0.8, changeFreq: 'weekly' as const },
    { path: '/packers-and-movers-in-marathahalli', priority: 0.8, changeFreq: 'weekly' as const },
  ];

  // Legal routes
  const legalRoutes = [
    { path: '/privacy-policy', priority: 0.5, changeFreq: 'monthly' as const },
    { path: '/terms-and-conditions', priority: 0.5, changeFreq: 'monthly' as const },
  ];

  const allRoutes = [...mainRoutes, ...infoRoutes, ...legalRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
