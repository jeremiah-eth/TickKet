'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import { Card } from '@/components/ui/Card'

interface SettingsLayoutProps {
    children: React.ReactNode
}

export function SettingsLayout({ children }: SettingsLayoutProps) {
    const pathname = usePathname()

    const sidebarItems = [
        {
            title: 'Profile',
            href: '/settings',
            icon: Icons.user
        },
        {
            title: 'Notifications',
            href: '/settings/notifications',
            icon: Icons.alertCircle
        }
    ]

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64 shrink-0">
                    <Card className="p-4">
                        <nav className="flex flex-col space-y-2">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                                        pathname === item.href
                                            ? 'bg-purple-500/10 text-purple-400'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </Card>
                </aside>
                <main className="flex-1">
                    <Card className="p-6 min-h-[500px]">
                        {children}
                    </Card>
                </main>
            </div>
        </div>
    )
}
