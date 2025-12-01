'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/Switch'
import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/ui/icons'
import { toast } from 'sonner'

export function NotificationSettings() {
    const [isLoading, setIsLoading] = useState(false)
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        marketingEmails: false,
        securityAlerts: true
    })

    const handleToggle = (key: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const handleSave = async () => {
        setIsLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        toast.success('Notification preferences updated')
        setIsLoading(false)
    }

    return (
        <div className="max-w-xl">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Notifications</h2>
                <p className="text-gray-400">Choose how you want to be notified.</p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                        <h3 className="font-medium text-white">Email Notifications</h3>
                        <p className="text-sm text-gray-400">Receive emails about your account activity</p>
                    </div>
                    <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={() => handleToggle('emailNotifications')}
                    />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                        <h3 className="font-medium text-white">Push Notifications</h3>
                        <p className="text-sm text-gray-400">Receive push notifications on your device</p>
                    </div>
                    <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={() => handleToggle('pushNotifications')}
                    />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                        <h3 className="font-medium text-white">Marketing Emails</h3>
                        <p className="text-sm text-gray-400">Receive emails about new features and offers</p>
                    </div>
                    <Switch
                        checked={settings.marketingEmails}
                        onCheckedChange={() => handleToggle('marketingEmails')}
                    />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                        <h3 className="font-medium text-white">Security Alerts</h3>
                        <p className="text-sm text-gray-400">Receive emails about security updates</p>
                    </div>
                    <Switch
                        checked={settings.securityAlerts}
                        onCheckedChange={() => handleToggle('securityAlerts')}
                        disabled
                    />
                </div>

                <div className="pt-4">
                    <Button onClick={handleSave} disabled={isLoading}>
                        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                        Save Preferences
                    </Button>
                </div>
            </div>
        </div>
    )
}
