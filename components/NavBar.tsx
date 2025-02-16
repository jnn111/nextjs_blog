import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'

function NavBar() {
  return (
    <nav className="h-16 bg-backgroun/60 sticky top-0 border-b px-8 backdrop-blur flex items-center">
      <div className="font-bold text-xl w-full">我的博客</div>
      <ul className="flex space-x-4 w-full justify-end items-center">
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
    </nav>
  )
}

export default NavBar
