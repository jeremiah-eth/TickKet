'use client'

import { Button } from './ui/Button'
import { FadeIn } from './ui/FadeIn'
import Link from 'next/link'

export function Hero() {
    return (
        <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black to-black z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <FadeIn>
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-heading tracking-tight">
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Event Ticketing
                        </span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Secure, transparent, and decentralized. Experience events like never before with NFT-based tickets.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/events">
                            <Button size="lg" className="min-w-[200px] text-lg">
                                Explore Events
                            </Button>
                        </Link>
                        <Link href="/create-event">
                            <Button variant="glass" size="lg" className="min-w-[200px] text-lg">
                                Create Event
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
