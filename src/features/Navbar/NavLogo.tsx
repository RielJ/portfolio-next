import clsx from 'clsx'
// import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const NavLogo = () => {
  // const { theme } = useTheme()
  return (
    <div className="w-full font-logo">
      <Link
        href="/#about"
        scroll={false}
        className={clsx(
          'text-xl text-white'
          // theme === 'dark' ? 'text-white' : 'text-black'
        )}
      >
        <Image src="/logo.png" alt="RielJ Logo" width={50} height={50} />
      </Link>
    </div>
  )
}
