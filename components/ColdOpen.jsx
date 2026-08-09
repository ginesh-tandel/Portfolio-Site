import { useState, useEffect } from 'react'
import './ColdOpen.css'

const lines = [
  'initializing...',
  'loading experience',
  'loading architecture',
  'loading products',
  'loading 11+ years of engineering',
]

export default function ColdOpen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < lines.length) {
        setVisibleLines(prev => [...prev, lines[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setDone(true), 600)
        setTimeout(() => onComplete(), 1200)
      }
    }, 280)
    return () => clearInterval(interval)
  }, [onComplete])

  const skip = () => {
    setDone(true)
    onComplete()
  }

  return (
    <div className={`cold-open ${done ? 'fade-out' : ''}`} onClick={skip} title="Click to skip">
      <div className="cold-open-terminal">
        {visibleLines.map((line, i) => (
          <div key={i} className="cold-open-line">
            <span className="cold-open-prompt">&gt;</span> {line}
          </div>
        ))}
        {!done && <span className="cold-open-cursor" />}
      </div>
    </div>
  )
}
