'use client'

import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Icons } from '@/components/ui/icons'

export default function MyTicketsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-white mb-8 font-heading">My Tickets</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="hover:scale-105 transition-transform cursor-pointer">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">Sample Event Ticket</h3>
                                <p className="text-gray-400 text-sm">Dec 31, 2025 • 8:00 PM</p>
                            </div>
                            <Badge variant="success">Valid</Badge>
                        </div>

                        <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-4">
                            <Icons.qrcode className="h-32 w-32 text-black" />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Ticket #1234</span>
                            <span className="text-purple-400 font-medium">General Admission</span>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
