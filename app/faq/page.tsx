import { Metadata } from 'next'
import { Accordion } from '@/components/ui/Accordion'

export const metadata: Metadata = {
    title: 'FAQ | TickKet',
    description: 'Frequently asked questions about TickKet'
}

const faqs = [
    {
        id: '1',
        title: 'What is TickKet?',
        content: 'TickKet is a decentralized event ticketing platform that uses blockchain technology to create NFT-based tickets, ensuring authenticity and eliminating fraud.'
    },
    {
        id: '2',
        title: 'How do I buy tickets?',
        content: 'Connect your Web3 wallet, browse events, select the event you want to attend, and purchase tickets using cryptocurrency. Your tickets will be minted as NFTs directly to your wallet.'
    },
    {
        id: '3',
        title: 'Can I resell my tickets?',
        content: 'Yes! Since tickets are NFTs, you can list them on our marketplace or transfer them to another wallet address.'
    },
    {
        id: '4',
        title: 'What wallets are supported?',
        content: 'We support all major Web3 wallets through WalletConnect, including MetaMask, Rainbow, Coinbase Wallet, and many more.'
    },
    {
        id: '5',
        title: 'Are there any fees?',
        content: 'We charge a small platform fee (typically 2-3%) to cover blockchain transaction costs and platform maintenance. This is significantly lower than traditional ticketing platforms.'
    }
]

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 pt-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-white mb-8 font-heading">
                    Frequently Asked Questions
                </h1>
                <Accordion items={faqs} />
            </div>
        </div>
    )
}
