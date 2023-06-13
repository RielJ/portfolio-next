'use client'
import { Section } from '@/components'
import { portfolios } from '@/constants'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'
import { AiOutlineCode } from 'react-icons/ai'
import { HiExternalLink } from 'react-icons/hi'
import styles from './Portfolio.module.scss'
import './PortfolioCard.module.css'
import { portfolioCardVariants, portfolioContainerVariants } from '@/lib'

export const Portfolio = () => {
  return (
    <Section id="portfolio" className="mt-[3rem] !min-h-0">
      <div className="container pb-16 space-y-20">
        <div className="w-full overflow-hidden text-center">
          <div className="heading">Contributions</div>
        </div>
        <motion.div
          variants={portfolioContainerVariants}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2"
        >
          {portfolios.map((portfolio, index) => (
            <motion.div
              whileHover={{
                y: -5,
              }}
              key={portfolio.name}
              className={clsx(styles['portfolio-card'], 'text-left space-y-2')}
            >
              <motion.div variants={portfolioCardVariants}>
                <div className="flex justify-between items-center mb-3 py-2">
                  <div>
                    <AiOutlineCode className="h-8 w-8" />
                  </div>
                  <div>
                    {portfolio.link && (
                      <a href={portfolio.link} target="_blank">
                        <HiExternalLink className="cursor-pointer h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-accent">{portfolio.name}</div>
                <div className="font-normal text-sm font-secondary">
                  {portfolio.description}
                </div>
                <div className="mt-4">
                  <ul className="flex flex-wrap gap-3 justify-start">
                    {portfolio.tools?.map((tool) => (
                      <li
                        key={tool + portfolio.name}
                        className="text-xs font-bold text-muted-foreground font-secondary"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        {/* <PortfolioCarousel /> */}
      </div>
    </Section>
  )
}
