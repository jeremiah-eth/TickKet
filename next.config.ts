import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
      },
    ],
  },
  transpilePackages: ['@reown/appkit', '@reown/appkit-adapter-wagmi', 'wagmi', 'viem'],
  serverExternalPackages: ['pino', 'pino-pretty'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        encoding: false,
      }
    }
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    config.resolve.alias = {
      ...config.resolve.alias,
      'porto': false,
      'coinbase-wallet-sdk': false,
      '@gemini/web3-provider': false,
    }
    return config
  },
};

export default nextConfig;
