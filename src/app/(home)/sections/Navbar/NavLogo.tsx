import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const NavLogo = () => {
  return (
    <div className="w-full font-logo">
      <Link href="/#about" scroll={false} className="text-white">
        <Image src="/logo.png" alt="RielJ Logo" width={50} height={50} />
      </Link>
    </div>
  )
}
