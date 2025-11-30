'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { mockTickets } from '@/lib/mockData'
import Link from 'next/link'
import Image from 'next/image'

export default function MarketplacePage() {
    // In a real app, these would be tickets listed for sale
    const listings = mockTickets.map(t => ({ ...t, price: '0.15' }))

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2 font-heading">Marketplace</h1>
                            <p className="text-gray-400">Buy and sell verified event tickets</p>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="glass">
                                <Icons.filter className="mr-2 h-4 w-4" />
                                Filter
                            </Button>
                            <Button variant="glass">
                                <Icons.arrowUpDown className="mr-2 h-4 w-4" />
                                Sort
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {listings.map((ticket) => (
                            <Card key={ticket.id} className="overflow-hidden group hover:border-purple-500/50 transition-colors">
                                <div className="relative aspect-video">
                                    <Image
                                        src={ticket.image}
                                        alt={ticket.eventName}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-white">
                                        #{ticket.tokenId}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{ticket.eventName}</h3>
                                            <p className="text-gray-400 text-sm">{new Date(ticket.date).toLocaleDateString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-400">Price</p>
                                            <p className="text-lg font-bold text-purple-400">{ticket.price} ETH</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                                        <Icons.mapPin className="h-4 w-4" />
                                        {ticket.location}
                                    </div>

                                    <Button className="w-full group-hover:bg-purple-600">
                                        Buy Now
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
