import React from 'react'
import Image from 'next/image'
import { Pan } from './panDao'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

interface PanCardProps {
  pan: Pan
}

const PanCard: React.FC<PanCardProps> = ({ pan }) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-lg'>{pan.title}</CardTitle>
        <CardDescription className='text-sm'>{pan.description}</CardDescription>
        <CardDescription>
          <Card className='bg-blue-500 text-white inline-block px-2 py-1'>
            {pan.category}
          </Card>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='relative h-96 w-full'>
          <Image
            src={pan.image}
            alt={pan.description}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default PanCard
