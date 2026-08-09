import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    let rafId = null
    let running = true

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const animate = () => {
      if (!running) return
      cursorX += (mouseX - cursorX) * 0.12
      cursorY += (mouseY - cursorY) * 0.12
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      rafId = requestAnimationFrame(animate)
    }

    const onMouseEnterInteractive = () => cursor.classList.add('hover')
    const onMouseLeaveInteractive = () => cursor.classList.remove('hover')

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animate)

    const interactiveEls = document.querySelectorAll('a, button, .magnetic')
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMouseMove)
      interactiveEls.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"><div className="custom-cursor-ring" /></div>
      <div ref={cursorDotRef} className="custom-cursor-dot" />
    </>
  )
}
