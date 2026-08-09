import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reducedMotion } from '../lib/reducedMotion'
import './CodeToProductScene.css'

const codeLines = [
  { text: 'public class ProductBuilder', cls: 'kw' },
  { text: '{', cls: '' },
  { text: '    public async Task<ShipResult>', cls: '' },
  { text: '        BuildAsync(Idea idea)', cls: '' },
  { text: '    {', cls: '' },
  { text: '        var arch = await DesignAsync(idea);', cls: 'fn' },
  { text: '        var system = await ImplementAsync(arch);', cls: 'fn' },
  { text: '        return await ShipAsync(system);', cls: 'fn' },
  { text: '    }', cls: '' },
  { text: '}', cls: '' },
]

const wireframeCards = [
  { w: 180, h: 120, x: 40, y: 60 },
  { w: 260, h: 120, x: 240, y: 60 },
  { w: 180, h: 120, x: 520, y: 60 },
  { w: 400, h: 160, x: 40, y: 200 },
  { w: 300, h: 160, x: 460, y: 200 },
]

export default function CodeToProductScene() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(el.querySelectorAll('.ctp-hero'), { opacity: 1, y: 0 })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      })

      const codeItems = el.querySelectorAll('.ctp-code-line')
      const cursor = el.querySelectorAll('.ctp-cursor')
      const termStatus = el.querySelector('.ctp-term-status')
      const termName = el.querySelector('.ctp-term-name')
      const compileOverlay = el.querySelector('.ctp-compile-overlay')
      const compileText = el.querySelector('.ctp-compile-text')
      const scanlines = el.querySelector('.ctp-scanlines')
      const particles = el.querySelectorAll('.ctp-particle')
      const wireContainer = el.querySelector('.ctp-wire-container')
      const wireCards = el.querySelectorAll('.ctp-wire-card')
      const wireGrid = el.querySelectorAll('.ctp-wire-grid-line')
      const wireLabel = el.querySelector('.ctp-wire-label')
      const uiContainer = el.querySelector('.ctp-ui-container')
      const uiCards = el.querySelectorAll('.ctp-ui-card')
      const uiNav = el.querySelectorAll('.ctp-ui-nav-item')
      const uiChart = el.querySelectorAll('.ctp-ui-chart-bar')
      const heroLines = el.querySelectorAll('.ctp-hero-line')
      const heroSub = el.querySelector('.ctp-hero-sub')
      const heroScroll = el.querySelector('.ctp-hero-scroll')
      const laptopFrame = el.querySelector('.ctp-laptop')

      // ── Scene 1: Terminal code reveal ──
      codeItems.forEach((line, i) => {
        const chars = line.textContent.length || 20
        tl.fromTo(line,
          { clipPath: 'inset(0 100% 0 0)' },
          { clipPath: 'inset(0 0% 0 0)', duration: Math.max(chars * 0.012, 0.08), ease: 'none' },
          i === 0 ? 0 : '>-0.005'
        )
      })

      // cursor blinks during code reveal
      tl.fromTo(cursor,
        { opacity: 1 },
        { opacity: 0, duration: 0.01 },
        0.18
      )

      // terminal status text
      tl.fromTo(termStatus,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' },
        0.14
      )

      // name + title fade in
      tl.fromTo(termName,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' },
        0.17
      )

      // ── Scene 2: Compile / Glitch ──
      // code fades out
      tl.to(el.querySelector('.ctp-terminal'), {
        opacity: 0.08, duration: 0.08, ease: 'power2.in',
      }, 0.14)

      // compile overlay fades in
      tl.fromTo(compileOverlay,
        { opacity: 0 },
        { opacity: 1, duration: 0.04, ease: 'none' },
        0.16
      )

      // glitch text
      tl.fromTo(compileText,
        { opacity: 0, scale: 1.4, filter: 'blur(8px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.06, ease: 'power3.out' },
        0.17
      )

      // scanlines
      tl.fromTo(scanlines,
        { opacity: 0 },
        { opacity: 0.12, duration: 0.03, ease: 'none' },
        0.16
      )
      tl.to(scanlines,
        { opacity: 0, duration: 0.04, ease: 'none' },
        0.26
      )

      // particles fly out
      particles.forEach((p, i) => {
        const angle = (i / particles.length) * Math.PI * 2
        const dist = 80 + Math.random() * 120
        tl.fromTo(p,
          { opacity: 0.9, x: 0, y: 0, scale: 1 },
          {
            opacity: 0, x: Math.cos(angle) * dist, y: Math.sin(angle) * dist,
            scale: 0.2, duration: 0.08, ease: 'power2.out',
          },
          0.18 + i * 0.003
        )
      })

      // compile text changes
      tl.to(compileText, {
        textContent: 'Build successful',
        duration: 0.01,
        ease: 'none',
      }, 0.24)

      // compile overlay fades out
      tl.to(compileOverlay,
        { opacity: 0, duration: 0.04, ease: 'none' },
        0.28
      )

      // ── Scene 3: Wireframe ──
      tl.fromTo(wireContainer,
        { opacity: 0 },
        { opacity: 1, duration: 0.06, ease: 'none' },
        0.22
      )

      // grid lines draw in
      wireGrid.forEach((line, i) => {
        tl.fromTo(line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.04, ease: 'power2.out', transformOrigin: 'left center' },
          0.23 + i * 0.008
        )
      })

      // wireframe cards scale in staggered
      wireCards.forEach((card, i) => {
        tl.fromTo(card,
          { opacity: 0, scale: 0.7, borderColor: 'rgba(94,234,212,0.15)' },
          {
            opacity: 1, scale: 1, borderColor: 'rgba(94,234,212,0.35)',
            duration: 0.04, ease: 'back.out(1.4)',
          },
          0.25 + i * 0.01
        )
      })

      // wireframe label
      tl.fromTo(wireLabel,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.03, ease: 'power2.out' },
        0.30
      )

      // wireframe fades out
      tl.to(wireContainer,
        { opacity: 0, duration: 0.06, ease: 'power2.in' },
        0.42
      )

      // ── Scene 4: UI Reveal ──
      tl.fromTo(uiContainer,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 0.08, ease: 'power2.out' },
        0.38
      )

      // UI nav items
      tl.fromTo(uiNav,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, stagger: 0.008, duration: 0.03, ease: 'power2.out', transformOrigin: 'left center' },
        0.40
      )

      // UI cards stagger up
      uiCards.forEach((card, i) => {
        tl.fromTo(card,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.04, ease: 'power2.out' },
          0.41 + i * 0.01
        )
      })

      // chart bars grow
      tl.fromTo(uiChart,
        { scaleY: 0 },
        { scaleY: 1, stagger: 0.005, duration: 0.04, ease: 'power2.out', transformOrigin: 'bottom center' },
        0.43
      )

      // ── Scene 5: Hero Reveal ──
      // laptop frame appears
      tl.fromTo(laptopFrame,
        { opacity: 0, scale: 0.6, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 0.08, ease: 'power3.out' },
        0.52
      )

      // UI scales down into laptop
      tl.to(uiContainer,
        { scale: 0.55, y: -20, opacity: 0.6, duration: 0.1, ease: 'power2.inOut' },
        0.54
      )

      // hero text enters
      heroLines.forEach((line, i) => {
        tl.fromTo(line,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.06, ease: 'power3.out' },
          0.58 + i * 0.025
        )
      })

      tl.fromTo(heroSub,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' },
        0.64
      )

      tl.fromTo(heroScroll,
        { opacity: 0 },
        { opacity: 1, duration: 0.04, ease: 'power2.out' },
        0.67
      )

    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section className="ctp-scene" ref={sectionRef}>
      {/* Layer 1: Terminal */}
      <div className="ctp-terminal">
        <div className="ctp-term-header">
          <div className="ctp-term-dots">
            <span /><span /><span />
          </div>
          <div className="ctp-term-title">portfolio.exe</div>
        </div>
        <div className="ctp-term-body">
          {codeLines.map((line, i) => (
            <div key={i} className={`ctp-code-line ${line.cls}`}>
              <span className="ctp-line-num">{String(i + 1).padStart(2, '0')}</span>
              {line.text}
              {i === codeLines.length - 1 && <span className="ctp-cursor" />}
            </div>
          ))}
          <div className="ctp-term-status">&gt; Initializing portfolio...</div>
          <div className="ctp-term-name">
            GINESH TANDEL<br />
            <span className="ctp-term-title-sub">Senior .NET Full-Stack Engineer</span>
          </div>
        </div>
      </div>

      {/* Layer 2: Compile overlay */}
      <div className="ctp-compile-overlay">
        <div className="ctp-scanlines" />
        <div className="ctp-compile-text">Compiling...</div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="ctp-particle" />
        ))}
      </div>

      {/* Layer 3: Wireframe */}
      <div className="ctp-wire-container">
        <svg className="ctp-wire-grid" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} className="ctp-wire-grid-line"
              x1="0" y1={i * 55 + 20} x2="800" y2={i * 55 + 20}
              stroke="rgba(94,234,212,0.06)" strokeWidth="1" />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`v${i}`} className="ctp-wire-grid-line"
              x1={i * 60 + 20} y1="0" x2={i * 60 + 20} y2="400"
              stroke="rgba(94,234,212,0.06)" strokeWidth="1" />
          ))}
        </svg>
        {wireframeCards.map((card, i) => (
          <div key={i} className="ctp-wire-card" style={{
            width: card.w, height: card.h, left: card.x, top: card.y,
          }} />
        ))}
        <div className="ctp-wire-label">WIREFRAME</div>
      </div>

      {/* Layer 4: UI Reveal */}
      <div className="ctp-ui-container">
        <div className="ctp-ui-mock">
          <div className="ctp-ui-topbar">
            <div className="ctp-ui-dots"><span /><span /><span /></div>
            <div className="ctp-ui-title">PRODUCT — DASHBOARD</div>
            <div className="ctp-ui-status">LIVE</div>
          </div>
          <div className="ctp-ui-body">
            <div className="ctp-ui-sidebar">
              {[100, 80, 90, 70, 85, 60].map((w, i) => (
                <div key={i} className="ctp-ui-nav-item" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="ctp-ui-main">
              <div className="ctp-ui-cards-row">
                {['LEADS', 'SEQUENCES', 'INBOX', 'ANALYTICS'].map((label, i) => (
                  <div key={i} className="ctp-ui-card">
                    <div className="ctp-ui-card-label">{label}</div>
                    <div className="ctp-ui-card-value">{[1248, 36, 89, 94][i]}</div>
                  </div>
                ))}
              </div>
              <div className="ctp-ui-chart">
                {[40, 65, 50, 80, 55, 70, 45, 60, 75, 50].map((h, i) => (
                  <div key={i} className="ctp-ui-chart-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 5: Hero */}
      <div className="ctp-hero">
        <div className="ctp-laptop">
          <div className="ctp-laptop-screen">
            <div className="ctp-laptop-ui">
              <div className="ctp-ui-nav-item" style={{ width: '60%' }} />
              <div className="ctp-ui-nav-item" style={{ width: '40%' }} />
            </div>
          </div>
          <div className="ctp-laptop-base" />
        </div>
        <div className="ctp-hero-text">
          <div className="ctp-hero-eyebrow">SENIOR .NET ENGINEER · SOFTWARE ARCHITECT · SAAS BUILDER</div>
          <h1 className="ctp-hero-headline">
            <span className="ctp-hero-line">I TURN IDEAS</span>
            <span className="ctp-hero-line">INTO SHIPPED PRODUCTS.</span>
          </h1>
          <p className="ctp-hero-sub">
            11+ years shipping production systems — from legacy modernization to SaaS products used by real businesses.
          </p>
          <span className="ctp-hero-scroll">SCROLL TO EXPLORE →</span>
        </div>
      </div>
    </section>
  )
}
