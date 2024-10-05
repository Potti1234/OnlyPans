'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/auth'
import PanCard from './panCard'
import { getPans, Pan } from './panDao'
import { ScrollArea } from '@/components/ui/scroll-area'

const Pans = () => {
  const router = useRouter()
  const isLoggedIn = useAuthStore(state => state.isLoggedIn)
  const [pans, setPans] = React.useState<Pan[]>([])

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login')
    }

    const fetchPans = async () => {
      const fetchedPans = await getPans()
      setPans(fetchedPans)
    }
    fetchPans()
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  return (
    <ScrollArea className='h-screen'>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl font-bold mb-4 text-center'>
          New hottest pans
        </h1>
        <div className='grid grid-cols-3 gap-4'>
          {pans.map(pan => (
            <div key={pan.id} className='flex justify-center'>
              <PanCard pan={pan} />
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

export default Pans
