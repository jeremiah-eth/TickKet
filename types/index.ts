export interface Event {
    id: string
    title: string
    description: string
    date: string
    location: string
    price: string
    maxTickets: number
    soldTickets: number
    image?: string
    category?: string
    organizer: string
    isActive: boolean
}

export interface Ticket {
    id: string
    eventId: string
    owner: string
    ticketType: string
    purchaseDate: string
    isValid: boolean
}

export interface User {
    address: string
    ens?: string
    avatar?: string
}
