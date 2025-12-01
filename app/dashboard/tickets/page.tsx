'use client'

import { Card } from '@/components/ui/Card'
import { TicketCard } from '@/components/TicketCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { mockTickets } from '@/lib/mockData'
import { Icons } from '@/components/ui/icons'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function MyTicketsPage() {
    const tickets = mockTickets

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2 font-heading">My Tickets</h1>
                            <p className="text-gray-400">View and manage your event tickets</p>
                        </div>
                        <Link href="/events">
                            <Button variant="glass">
                                <Icons.search className="mr-2 h-4 w-4" />
                                Browse Events
                            </Button>
                        </Link>
                    </div>

                    {tickets.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tickets.map((ticket) => (
                                <TicketCard
                                    key={ticket.id}
                                    ticketId={ticket.tokenId}
                                    eventName={ticket.eventName}
                                    eventDate={new Date(ticket.date).toLocaleDateString()}
                                    ticketType="General Admission"
                                    isValid={true}
                                />
                            ))}
                        </div>
                    ) : (
                        <Card className="p-12 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="h-16 w-16 bg-white/5 rounded-full flex items-center justify-center">
                                    <Icons.ticket className="h-8 w-8 text-gray-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">No tickets yet</h3>
                            <p className="text-gray-400 mb-6">
                                You haven't purchased any tickets yet. Browse events to find your next experience.
                            </p>
                            <Link href="/events">
                                <Button>Explore Events</Button>
                            </Link>
                        </Card>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
