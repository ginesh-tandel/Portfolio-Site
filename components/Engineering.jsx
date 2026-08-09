import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Engineering.css'

const layers = [
  { name: 'PRODUCT', items: 'LogiqLead · LogiqAIAssist · Client Platforms' },
  { name: 'APPLICATION LAYER', items: '.NET · ASP.NET Core · C# · Web API' },
  { name: 'DATA', items: 'SQL Server · PostgreSQL · MongoDB · EF Core' },
  { name: 'CACHING', items: 'Redis' },
  { name: 'PROCESSING', items: 'Background Jobs · Messaging' },
  { name: 'CLIENT', items: 'Angular · React · TypeScript' },
  { name: 'INFRASTRUCTURE', items: 'Docker · Cloud Infrastructure · REST APIs' },
]

const principles = ['CLEAN ARCHITECTURE', 'CQRS', 'AUTHENTICATION', 'CACHING STRATEGY']

export default function Engineering() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.eng-headline h2'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelectorAll('.layer-row'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelectorAll('.layer-connector'),
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, stagger: 0.08, duration: 0.3, transformOrigin: 'top center', scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelectorAll('.principles-tags .tag'),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.06, duration: 0.3, scrollTrigger: { trigger: el, start: 'top 70%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="eng-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 06 — ENGINEERING DEPTH</div>
      <div className="eng-headline">
        <h2>THE TECHNOLOGY CHANGES.</h2>
        <h2 className="muted">THE ENGINEERING PRINCIPLES DON'T.</h2>
      </div>
      <div className="layer-stack">
        {layers.map((layer, i) => (
          <div key={layer.name}>
            <div className="layer-row">
              <div className="layer-name">{layer.name}</div>
              <div className="layer-items">{layer.items}</div>
            </div>
            {i < layers.length - 1 && (
              <div className="layer-connector"><span className="layer-arrow">↓</span></div>
            )}
          </div>
        ))}
      </div>
      <div className="principles-tags">
        {principles.map(p => <div key={p} className="tag">{p}</div>)}
      </div>
    </section>
  )
}
