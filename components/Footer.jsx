import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-name">Ginesh Tandel</div>
        <div className="footer-title">Senior .NET Full-Stack Engineer</div>
      </div>
      <div className="footer-links">
        <a href="mailto:hello@ginesh.dev">hello@ginesh.dev</a>
        <a href="https://github.com/gineshtandel" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)">GITHUB</a>
        <a href="https://linkedin.com/in/gineshtandel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)">LINKEDIN</a>
      </div>
    </footer>
  )
}
