import { useState, useEffect } from 'react'
import './Nav.css'

const sections = ['home', 'code', 'architecture', 'system', 'work', 'engineering', 'problems', 'about', 'experience', 'focus', 'contact']
const navItems = [
  { label: 'WORK', href: '#work' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Nav() {
  const [progress, setProgress] = useState('01')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? scrollY / docHeight : 0
      const idx = Math.min(Math.floor(pct * sections.length) + 1, sections.length)
      setProgress(String(idx).padStart(2, '0'))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">GINESH</div>
        <div className="nav-links">
          {navItems.map(item => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          <span className="nav-progress">{progress} / {String(sections.length).padStart(2, '0')}</span>
        </div>
        <button className="nav-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-overlay-inner">
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="mobile-progress">{progress} / {String(sections.length).padStart(2, '0')}</div>
        </div>
      </div>
    </>
  )
}
