# TickKet

**TickKet** is a decentralized event ticketing platform built with **Next.js**, **Reown (WalletConnect)**, and **Solidity**. It empowers organizers to create events and issue NFT tickets, while users can discover events, buy tickets with crypto, and resell them on a secondary market.

## Features

- **Web3 Authentication**: Seamless login with Reown AppKit (WalletConnect).
- **Event Creation**: Organizers can create events with details stored on IPFS.
- **NFT Tickets**: Tickets are minted as NFTs (ERC721/1155).
- **Secondary Market**: Built-in marketplace for secure ticket resale.
- **Glassmorphism UI**: Modern, premium design with dark/light mode.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Glassmorphism)
- **Web3**: Reown AppKit, Wagmi, Viem
- **Contracts**: Hardhat, OpenZeppelin
- **Storage**: IPFS (Pinata)

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/jeremiah-eth/TickKet.git
    cd TickKet
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Set up environment variables**:
    Copy `.env.example` to `.env.local` and add your Reown Project ID.
    ```bash
    cp .env.example .env.local
    ```

4.  **Run the development server**:
    ```bash
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

