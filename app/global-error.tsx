'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 bg-red-500/20 rounded-full flex items-center justify-center">
                        <Icons.alertCircle className="h-8 w-8 text-red-500" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Something went wrong!</h2>
                <p className="text-gray-400 mb-8">
                    We apologize for the inconvenience. Please try again or contact support if the problem persists.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button variant="ghost" onClick={() => window.location.href = '/'}>
                        Go Home
                    </Button>
                    <Button onClick={reset}>
                        Try Again
                    </Button>
                </div>
            </div>
        </div>
    )
}
