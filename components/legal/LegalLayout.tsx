'use client'

import { Card } from '@/components/ui/Card'

interface LegalLayoutProps {
    children: React.ReactNode
    title: string
    lastUpdated: string
}

export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <Card className="p-8 md:p-12">
                <div className="mb-8 border-b border-white/10 pb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
                    <p className="text-gray-400">Last updated: {lastUpdated}</p>
                </div>
                <div className="prose prose-invert max-w-none">
                    {children}
                </div>
            </Card>
        </div>
    )
}
