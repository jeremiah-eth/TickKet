'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface Tab {
    id: string
    label: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    defaultTab?: string
    className?: string
}

export function Tabs({ tabs, defaultTab, className }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

    return (
        <div className={className}>
            <div className="flex gap-2 border-b border-white/10 mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            'px-4 py-2 font-medium transition-colors relative',
                            activeTab === tab.id
                                ? 'text-purple-400'
                                : 'text-gray-400 hover:text-white'
                        )}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400" />
                        )}
                    </button>
                ))}
            </div>
            <div>
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    )
}
