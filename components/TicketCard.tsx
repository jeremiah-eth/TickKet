'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import { toast } from 'sonner'

interface TicketCardProps {
    ticketId: string
    eventName: string
    eventDate: string
    ticketType: string
    isValid: boolean
}

export function TicketCard({
    ticketId,
    eventName,
    eventDate,
    ticketType,
    isValid
}: TicketCardProps) {
    const handleShare = () => {
        toast.success('Share functionality coming soon!')
    }

    return (
        <Card className="hover:scale-105 transition-transform">
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{eventName}</h3>
                        <p className="text-gray-400 text-sm">{eventDate}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-semibold ${isValid ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                        }`}>
                        {isValid ? 'Valid' : 'Used'}
                    </div>
                </div>

                <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                    <Icons.qrcode className="h-32 w-32 text-black" />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Ticket ID</span>
                        <span className="text-white font-mono">#{ticketId}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Type</span>
                        <span className="text-purple-400 font-medium">{ticketType}</span>
                    </div>
                </div>

                <div className="flex gap-2 pt-2">
                    <Button variant="glass" className="flex-1" onClick={handleShare}>
                        <Icons.share className="h-4 w-4 mr-2" />
                        Share
                    </Button>
                    <Button variant="ghost" className="flex-1">
                        <Icons.external className="h-4 w-4 mr-2" />
                        View
                    </Button>
                </div>
            </div>
        </Card>
    )
}
