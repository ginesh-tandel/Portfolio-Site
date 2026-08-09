import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      )
      const headlineEntrance = gsap.fromTo('.hero-headline .hero-line',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.4, ease: 'power3.out' }
      )
      gsap.fromTo('.hero-subtext',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: 'power2.out' }
      )
      gsap.fromTo('.hero-scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 1.3, ease: 'power2.out' }
      )

      if (reducedMotion) {
        gsap.set('.hero-headline .hero-line', { y: -60, opacity: 0.3, scale: 0.97 })
      } else {
        const createScrubTween = () => {
          gsap.fromTo('.hero-headline .hero-line',
            { y: 0, opacity: 1, scale: 1 },
            {
              scrollTrigger: {
                trigger: el,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
              },
              y: -60,
              opacity: 0.3,
              scale: 0.97,
              overwrite: false,
            }
          )
        }
        headlineEntrance.eventCallback('onComplete', createScrubTween)
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-eyebrow">SENIOR .NET ENGINEER · SOFTWARE ARCHITECT · SAAS BUILDER</div>
      <h1 className="hero-headline">
        <span className="hero-line">I TURN COMPLEX IDEAS</span>
        <span className="hero-line">INTO WORKING SOFTWARE.</span>
      </h1>
      <p className="hero-subtext">
        11+ years shipping production systems — from legacy modernization to SaaS products used by real businesses.
      </p>
      <span className="hero-scroll">SCROLL TO BUILD →</span>
    </section>
  )
}
