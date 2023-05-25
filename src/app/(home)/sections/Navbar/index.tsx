'use client'

import { navLinks } from '@/constants'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)

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

  return (
    <div
      className={clsx(
        scrolled && styles.scrolled,
        'fixed top-0 left-0 z-[200] w-full sm:px-16 px-6 py-6'
      )}
    >
      <div className="flex items-center justify-between mx-auto inset-0 max-w-7xl">
        <NavLogo />
        <div className="w-full flex items-end justify-end">
          <ul className="sm:flex hidden items-center justify-between p-0">
            {navLinks.map((link, index) => (
              <NavLink key={index} link={link}>
                {link}
              </NavLink>
            ))}
          </ul>
          <div className="sm:hidden">
            <button
              onClick={() => {
                setToggle(!toggle)
              }}
            >
              {toggle ? <AiOutlineClose /> : <BiMenu />}
            </button>
            <div
              className={`${
                toggle ? 'flex' : 'hidden'
              } p-6 absolute top-12 right-0`}
            >
              <ul className="flex flex-col gap-2 items-center justify-between p-0">
                {navLinks.map((link, index) => (
                  <NavLink key={index} link={link}>
                    {link}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="ml-3"> */}
          {/*   <button */}
          {/*     onClick={() => */}
          {/*       theme == 'dark' ? setTheme('light') : setTheme('dark') */}
          {/*     } */}
          {/*   > */}
          {/*     {theme && theme != 'dark' ? '🌑' : '🌙'} */}
          {/*   </button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
