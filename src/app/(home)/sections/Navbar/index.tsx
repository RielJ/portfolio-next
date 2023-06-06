'use client'

import { navLinks } from '@/constants'
import { _menu, menuItems } from '@/utils/animations'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current?.contains(event.target as Node)) {
        console.log('CLICKED OUTSIDE')
        setToggleMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside, true)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [menuRef])

  return (
    <div
      className={clsx(
        'fixed top-0 left-0 z-[200] w-full sm:px-16 px-6 py-6',
        scrolled && styles.scrolled
      )}
    >
      <nav className="flex items-center justify-between mx-auto inset-0 max-w-7xl">
        <NavLogo />
        <div className="w-full flex items-end justify-end">
          <ul className="sm:flex hidden items-center justify-between p-0 w-full">
            {navLinks.map((link, index) => (
              <NavLink key={index + link} link={link}>
                {link}
              </NavLink>
            ))}
          </ul>
          <div className="sm:hidden">
            <button
              onClick={() => {
                setToggleMenu(!toggleMenu)
              }}
            >
              {toggleMenu ? <AiOutlineClose /> : <BiMenu />}
            </button>
            {toggleMenu && (
              <motion.nav
                ref={menuRef}
                variants={_menu}
                className={clsx(
                  styles['nav-small'],
                  'p-6 absolute top-12 right-0'
                )}
              >
                <motion.ul
                  className="flex flex-col gap-6 items-center justify-between p-0"
                  variants={menuItems}
                >
                  {navLinks.map((link, index) => (
                    <NavLink key={index} link={link}>
                      {link}
                    </NavLink>
                  ))}
                </motion.ul>
              </motion.nav>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
