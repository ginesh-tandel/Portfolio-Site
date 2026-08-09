import { useState, useEffect } from 'react'
import './GoToTop.css'

export default function GoToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`go-top ${visible ? 'show' : ''}`}
      onClick={scrollUp}
      aria-label="Go to top"
    >
      ↑
    </button>
  )
}
