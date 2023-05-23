import clsx from 'clsx'
// import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from './Navbar.module.scss'

interface NavLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode
  link: string
}

export const NavLink = ({ children, link }: NavLinkProps) => {
  // const { theme } = useTheme()

  return (
    <li className={clsx(styles.navItem)}>
      <Link
        href={`/#${link.toLowerCase()}`}
        scroll={false}
        className={clsx(
          // theme === 'dark' ? 'after:bg-white' : 'after:bg-black',
          'hover:text-white text-secondary'
        )}
      >
        {children}
      </Link>
    </li>
  )
}
