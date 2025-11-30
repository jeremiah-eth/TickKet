import { Metadata } from 'next'

export const siteConfig = {
    name: 'TickKet',
    description: 'Decentralized Event Ticketing Platform',
    url: 'https://tickket.vercel.app',
    ogImage: 'https://tickket.vercel.app/og.jpg',
    links: {
        twitter: 'https://twitter.com/tickket',
        github: 'https://github.com/jeremiah-eth/TickKet'
    }
}

export function constructMetadata({
    title = 'TickKet - Decentralized Event Ticketing',
    description = 'Secure, transparent, and decentralized event ticketing platform built on Ethereum.',
    image = siteConfig.ogImage,
    icons = '/favicon.ico',
    noIndex = false
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@tickket'
        },
        icons,
        metadataBase: new URL(siteConfig.url),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false
            }
        })
    }
}
