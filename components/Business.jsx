import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Business.css'

export default function Business() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.biz-headline h2'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelector('.biz-statement'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelector('.biz-concerns'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.3, scrollTrigger: { trigger: el, start: 'top 70%' } }
      )
    }, el)

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
