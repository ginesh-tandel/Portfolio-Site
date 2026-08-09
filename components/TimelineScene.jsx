import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './TimelineScene.css'

const milestones = [
  { year: '2015', role: 'Software Developer', desc: 'Started building production line-of-business applications.', tech: '.NET · C# · SQL Server' },
  { year: '2018', role: 'Full-Stack .NET Developer', desc: 'Full-stack delivery — APIs, database, and the frontend.', tech: 'ASP.NET Core · Angular · EF Core' },
  { year: '2021', role: 'Senior .NET Engineer', desc: 'Architecture decisions — clean layering, processing, reliability.', tech: 'Clean Architecture · Redis · Docker' },
  { year: '2024', role: 'Software Architect & Consultant', desc: 'Legacy modernization and multi-tenant SaaS design.', tech: 'CQRS · PostgreSQL · Cloud' },
  { year: '2026', role: 'Senior Full-Stack Engineer & SaaS Builder', desc: 'Building and maintaining products end-to-end.', tech: 'AI Integration · React · Full Ownership' },
]

export default function TimelineScene() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (reducedMotion) return

      const svgLine = el.querySelector('.tl-svg-line')
      const dots = el.querySelectorAll('.tl-dot')
      const cards = el.querySelectorAll('.tl-card')
      const finalText = el.querySelectorAll('.tl-final h3')

      if (svgLine) {
        const length = svgLine.getTotalLength()
        gsap.set(svgLine, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })

        gsap.to(svgLine, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1,
          },
        })
      }

      dots.forEach((dot, i) => {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)',
            scrollTrigger: {
              trigger: el,
              start: `top ${75 - i * 8}%`,
            } }
        )
      })

      cards.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: `top ${72 - i * 8}%`,
            } }
        )
      })

      gsap.fromTo(finalText,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'bottom 80%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="tl-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 07 — EXPERIENCE</div>
      <h2 className="tl-headline">THE JOURNEY.</h2>

      <div className="tl-container">
        <svg className="tl-svg" viewBox={`0 0 100 ${milestones.length * 180}`} preserveAspectRatio="xMidYMin meet">
          <line
            className="tl-svg-line"
            x1="50" y1="30"
            x2="50" y2={milestones.length * 180 - 30}
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
        </svg>

        <div className="tl-entries">
          {milestones.map((m, i) => (
            <div key={m.year} className="tl-entry">
              <div className="tl-dot" style={{ top: `${30 + i * 180}px` }} />
              <div className="tl-card">
                <div className="tl-year">{m.year}</div>
                <div className="tl-role">{m.role}</div>
                <p className="tl-desc">{m.desc}</p>
                <div className="tl-tech">{m.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tl-final">
        <h3>11+ YEARS.</h3>
        <h3 className="accent">STILL BUILDING.</h3>
      </div>
    </section>
  )
}
