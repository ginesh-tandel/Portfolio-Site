import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './CodeTeaser.css'

export default function CodeTeaser() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.code-line'),
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, stagger: 0.1, duration: 0.5,
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'top 30%', scrub: 1 },
        }
      )
      gsap.fromTo(el.querySelector('.scene-label'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelector('.scene-headline'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelector('.scene-copy'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="code-teaser" ref={sectionRef}>
      <div className="code-card">
        <div className="code-line keyword">public async</div>
        <div className="code-line">Task&lt;<span className="type">Product</span>&gt; <span className="func">BuildAsync</span>(...)</div>
        <div className="code-line">{'{'}</div>
        <div className="code-line comment">    <span className="kw">// understand the problem</span></div>
        <div className="code-line comment">    <span className="kw">// design the system</span></div>
        <div className="code-line comment">    <span className="kw">// build the solution</span></div>
        <div className="code-line">{'}'}</div>
      </div>
      <div className="code-copy">
        <div className="scene-label">SCENE 02 — RAW CODE</div>
        <div className="scene-headline">CODE IS ONLY<br />THE BEGINNING.</div>
        <p className="scene-copy">
          Fragments of code converge into architecture, systems, and finally, products people use.
        </p>
      </div>
    </section>
  )
}
