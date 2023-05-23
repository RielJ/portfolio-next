import React from 'react'
import clsx from 'clsx'

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" id="about">
      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        {/* <div className="w-full flex justify-center items-center"> */}
        {/*   <Image */}
        {/*     alt="Portrait Image" */}
        {/*     width="350" */}
        {/*     height="400" */}
        {/*     src="/about-page.png" */}
        {/*     className="rounded-md" */}
        {/*   ></Image> */}
        {/* </div> */}
        <div className="w-full space-y-8">
          <div>
            <h1 className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
              Hi, I&apos;m <span className="text-primary">RielJ</span>
            </h1>
            <hr className={clsx('my-8 w-[40%] violet-gradient')} />
            <p className="text-xl">
              A Software Engineer and a Full Stack Web Developer
              <br className="sm:block hidden" />
              with experience in building and deploying web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
