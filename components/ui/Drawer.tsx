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
        < Icons.x className = "h-5 w-5" />
                        </button >
                    </div >
                )
}
<div className="p-6 overflow-y-auto h-full">{children}</div>
            </div >
        </div >
    )
}
