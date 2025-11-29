'use client'

import { useState, ReactNode } from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'

interface AccordionItem {
    id: string
    title: string
    content: ReactNode
}

interface AccordionProps {
    items: AccordionItem[]
    allowMultiple?: boolean
    className?: string
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>([])

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
            )
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
        }
    }

    return (
        <div className={cn('space-y-2', className)}>
            {items.map((item) => {
                const isOpen = openItems.includes(item.id)
                return (
                    <div key={item.id} className="glass-panel rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                        >
                            <span className="font-medium text-white">{item.title}</span>
                            <Icons.chevronRight
                                className={cn(
                                    'h-5 w-5 text-gray-400 transition-transform',
                                    isOpen && 'rotate-90'
                                )}
                            />
                        </button>
                        {isOpen && <div className="p-4 pt-0 text-gray-300">{item.content}</div>}
                    </div>
                )
            })}
        </div>
    )
}
