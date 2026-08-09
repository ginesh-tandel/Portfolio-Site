import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-scene" id="contact">
      <div className="scene-label">LET'S BUILD</div>
      <div className="cta-headline">
        <h2>WHAT SHOULD</h2>
        <h2>WE BUILD NEXT?</h2>
      </div>
      <p className="cta-subtext">Available for selected remote engineering, consulting, and product engagements.</p>
      <div className="cta-buttons">
        <button className="cta-primary" onClick={() => window.location.href='mailto:hello@ginesh.dev'}>START A CONVERSATION →</button>
        <button className="cta-secondary" onClick={() => window.open('https://github.com/gineshtandel','_blank')}>VIEW GITHUB →</button>
      </div>
    </section>
  )
}
