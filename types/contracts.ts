export interface CreateEventInput {
    name: string
    description: string
    date: string
    location: string
    price: string
    maxTickets: number
    category: string
    image?: string
}

export interface PurchaseTicketInput {
    eventId: string
    quantity: number
    ticketType: string
}

export interface TransferTicketInput {
    ticketId: string
    toAddress: string
}
