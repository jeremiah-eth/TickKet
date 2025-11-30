import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Icons } from '@/components/ui/icons'
import Link from 'next/link'
import Image from 'next/image'

interface EventCardProps {
    id: string
    title: string
    description: string
    date: string
    location: string
    price: string
    image?: string
    category?: string
}

export function EventCard({
    id,
    title,
    description,
    date,
    location,
    price,
    image,
    category
}: EventCardProps) {
    return (
        <Link href={`/events/${id}`}>
            <Card className="hover:scale-105 transition-transform cursor-pointer h-full overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                    {image && (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                        />
                    )}
                </div>

                <div className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-white line-clamp-1">{title}</h3>
                        {category && <Badge variant="default">{category}</Badge>}
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2">{description}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Icons.calendar className="h-4 w-4" />
                        <span>{date}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Icons.location className="h-4 w-4" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <span className="text-purple-400 font-semibold">{price} ETH</span>
                        <span className="text-gray-500 text-sm">View Details →</span>
                    </div>
                </div>
            </Card>
        </Link>
    )
}
