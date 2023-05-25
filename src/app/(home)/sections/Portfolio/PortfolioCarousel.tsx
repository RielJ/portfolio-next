'use client'

import { portfolios } from '@/constants/portfolio'
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PortfolioCard } from './PortfolioCard'
import { SwiperControls } from './SwiperControls'
import './PortfolioCard.module.css'

import clsx from 'clsx'
import 'swiper/css'
import 'swiper/css/autoplay'

export const PortfolioCarousel = ({
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div {...props} className="px-10 space-y-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        modules={[Autoplay]}
        autoplay={{ pauseOnMouseEnter: true }}
        rewind={true}
        className={clsx('space-y-10 relative', 'card-groups')}
      >
        {portfolios.map((portfolio, index) => (
          <SwiperSlide key={portfolio.name + index}>
            <PortfolioCard work={portfolio} index={index} />
          </SwiperSlide>
        ))}
        <SwiperControls />
      </Swiper>
    </div>
  )
}
