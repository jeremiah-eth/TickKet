'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import { useState } from 'react'

interface CheckoutModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => Promise<void>
    eventTitle: string
    ticketQuantity: number
    totalPrice: string
}

export function CheckoutModal({
    isOpen,
    onClose,
    onConfirm,
    eventTitle,
    ticketQuantity,
    totalPrice
}: CheckoutModalProps) {
    const [isProcessing, setIsProcessing] = useState(false)

    const handleConfirm = async () => {
        setIsProcessing(true)
        try {
            await onConfirm()
        } finally {
            setIsProcessing(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm Purchase</DialogTitle>
                    <DialogDescription>
                        Review your order details before confirming the transaction.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                        <div>
                            <p className="font-medium text-white">{eventTitle}</p>
                            <p className="text-sm text-gray-400">{ticketQuantity} x Ticket{ticketQuantity > 1 ? 's' : ''}</p>
                        </div>
                        <p className="text-xl font-bold text-purple-400">{totalPrice} ETH</p>
                    </div>

                    <div className="text-sm text-gray-400">
                        <p>• Transaction will be processed on the blockchain</p>
                        <p>• Gas fees will apply</p>
                        <p>• Tickets will be sent to your connected wallet</p>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="ghost" onClick={onClose} disabled={isProcessing}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} disabled={isProcessing} className="w-full sm:w-auto">
                        {isProcessing ? (
                            <>
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            'Confirm Purchase'
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
