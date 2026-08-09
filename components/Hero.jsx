import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-eyebrow', {
        opacity: 0, y: 20, duration: 0.8, delay: 0.2, ease: 'power2.out',
      })
      gsap.from('.hero-headline h1', {
        opacity: 0, y: 40, duration: 1, stagger: 0.15, delay: 0.4, ease: 'power3.out',
      })
      gsap.from('.hero-subtext', {
        opacity: 0, y: 20, duration: 0.8, delay: 0.9, ease: 'power2.out',
      })
      gsap.from('.hero-scroll', {
        opacity: 0, duration: 0.6, delay: 1.3, ease: 'power2.out',
      })

      gsap.to('.hero-headline h1', {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -60,
        opacity: 0.3,
        scale: 0.97,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-eyebrow">SENIOR .NET ENGINEER · SOFTWARE ARCHITECT · SAAS BUILDER</div>
      <div className="hero-headline">
        <h1>I TURN COMPLEX IDEAS</h1>
        <h1>INTO WORKING SOFTWARE.</h1>
      </div>
      <p className="hero-subtext">
        11+ years shipping production systems — from legacy modernization to SaaS products used by real businesses.
      </p>
      <span className="hero-scroll">SCROLL TO BUILD →</span>
    </section>
  )
}
