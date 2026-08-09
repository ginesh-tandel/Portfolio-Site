import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './ProjectsScene.css'

const projects = [
  {
    name: 'LogiqLead',
    subtitle: 'SaaS Lead Management Platform',
    desc: 'End-to-end lead management — find, enrich, and reach prospects through automated sequences and a unified inbox.',
    tags: ['ASP.NET Core', 'PostgreSQL', 'SMTP/IMAP', 'Redis', 'Background Jobs'],
    mockType: 'table',
  },
  {
    name: 'LogiqAIAssist',
    subtitle: 'AI Knowledge & Workflow Engine',
    desc: 'AI-assisted product that retrieves relevant context and turns it into usable answers and automated actions.',
    tags: ['.NET Backend', 'LLM Integration', 'Retrieval Pipeline', 'API-First'],
    mockType: 'chat',
  },
  {
    name: 'CRM Platform',
    subtitle: 'Business CRM Modernization',
    desc: 'Legacy CRM system rebuilt for scale — clean architecture, multi-tenant, real-time dashboards.',
    tags: ['ASP.NET Core', 'SQL Server', 'EF Core', 'Angular'],
    mockType: 'dashboard',
  },
  {
    name: 'Legacy Modernization',
    subtitle: 'Monolith to Maintainable Architecture',
    desc: 'Migrated a monolithic line-of-business app to a layered, testable, maintainable architecture.',
    tags: ['Clean Architecture', 'CQRS', 'Docker', 'Migration'],
    mockType: 'layers',
  },
]

function ProjectMock({ type }) {
  if (type === 'table') {
    return (
      <div className="proj-mock proj-mock-table">
        <div className="proj-mock-topbar">
          <div className="proj-mock-dots"><span /><span /><span /></div>
          <div className="proj-mock-title">LEADS</div>
        </div>
        <div className="proj-mock-body">
          <div className="proj-mock-sidebar">
            {[100, 75, 85, 60].map((w, i) => (
              <div key={i} className="proj-mock-nav" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="proj-mock-content">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="proj-mock-row">
                <div className="proj-mock-avatar" />
                <div className="proj-mock-row-text" />
                <div className="proj-mock-row-badge" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'chat') {
    return (
      <div className="proj-mock proj-mock-chat">
        <div className="proj-mock-topbar">
          <div className="proj-mock-dots"><span /><span /><span /></div>
          <div className="proj-mock-title">AI ASSIST</div>
        </div>
        <div className="proj-mock-body">
          <div className="proj-mock-messages">
            <div className="proj-mock-msg proj-mock-msg-user">Where do we stand on Q3 docs?</div>
            <div className="proj-mock-msg proj-mock-msg-ai">Found 3 relevant docs. Onboarding is drafted, missing billing section.</div>
            <div className="proj-mock-msg proj-mock-msg-user">Draft billing, assign to Priya.</div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="proj-mock proj-mock-dash">
        <div className="proj-mock-topbar">
          <div className="proj-mock-dots"><span /><span /><span /></div>
          <div className="proj-mock-title">CRM</div>
        </div>
        <div className="proj-mock-body">
          <div className="proj-mock-cards">
            {[{ l: 'CLIENTS', v: 342 }, { l: 'DEALS', v: 89 }, { l: 'REVENUE', v: '2.4M' }].map(c => (
              <div key={c.l} className="proj-mock-stat">
                <div className="proj-mock-stat-label">{c.l}</div>
                <div className="proj-mock-stat-val">{c.v}</div>
              </div>
            ))}
          </div>
          <div className="proj-mock-chart">
            {[50, 70, 45, 80, 60, 75, 55].map((h, i) => (
              <div key={i} className="proj-mock-bar" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // layers
  return (
    <div className="proj-mock proj-mock-layers">
      <div className="proj-mock-topbar">
        <div className="proj-mock-dots"><span /><span /><span /></div>
        <div className="proj-mock-title">ARCHITECTURE</div>
      </div>
      <div className="proj-mock-body proj-mock-layer-stack">
        {['PRESENTATION', 'APPLICATION', 'DOMAIN', 'INFRASTRUCTURE'].map((name, i) => (
          <div key={name} className="proj-mock-layer">
            <div className="proj-mock-layer-label">{name}</div>
            <div className="proj-mock-layer-bar" style={{ width: `${100 - i * 10}%` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsScene() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    const track = trackRef.current
    if (!el || !track) return

    const ctx = gsap.context(() => {
      if (reducedMotion) return

      const isDesktop = window.matchMedia('(min-width: 1025px)').matches

      if (isDesktop) {
        const totalScroll = track.scrollWidth - window.innerWidth

        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })
      } else {
        gsap.fromTo(track.children,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 80%' } }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="proj-scene" ref={sectionRef}>
      <div className="proj-header">
        <div className="scene-label">SCENE 05 — SELECTED PRODUCTS</div>
        <h2 className="proj-headline">SHIPPED PRODUCTS.</h2>
      </div>
      <div className="proj-track" ref={trackRef}>
        {projects.map((p, i) => (
          <div key={p.name} className="proj-card">
            <div className="proj-card-header">
              <div className="proj-card-idx">0{i + 1}</div>
              <div className="proj-card-name">{p.name}</div>
              <div className="proj-card-sub">{p.subtitle}</div>
            </div>
            <ProjectMock type={p.mockType} />
            <p className="proj-card-desc">{p.desc}</p>
            <div className="proj-card-tags">
              {p.tags.map(t => <span key={t} className="proj-card-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
