import { useState, useEffect, useCallback } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ColdOpen from './components/ColdOpen'
import CustomCursor from './components/CustomCursor'
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
import GoToTop from './components/GoToTop'
import { lenisRef } from './lenis'
import { initSceneTransitions } from './lib/sceneTransitions'
import './styles/global.css'

gsap.registerPlugin(ScrollTrigger)

function Divider() {
  return <div className="divider" />
}

const COLD_OPEN_KEY = 'cold-open-seen'

export default function App() {
  const [coldOpenDone, setColdOpenDone] = useState(() => sessionStorage.getItem(COLD_OPEN_KEY) === '1')

  const handleColdOpenComplete = useCallback(() => {
    sessionStorage.setItem(COLD_OPEN_KEY, '1')
    setColdOpenDone(true)
  }, [])

  useEffect(() => {
    if (!coldOpenDone) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    lenisRef.current = lenis

    const rafCallback = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    initSceneTransitions()

    return () => {
      lenis.off('scroll', ScrollTrigger.update)
      lenis.destroy()
      lenisRef.current = null
      gsap.ticker.remove(rafCallback)
    }
  }, [coldOpenDone])

  useEffect(() => {
    if (!coldOpenDone) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [coldOpenDone])

  return (
    <>
      <div className="page">
        {!coldOpenDone && <ColdOpen onComplete={handleColdOpenComplete} />}
        <CustomCursor />
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
        <Timeline />
        <Divider />
        <Business />
        <Divider />
        <Focus />
        <Divider />
        <CTA />
        <Divider />
        <Footer />
      </div>
      <GoToTop />
    </>
  )
}
