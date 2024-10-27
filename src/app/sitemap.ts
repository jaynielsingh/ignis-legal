import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ignislegal.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ignislegal.com/policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // {
    //   url: 'https://ignislegal.com/blog',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.5,
    // },
  ]
}