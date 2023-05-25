import React from 'react'

interface SectionProps {
  children: React.ReactNode
}

export function Container({ children }: SectionProps) {
  return <div className="relative z-10">{children}</div>
}
