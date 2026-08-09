import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './Architecture.css'

const nodes = ['Frontend', 'API', 'Application', 'Domain', 'Infrastructure', 'Database']
const tags = ['AUTHENTICATION', 'CACHING', 'BACKGROUND JOBS', 'INTEGRATIONS', 'MESSAGING', 'MONITORING']

export default function Architecture() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia('(min-width: 1025px)').matches

      if (reducedMotion || !isDesktop) {
        if (reducedMotion) {
          gsap.set(el.querySelectorAll('.arch-headline h2'), { opacity: 1, y: 0 })
          gsap.set(el.querySelector('.arch-statement'), { opacity: 1, y: 0 })
          gsap.set(el.querySelector('.arch-svg-container'), { opacity: 1 })
          gsap.set(el.querySelectorAll('.arch-node-group'), { opacity: 1, y: 0 })
          gsap.set(el.querySelectorAll('.arch-line'), { scaleX: 1 })
          gsap.set(el.querySelectorAll('.arch-tag'), { opacity: 1, y: 0 })
        } else {
          gsap.fromTo(el.querySelectorAll('.arch-headline h2'),
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
          )
          gsap.fromTo(el.querySelector('.arch-statement'),
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, delay: 0.2, scrollTrigger: { trigger: el, start: 'top 75%' } }
          )
          gsap.fromTo(el.querySelector('.arch-svg-container'),
            { opacity: 0 },
            { opacity: 1, duration: 1, scrollTrigger: { trigger: el, start: 'top 70%' } }
          )
          gsap.fromTo(el.querySelectorAll('.arch-node-group'),
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 70%' } }
          )
          gsap.fromTo(el.querySelectorAll('.arch-line'),
            { scaleX: 0 },
            { scaleX: 1, stagger: 0.08, duration: 0.4, ease: 'power2.out', transformOrigin: 'left center', scrollTrigger: { trigger: el, start: 'top 70%' } }
          )
          gsap.fromTo(el.querySelectorAll('.arch-tag'),
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, stagger: 0.06, duration: 0.4, scrollTrigger: { trigger: el, start: 'top 65%' } }
          )
        }
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: '+=80%',
            pin: true,
            scrub: 1,
          },
        })

        tl.fromTo(el.querySelectorAll('.arch-headline h2'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.15, stagger: 0.05 }
        )
        tl.fromTo(el.querySelector('.arch-statement'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.1 },
          '<0.05'
        )
        tl.fromTo(el.querySelector('.arch-svg-container'),
          { opacity: 0 },
          { opacity: 1, duration: 0.1 }
        )

        const nodeGroups = el.querySelectorAll('.arch-node-group')
        const lines = el.querySelectorAll('.arch-line')
        nodeGroups.forEach((node, i) => {
          tl.fromTo(node,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.12, ease: 'power2.out' },
            i === 0 ? '>-0.04' : '>-0.06'
          )
          if (lines[i]) {
            tl.fromTo(lines[i],
              { scaleX: 0 },
              { scaleX: 1, duration: 0.08, ease: 'power2.out', transformOrigin: 'left center' },
              '>-0.02'
            )
          }
        })

        tl.fromTo(el.querySelectorAll('.arch-tag'),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.03, duration: 0.1 },
          '>-0.04'
        )
      }
    }, el)

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
        <svg className="arch-svg" viewBox="0 0 900 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="System architecture diagram">
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
