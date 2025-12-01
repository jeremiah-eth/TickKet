'use client'

import { SettingsLayout } from '@/components/settings/SettingsLayout'
import { NotificationSettings } from '@/components/settings/NotificationSettings'

export default function NotificationSettingsPage() {
    return (
        <SettingsLayout>
            <NotificationSettings />
        </SettingsLayout>
    )
}
