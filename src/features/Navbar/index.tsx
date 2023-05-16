import { navLinks } from '@/constants'
import styles from '@/styles/Navbar.module.scss'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import React from 'react'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'

export const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={clsx(styles.header, styles.scrolled, 'backdrop-blur-[80px]')}
    >
      <div className="container flex items-center justify-between p-0">
        <NavLogo />
        <div className="w-full flex">
          <div className="w-full flex items-center justify-between p-0">
            {navLinks.map((link, index) => (
              <NavLink key={index} link={link}>
                {link}
              </NavLink>
            ))}
          </div>
          <div className="ml-3">
            <button
              onClick={() =>
                theme == 'dark' ? setTheme('light') : setTheme('dark')
              }
            >
              {theme && theme != 'dark' ? '🌑' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
