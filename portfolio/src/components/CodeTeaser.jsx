import './CodeTeaser.css'

export default function CodeTeaser() {
  return (
    <section className="code-teaser">
      <div className="code-card">
        <div className="code-line">public async Task&lt;Product&gt; BuildAsync(...)</div>
        <div className="code-line">{'{'}</div>
        <div className="code-line comment">    // understand the problem</div>
        <div className="code-line comment">    // design the system</div>
        <div className="code-line comment">    // build the solution</div>
        <div className="code-line">{'}'}</div>
      </div>
      <div className="code-copy">
        <div className="scene-label">SCENE 02 — RAW CODE</div>
        <div className="scene-headline">CODE IS ONLY THE BEGINNING.</div>
        <p className="scene-copy">Fragments of code converge into architecture, systems, and finally, products people use.</p>
      </div>
    </section>
  )
}
