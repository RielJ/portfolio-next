'use client'
import React from 'react'
import { AlienCanvas } from './canvas'
import { Section } from '@/components'
import { motion } from 'framer-motion'

const cardVariants = {
  offscreen: {
    opacity: 0,
    right: 50,
  },
  onscreen: {
    opacity: 1,
    left: 0,
    right: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const About = () => {
  return (
    <Section className="gap-[3rem] relative" id="about">
      {/* <div className="w-full h-full min-h-[20rem] relative"> */}
      {/*   <AlienCanvas /> */}
      {/* </div> */}
      <div className="relative overflow-hidden w-full">
        <h1 className="heading">About me</h1>
      </div>
      <div>
        <motion.p
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="max-w-2xl font-secondary font-bold"
        >
          A Software Engineer from the{' '}
          <span className="italic text-accent font-bold">Philippines 🇵🇭</span>{' '}
          specialized in full-stack web development. Passionate about leveraging
          cutting-edge technologies to create innovative solutions. Excited to
          collaborate in a dynamic team environment and contribute to building
          scalable software applications that drive business growth.
        </motion.p>
      </div>
    </Section>
  )
}

export { About }
