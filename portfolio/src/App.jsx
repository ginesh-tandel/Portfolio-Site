import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CodeTeaser from './components/CodeTeaser'
import Architecture from './components/Architecture'
import SystemScene from './components/SystemScene'
import Products from './components/Products'
import Engineering from './components/Engineering'
import ProblemSolving from './components/ProblemSolving'
import Business from './components/Business'
import Timeline from './components/Timeline'
import Focus from './components/Focus'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './styles/global.css'

function Divider() {
  return <div className="divider" />
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section, .case-study, .product-mock-ll, .additional-item-inner, .timeline-item-inner, .problem-item, .layer-row, .focus-item, .products-header').forEach((el) => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useReveal()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="page">
      <Nav />
      <Hero />
      <Divider />
      <CodeTeaser />
      <Divider />
      <Architecture />
      <Divider />
      <SystemScene />
      <Divider />
      <Products />
      <Divider />
      <Engineering />
      <Divider />
      <ProblemSolving />
      <Divider />
      <Business />
      <Divider />
      <Timeline />
      <Divider />
      <Focus />
      <Divider />
      <CTA />
      <Divider />
      <Footer />
    </div>
  )
}
