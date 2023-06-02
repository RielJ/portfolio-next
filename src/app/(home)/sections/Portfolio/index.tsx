'use client'
import { Section } from '@/components'
import { portfolios } from '@/constants'
import clsx from 'clsx'
import React from 'react'
import styles from './Portfolio.module.scss'
import './PortfolioCard.module.css'
import { motion } from 'framer-motion'

export const Portfolio = () => {
  return (
    <Section id="work" className="mt-[3rem] min-h-0">
      <div className="container pb-16 space-y-20">
        <div className="w-full overflow-hidden text-center">
          <div className="heading">Contributions</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2">
          {portfolios.map((portfolio) => (
            <motion.div
              whileHover={{
                y: -5,
              }}
              key={portfolio.name}
              className={clsx(styles['portfolio-card'], 'text-left space-y-2')}
            >
              <div className="h-12"></div>
              <div className="text-accent">{portfolio.name}</div>
              <div className="font-normal text-sm font-secondary">
                {portfolio.description}
              </div>
            </motion.div>
          ))}
        </div>
        {/* <PortfolioCarousel /> */}
      </div>
    </Section>
  )
}
