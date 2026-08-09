import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SystemScene.css'

gsap.registerPlugin(ScrollTrigger)

export default function SystemScene() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.system-scene .scene-label', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        opacity: 0, y: 20, duration: 0.6,
      })
      gsap.from('.system-scene .arch-headline h2', {
        scrollTrigger: { trigger: '.system-scene .arch-headline', start: 'top 80%' },
        opacity: 0, y: 40, stagger: 0.15, duration: 0.8, ease: 'power3.out',
      })
      gsap.from('.system-scene .arch-statement', {
        scrollTrigger: { trigger: '.system-scene .arch-statement', start: 'top 85%' },
        opacity: 0, y: 20, duration: 0.6, delay: 0.2,
      })

      gsap.from('.mock-nav-item', {
        scrollTrigger: { trigger: '.product-mock', start: 'top 80%' },
        scaleX: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out', transformOrigin: 'left center',
      })
      gsap.from('.mock-bar', {
        scrollTrigger: { trigger: '.mock-chart', start: 'top 85%' },
        scaleY: 0, stagger: 0.06, duration: 0.5, ease: 'power2.out', transformOrigin: 'bottom center',
      })
      gsap.from('.mock-table-row', {
        scrollTrigger: { trigger: '.mock-table-rows', start: 'top 90%' },
        opacity: 0, x: -20, stagger: 0.1, duration: 0.4,
      })
    }, sectionRef)

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
