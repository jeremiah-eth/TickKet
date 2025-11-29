import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'warning' | 'error'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
    const variants = {
        default: 'bg-gray-500/20 text-gray-200 border-gray-500/30',
        success: 'bg-green-500/20 text-green-200 border-green-500/30',
        warning: 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30',
        error: 'bg-red-500/20 text-red-200 border-red-500/30'
    }

    return (
        <div
            className={cn(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
                variants[variant],
                className
            )}
            {...props}
        />
    )
}
