'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/Dialog'
import { QRCodeGenerator } from '@/components/QRCodeGenerator'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import Image from 'next/image'

interface TicketDetailModalProps {
    isOpen: boolean
    onClose: () => void
    ticket: {
        id: string
        eventName: string
        date: string
        location: string
        image: string
        tokenId: string
    }
}

export function TicketDetailModal({ isOpen, onClose, ticket }: TicketDetailModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-black/95 border-white/10">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">{ticket.eventName}</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                    <div className="space-y-6">
                        <div className="relative aspect-video rounded-xl overflow-hidden">
                            <Image
                                src={ticket.image}
                                alt={ticket.eventName}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Icons.calendar className="h-5 w-5 text-purple-400" />
                                <span>{new Date(ticket.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Icons.mapPin className="h-5 w-5 text-purple-400" />
                                <span>{ticket.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Icons.ticket className="h-5 w-5 text-purple-400" />
                                <span>Token ID: #{ticket.tokenId}</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button className="flex-1">
                                <Icons.download className="mr-2 h-4 w-4" />
                                Download
                            </Button>
                            <Button variant="glass" className="flex-1">
                                <Icons.share className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Entry Code</h3>
                        <div className="bg-white p-4 rounded-xl mb-4">
                            <QRCodeGenerator
                                value={JSON.stringify({
                                    ticketId: ticket.id,
                                    tokenId: ticket.tokenId,
                                    event: ticket.eventName
                                })}
                            />
                        </div>
                        <p className="text-sm text-gray-400 text-center">
                            Scan this code at the venue entrance for admission
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
