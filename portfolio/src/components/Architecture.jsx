import './Architecture.css'

const nodes = ['Frontend', 'API', 'Application', 'Domain', 'Infrastructure', 'Database']
const tags = ['AUTHENTICATION', 'CACHING', 'BACKGROUND JOBS', 'INTEGRATIONS', 'MESSAGING', 'MONITORING']

export default function Architecture() {
  return (
    <section className="arch-scene">
      <div className="scene-label">SCENE 03 — ARCHITECTURE</div>
      <div className="arch-headline">
        <h2>11+ YEARS</h2>
        <h2>OF ENGINEERING</h2>
      </div>
      <p className="arch-statement">Architecture isn't about adding complexity. It's about making complexity manageable.</p>
      <div className="diagram-row-inner">
        {nodes.map((node, i) => (
          <div key={node} style={{display:'flex',alignItems:'center',flex:1,gap:0}}>
            <div className="diagram-node">{node}</div>
            {i < nodes.length - 1 && <div className="diagram-connector" />}
          </div>
        ))}
      </div>
      <div className="cross-tags">
        {tags.map(tag => <div key={tag} className="tag">{tag}</div>)}
      </div>
    </section>
  )
}
