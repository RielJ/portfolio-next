import clsx from 'clsx'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <section
      className={clsx(
        styles['footer'],
        'bottom-0 right-0 sm:px-16 px-2 sm:py-6 py-2'
      )}
    >
      <div className="flex items-center justify-between mx-auto inset-0 max-w-7xl">
        <div
          className={clsx(styles['footer-text'], 'md:max-w-7xl max-w-[10rem]')}
        >
          Designed & developed by that fellow over there ⟿
        </div>
        <div className="text-accent">Riel Joseph Bulaybulay © 2023</div>
      </div>
    </section>
  )
}

export { Footer }
