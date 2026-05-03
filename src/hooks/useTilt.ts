import { useRef, useState, useEffect } from 'react'

interface TiltState {
  rx: number
  ry: number
  tz: number
}

export function useTilt(max = 10): [React.RefObject<HTMLDivElement | null>, TiltState] {
  const ref = useRef<HTMLDivElement>(null)
  const [t, setT] = useState<TiltState>({ rx: 0, ry: 0, tz: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      setT({ ry: dx * max, rx: -dy * max, tz: 20 })
    }
    const onLeave = () => setT({ rx: 0, ry: 0, tz: 0 })
    window.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [max])

  return [ref, t]
}
