export function formatAddress(address: string): string {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatDate(date: string | Date): string {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

export function formatPrice(price: number | string): string {
    const p = typeof price === 'string' ? parseFloat(price) : price
    return `${p.toFixed(4)} ETH`
}

export function copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text)
}
