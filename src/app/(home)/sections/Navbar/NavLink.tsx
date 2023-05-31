import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from './Navbar.module.scss'
import { motion } from 'framer-motion'

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
    <motion.li className={styles.navItem} layoutId={`layout-${link}`}>
      <Link
        href={`/#${link.toLowerCase()}`}
        scroll={false}
        className="hover:text-primary text-white text-lg"
      >
        {children}
      </Link>
    </motion.li>
  )
}
