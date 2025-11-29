export const MESSAGES = {
    ERRORS: {
        WALLET_NOT_CONNECTED: 'Please connect your wallet to continue',
        TRANSACTION_FAILED: 'Transaction failed. Please try again',
        NETWORK_ERROR: 'Network error. Please check your connection',
        INVALID_INPUT: 'Please check your input and try again'
    },
    SUCCESS: {
        EVENT_CREATED: 'Event created successfully!',
        TICKET_PURCHASED: 'Ticket purchased successfully!',
        TICKET_TRANSFERRED: 'Ticket transferred successfully!'
    },
    INFO: {
        PROCESSING: 'Processing transaction...',
        LOADING: 'Loading...'
    }
} as const
