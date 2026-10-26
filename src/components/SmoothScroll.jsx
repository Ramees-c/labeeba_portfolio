import React, { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export const LenisContext = createContext(null)

export const useLenis = () => useContext(LenisContext)

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll engine with stable, fluid momentum
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      syncTouch: false, // Preserve native 120Hz touch momentum on mobile devices
      infinite: false,
    })

    lenisRef.current = lenis
    window.__lenis = lenis

    // Animation frame loop with visibility change optimization
    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(raf)
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Smooth scroll handler for all hash anchors (#home, #about, #services, #works, #contact)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#')) {
        const targetId = href.slice(1)
        if (!targetId || targetId === '' || targetId === 'top') {
          e.preventDefault()
          lenis.scrollTo(0, { duration: 1.3, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
          return
        }

        const targetEl = document.getElementById(targetId)
        if (targetEl) {
          e.preventDefault()
          lenis.scrollTo(targetEl, {
            offset: -75, // Navbar compensation
            duration: 1.3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })

          // Maintain URL hash state cleanly without page jumping
          if (window.history.pushState) {
            window.history.pushState(null, '', `#${targetId}`)
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
      lenisRef.current = null
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}
