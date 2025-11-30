'use client'

import { QRCodeSVG } from 'qrcode.react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'
import { Icons } from './ui/icons'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { toast } from 'sonner'

interface QRCodeGeneratorProps {
    value: string
    title?: string
    description?: string
}

export function QRCodeGenerator({ value, title, description }: QRCodeGeneratorProps) {
    const { copy } = useCopyToClipboard()

    const handleCopy = async () => {
        const success = await copy(value)
        if (success) {
            toast.success('Copied to clipboard!')
        }
    }

    return (
        <Card className="flex flex-col items-center text-center p-8">
            {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
            {description && <p className="text-gray-400 mb-6">{description}</p>}

            <div className="bg-white p-4 rounded-xl mb-6">
                <QRCodeSVG
                    value={value}
                    size={200}
                    level="H"
                    includeMargin={false}
                />
            </div>

            <div className="flex gap-2 w-full max-w-xs">
                <Button variant="glass" className="flex-1" onClick={handleCopy}>
                    <Icons.copy className="h-4 w-4 mr-2" />
                    Copy
                </Button>
                <Button variant="glass" className="flex-1">
                    <Icons.download className="h-4 w-4 mr-2" />
                    Save
                </Button>
            </div>
        </Card>
    )
}
