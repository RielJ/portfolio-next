export const cardVariants = {
  offscreen: {
    opacity: 0,
    right: 50,
  },
  onscreen: {
    opacity: 1,
    left: 0,
    right: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

export const portfolioContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const portfolioCardVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}
