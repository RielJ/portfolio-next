import clsx from 'clsx'
import React, { ReactNode } from 'react'

interface ISection
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children?: ReactNode
}

const Section = ({ children, ...props }: ISection) => {
  return (
    <section
      {...props}
      className={clsx(
        'relative container w-full m-auto min-h-screen text-center max-w-7xl flex flex-col items-center justify-center snap-center gap-[3rem]',
        props?.className
      )}
    >
      {children}
    </section>
  )
}

export { Section }
