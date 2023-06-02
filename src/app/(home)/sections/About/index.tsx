import React from 'react'
import { AlienCanvas } from './canvas'
import { Section } from '@/components'

const About = () => {
  return (
    <Section className="gap-[3rem]">
      <div>
        <AlienCanvas />
      </div>
      <div className="overflow-hidden w-full">
        <h1 className="heading">About me</h1>
      </div>
      <div>
        <p className="max-w-2xl font-secondary font-bold">
          A Software Engineer from the{' '}
          <span className="italic text-accent font-bold">Philippines 🇵🇭</span>{' '}
          specialized in full-stack web development. Passionate about leveraging
          cutting-edge technologies to create innovative solutions. Excited to
          collaborate in a dynamic team environment and contribute to building
          scalable software applications that drive business growth.
        </p>
      </div>
    </Section>
  )
}

export { About }
