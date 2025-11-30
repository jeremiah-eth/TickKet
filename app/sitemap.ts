import { Metadata, Route } from 'next'

export default function sitemap(): Metadata {
    const routes = [
        '',
        '/events',
        '/create-event',
        '/about',
        '/faq',
        '/market'
    ].map((route) => ({
        url: `https://tickket.vercel.app${route}`,
        lastModified: new Date().toISOString().split('T')[0]
    }))

    return routes as unknown as Metadata
}
