'use client'
import { experiences } from '@/constants'
import clsx from 'clsx'
import React, { useRef } from 'react'
import styles from './Experience.module.scss'
import { useVisibleScroll, useWindowSize } from '@/hooks'
import { motion } from 'framer-motion'
import { IExperienceData } from '@/types'
import { Section } from '@/components'
import { cardVariants } from '@/lib'

const Line = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = useVisibleScroll(ref)
  const screenSize = useWindowSize()
  const lineHeight =
    scroll &&
    screenSize &&
    Math.max(
      0,
      Math.min(
        scroll.y + screenSize.height / 2 - scroll.offsetBoundingRect.top,
        ref.current?.clientHeight ?? 0
      )
    )

  return (
    <div ref={ref} className="w-full h-full absolute">
      <div
        className={clsx(styles['timeline-lottie'])}
        style={{
          height: lineHeight,
        }}
      />
    </div>
  )
}

const Circle = ({ index }: { index: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const scroll = useVisibleScroll(ref)
  const screenSize = useWindowSize()
  const fill =
    scroll &&
    screenSize &&
    scroll.y + screenSize.height / 2 > scroll.offsetBoundingRect.top - 30

  return (
    <div
      ref={ref}
      className={clsx(
        'absolute w-full transform transition-colors duration-500'
      )}
    >
      <div
        className={clsx(
          styles['timeline-lottie-circle'],
          fill ? 'bg-[#915eff] scale-[2]' : 'bg-[#808080]',
          index % 2
            ? '-translate-x-1/2 left-[-60px]'
            : 'translate-x-1/2 right-0',
          '-translate-y-1/2 top-[-30px] transform transition-transform duration-300 ease-in-bounce'
        )}
      />
    </div>
  )
}

const Content = ({
  experience,
  index,
}: {
  experience: IExperienceData
  index: number
}) => {
  const isRight = index % 2

  return (
    <motion.div
      // ref={ref}
      className={clsx(styles['timeline-content'], 'relative space-y-3')}
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <h3
        className={clsx(
          isRight ? 'left-[-10px]' : 'right-[-10px]',
          'top-[-55px] absolute'
        )}
      >
        {experience.dateStart} - {experience.dateEnd}
      </h3>
      <h1>
        {experience.role}{' '}
        <span className="text-accent">@ {experience.company}</span>{' '}
      </h1>
      <ul className="list-disc">
        {experience.description.map((desc, i) => (
          <li key={desc + i} className="font-normal text-sm font-secondary">
            <p>{desc}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null)

  return (
    <Section id="work">
      <div className="flex-1 overflow-hidden w-full">
        <h1 className="heading">Experience</h1>
      </div>
      <div ref={timelineRef} className={clsx(styles['timeline'], '')}>
        <Line />
        <ul className={clsx(styles['timeline-list'], 'relative')}>
          {experiences.map((experience, index) => {
            return (
              <li
                key={experience.company + index}
                className={clsx(styles['timeline-item'], 'relative')}
              >
                <Circle index={index} />
                <Content experience={experience} index={index} />
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export { Experience }
