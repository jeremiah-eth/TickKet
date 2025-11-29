export default function EventsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-white mb-8 font-heading">Discover Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-panel rounded-xl p-6">
                        <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4"></div>
                        <h3 className="text-xl font-semibold text-white mb-2">Sample Event</h3>
                        <p className="text-gray-400 text-sm mb-4">Coming soon...</p>
                        <div className="flex items-center justify-between">
                            <span className="text-purple-400 font-medium">0.1 ETH</span>
                            <span className="text-gray-500 text-sm">Dec 31, 2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
