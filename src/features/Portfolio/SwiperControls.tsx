import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { useSwiper } from 'swiper/react'

export const SwiperControls = () => {
  const swiper = useSwiper()
  return (
    <div className="flex space-x-20 justify-center">
      <div
        className="border-[1px] rounded-full p-6 cursor-pointer"
        onClick={() => {
          swiper.slidePrev()
        }}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="border-[1px] rounded-full p-6 cursor-pointer"
        onClick={() => {
          swiper.slideNext()
        }}
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  )
}
