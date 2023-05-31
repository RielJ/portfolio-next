import { Variants } from 'framer-motion'

export const _menu: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

export const menuItems: Variants = {
  initial: {
    y: '-50%',
  },
  animate: {
    y: 0,
    transition: {
      duration: 2,
      type: 'spring',
      mass: 0.5,
      damping: 10,
    },
  },
  exit: {
    y: '-50%',
    transition: {
      duration: 0.5,
    },
  },
}
