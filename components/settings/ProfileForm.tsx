'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Icons } from '@/components/ui/icons'
import { toast } from 'sonner'
import { useState } from 'react'

const profileSchema = z.object({
    displayName: z.string().min(2, 'Name must be at least 2 characters'),
    bio: z.string().max(160, 'Bio must be less than 160 characters').optional(),
    website: z.string().url('Invalid URL').optional().or(z.literal(''))
})

type ProfileFormValues = z.infer<typeof profileSchema>

export function ProfileForm() {
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            displayName: '',
            bio: '',
            website: ''
        }
    })

    async function onSubmit(data: ProfileFormValues) {
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data)
        toast.success('Profile updated successfully')
        setIsLoading(false)
    }

    return (
        <div className="max-w-xl">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Profile</h2>
                <p className="text-gray-400">Manage your public profile information.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Display Name</label>
                    <input
                        {...form.register('displayName')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="Your name"
                    />
                    {form.formState.errors.displayName && (
                        <p className="text-red-400 text-sm">{form.formState.errors.displayName.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Bio</label>
                    <textarea
                        {...form.register('bio')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors min-h-[100px]"
                        placeholder="Tell us about yourself"
                    />
                    {form.formState.errors.bio && (
                        <p className="text-red-400 text-sm">{form.formState.errors.bio.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Website</label>
                    <input
                        {...form.register('website')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="https://example.com"
                    />
                    {form.formState.errors.website && (
                        <p className="text-red-400 text-sm">{form.formState.errors.website.message}</p>
                    )}
                </div>

                <Button type="submit" disabled={isLoading}>
                    {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                    Save Changes
                </Button>
            </form>
        </div>
    )
}
