'use client'

import Link from 'next/link'
import ConnectButton from './ConnectButton'
import { Icons } from './ui/icons'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Icons.ticket className="h-6 w-6 text-purple-400" />
                        <span className="text-xl font-bold text-white font-heading">TickKet</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                            Events
                        </Link>
                        <Link href="/create-event" className="text-gray-300 hover:text-white transition-colors">
                            Create Event
                        </Link>
                        <Link href="/my-tickets" className="text-gray-300 hover:text-white transition-colors">
                            My Tickets
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </nav>
    )
}
