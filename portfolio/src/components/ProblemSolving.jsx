import './ProblemSolving.css'

const problems = [
  { statement:'LEGACY SYSTEMS.', flow:'ANALYSIS → ARCHITECTURE → INCREMENTAL MIGRATION → RESULT' },
  { statement:'SCALABILITY.', flow:'ANALYSIS → ARCHITECTURE → IMPLEMENTATION → RESULT' },
  { statement:'PERFORMANCE.', flow:'PROFILING → BOTTLENECK ANALYSIS → OPTIMIZATION → RESULT' },
  { statement:'INTEGRATION COMPLEXITY.', flow:'MAPPING → CONTRACT DESIGN → IMPLEMENTATION → RESULT' },
  { statement:'TECHNICAL DEBT.', flow:'ASSESSMENT → PRIORITIZATION → REFACTOR → RESULT' },
  { statement:'AMBIGUOUS REQUIREMENTS.', flow:'DISCOVERY → CLARIFICATION → ARCHITECTURE → RESULT' },
]

export default function ProblemSolving() {
  return (
    <section className="problem-scene">
      <div className="scene-label">SCENE 07 — PROBLEM SOLVING</div>
      <div style={{height:'32px'}} />
      {problems.map(p => (
        <div key={p.statement} className="problem-item">
          <div className="problem-statement">{p.statement}</div>
          <div className="problem-flow">{p.flow}</div>
        </div>
      ))}
      <div className="problem-final">
        <h3>I DON'T JUST BUILD FEATURES.</h3>
        <h3 className="accent">I SOLVE THE CONSTRAINTS AROUND THEM.</h3>
      </div>
    </section>
  )
}
