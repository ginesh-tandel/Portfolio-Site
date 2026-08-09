import { useState, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { lenisRef } from '../lenis'
import './Nav.css'

const sectionClasses = ['.hero', '.code-teaser', '.arch-scene', '.system-scene',
  '.products-header', '.eng-scene', '.problem-scene', '.timeline-scene',
  '.biz-scene', '.focus-scene', '.cta-scene']
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
    const triggers = sectionClasses.map((cls, i) => {
      const el = document.querySelector(cls)
      if (!el) return null
      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        onToggle: (self) => {
          if (self.isActive) setProgress(String(i + 1).padStart(2, '0'))
        },
      })
    }).filter(Boolean)

    return () => triggers.forEach(t => t.kill())
  }, [])

  const scrollToSection = (e, href) => {
    e.preventDefault()
    if (lenisRef.current) {
      lenisRef.current.scrollTo(href, { offset: 0 })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
      <nav className="nav" aria-label="Main navigation">
        <div className="nav-logo">GINESH</div>
        <div className="nav-links">
          {navItems.map(item => (
            <a key={item.label} href={item.href} onClick={(e) => scrollToSection(e, item.href)}>{item.label}</a>
          ))}
          <span className="nav-progress">{progress} / {String(sectionClasses.length).padStart(2, '0')}</span>
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
            <a key={item.label} href={item.href} className="mobile-link" onClick={(e) => { scrollToSection(e, item.href); setMenuOpen(false) }}>
              {item.label}
            </a>
          ))}
          <div className="mobile-progress">{progress} / {String(sectionClasses.length).padStart(2, '0')}</div>
        </div>
      </div>
    </>
  )
}
