'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { Icons } from './ui/icons'
import { cn } from '@/lib/utils'

interface LikeButtonProps {
    initialCount?: number
    initialLiked?: boolean
}

export function LikeButton({ initialCount = 0, initialLiked = false }: LikeButtonProps) {
    const [count, setCount] = useState(initialCount)
    const [isLiked, setIsLiked] = useState(initialLiked)

    const toggleLike = () => {
        if (isLiked) {
            setCount(c => c - 1)
            setIsLiked(false)
        } else {
            setCount(c => c + 1)
            setIsLiked(true)
        }
    }

    return (
        <Button
            variant="glass"
            size="sm"
            onClick={toggleLike}
            className={cn(
                'transition-colors',
                isLiked && 'text-pink-500 bg-pink-500/10 border-pink-500/50'
            )}
        >
            <Icons.heart
                className={cn('mr-2 h-4 w-4', isLiked && 'fill-current')}
            />
            {count} {count === 1 ? 'Like' : 'Likes'}
        </Button>
    )
}
