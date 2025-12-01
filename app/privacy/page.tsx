'use client'

import { LegalLayout } from '@/components/legal/LegalLayout'

export default function PrivacyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="December 1, 2025">
            <h2>1. Information We Collect</h2>
            <p>
                We collect information that you provide directly to us, including your wallet address when you connect to our platform.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use the information we collect to provide, maintain, and improve our services, to process transactions, and to communicate with you.
            </p>

            <h2>3. Blockchain Data</h2>
            <p>
                Transactions on TickKet are recorded on public blockchains. This means that transaction data, including wallet addresses, is publicly accessible and cannot be deleted.
            </p>

            <h2>4. Cookies and Tracking</h2>
            <p>
                We use cookies and similar tracking technologies to track activity on our service and hold certain information to improve and analyze our service.
            </p>

            <h2>5. Data Security</h2>
            <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>
                You have the right to access, update, or delete your personal information. You can do this through your account settings or by contacting us directly.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
        </LegalLayout>
    )
}
