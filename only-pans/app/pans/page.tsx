'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/auth'

const Pans = () => {
  const router = useRouter()
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  return <div>Pans Page Content</div>
}

export default Pans
