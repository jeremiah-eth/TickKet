export const APP_NAME = 'TickKet'
export const APP_DESCRIPTION = 'Decentralized Event Ticketing Platform'
export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || ''

if (!PROJECT_ID) {
    console.warn('NEXT_PUBLIC_PROJECT_ID is not defined')
}
