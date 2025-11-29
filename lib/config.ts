export const SUPPORTED_NETWORKS = {
    MAINNET: 1,
    SEPOLIA: 11155111
} as const

export const NETWORK_NAMES = {
    [SUPPORTED_NETWORKS.MAINNET]: 'Ethereum Mainnet',
    [SUPPORTED_NETWORKS.SEPOLIA]: 'Sepolia Testnet'
} as const

export const DEFAULT_NETWORK = SUPPORTED_NETWORKS.SEPOLIA

export const IPFS_GATEWAY = 'https://ipfs.io/ipfs/'

export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
