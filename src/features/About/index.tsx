import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useTheme } from 'next-themes'

export const About = () => {
  const { theme } = useTheme()
  return (
    <div className="min-h-screen flex jutify-center items-center" id="about">
      <div className="container flex justify-between items-center pb-16">
        <div className="w-full flex justify-center items-center">
          <Image
            alt="Portrait Image"
            width="350"
            height="400"
            src="/about-page.png"
            className="rounded-md"
          ></Image>
        </div>
        <div className="w-full space-y-8">
          <div className="font-secondary text-5xl font-extrabold">
            <span>
              Riel Joseph <br />
              Bulaybulay
            </span>
            <hr
              className={clsx(
                'mt-8 w-[60%] border-t-2',
                theme !== 'dark' && 'border-t-black'
              )}
            />
          </div>
          <div className="text-2xl">
            AKA <span className="italic font-bold font-logo">RielJ</span>,
            Software Engineer from Northern Mindanao, Philippines with strong
            background and experience in building complex applications using
            modern technologies and techniques.
          </div>
        </div>
      </div>
    </div>
  )
}
