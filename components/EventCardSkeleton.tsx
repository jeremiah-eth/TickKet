'use client'

import { Skeleton } from '@/components/ui/Skeleton'
import { Card } from '@/components/ui/Card'

export function EventCardSkeleton() {
    return (
        <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative aspect-video">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="p-5 flex flex-col flex-grow space-y-3">
                <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                    <Skeleton className="h-8 w-16 rounded-full" />
                </div>
                <div className="space-y-2 pt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="pt-4 mt-auto flex justify-between items-center">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-9 w-24 rounded-lg" />
                </div>
            </div>
        </Card>
    )
}

export function EventListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <EventCardSkeleton key={i} />
            ))}
        </div>
    )
}
