import React from 'react'
import { PortfolioCarousel } from './PortfolioCarousel'

export const Portfolio = () => {
  return (
    <>
      <div id="portfolio"></div>
      <div className="min-h-screen flex pt-36">
        <div className="container pb-16 space-y-20">
          <div className="text-5xl font-extrabold w-full text-center">
            Portfolio
          </div>
          <PortfolioCarousel />
        </div>
      </div>
    </>
  )
}
