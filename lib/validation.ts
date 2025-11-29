export function validateEventForm(data: {
    name: string
    description: string
    date: string
    location: string
    price: string
    maxTickets: string
}): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {}

    if (!data.name || data.name.length < 3) {
        errors.name = 'Event name must be at least 3 characters'
    }

    if (!data.description || data.description.length < 10) {
        errors.description = 'Description must be at least 10 characters'
    }

    if (!data.date) {
        errors.date = 'Event date is required'
    } else if (new Date(data.date) < new Date()) {
        errors.date = 'Event date must be in the future'
    }

    if (!data.location) {
        errors.location = 'Location is required'
    }

    const price = parseFloat(data.price)
    if (isNaN(price) || price <= 0) {
        errors.price = 'Price must be a positive number'
    }

    const maxTickets = parseInt(data.maxTickets)
    if (isNaN(maxTickets) || maxTickets <= 0) {
        errors.maxTickets = 'Max tickets must be a positive number'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
