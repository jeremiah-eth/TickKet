'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'

const categories = ['All', 'Music', 'Sports', 'Art', 'Technology', 'Conference']

interface FilterBarProps {
    onFilterChange: (category: string) => void
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
    const [selected, setSelected] = useState('All')

    const handleSelect = (category: string) => {
        setSelected(category)
        onFilterChange(category)
    }

    return (
        <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
                <Button
                    key={category}
                    variant={selected === category ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => handleSelect(category)}
                    className="whitespace-nowrap"
                >
                    {category}
                </Button>
            ))}
        </div>
    )
}
