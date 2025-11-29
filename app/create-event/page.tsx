'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { Textarea } from '@/components/ui/Textarea'
import { Card } from '@/components/ui/Card'
import { toast } from 'sonner'

export default function CreateEventPage() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        location: '',
        price: '',
        maxTickets: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success('Event creation coming soon!')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-white mb-8 font-heading">Create Event</h1>

                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="name">Event Name</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Enter event name"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Describe your event"
                                rows={4}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="date">Event Date</Label>
                                <Input
                                    id="date"
                                    type="datetime-local"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder="Event location"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="price">Ticket Price (ETH)</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    step="0.001"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    placeholder="0.1"
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="maxTickets">Max Tickets</Label>
                                <Input
                                    id="maxTickets"
                                    type="number"
                                    value={formData.maxTickets}
                                    onChange={(e) => setFormData({ ...formData, maxTickets: e.target.value })}
                                    placeholder="100"
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">
                            Create Event
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
