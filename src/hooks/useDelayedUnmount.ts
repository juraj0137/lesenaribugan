import { useEffect, useState } from 'react'

export default function useDelayedUnmount(
  isOpen: boolean,
  durationMs: number,
): { mounted: boolean; visible: boolean } {
  const [unmountReady, setUnmountReady] = useState(!isOpen)
  const [visible, setVisible] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen)

  // Derived state pattern: reset when isOpen changes
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen)
    if (isOpen) {
      setUnmountReady(false)
      // visible stays false — will be set true after mount via rAF
    } else {
      setVisible(false)
    }
  }

  // Delayed unmount on close
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setUnmountReady(true), durationMs)
      return () => clearTimeout(timer)
    }
  }, [isOpen, durationMs])

  // Flip visible to true one frame after mount so CSS transitions can animate in
  useEffect(() => {
    if (isOpen) {
      const raf = requestAnimationFrame(() => {
        setVisible(true)
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [isOpen])

  return { mounted: isOpen || !unmountReady, visible }
}
