import { Card } from './ui/Card'
import { Skeleton } from './ui/Skeleton'

export function EventCardSkeleton() {
    return (
        <Card>
            <Skeleton className="aspect-video w-full mb-4" />
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-4" />
            <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-4 w-24" />
            </div>
        </Card>
    )
}
