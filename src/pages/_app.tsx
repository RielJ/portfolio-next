import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { JetBrains_Mono, Judson, Kavoon } from 'next/font/google'

import 'swiper/css'
import 'swiper/css/autoplay'

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const judson = Judson({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-judson',
})

const kavoon = Kavoon({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kavoon',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RielJ Portfolio</title>
      </Head>
      <ThemeProvider attribute="class">
        <main
          className={`${jetBrains.variable} ${judson.variable} ${kavoon.variable} font-primary`}
        >
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  )
}
