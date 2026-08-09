import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Business.css'

gsap.registerPlugin(ScrollTrigger)

export default function Business() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.biz-headline h2', {
        scrollTrigger: { trigger: '.biz-headline', start: 'top 80%' },
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('.biz-statement', {
        scrollTrigger: { trigger: '.biz-statement', start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.6, delay: 0.2,
      })
      gsap.from('.biz-concerns', {
        scrollTrigger: { trigger: '.biz-concerns', start: 'top 90%' },
        opacity: 0, y: 15, duration: 0.5, delay: 0.3,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="biz-scene" id="about" ref={sectionRef}>
      <div className="scene-label">SCENE 08 — BUSINESS + HUMAN</div>
      <div className="biz-headline">
        <h2>BEHIND THE CODE</h2>
        <h2>IS A BUSINESS.</h2>
      </div>
      <p className="biz-statement">
        I work at the intersection of engineering, product thinking, and business requirements.
      </p>
      <div className="biz-concerns">
        Users · Product goals · Revenue · Operations · Teams · Deadlines · Business constraints
      </div>
    </section>
  )
}
