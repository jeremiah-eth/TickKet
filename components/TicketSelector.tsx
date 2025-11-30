'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/Button'
import { Icons } from './ui/icons'

interface TicketSelectorProps {
    price: number
    maxQuantity?: number
    onChange: (quantity: number) => void
}

export function TicketSelector({ price, maxQuantity = 10, onChange }: TicketSelectorProps) {
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        onChange(quantity)
    }, [quantity, onChange])

    const increment = () => {
        if (quantity < maxQuantity) setQuantity(q => q + 1)
    }

    const decrement = () => {
        if (quantity > 1) setQuantity(q => q - 1)
    }

    return (
        <div className="bg-white/5 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
                <span className="text-gray-300">Quantity</span>
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={decrement}
                        disabled={quantity <= 1}
                        className="h-8 w-8 p-0 rounded-full"
                    >
                        <Icons.minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl font-bold text-white w-8 text-center">{quantity}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={increment}
                        disabled={quantity >= maxQuantity}
                        className="h-8 w-8 p-0 rounded-full"
                    >
                        <Icons.plus className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-gray-300">Total Price</span>
                <span className="text-2xl font-bold text-purple-400">
                    {(price * quantity).toFixed(3)} ETH
                </span>
            </div>
        </div>
    )
}
