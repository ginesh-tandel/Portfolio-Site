import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Focus.css'

const items = [
  { label: 'PRODUCT ENGINEERING', text: 'Building and maintaining SaaS products end-to-end, from architecture to shipped features.' },
  { label: 'AI-ENABLED APPLICATIONS', text: 'Integrating AI and LLM capability into real product workflows, not demos.' },
  { label: 'LEGACY MODERNIZATION', text: 'Migrating monolithic systems to maintainable, layered architectures.' },
  { label: 'CONSULTING & REMOTE WORK', text: 'Selected remote engineering and architecture consulting for teams and founders.' },
]

export default function Focus() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelector('.focus-headline'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelectorAll('.focus-item'),
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="focus-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 10 — CURRENT FOCUS</div>
      <div className="focus-headline">WHAT I'M FOCUSED ON NOW.</div>
      <div className="focus-row">
        {items.map(item => (
          <div key={item.label} className="focus-item">
            <div className="focus-label">{item.label}</div>
            <p className="focus-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
