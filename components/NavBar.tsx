import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { ModeToggle } from './theme-toggle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

function NavBar() {
  return (
    <nav className="h-16 bg-backgroun/50 sticky top-0 border-b px-8 backdrop-blur flex items-center justify-between">
      <div className="text-lg font-bold md:text-xl">我的博客</div>
      <ul className="hidden md:flex space-x-4 w-full justify-end items-center">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li className="buttons space-x-2 px-4">
          <Link
            href={'./login'}
            className={buttonVariants({ variant: 'outline' })}
          >
            Login
          </Link>
          <Link
            href={'./login'}
            className={buttonVariants({ variant: 'outline' })}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon className="size-7 md:hidden" />
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default NavBar
