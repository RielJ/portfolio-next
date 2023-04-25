import styles from '@/styles/Navbar.module.scss'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { ReactNode } from 'react'

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
          legacyBehavior={true}
        >
          <a className={theme === 'dark' ? 'after:bg-white' : 'after:bg-black'}>
            {children}
          </a>
        </Link>
      </span>
    </div>
  )
}
