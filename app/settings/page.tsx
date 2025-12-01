'use client'

import { SettingsLayout } from '@/components/settings/SettingsLayout'
import { ProfileForm } from '@/components/settings/ProfileForm'

export default function SettingsPage() {
    return (
        <SettingsLayout>
            <ProfileForm />
        </SettingsLayout>
    )
}
