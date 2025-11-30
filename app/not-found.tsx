'use client'

import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20 px-4">
                <div className="text-center max-w-lg mx-auto">
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full" />
                            <Icons.search className="h-24 w-24 text-white/20 relative z-10" />
                        </div>
                    </div>

                    <h1 className="text-6xl font-bold text-white mb-4 font-heading">404</h1>
                    <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
                    <p className="text-gray-400 mb-8">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="w-full sm:w-auto">
                                <Icons.home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/events">
                            <Button variant="glass" size="lg" className="w-full sm:w-auto">
                                <Icons.search className="mr-2 h-4 w-4" />
                                Browse Events
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
