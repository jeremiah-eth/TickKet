'use client'

import { useEffect, useState } from 'react'

export function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const handleStart = () => setIsLoading(true)
        const handleComplete = () => setIsLoading(false)

        // Listen to route changes
        window.addEventListener('beforeunload', handleStart)

        return () => {
            window.removeEventListener('beforeunload', handleStart)
        }
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
    )
}
