export const ROUTES = {
    HOME: '/',
    EVENTS: '/events',
    CREATE_EVENT: '/create-event',
    MY_TICKETS: '/my-tickets',
    ABOUT: '/about',
    EVENT_DETAIL: (id: string) => `/events/${id}`
} as const

export function isActiveRoute(pathname: string, route: string): boolean {
    if (route === '/') {
        return pathname === route
    }
    return pathname.startsWith(route)
}
