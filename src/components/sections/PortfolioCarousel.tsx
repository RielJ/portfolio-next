import { IPortfolioCard } from '@/types'
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PortfolioCard } from './PortfolioCard'

const works: IPortfolioCard[] = [
  {
    name: 'Atlantis World',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '/atlantis.jpg',
  },
  {
    name: 'Affyn',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '/affyn.jpg',
  },
  {
    name: 'Interseed',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '/interseed.png',
  },
  {
    name: 'Flex',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: '/flex.png',
  },
  // {
  //   name: 'SoA Manager',
  //   description:
  //     'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
  // },
]

export const PortfolioCarousel = ({
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div {...props} className="w-full h-full px-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        modules={[Autoplay]}
        autoplay={true}
        rewind={true}
        className="h-[80%]"
      >
        {works.map((work, index) => (
          <SwiperSlide key={work.name + index}>
            <PortfolioCard work={work} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
