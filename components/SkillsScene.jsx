import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './SkillsScene.css'

const skills = [
  { name: 'C#', category: 'language' },
  { name: '.NET Core', category: 'framework' },
  { name: 'ASP.NET', category: 'framework' },
  { name: 'React', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'SQL Server', category: 'data' },
  { name: 'PostgreSQL', category: 'data' },
  { name: 'Entity Framework', category: 'data' },
  { name: 'Redis', category: 'infra' },
  { name: 'Docker', category: 'infra' },
  { name: 'Azure', category: 'cloud' },
  { name: 'AI / LLM', category: 'ai' },
  { name: 'REST APIs', category: 'architecture' },
  { name: 'Clean Architecture', category: 'architecture' },
  { name: 'CQRS', category: 'architecture' },
]

const categoryColors = {
  language: '#c084fc',
  framework: '#5EEAD4',
  frontend: '#7dd3fc',
  data: '#fbbf24',
  infra: '#f87171',
  cloud: '#34d399',
  ai: '#e879f9',
  architecture: '#94a3b8',
}

const edges = ['left', 'right', 'top', 'bottom']

export default function SkillsScene() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (reducedMotion) return

      gsap.fromTo(el.querySelector('.skills-headline'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' } }
      )

      gsap.fromTo(el.querySelector('.skills-sub'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      )

      const items = el.querySelectorAll('.skills-item')
      items.forEach((item, i) => {
        const edge = edges[i % edges.length]
        const fromVars = { opacity: 0, scale: 0.6 }

        switch (edge) {
          case 'left':
            fromVars.x = -120 - Math.random() * 80
            fromVars.y = (Math.random() - 0.5) * 60
            break
          case 'right':
            fromVars.x = 120 + Math.random() * 80
            fromVars.y = (Math.random() - 0.5) * 60
            break
          case 'top':
            fromVars.y = -100 - Math.random() * 80
            fromVars.x = (Math.random() - 0.5) * 60
            break
          case 'bottom':
            fromVars.y = 100 + Math.random() * 80
            fromVars.x = (Math.random() - 0.5) * 60
            break
        }

        gsap.fromTo(item, fromVars, {
          opacity: 1, x: 0, y: 0, scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
          },
          delay: i * 0.04,
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="skills-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 06 — THE STACK</div>
      <h2 className="skills-headline">THE STACK BEHIND<br />THE PRODUCTS.</h2>
      <p className="skills-sub">Technologies I reach for — and the principles that outlast any framework.</p>
      <div className="skills-grid">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="skills-item"
            style={{ '--skill-color': categoryColors[skill.category] }}
          >
            <div className="skills-dot" />
            <span className="skills-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
