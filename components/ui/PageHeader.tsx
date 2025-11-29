import React from 'react'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
    title: string
    description?: string
    className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
    return (
        <div className={cn('mb-8', className)}>
            <h1 className="text-4xl font-bold text-white mb-2 font-heading">{title}</h1>
            {description && (
                <p className="text-gray-400 text-lg">{description}</p>
            )}
        </div>
    )
}
