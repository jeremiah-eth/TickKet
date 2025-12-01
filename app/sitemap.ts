import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://tickket.vercel.app',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/events',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/create-event',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/market',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/about',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/settings',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/terms',
            lastModified: new Date(),
        },
        {
            url: 'https://tickket.vercel.app/privacy',
            lastModified: new Date(),
        },
    ]
}
