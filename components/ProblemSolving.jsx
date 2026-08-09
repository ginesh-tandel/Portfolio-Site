import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './ProblemSolving.css'

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
    const el = sectionRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.problem-item'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 70%' } }
      )
      gsap.fromTo(el.querySelectorAll('.problem-final h3'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 60%' } }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="problem-scene" ref={sectionRef}>
      <div className="scene-label">SCENE 07 — PROBLEM SOLVING</div>
      <div className="spacer" />
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
