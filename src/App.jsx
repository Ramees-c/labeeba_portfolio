import React from 'react'
import SmoothScroll from './components/SmoothScroll'
import MinimalLoader from './components/MinimalLoader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  const handleContact = () => {
    window.open('https://wa.me/918606268275', '_blank', 'noopener,noreferrer')
  }

  return (
    <SmoothScroll>
      <MinimalLoader />
      <div className="min-h-screen bg-[#F8F6F0] text-[#141416] font-body flex flex-col justify-between selection:bg-[#FF6634] selection:text-white relative">
        {/* Navbar Header */}
        <Navbar onOpenContact={handleContact} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">
          {/* Hero Section (Includes Portrait & Dual Marquee Ribbons) */}
          <Hero
            onOpenProcess={handleContact}
            onOpenContact={handleContact}
          />

          {/* About Section */}
          <About />

          {/* Services Section */}
          <Services />

          {/* Selected Works Section */}
          <Works />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App

