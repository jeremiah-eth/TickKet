import React from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, options, ...props }, ref) => {
        return (
            <select
                className={cn(
                    'flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 backdrop-blur-sm',
                    className
                )}
                ref={ref}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value} className="bg-black">
                        {option.label}
                    </option>
                ))}
            </select>
        )
    }
)

Select.displayName = 'Select'
