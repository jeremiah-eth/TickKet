import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About | TickKet',
    description: 'Learn about TickKet - the decentralized event ticketing platform'
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-white mb-8 font-heading">About TickKet</h1>

                <div className="space-y-6 text-gray-300">
                    <p className="text-lg">
                        TickKet is a revolutionary decentralized event ticketing platform built on blockchain technology.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8">Our Mission</h2>
                    <p>
                        To eliminate ticket fraud, reduce fees, and empower event organizers and attendees through Web3 technology.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8">Key Features</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>NFT-based tickets for authenticity and ownership</li>
                        <li>Transparent pricing with no hidden fees</li>
                        <li>Secure peer-to-peer ticket transfers</li>
                        <li>Instant payouts for organizers</li>
                        <li>Decentralized marketplace for resale</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
