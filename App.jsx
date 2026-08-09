import { useState, useEffect, useCallback } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ColdOpen from './components/ColdOpen'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import CodeToProductScene from './components/CodeToProductScene'
import ProjectsScene from './components/ProjectsScene'
import SkillsScene from './components/SkillsScene'
import TimelineScene from './components/TimelineScene'
import CTA from './components/CTA'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import { lenisRef } from './lenis'
import { initSceneTransitions } from './lib/sceneTransitions'
import './styles/global.css'

gsap.registerPlugin(ScrollTrigger)

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
        <CodeToProductScene />
        <ProjectsScene />
        <SkillsScene />
        <TimelineScene />
        <CTA />
        <Footer />
      </div>
      <GoToTop />
    </>
  )
}
