'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { mockEvents } from '@/lib/mockData'
import Link from 'next/link'

export default function OrganizerDashboard() {
    // In a real app, we would filter events by the connected wallet address
    const myEvents = mockEvents

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2 font-heading">Organizer Dashboard</h1>
                            <p className="text-gray-400">Manage your events and track sales</p>
                        </div>
                        <Link href="/create-event">
                            <Button>
                                <Icons.plus className="mr-2 h-4 w-4" />
                                Create New Event
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <Card className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-400">Total Revenue</h3>
                                <Icons.dollarSign className="h-5 w-5 text-green-400" />
                            </div>
                            <p className="text-3xl font-bold text-white">12.5 ETH</p>
                            <p className="text-sm text-green-400 mt-2">+2.1% from last month</p>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-400">Tickets Sold</h3>
                                <Icons.ticket className="h-5 w-5 text-purple-400" />
                            </div>
                            <p className="text-3xl font-bold text-white">479</p>
                            <p className="text-sm text-green-400 mt-2">+15% from last month</p>
                        </Card>
                        <Card className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-gray-400">Active Events</h3>
                                <Icons.calendar className="h-5 w-5 text-blue-400" />
                            </div>
                            <p className="text-3xl font-bold text-white">3</p>
                            <p className="text-sm text-gray-400 mt-2">1 draft event</p>
                        </Card>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-6">Your Events</h2>
                    <div className="space-y-4">
                        {myEvents.map((event) => (
                            <Card key={event.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <Icons.image className="h-8 w-8 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                                        <p className="text-gray-400 text-sm">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className="text-right hidden md:block">
                                        <p className="text-sm text-gray-400">Sales</p>
                                        <p className="font-medium text-white">{event.soldTickets} / {event.maxTickets}</p>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <p className="text-sm text-gray-400">Revenue</p>
                                        <p className="font-medium text-white">{(parseFloat(event.price) * event.soldTickets).toFixed(2)} ETH</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="sm">
                                            <Icons.edit className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Icons.barChart className="h-4 w-4" />
                                        </Button>
                                    </div>
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
