import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from '@/styles/Navbar.module.scss'

interface NavLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode
  link: string
}

export const NavLink = ({ children, link }: NavLinkProps) => {
  const { theme } = useTheme()

  return (
    <div>
      <span className={clsx(styles.navItem)}>
        <Link
          href={`/#${link.toLowerCase()}`}
          scroll={false}
          className={theme === 'dark' ? 'after:bg-white' : 'after:bg-black'}
        >
          {children}
        </Link>
      </span>
    </div>
  )
}
