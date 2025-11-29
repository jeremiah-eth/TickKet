'use client'

import { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { FilterBar } from '@/components/FilterBar'
import { EventCard } from '@/components/EventCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EventsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-white mb-8 font-heading">Discover Events</h1>

                    <div className="space-y-6 mb-8">
                        <SearchBar onSearch={setSearchQuery} />
                        <FilterBar onFilterChange={setSelectedCategory} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <EventCard
                            id="1"
                            title="Sample Music Festival"
                            description="Join us for an amazing night of live music and entertainment"
                            date="Dec 31, 2025 • 8:00 PM"
                            location="Virtual Event"
                            price="0.1"
                            category="Music"
                        />
                        <EventCard
                            id="2"
                            title="Tech Conference 2025"
                            description="Learn about the latest in blockchain and Web3 technology"
                            date="Jan 15, 2026 • 10:00 AM"
                            location="San Francisco, CA"
                            price="0.25"
                            category="Technology"
                        />
                        <EventCard
                            id="3"
                            title="Art Exhibition"
                            description="Explore digital art and NFT collections from top artists"
                            date="Feb 1, 2026 • 6:00 PM"
                            location="New York, NY"
                            price="0.05"
                            category="Art"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
