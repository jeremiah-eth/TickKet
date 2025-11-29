'use client'

import { useAccount, useDisconnect } from 'wagmi'
import { useEffect, useState } from 'react'

export function useAuth() {
  const { address, isConnected, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    address: mounted ? address : undefined,
    isConnected: mounted ? isConnected : false,
    isConnecting,
    disconnect
  }
}
