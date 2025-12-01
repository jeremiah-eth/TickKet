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
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center px-4">
                <h1 className="text-6xl font-bold text-primary">404</h1>
                <p className="text-2xl mt-4 mb-8">Page Not Found</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button size="lg" className="w-full sm:w-auto">
                            <Icons.home className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="/events">
                        <Button variant="glass" size="lg" className="w-full sm:w-auto">
                            <Icons.ticket className="mr-2 h-4 w-4" />
                            Browse Events
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
