import { IPortfolioCard } from '@/types'
import Image from 'next/image'
import clsx from 'clsx'
import React from 'react'

interface PortfolioCardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  work: IPortfolioCard
  index: number
}

export const PortfolioCard = ({
  work,
  index,
  ...props
}: PortfolioCardProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'border-[1px] rounded-md cursor-pointer',
        index % 2 && 'mt-20'
      )}
    >
      {work.image && (
        <div className="relative h-[352px]">
          <Image
            alt="Portrait Image"
            fill={true}
            src={work.image}
            className="rounded-t-md object-cover"
          />
        </div>
      )}
      <div className="px-8 py-4 space-y-2">
        <div className="text-xl font-bold">{work.name}</div>
        <div className="font-thin text-sm">{work.description}</div>
        <div>&gt;&gt;&gt;View Live Sight</div>
      </div>
    </div>
  )
}
