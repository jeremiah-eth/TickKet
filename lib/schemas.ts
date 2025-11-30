import { z } from 'zod'

export const createEventSchema = z.object({
    name: z.string().min(3, 'Event name must be at least 3 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    location: z.string().min(3, 'Location is required'),
    date: z.date({ required_error: 'Date is required' }),
    price: z.string().regex(/^\d+(\.\d+)?$/, 'Price must be a valid number'),
    maxTickets: z.number().min(1, 'Must have at least 1 ticket'),
    category: z.string().min(1, 'Category is required'),
    image: z.any().optional()
})

export type CreateEventFormValues = z.infer<typeof createEventSchema>

export const ticketPurchaseSchema = z.object({
    quantity: z.number().min(1).max(10),
    ticketType: z.string().min(1)
})

export type TicketPurchaseFormValues = z.infer<typeof ticketPurchaseSchema>
