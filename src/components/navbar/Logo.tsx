import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  const { theme } = useTheme()
  return (
    <div className="w-full font-logo">
      <Link href="/#about" scroll={false}>
        <div
          className={clsx(
            'text-xl',
            theme === 'dark' ? 'text-white' : 'text-black'
          )}
        >
          RielJ
        </div>
      </Link>
    </div>
  )
}
