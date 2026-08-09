import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './CTA.css'

const EMAIL = 'hello@ginesh.dev'

export default function CTA() {
  const sectionRef = useRef(null)
  const primaryRef = useRef(null)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.cta-headline h2'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelector('.cta-subtext'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelector('.cta-buttons'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.35, scrollTrigger: { trigger: el, start: 'top 70%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const btn = primaryRef.current
    if (!btn) return

    const onMove = (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
    }
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="cta-scene" id="contact" ref={sectionRef}>
      <div className="scene-label">LET'S BUILD</div>
      <div className="cta-headline">
        <h2>WHAT SHOULD</h2>
        <h2>WE BUILD NEXT?</h2>
      </div>
      <p className="cta-subtext">
        Available for selected remote engineering, consulting, and product engagements.
      </p>
      <div className="cta-buttons">
        <a
          ref={primaryRef}
          className="cta-primary magnetic"
          href="mailto:hello@ginesh.dev"
        >
          START A CONVERSATION →
        </a>
        <a
          className="cta-secondary"
          href="https://github.com/gineshtandel"
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW GITHUB →
        </a>
      </div>
      <button className="cta-email-copy" onClick={copyEmail} type="button">
        {copied ? 'COPIED' : `${EMAIL} — CLICK TO COPY`}
      </button>
    </section>
  )
}
