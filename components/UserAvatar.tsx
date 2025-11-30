'use client'

import { useAccount } from 'wagmi'
import { Icons } from './ui/icons'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface UserAvatarProps {
    className?: string
    size?: 'sm' | 'md' | 'lg'
}

export function UserAvatar({ className, size = 'md' }: UserAvatarProps) {
    const { address } = useAccount()

    const sizes = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12'
    }

    // Generate a deterministic gradient based on address
    const generateGradient = (addr: string) => {
        const hash = addr.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)
        const hue1 = hash % 360
        const hue2 = (hash + 180) % 360
        return `linear-gradient(135deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 50%))`
    }

    return (
        <div
            className={cn(
                'rounded-full overflow-hidden border-2 border-white/20 flex items-center justify-center bg-black',
                sizes[size],
                className
            )}
            style={{ background: address ? generateGradient(address) : undefined }}
        >
            {!address && <Icons.user className="text-gray-400 h-1/2 w-1/2" />}
        </div>
    )
}
