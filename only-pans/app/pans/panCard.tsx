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

interface PanCardProps {
  pan: Pan
}

const PanCard: React.FC<PanCardProps> = ({ pan }) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-lg'>{pan.title}</CardTitle>
        <CardDescription className='text-sm'>{pan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='relative h-48 w-full'>
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
