import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CodeTeaser.css'

gsap.registerPlugin(ScrollTrigger)

export default function CodeTeaser() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.code-card .code-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        opacity: 0,
        x: -20,
        stagger: 0.1,
      })

      gsap.from('.code-copy .scene-label', {
        scrollTrigger: {
          trigger: '.code-copy',
          start: 'top 80%',
        },
        opacity: 0, y: 20, duration: 0.6,
      })
      gsap.from('.code-copy .scene-headline', {
        scrollTrigger: {
          trigger: '.code-copy',
          start: 'top 80%',
        },
        opacity: 0, y: 30, duration: 0.8, delay: 0.15,
      })
      gsap.from('.code-copy .scene-copy', {
        scrollTrigger: {
          trigger: '.code-copy',
          start: 'top 80%',
        },
        opacity: 0, y: 20, duration: 0.6, delay: 0.3,
      })
    }, sectionRef)

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
