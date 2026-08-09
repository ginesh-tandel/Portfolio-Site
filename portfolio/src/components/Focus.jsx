import './Focus.css'

const items = [
  { label:'PRODUCT ENGINEERING', text:'Building and maintaining SaaS products end-to-end, from architecture to shipped features.' },
  { label:'AI-ENABLED APPLICATIONS', text:'Integrating AI and LLM capability into real product workflows, not demos.' },
  { label:'LEGACY MODERNIZATION', text:'Migrating monolithic systems to maintainable, layered architectures.' },
  { label:'CONSULTING & REMOTE WORK', text:'Selected remote engineering and architecture consulting for teams and founders.' },
]

export default function Focus() {
  return (
    <section className="focus-scene">
      <div className="scene-label">SCENE 10 — CURRENT FOCUS</div>
      <div className="focus-headline">WHAT I'M FOCUSED ON NOW.</div>
      <div className="focus-row">
        {items.map(item => (
          <div key={item.label} className="focus-item">
            <div className="focus-label">{item.label}</div>
            <p className="focus-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
