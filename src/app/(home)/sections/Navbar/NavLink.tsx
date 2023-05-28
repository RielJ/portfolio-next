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
  return (
    <li className={styles.navItem}>
      <Link
        href={`/#${link.toLowerCase()}`}
        scroll={false}
        className="hover:text-primary text-white text-lg"
      >
        {children}
      </Link>
    </li>
  )
}
