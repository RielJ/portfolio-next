import React from 'react'
import { AlienCanvas } from './canvas'

const About = () => {
  return (
    <section className="relative w-full m-auto min-h-screen text-center max-w-7xl flex flex-col items-center justify-center gap-[3rem] snap-center">
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
    </section>
  )
}

export { About }
