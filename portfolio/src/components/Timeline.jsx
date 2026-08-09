import './Timeline.css'

const entries = [
  { year:'2015', role:'Software Developer', desc:'Started building production line-of-business applications, learning the fundamentals of shipping reliable software.', tech:'.NET · C# · SQL Server' },
  { year:'2018', role:'Full-Stack .NET Developer', desc:'Took ownership of full-stack delivery — APIs, database design, and the front end consuming them.', tech:'ASP.NET Core · Angular · EF Core' },
  { year:'2021', role:'Senior .NET Engineer', desc:'Moved into architecture decisions — clean layering, background processing, and system reliability.', tech:'Clean Architecture · Redis · Docker' },
  { year:'2024', role:'Software Architect & Consultant', desc:'Led modernization of legacy systems and designed multi-tenant SaaS architectures for clients.', tech:'CQRS · PostgreSQL · Cloud Infrastructure' },
  { year:'2026', role:'Senior Full-Stack Engineer & SaaS Builder', desc:'Building and maintaining products end-to-end — LogiqLead, LogiqAIAssist, and consulting engagements.', tech:'AI Integration · React · Full Product Ownership' },
]

export default function Timeline() {
  return (
    <section className="timeline-scene" id="experience">
      <div className="scene-label">SCENE 09 — EXPERIENCE</div>
      <div style={{height:'32px'}} />
      {entries.map(e => (
        <div key={e.year} className="timeline-item-inner">
          <div className="timeline-year">{e.year}</div>
          <div className="timeline-content">
            <div className="timeline-role">{e.role}</div>
            <p className="timeline-desc">{e.desc}</p>
            <div className="timeline-tech">{e.tech}</div>
          </div>
        </div>
      ))}
      <div className="timeline-final">
        <h3>11+ YEARS.</h3>
        <h3 className="accent">STILL BUILDING.</h3>
      </div>
    </section>
  )
}
