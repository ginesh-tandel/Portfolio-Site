import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CTA.css'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef(null)
  const primaryRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-headline h2', {
        scrollTrigger: { trigger: '.cta-headline', start: 'top 80%' },
        opacity: 0, y: 50, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.cta-subtext', {
        scrollTrigger: { trigger: '.cta-subtext', start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.6, delay: 0.2,
      })
      gsap.from('.cta-buttons', {
        scrollTrigger: { trigger: '.cta-buttons', start: 'top 90%' },
        opacity: 0, y: 15, duration: 0.5, delay: 0.35,
      })
    }, sectionRef)

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
        <button
          ref={primaryRef}
          className="cta-primary magnetic"
          onClick={() => window.location.href = 'mailto:hello@ginesh.dev'}
        >
          START A CONVERSATION →
        </button>
        <button
          className="cta-secondary"
          onClick={() => window.open('https://github.com/gineshtandel', '_blank')}
        >
          VIEW GITHUB →
        </button>
      </div>
    </section>
  )
}
