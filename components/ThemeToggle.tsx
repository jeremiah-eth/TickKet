'use client'

import { useEffect, useState } from 'react'
import { Icons } from './ui/icons'
import { Button } from './ui/Button'

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const root = window.document.documentElement
        if (isDark) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDark])

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full p-2"
        >
            {isDark ? <Icons.sun className="h-5 w-5" /> : <Icons.moon className="h-5 w-5" />}
        </Button>
    )
}
