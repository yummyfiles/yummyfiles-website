import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.setProperty('left', `${e.clientX}px`)
        ref.current.style.setProperty('top', `${e.clientY}px`)
      }
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2"
      style={{
        width: 250,
        height: 250,
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)',
      }}
    />
  )
}
