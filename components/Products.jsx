import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './Products.css'

const logiqLeadTags = ['LEAD MANAGEMENT', 'ENRICHMENT', 'EMAIL SEQUENCES', 'AUTOMATION', 'SMTP/IMAP', 'INBOX', 'ANALYTICS', 'BACKGROUND JOBS', 'COMPLIANCE']
const logiqAiTags = ['AI INTERACTION', 'KNOWLEDGE RETRIEVAL', 'WORKFLOW AUTOMATION', 'API INTEGRATION', 'REAL-TIME RESPONSES']

const breakdown1 = [
  { label: 'PROBLEM', text: 'Sales teams needed one system to find, enrich, and reach leads instead of stitching together five disconnected tools.' },
  { label: 'APPROACH', text: 'Design a SaaS platform combining enrichment, sequencing, and inbox management behind one clean workflow.' },
  { label: 'ARCHITECTURE', text: '.NET / ASP.NET Core Web API, background job processing, SMTP/IMAP integration, PostgreSQL, Redis.' },
  { label: 'PRODUCT', text: 'Lead management, enrichment, automated email sequences, unified inbox, analytics dashboard.' },
  { label: 'RESULT', text: 'A production SaaS product handling real prospecting workflows, built and maintained end-to-end.' },
]

const breakdown2 = [
  { label: 'PROBLEM', text: 'Teams needed fast, accurate answers from internal knowledge without digging through scattered docs.' },
  { label: 'APPROACH', text: 'Build an AI-assisted product that retrieves relevant context and turns it into usable answers and actions.' },
  { label: 'ARCHITECTURE', text: '.NET backend, LLM integration, retrieval pipeline, structured knowledge storage, API-first design.' },
  { label: 'PRODUCT', text: 'Conversational interface, knowledge retrieval, workflow automation triggered from responses.' },
  { label: 'RESULT', text: 'A working AI product experience wired into real backend systems, not a demo.' },
]

const additionalWork = [
  { title: 'CRM Platform', desc: 'Business CRM modernization — legacy system rebuilt for scale.', stack: 'ASP.NET Core · SQL Server · EF Core' },
  { title: 'Legacy Modernization', desc: 'Migrated a monolithic line-of-business app to a maintainable, layered architecture.', stack: 'Clean Architecture · CQRS · Docker' },
  { title: 'API Platform', desc: 'Integration-heavy API platform connecting internal tools and third-party services.', stack: 'Web API · REST · Background Jobs' },
]

function CaseStudy({ index, name, subtitle, breakdown, tags }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(el.querySelectorAll('.breakdown-item'), { opacity: 1, y: 0 })
        gsap.set(el.querySelectorAll('.project-tag'), { opacity: 1, scale: 1 })
      } else {
        gsap.fromTo(el.querySelectorAll('.breakdown-item'),
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            stagger: 0.12,
            scrollTrigger: {
              trigger: el.querySelector('.breakdown-grid'),
              start: 'top 80%',
              end: 'bottom 40%',
              scrub: 0.5,
            },
          }
        )
        gsap.fromTo(el.querySelectorAll('.project-tag'),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, stagger: 0.04, duration: 0.3,
            scrollTrigger: { trigger: el, start: 'top 70%' } }
        )
      }
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section className="case-study" ref={ref}>
      <div className="case-study-header">
        <div className="project-index">PROJECT 0{index}</div>
        <div className="case-study-title-row">
          <div className="project-name">{name}</div>
          <div className="project-subtitle">{subtitle}</div>
        </div>
      </div>
      <div className="breakdown-grid">
        {breakdown.map(item => (
          <div key={item.label} className="breakdown-item">
            <div className="breakdown-label">{item.label}</div>
            <p className="breakdown-text">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="project-tags">
        {tags.map(tag => <div key={tag} className="project-tag">{tag}</div>)}
      </div>
    </section>
  )
}

export default function Products() {
  const headerRef = useRef(null)
  const llMockRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(el.querySelector('.products-headline'), { opacity: 1, y: 0 })
      } else {
        gsap.fromTo(el.querySelector('.products-headline'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 80%' } }
        )
      }
    }, el)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const el = llMockRef.current
    if (!el || reducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.stat-bar'),
        { scaleX: 0 },
        { scaleX: 1, stagger: 0.06, duration: 0.4, ease: 'power2.out',
          transformOrigin: 'left center',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
      gsap.fromTo(el.querySelectorAll('.mock-table-row'),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.08, duration: 0.4,
          scrollTrigger: { trigger: el, start: 'top 70%' } }
      )
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="products-header" id="work" ref={headerRef}>
        <div className="scene-label">SCENE 05 — SELECTED PRODUCTS</div>
        <h2 className="products-headline">SELECTED PRODUCTS.</h2>
      </div>

      <CaseStudy index={1} name="LogiqLead" subtitle="SaaS Lead Management Platform" breakdown={breakdown1} tags={logiqLeadTags} />

      <div className="product-mock-ll" ref={llMockRef}>
        <div className="mock-topbar">
          <div className="mock-title">LOGIQLEAD — PRODUCT INTERFACE</div>
          <div className="mock-status">LIVE</div>
        </div>
        <div className="stats-row-inner">
          {[{ label: 'LEADS', w: '75%' }, { label: 'SEQUENCES', w: '60%' }, { label: 'INBOX', w: '85%' }].map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-label">{s.label}</div>
              <div className="stat-bar" style={{ width: s.w }} />
            </div>
          ))}
        </div>
        <div className="mock-table-rows">
          {[1, 2, 3].map(i => (
            <div key={i} className="mock-table-row"><div className="mock-row-label" /><div className="mock-row-value" /></div>
          ))}
        </div>
      </div>

      <div className="divider" />

      <CaseStudy index={2} name="LogiqAIAssist" subtitle="AI Knowledge & Workflow Engine" breakdown={breakdown2} tags={logiqAiTags} />

      <div className="divider" />

      <section className="additional-work">
        <div className="additional-label">ADDITIONAL SELECTED WORK</div>
        {additionalWork.map(item => (
          <div key={item.title} className="additional-item-inner">
            <div className="additional-title">{item.title}</div>
            <div className="additional-desc">{item.desc}</div>
            <div className="additional-stack">{item.stack}</div>
          </div>
        ))}
      </section>
    </>
  )
}
