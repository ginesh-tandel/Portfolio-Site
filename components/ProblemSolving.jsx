import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProblemSolving.css'

gsap.registerPlugin(ScrollTrigger)

const problems = [
  { statement: 'LEGACY SYSTEMS.', flow: 'ANALYSIS → ARCHITECTURE → INCREMENTAL MIGRATION → RESULT' },
  { statement: 'SCALABILITY.', flow: 'ANALYSIS → ARCHITECTURE → IMPLEMENTATION → RESULT' },
  { statement: 'PERFORMANCE.', flow: 'PROFILING → BOTTLENECK ANALYSIS → OPTIMIZATION → RESULT' },
  { statement: 'INTEGRATION COMPLEXITY.', flow: 'MAPPING → CONTRACT DESIGN → IMPLEMENTATION → RESULT' },
  { statement: 'TECHNICAL DEBT.', flow: 'ASSESSMENT → PRIORITIZATION → REFACTOR → RESULT' },
  { statement: 'AMBIGUOUS REQUIREMENTS.', flow: 'DISCOVERY → CLARIFICATION → ARCHITECTURE → RESULT' },
]

export default function ProblemSolving() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-item', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        opacity: 0, x: -30, stagger: 0.1, duration: 0.5, ease: 'power2.out',
      })
      gsap.from('.problem-final h3', {
        scrollTrigger: { trigger: '.problem-final', start: 'top 85%' },
        opacity: 0, y: 30, stagger: 0.15, duration: 0.7, ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="problem-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 07 — PROBLEM SOLVING</div>
      <div style={{ height: '36px' }} />
      {problems.map(p => (
        <div key={p.statement} className="problem-item">
          <div className="problem-statement">{p.statement}</div>
          <div className="problem-flow">{p.flow}</div>
        </div>
      ))}
      <div className="problem-final">
        <h3>I DON'T JUST BUILD FEATURES.</h3>
        <h3 className="accent">I SOLVE THE CONSTRAINTS<br />AROUND THEM.</h3>
      </div>
    </section>
  )
}
