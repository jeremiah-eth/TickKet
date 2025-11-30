'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { useState } from 'react'
import { toast } from 'sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const [quantity, setQuantity] = useState(1)

    const handlePurchase = () => {
        toast.success('Ticket purchase coming soon!')
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Event Image */}
                        <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"></div>

                        {/* Event Details */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="success">Active</Badge>
                                    <Badge>Music</Badge>
                                </div>
                                <h1 className="text-4xl font-bold text-white mb-4 font-heading">
                                    Sample Event #{id}
                                </h1>
                                <p className="text-gray-400">
                                    This is a sample event description. In a real application, this would be fetched from the blockchain or a database.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Icons.calendar className="h-5 w-5 text-purple-400" />
                                    <span>December 31, 2025 • 8:00 PM</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Icons.location className="h-5 w-5 text-purple-400" />
                                    <span>Virtual Event</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Icons.ticket className="h-5 w-5 text-purple-400" />
                                    <span>50 / 100 tickets remaining</span>
                                </div>
                            </div>

                            <Card>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Price per ticket</span>
                                        <span className="text-2xl font-bold text-purple-400">0.1 ETH</span>
                                    </div>

                                    <div>
                                        <Label htmlFor="quantity">Quantity</Label>
                                        <Input
                                            id="quantity"
                                            type="number"
                                            min="1"
                                            max="10"
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <span className="text-gray-400">Total</span>
                                        <span className="text-2xl font-bold text-white">{(0.1 * quantity).toFixed(2)} ETH</span>
                                    </div>

                                    <Button onClick={handlePurchase} className="w-full">
                                        Purchase Tickets
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
