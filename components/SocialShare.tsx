'use client'

import { Button } from './ui/Button'
import { Icons } from './ui/icons'

interface SocialShareProps {
    url: string
    title: string
    description?: string
}

export function SocialShare({ url, title, description }: SocialShareProps) {
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(title)
    const encodedDesc = encodeURIComponent(description || '')

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
        whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
    }

    return (
        <div className="flex gap-2">
            <Button
                variant="glass"
                size="sm"
                onClick={() => window.open(shareLinks.twitter, '_blank')}
                className="hover:text-blue-400"
            >
                <Icons.twitter className="h-4 w-4" />
            </Button>
            <Button
                variant="glass"
                size="sm"
                onClick={() => window.open(shareLinks.facebook, '_blank')}
                className="hover:text-blue-600"
            >
                <Icons.facebook className="h-4 w-4" />
            </Button>
            <Button
                variant="glass"
                size="sm"
                onClick={() => window.open(shareLinks.linkedin, '_blank')}
                className="hover:text-blue-500"
            >
                <Icons.linkedin className="h-4 w-4" />
            </Button>
            <Button
                variant="glass"
                size="sm"
                onClick={() => window.open(shareLinks.whatsapp, '_blank')}
                className="hover:text-green-500"
            >
                <Icons.messageCircle className="h-4 w-4" />
            </Button>
        </div>
    )
}
