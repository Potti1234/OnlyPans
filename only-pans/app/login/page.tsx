'use client'

import { useRouter } from 'next/navigation'
import { VerificationLevel, IDKitWidget, useIDKit } from '@worldcoin/idkit'
import type { ISuccessResult } from '@worldcoin/idkit'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { verify } from '../actions/verify'
import { useAuthStore } from '@/lib/auth'

export default function LoginForm () {
  const router = useRouter()
  const setIsLoggedIn = useAuthStore(state => state.setIsLoggedIn)

  const app_id = process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`
  const action = process.env.NEXT_PUBLIC_WLD_ACTION

  if (!app_id) {
    throw new Error('app_id is not set in environment variables!')
  }
  if (!action) {
    throw new Error('action is not set in environment variables!')
  }

  const { setOpen } = useIDKit()

  const onSuccess = (result: ISuccessResult) => {
    setIsLoggedIn(true)
    router.push('/pans')
  }

  const handleProof = async (result: ISuccessResult) => {
    console.log(
      'Proof received from IDKit, sending to backend:\n',
      JSON.stringify(result)
    ) // Log the proof from IDKit to the console for visibility
    const data = await verify(result)
    if (data.success) {
      console.log('Successful response from backend:\n', JSON.stringify(data)) // Log the response from our backend for visibility
    } else {
      throw new Error(`Verification failed: ${data.detail}`)
    }
  }

  return (
    <Card className='mx-auto max-w-sm my-72'>
      <CardHeader>
        <CardTitle className='text-xl'>Sign Up</CardTitle>
        <CardDescription>Create a new account with World ID</CardDescription>
      </CardHeader>
      <CardContent>
        <IDKitWidget
          action={action}
          app_id={app_id}
          onSuccess={onSuccess}
          handleVerify={handleProof}
          verification_level={VerificationLevel.Device} // Change this to VerificationLevel.Device to accept Orb- and Device-verified users
        />
        <div className='grid gap-4'>
          <Button
            type='submit'
            className='w-full'
            onClick={() => setOpen(true)}
          >
            Create an account
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
