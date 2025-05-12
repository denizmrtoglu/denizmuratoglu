import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://denizmuratoglu.com';

  // Define all static routes
  const staticRoutes = [
    '',
    '/introduction',
    '/resume',
    '/journey',
    '/contact',
    '/reading',
    '/bookmarks'
  ];

  return [
    ...staticRoutes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8 // Homepage gets priority 1
    }))
  ];
}
