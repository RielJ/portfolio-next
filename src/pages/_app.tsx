import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { JetBrains_Mono, Kavoon, Poppins } from 'next/font/google'
import Head from 'next/head'

import { CursorEffects } from '@/components'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useState, useEffect } from 'react'

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

export default function App({ Component, pageProps }: AppProps) {
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
    <>
      <Head>
        <title>RielJ Portfolio</title>
      </Head>
      <ThemeProvider attribute="class">
        <main
          className={`${jetBrains.variable} ${poppins.variable} ${kavoon.variable} font-primary`}
        >
          {!isMobile && <CursorEffects />} <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
