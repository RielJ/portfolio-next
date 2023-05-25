import React from 'react'
import './PortfolioCard.module.css'
import { PortfolioCarousel } from './PortfolioCarousel'

export const Portfolio = () => {
  return (
    <section className="min-h-screen flex" id="work">
      <div className="container pb-16 space-y-20">
        <div className="text-5xl font-extrabold w-full text-center">
          Portfolio
        </div>
        <PortfolioCarousel />
      </div>
    </section>
  )
}
