'use client'

import React, { useEffect, useRef } from 'react'
import styles from './CursorEffects.module.scss'

export const CursorEffects = () => {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listener = (event: PointerEvent) => {
      const { pageX, pageY } = event
      blobRef.current &&
        blobRef.current.animate(
          {
            left: `${pageX}px`,
            top: `${pageY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        )
    }
    window.addEventListener('pointermove', listener as EventListener)
    return () => {
      window.removeEventListener('pointermove', listener as EventListener)
    }
  }, [blobRef])

  return (
    <div>
      <div className={styles.blob} ref={blobRef}></div>
      <div className={styles.blur}></div>
    </div>
  )
}
