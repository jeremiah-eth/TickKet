'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Spinner } from './ui/Spinner'

interface AuthGuardProps {
    children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
    const { isConnected, isConnecting } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!isConnecting && !isConnected) {
            router.push('/')
        }
    }, [isConnected, isConnecting, router])

    if (isConnecting) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900">
                <Spinner size="lg" />
            </div>
        )
    }

    if (!isConnected) {
        return null
    }

    return <>{children}</>
}
