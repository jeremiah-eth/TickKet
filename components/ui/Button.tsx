import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'ghost' | 'glass'
    size?: 'sm' | 'md' | 'lg'
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
        primary: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 focus:ring-purple-500',
        ghost: 'bg-transparent text-foreground hover:bg-foreground/10',
        glass: 'glass-panel text-white hover:bg-white/20'
    }

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-2 text-base',
        lg: 'px-8 py-3 text-lg'
    }

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    )
}
