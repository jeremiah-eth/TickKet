'use client'

import { useEffect, ReactNode } from 'react'
import { Icons } from './icons'
import { cn } from '@/lib/utils'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    title?: string
    className?: string
}

export function Modal({ isOpen, onClose, children, title, className }: ModalProps) {
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className={cn('relative glass-panel rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto', className)}>
                {title && (
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <h2 className="text-xl font-semibold text-white">{title}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <Icons.x className="h-5 w-5" />
                        </button>
                    </div>
                )}
                <div className="p-6">{children}</div>
            </div>
        </div>
    )
}
