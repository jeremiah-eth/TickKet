'use client'

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts'
import { Card } from './ui/Card'

const data = [
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 2000 },
    { name: 'Apr', sales: 2780 },
    { name: 'May', sales: 1890 },
    { name: 'Jun', sales: 2390 },
    { name: 'Jul', sales: 3490 }
]

export function SalesChart() {
    return (
        <Card className="p-6 h-[400px]">
            <h3 className="text-xl font-bold text-white mb-6">Revenue Overview</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#000',
                            border: '1px solid #333',
                            borderRadius: '8px'
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="sales"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorSales)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    )
}
