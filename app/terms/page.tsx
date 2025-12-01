'use client'

import { LegalLayout } from '@/components/legal/LegalLayout'

export default function TermsPage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="December 1, 2025">
            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing and using TickKet, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>2. Description of Service</h2>
            <p>
                TickKet provides a decentralized ticketing platform allowing users to create, sell, and purchase event tickets as NFTs.
            </p>

            <h2>3. User Conduct</h2>
            <p>
                You agree to use the service only for lawful purposes. You are prohibited from posting or transmitting any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material.
            </p>

            <h2>4. Blockchain Transactions</h2>
            <p>
                Transactions on TickKet are executed on the blockchain. You understand that these transactions are irreversible and that you are responsible for the security of your wallet.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of TickKet or its content suppliers.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
                In no event shall TickKet be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.
            </p>
        </LegalLayout>
    )
}
