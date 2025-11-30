import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Icons } from '@/components/ui/icons'
import Link from 'next/link'

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

                    <p className = "text-gray-400 text-sm line-clamp-2" > { description }</p>

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
                </div >
            </Card >
        </Link >
    )
}
