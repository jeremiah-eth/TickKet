import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TickKet - Web3 Event Ticketing',
        short_name: 'TickKet',
        description: 'Decentralized event ticketing platform powered by blockchain technology',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#a855f7',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
