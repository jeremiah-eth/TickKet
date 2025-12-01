'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import { toast } from 'sonner'

export function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@')) {
            toast.error('Please enter a valid email address')
            return
        }

        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))

        toast.success('Thanks for subscribing!')
        setEmail('')
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} className="whitespace-nowrap">
                {isLoading ? (
                    <Icons.spinner className="h-4 w-4 animate-spin" />
                ) : (
                    'Subscribe'
                )}
            </Button>
        </form>
    )
}
