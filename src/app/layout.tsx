'use client'

import { CursorEffects } from '@/components'
import { JetBrains_Mono, Kavoon, Poppins } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'
import './globals.css'

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-poppins',
})

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kavoon',
})

interface IRootLayout {
  children: ReactNode
}

const RootLayout = ({ children }: IRootLayout) => {
  const [width, setWidth] = useState<number>(0)

  // TODO: Determine how to disable CursorEffects when
  // it's on touch only devices.
  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    setWidth(window.innerWidth)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/logo.png" />
        <title>RielJ Portfolio</title>
      </head>
      <body
        className={`${jetBrains.variable} ${poppins.variable} ${kavoon.variable} font-primary relative`}
      >
        {!isMobile && <CursorEffects />}
        {children}
      </body>
    </html>
  )
}

export default RootLayout
