import { EventCardSkeleton } from '@/components/EventCardSkeleton'

export default function MarketLoading() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="mb-8">
                <div className="h-8 w-48 bg-white/10 rounded animate-pulse mb-2" />
                <div className="h-4 w-64 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <EventCardSkeleton key={i} />
                ))}
            </div>
        </div>
    )
}
