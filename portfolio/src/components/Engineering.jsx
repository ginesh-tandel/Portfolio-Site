import './Engineering.css'

const layers = [
  { name:'PRODUCT', items:'LogiqLead · LogiqAIAssist · Client Platforms' },
  { name:'APPLICATION LAYER', items:'.NET · ASP.NET Core · C# · Web API' },
  { name:'DATA', items:'SQL Server · PostgreSQL · MongoDB · EF Core' },
  { name:'CACHING', items:'Redis' },
  { name:'PROCESSING', items:'Background Jobs · Messaging' },
  { name:'CLIENT', items:'Angular · React · TypeScript' },
  { name:'INFRASTRUCTURE', items:'Docker · Cloud Infrastructure · REST APIs' },
]

const principles = ['CLEAN ARCHITECTURE','CQRS','AUTHENTICATION','CACHING STRATEGY']

export default function Engineering() {
  return (
    <section className="eng-scene">
      <div className="scene-label">SCENE 06 — ENGINEERING DEPTH</div>
      <div className="eng-headline">
        <h2>THE TECHNOLOGY CHANGES.</h2>
        <h2 className="muted">THE ENGINEERING PRINCIPLES DON'T.</h2>
      </div>
      <div className="layer-stack">
        {layers.map((layer, i) => (
          <div key={layer.name}>
            <div className="layer-row">
              <div className="layer-name">{layer.name}</div>
              <div className="layer-items">{layer.items}</div>
            </div>
            {i < layers.length - 1 && (
              <div className="layer-connector"><span className="layer-arrow">↓</span></div>
            )}
          </div>
        ))}
      </div>
      <div className="principles-tags">
        {principles.map(p => <div key={p} className="tag">{p}</div>)}
      </div>
    </section>
  )
}
