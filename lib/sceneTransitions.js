import gsap from 'gsap'
import { reducedMotion } from './reducedMotion'

export function initSceneTransitions() {
  if (reducedMotion) return

  document.querySelectorAll('.page > .divider').forEach(divider => {
    const prev = divider.previousElementSibling
    if (!prev) return

    gsap.set(divider, { '--seam': 0 })

    gsap.to(divider, {
      '--seam': 1,
      scrollTrigger: {
        trigger: divider,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 0.5,
      },
    })

    gsap.to(prev, {
      y: -12,
      opacity: 0.85,
      scale: 0.99,
      scrollTrigger: {
        trigger: divider,
        start: 'top 90%',
        end: 'top 40%',
        scrub: 0.5,
      },
    })
  })
}
