import Link from 'next/link'
import { Icons } from './ui/icons'
import { NewsletterForm } from './footer/NewsletterForm'
import { TechBadge } from './footer/TechBadge'

export default function Footer() {
    return (
        <footer className="glass-panel border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Newsletter Section */}
                <div className="mb-12 pb-12 border-b border-white/10">
                    <div className="max-w-2xl mx-auto text-center sm:text-left">
                        <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter for the latest events and exclusive offers.
                        </p>
                        <div className="flex justify-center sm:justify-start">
                            <NewsletterForm />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Icons.ticket className="h-5 w-5 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white font-heading">TickKet</h3>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Decentralized event ticketing platform powered by blockchain technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/events" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Browse Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/create-event" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Create Event
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-tickets" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    My Tickets
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/jeremiah-eth/TickKet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-all flex items-center gap-2 group">
                                    <Icons.github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/tickket" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-all flex items-center gap-2 group">
                                    <Icons.twitterX className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                    Twitter/X
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/tickket" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-all flex items-center gap-2 group">
                                    <Icons.telegram className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Built With Section */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-white mb-4 text-center">Built With</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        <TechBadge name="Next.js" />
                        <TechBadge name="Reown" />
                        <TechBadge name="Wagmi" />
                        <TechBadge name="Tailwind CSS" />
                        <TechBadge name="Bun" />
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} TickKet. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
