import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './SystemScene.css'

export default function SystemScene() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelector('.scene-label'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelectorAll('.arch-headline h2'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelector('.arch-statement'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelectorAll('.mock-nav-item'),
        { scaleX: 0 },
        { scaleX: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center', scrollTrigger: { trigger: el, start: 'top 70%' } }
      )
      gsap.fromTo(el.querySelectorAll('.mock-bar'),
        { scaleY: 0 },
        { scaleY: 1, stagger: 0.06, duration: 0.5, ease: 'power2.out', transformOrigin: 'bottom center', scrollTrigger: { trigger: el, start: 'top 65%' } }
      )
      gsap.fromTo(el.querySelectorAll('.mock-table-row'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, scrollTrigger: { trigger: el, start: 'top 60%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="system-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 04 — SYSTEM COMES ALIVE</div>
      <div className="arch-headline">
        <h2>FROM SYSTEMS</h2>
        <h2>TO EXPERIENCES.</h2>
      </div>
      <p className="arch-statement">
        Wireframes become interfaces. Interfaces become products people rely on every day.
      </p>
      <div className="product-mock">
        <div className="mock-topbar">
          <div className="mock-dots">
            <div className="mock-dot" /><div className="mock-dot" /><div className="mock-dot" />
          </div>
          <div className="mock-title">PRODUCT — DASHBOARD</div>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            {[100, 80, 90, 70, 85].map((w, i) => (
              <div key={i} className="mock-nav-item" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="mock-main">
            <div className="mock-header-bar" />
            <div className="mock-chart">
              {[40, 65, 50, 80, 55, 70, 45].map((h, i) => (
                <div key={i} className="mock-bar" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mock-table-rows">
              {[1, 2, 3].map(i => (
                <div key={i} className="mock-table-row">
                  <div className="mock-row-label" /><div className="mock-row-value" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
