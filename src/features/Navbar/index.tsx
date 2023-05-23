import { navLinks } from '@/constants'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from './NavLink'
import { NavLogo } from './NavLogo'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)
  // const { theme, setTheme } = useTheme()

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
        styles.header,
        scrolled && styles.scrolled,
        'backdrop-blur-[80px] sm:px-16 px-6 py-6'
      )}
    >
      <div className="container flex items-center justify-between p-0 max-w-7xl">
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
