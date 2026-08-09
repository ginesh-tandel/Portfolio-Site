import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './CodeTeaser.css'

export default function CodeTeaser() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll('.code-line')
      const inners = el.querySelectorAll('.code-line-inner')
      const cursors = el.querySelectorAll('.type-cursor')

      if (reducedMotion) {
        gsap.set(inners, { width: 'auto' })
        gsap.set(cursors, { opacity: 0 })
      } else {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: 'top 80%', end: 'top 20%', scrub: 1 },
        })
        lines.forEach((line, i) => {
          const inner = inners[i]
          const cursor = cursors[i]
          const fullWidth = inner.scrollWidth
          const chars = Math.max(inner.textContent.length, 1)
          gsap.set(inner, { width: 0 })
          tl.set(cursor, { className: 'type-cursor is-typing' })
          tl.to(inner, { width: fullWidth, duration: chars * 0.045, ease: `steps(${chars})` })
          tl.set(cursor, { className: 'type-cursor' })
        })
      }
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
        <div className="code-line keyword"><span className="code-line-inner">public async</span><span className="type-cursor" /></div>
        <div className="code-line"><span className="code-line-inner">Task&lt;<span className="type">Product</span>&gt; <span className="func">BuildAsync</span>(...)</span><span className="type-cursor" /></div>
        <div className="code-line"><span className="code-line-inner">{'{'}</span><span className="type-cursor" /></div>
        <div className="code-line comment"><span className="code-line-inner">    <span className="kw">// understand the problem</span></span><span className="type-cursor" /></div>
        <div className="code-line comment"><span className="code-line-inner">    <span className="kw">// design the system</span></span><span className="type-cursor" /></div>
        <div className="code-line comment"><span className="code-line-inner">    <span className="kw">// build the solution</span></span><span className="type-cursor" /></div>
        <div className="code-line"><span className="code-line-inner">{'}'}</span><span className="type-cursor" /></div>
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
