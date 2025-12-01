'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ConnectButton } from './ConnectButton'
import { Icons } from './ui/icons'
import { Button } from './ui/Button'
import { Drawer } from './ui/Drawer'
import { cn } from '@/lib/utils'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/events', label: 'Events' },
        { href: '/create-event', label: 'Create Event' },
        { href: '/market', label: 'Marketplace' },
        { href: '/about', label: 'About' },
        { href: '/settings', label: 'Settings' }
    ]

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icons.ticket className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-xl font-bold font-heading text-white">TickKet</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-white',
                                    pathname === link.href ? 'text-white' : 'text-gray-400'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <ConnectButton />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Icons.menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <Drawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                title="Menu"
                position="right"
            >
                <div className="flex flex-col gap-6 mt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                'text-lg font-medium transition-colors hover:text-white flex items-center justify-between group',
                                pathname === link.href ? 'text-white' : 'text-gray-400'
                            )}
                        >
                            {link.label}
                            <Icons.chevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    ))}
                    <div className="pt-6 border-t border-white/10">
                        <ConnectButton />
                    </div>
                </div>
            </Drawer>
        </nav>
    )
}
