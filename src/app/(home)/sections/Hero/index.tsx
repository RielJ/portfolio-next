'use client'
import { Button, NoiseEffects } from '@/components'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './Hero.module.scss'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const defaultHeroText = '-RielJ'

const HeroText = () => {
  const [heroText, setHeroText] = useState(defaultHeroText)

  const handleMouseEnterLeaveEffect = useCallback(() => {
    let iteration = 1
    // clearInterval(interval)
    const interval = setInterval(() => {
      setHeroText(
        heroText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return defaultHeroText[index]
            }

            return letters[Math.floor(Math.random() * 26)]
          })
          .join('')
      )

      if (iteration >= defaultHeroText.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)

    return interval
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const interval = handleMouseEnterLeaveEffect()
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <motion.h1
      className={clsx(
        'font-secondary font-extrabold text-heading',
        styles['hero-heading']
      )}
      onMouseEnter={handleMouseEnterLeaveEffect}
      // onMouseLeave={handleMouseEnterLeaveEffect}
      animate={{
        color: '#915EFF',
      }}
      whileHover={{
        color: '#bb9af7',
        transition: { duration: '500ms', ease: 'easeInOut' },
      }}
    >
      {heroText}
    </motion.h1>
  )
}

export const Hero = () => {
  const router = useRouter()
  return (
    <section className="relative w-full min-h-screen mx-auto" id="home">
      <NoiseEffects id="heroimage" />
      <div
        className={clsx(
          'absolute inset-0 max-w-7xl mx-auto flex md:flex-row flex-col items-center justify-center gap-[3rem]',
          styles['hero-bg']
        )}
      >
        <div className="w-full flex justify-center items-center">
          <motion.div
            className={clsx(
              'relative rounded-10 rounded-md overflow-hidden',
              styles['hero-image']
            )}
            id="heroimage"
          >
            <Image
              alt="Portrait Image"
              fill={true}
              src="/hero-picture.png"
              className={clsx(styles['first'], 'object-cover ')}
            />
            <Image
              alt="Portrait Image"
              fill={true}
              src="/hero-picture-2.png"
              className={clsx(styles['second'], 'object-cover ')}
            />
          </motion.div>
        </div>
        <div className="w-1 sm:h-80 h-60 violet-gradient md:flex hidden" />
        <div className="space-y-5 w-full md:text-left text-center">
          <motion.p className="font-secondary font-bold">Hi, I am</motion.p>
          <HeroText />
          <motion.h2 className={clsx(styles['hero-subheading'], 'font-bold')}>
            I craft software passionately
          </motion.h2>
          <motion.p className="max-w-2xl font-secondary font-thin">
            Results-driven Software Engineer with 4+ years of experience in
            developing robust and scalable applications
          </motion.p>
          <Button
            className="px-6"
            variant="outline"
            onClick={() => {
              router.push('/#contact')
            }}
          >
            Say Hi!
          </Button>
        </div>
      </div>
    </section>
  )
}
