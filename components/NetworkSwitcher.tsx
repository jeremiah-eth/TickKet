'use client'

import { useAppKit, useAppKitNetwork } from '@reown/appkit/react'
import { Button } from './ui/Button'
import { Icons } from './ui/icons'

export function NetworkSwitcher() {
    const { open } = useAppKit()
    const { caipNetwork } = useAppKitNetwork()

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => open({ view: 'Networks' })}
            className="flex items-center gap-2"
        >
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <span className="hidden sm:inline">{caipNetwork?.name || 'Select Network'}</span>
            <Icons.chevronRight className="h-4 w-4" />
        </Button>
    )
}
