# TickKet - Decentralized Event Ticketing Platform

A modern event ticketing platform built with Next.js, Reown (WalletConnect), and blockchain technology.

## Features

- 🎫 NFT-based event tickets
- 🔐 Secure wallet authentication with Reown
- 🎨 Beautiful glassmorphism UI
- ⚡ Fast and responsive
- 🌐 Decentralized marketplace
- 💳 Instant payouts for organizers

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: Reown AppKit (WalletConnect)
- **Styling**: Tailwind CSS with custom glassmorphism
- **Blockchain**: Wagmi + Viem
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Bun (recommended) or Node.js 18+
- A Reown Project ID from [cloud.reown.com](https://cloud.reown.com)

### Installation

```bash
# Clone the repository
git clone https://github.com/jeremiah-eth/TickKet.git
cd TickKet

# Install dependencies
bun install

# Copy environment variables
cp .env.example .env.local

# Add your Reown Project ID to .env.local
# NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# Run the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```
├── app/                # Next.js app router pages
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Feature components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and constants
├── types/             # TypeScript type definitions
├── context/           # React context providers
└── config/            # App configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Acknowledgments

- Built with [Reown AppKit](https://reown.com)
- Powered by [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
