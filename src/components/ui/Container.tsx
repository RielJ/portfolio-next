import clsx from 'clsx'
import React from 'react'

interface SectionProps {
  rootClassName?: string
  className?: string
  children: React.ReactNode
}

export function Container({
  children,
  rootClassName,
  className,
}: SectionProps) {
  const rootClass = clsx(
    'relative min-h-screen w-screen 2xl:py-20 lg:py-14 py-9 z-10',
    rootClassName && rootClassName
  )
  return (
    <div className={rootClass}>
      <div className={clsx(className && className)}>{children}</div>
    </div>
  )
}
