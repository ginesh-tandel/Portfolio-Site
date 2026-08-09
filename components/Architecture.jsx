import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Architecture.css'

gsap.registerPlugin(ScrollTrigger)

const nodes = ['Frontend', 'API', 'Application', 'Domain', 'Infrastructure', 'Database']
const tags = ['AUTHENTICATION', 'CACHING', 'BACKGROUND JOBS', 'INTEGRATIONS', 'MESSAGING', 'MONITORING']

export default function Architecture() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.arch-headline h2', {
        scrollTrigger: {
          trigger: '.arch-headline',
          start: 'top 80%',
        },
        opacity: 0, y: 40, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })

      gsap.from('.arch-statement', {
        scrollTrigger: {
          trigger: '.arch-statement',
          start: 'top 85%',
        },
        opacity: 0, y: 20, duration: 0.6, delay: 0.3,
      })

      gsap.from('.arch-svg-container', {
        scrollTrigger: {
          trigger: '.arch-svg-container',
          start: 'top 80%',
        },
        opacity: 0, duration: 1,
      })

      gsap.from('.arch-node-group', {
        scrollTrigger: {
          trigger: '.arch-svg-container',
          start: 'top 75%',
        },
        opacity: 0, y: 15, stagger: 0.1, duration: 0.5, ease: 'power2.out',
      })

      gsap.from('.arch-line', {
        scrollTrigger: {
          trigger: '.arch-svg-container',
          start: 'top 75%',
        },
        scaleX: 0, stagger: 0.08, duration: 0.4, ease: 'power2.out', transformOrigin: 'left center',
      })

      gsap.from('.arch-tag', {
        scrollTrigger: {
          trigger: '.cross-tags',
          start: 'top 85%',
        },
        opacity: 0, y: 10, stagger: 0.06, duration: 0.4,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="arch-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 03 — ARCHITECTURE</div>
      <div className="arch-headline">
        <h2>11+ YEARS</h2>
        <h2>OF ENGINEERING</h2>
      </div>
      <p className="arch-statement">
        Architecture isn't about adding complexity. It's about making complexity manageable.
      </p>

      <div className="arch-svg-container">
        <svg className="arch-svg" viewBox="0 0 900 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {nodes.map((node, i) => {
            const x = i * 155 + 10
            return (
              <g key={node} className="arch-node-group">
                <rect x={x} y="30" width="120" height="48" rx="4" fill="#12151A" stroke="#22262C" strokeWidth="1" />
                <text x={x + 60} y="58" textAnchor="middle" fill="#F5F6F7" fontSize="12" fontFamily="'JetBrains Mono', monospace" letterSpacing="0.5">
                  {node}
                </text>
                {i < nodes.length - 1 && (
                  <line className="arch-line" x1={x + 125} y1="54" x2={x + 150} y2="54" stroke="#22262C" strokeWidth="1" />
                )}
              </g>
            )
          })}
        </svg>
      </div>

      <div className="cross-tags">
        {tags.map(tag => (
          <div key={tag} className="arch-tag">{tag}</div>
        ))}
      </div>
    </section>
  )
}
