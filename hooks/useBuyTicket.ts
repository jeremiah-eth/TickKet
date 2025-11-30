'use client'

import { useState } from 'react'
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther } from 'viem'
import { toast } from 'sonner'
import { triggerConfetti } from '@/lib/confetti'

export function useBuyTicket() {
    const { address } = useAccount()
    const { writeContract, data: hash, isPending } = useWriteContract()
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash
    })

    const buyTicket = async (eventId: string, price: string, quantity: number) => {
        if (!address) {
            toast.error('Please connect your wallet first')
            return
        }

        try {
            // In a real app, this would interact with the Marketplace contract
            // For now, we'll simulate the transaction flow

            // writeContract({
            //   address: MARKETPLACE_ADDRESS,
            //   abi: MarketplaceABI,
            //   functionName: 'buyTicket',
            //   args: [eventId, quantity],
            //   value: parseEther(price) * BigInt(quantity)
            // })

            // Simulating success for demo purposes
            await new Promise(resolve => setTimeout(resolve, 2000))
            triggerConfetti()
            toast.success('Tickets purchased successfully!')

        } catch (error) {
            console.error('Purchase failed:', error)
            toast.error('Failed to purchase tickets')
        }
    }

    return {
        buyTicket,
        isPending,
        isConfirming,
        isSuccess,
        hash
    }
}
