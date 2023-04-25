import { useEffect } from 'react'

type Cleanup = void | (() => void)

function runCleanup(cleanup: Cleanup) {
  if (cleanup instanceof Function) {
    cleanup()
  }
}

function windowScrollEffect(
  effect: (x: number, y: number) => Cleanup
): () => void {
  let cleanup: Cleanup
  const onScroll = () => {
    runCleanup(cleanup)
    cleanup = effect(window.scrollX, window.scrollY)
  }
  document.addEventListener('scroll', onScroll)
  onScroll()
  return () => {
    runCleanup(cleanup)
    document.removeEventListener('scroll', onScroll)
  }
}

// Always pass in a callback made with usecallback!
export function useWindowScrollEffect(
  effect: (x: number, y: number) => Cleanup,
  deps: any[]
) {
  useEffect(() => windowScrollEffect(effect), deps)
}
