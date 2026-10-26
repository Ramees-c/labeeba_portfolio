import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    let ticking = false

    const updateNavbar = () => {
      setScrolled(window.scrollY > 15)

      // Active section spy on scroll
      const sections = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'services', name: 'Services' },
        { id: 'works', name: 'Works' },
        { id: 'contact', name: 'Contact' },
      ]

      const scrollPos = window.scrollY + 160
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveLink(sections[i].name)
          break
        }
      }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar)
        ticking = true
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    updateNavbar()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href, name) => {
    e.preventDefault()
    setActiveLink(name)
    setMobileMenuOpen(false)

    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      if (window.__lenis) {
        window.__lenis.scrollTo(targetEl, {
          offset: -75,
          duration: 1.2,
        })
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth' })
      }
      if (window.history.pushState) {
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F7F2]/90 backdrop-blur-md py-4 shadow-sm border-b border-neutral-200/50'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Brand Logo: LABEEBA. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'Home')}
          className="font-display font-black text-2xl tracking-tight text-neutral-950 flex items-baseline select-none"
        >
          <span>LABEEBA</span>
          <span className="text-[#FF6634] text-3xl leading-none">.</span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={`relative text-[13px] font-medium tracking-normal transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-neutral-950 font-bold'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6634] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Button: Contact Me */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenContact}
            className="bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
          >
            Contact Me
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenContact}
            className="bg-neutral-950 text-white text-[11px] sm:text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-full active:scale-95 transition-transform"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-1.5 rounded-lg text-neutral-900 hover:bg-neutral-200/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 top-[62px] bg-black/25 backdrop-blur-[2px] z-40"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden relative z-50 bg-[#F8F6F0]/98 backdrop-blur-xl border-b border-neutral-200 px-6 py-5 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.name)}
                    className={`text-base font-semibold py-2 border-b border-neutral-200/40 flex items-center justify-between ${
                      activeLink === link.name ? 'text-[#FF6634]' : 'text-neutral-800'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenContact()
                    }}
                    className="w-full bg-[#FF6634] text-white py-2.5 rounded-full font-bold text-sm text-center shadow-md active:scale-98 transition-all"
                  >
                    Let's Work Together →
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
