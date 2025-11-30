'use client'

import { useAppKit } from '@reown/appkit/react'
import { useAccount } from 'wagmi'

export function ConnectButton() {
    const { open } = useAppKit()
    const { address, isConnected } = useAccount()

    const truncateAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`
    }

    return (
        <button
            onClick={() => open()}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity"
        >
            {isConnected && address ? truncateAddress(address) : 'Connect Wallet'}
        </button>
    )
}
