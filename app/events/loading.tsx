import { EventCardSkeleton } from '@/components/EventCardSkeleton'

export default function EventsLoading() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <EventCardSkeleton key={i} />
                ))}
            </div>
        </div>
    )
}
