interface JsonLdProps {
    data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

export function OrganizationJsonLd() {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'TickKet',
        description: 'Decentralized event ticketing platform powered by blockchain technology',
        url: 'https://tickket.vercel.app',
        logo: 'https://tickket.vercel.app/logo.png',
        sameAs: [
            'https://github.com/jeremiah-eth/TickKet'
        ]
    }

    return <JsonLd data={data} />
}
