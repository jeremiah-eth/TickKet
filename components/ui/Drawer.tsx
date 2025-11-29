'use client'

import { useEffect, ReactNode } from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'

interface DrawerProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title?: string
    position?: 'left' | 'right'
}

export function Drawer({ isOpen, onClose, children, title, position = 'right' }: DrawerProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div
                className={cn(
                    'fixed top-0 bottom-0 w-full max-w-md glass-panel transition-transform duration-300',
                    position === 'right' ? 'right-0' : 'left-0',
                    isOpen ? 'translate-x-0' : position === 'right' ? 'translate-x-full' : '-translate-x-full'
                )}
            >
                {title && (
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <h2 className="text-xl font-semibold text-white">{title}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <Icons.x className="h-5 w-5" />
                        </button>
                    </div>
                )}
                <div className="p-6 overflow-y-auto h-full">{children}</div>
            </div>
        </div>
    )
}
