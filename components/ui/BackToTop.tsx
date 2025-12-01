'use client'

import { useState, useEffect } from 'react'
import { Icons } from '@/components/ui/icons'

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform z-50"
            aria-label="Back to top"
        >
            <Icons.chevronUp className="h-5 w-5" />
        </button>
    )
}
