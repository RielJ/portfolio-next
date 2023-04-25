import { useWindowScrollEffect } from '@/hooks'
import styles from '@/styles/Navbar.module.scss'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import { Logo } from './Logo'
import { NavLink } from './NavLink'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const navLinks = ['About', 'Portfolio', 'Contacts']
  const { theme, setTheme } = useTheme()
  // const currentTheme = theme === 'system' ? systemTheme : theme
  //
  useWindowScrollEffect((_, y) => {
    setScrolled(y > 50 || parseInt(document.body.style.top, 10) * -1 > 50)
  }, [])

  return (
    <div
      className={clsx(styles.header, styles.scrolled, 'backdrop-blur-[80px]')}
    >
      <div className="container flex items-center justify-between p-0">
        <Logo />
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
              {theme != 'dark' ? (
                <div className="rounded-full px-2">🌑</div>
              ) : (
                <div className="rounded-full px-2">🌙</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
