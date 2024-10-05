import Link from 'next/link'
import { CircleUser, Menu, Package2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/modeToggle'

export default async function Header () {
  return (
    <div>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-1000'>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
          <Link
            href='/'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
          >
            <Package2 className='h-6 w-6' />
            <span className='sr-only'>Home</span>
          </Link>
          <Link
            href='/content'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            Content
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
              >
                <Package2 className='h-6 w-6' />
              </Link>
              <Link
                href='/'
                className='text-muted-foreground hover:text-foreground'
              >
                Home
              </Link>
              <Link
                href='/content'
                className='text-muted-foreground hover:text-foreground'
              >
                Content
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 '>
          <div className='ml-auto flex-1 sm:flex-initial relative'>
            <div />
          </div>
          <ModeToggle />
        </div>
      </header>
    </div>
  )
}
