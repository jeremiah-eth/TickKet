'use client'

import { TicketCard } from '@/components/TicketCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MyTicketsPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-white mb-8 font-heading">My Tickets</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <TicketCard
                            ticketId="1234"
                            eventName="Sample Music Festival"
                            eventDate="Dec 31, 2025 • 8:00 PM"
                            ticketType="General Admission"
                            isValid={true}
                        />
                        <TicketCard
                            ticketId="5678"
                            eventName="Tech Conference 2025"
                            eventDate="Jan 15, 2026 • 10:00 AM"
                            ticketType="VIP Pass"
                            isValid={true}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
