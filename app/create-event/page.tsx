'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { Label } from '@/components/ui/Label'
import { DatePicker } from '@/components/ui/DatePicker'
import { ImageUpload } from '@/components/ui/ImageUpload'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const createEventSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long'),
    date: z.date(),
    location: z.string().min(3, 'Location must be at least 3 characters long'),
    price: z.string().min(1, 'Price is required'),
    image: z.any().optional()
})

type CreateEventInput = z.infer<typeof createEventSchema>

export default function CreateEventPage() {
    const router = useRouter()
    const [image, setImage] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateEventInput>({
        resolver: zodResolver(createEventSchema)
    })

    const onSubmit = async (data: CreateEventInput) => {
        try {
            setIsLoading(true)
            // Simulate API call/Contract interaction
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log('Event Data:', { ...data, image })
            toast.success('Event created successfully!')
            router.push('/dashboard/organizer')
        } catch (error) {
            toast.error('Failed to create event')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-24 pb-12 px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-white mb-2 font-heading">Create Event</h1>
                        <p className="text-gray-400">Launch your event on the blockchain</p>
                    </div>

                    <Card className="p-6 md:p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Event Title</Label>
                                <Input
                                    id="title"
                                    placeholder="e.g. Summer Music Festival"
                                    {...register('title')}
                                />
                                {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    id="description"
                                    placeholder="Describe your event..."
                                    {...register('description')}
                                />
                                {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label>Date & Time</Label>
                                    <DatePicker
                                        onSelect={(date) => setValue('date', date as Date)}
                                    />
                                    {errors.date && (
                                        <p className="text-sm text-red-500">{errors.date.message}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="price">Ticket Price (ETH)</Label>
                                    <Input
                                        id="price"
                                        type="number"
                                        step="0.001"
                                        placeholder="0.05"
                                        {...register('price')}
                                    />
                                    {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    placeholder="e.g. Central Park, NY or Online URL"
                                    {...register('location')}
                                />
                                {errors.location && <p className="text-sm text-red-500">{errors.location.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label>Event Image</Label>
                                <ImageUpload
                                    onUpload={(file) => setImage(file)}
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Creating...' : 'Create Event'}
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    )
}
