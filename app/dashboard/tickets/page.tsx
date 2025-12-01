import { Card } from '@/components/ui/Card'

export default function DashboardTicketsPage() {
    return (
        <div className="container mx-auto px-4 py-24">
            <h1 className="text-3xl font-bold text-white mb-8">Dashboard - Tickets</h1>

            {/* Mobile: Stack cards, Desktop: Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="text-left p-4 text-gray-400">Event</th>
                            <th className="text-left p-4 text-gray-400">Date</th>
                            <th className="text-left p-4 text-gray-400">Tickets</th>
                            <th className="text-left p-4 text-gray-400">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-white/10">
                            <td className="p-4 text-white">Sample Event</td>
                            <td className="p-4 text-gray-400">Dec 15, 2025</td>
                            <td className="p-4 text-white">50/100</td>
                            <td className="p-4 text-white">$500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                <Card className="p-4">
                    <h3 className="font-bold text-white mb-2">Sample Event</h3>
                    <div className="space-y-1 text-sm">
                        <p className="text-gray-400">Date: Dec 15, 2025</p>
                        <p className="text-white">Tickets: 50/100</p>
                        <p className="text-white">Revenue: $500</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
