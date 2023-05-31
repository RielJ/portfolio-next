import React from 'react'
import styles from './About.module.scss'
import clsx from 'clsx'
import { AlienCanvas } from './canvas'

const About = () => {
  return (
    <section
      className={clsx(
        'relative w-full mx-auto min-h-screen text-center max-w-7xl  flex md:flex-col flex-row items-center justify-center gap-[3rem] snap-center',
        styles['about-section']
      )}
    >
      <div className="h-full">
        <AlienCanvas />
      </div>
      <h1 className={clsx(styles['about-heading'], 'max-w-3xl')}>About me</h1>
      <p className="max-w-2xl font-secondary font-bold">
        A Software Engineer from the{' '}
        <span className="italic text-accent font-bold">Philippines 🇵🇭</span>{' '}
        specialized in full-stack web development. Passionate about leveraging
        cutting-edge technologies to create innovative solutions. Excited to
        collaborate in a dynamic team environment and contribute to building
        scalable software applications that drive business growth.
      </p>
    </section>
  )
}

export { About }
