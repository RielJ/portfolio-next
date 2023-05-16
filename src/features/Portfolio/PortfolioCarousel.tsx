import { portfolios } from '@/constants/portfolio'
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PortfolioCard } from './PortfolioCard'
import { SwiperControls } from './SwiperControls'

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
        autoplay={true}
        rewind={true}
        className="space-y-10"
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
