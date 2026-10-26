import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const companies = [
    {
      name: 'Walmart',
      svg: (
        <svg viewBox="0 0 150 34" className="h-7 sm:h-8 w-auto fill-current" aria-label="Walmart">
          <text
            x="0"
            y="25"
            fontFamily="'Montserrat', sans-serif"
            fontSize="26"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            Walmart
          </text>
          {/* Spark emblem */}
          <g transform="translate(130, 18)" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="0" y1="-10" x2="0" y2="-3" />
            <line x1="0" y1="3" x2="0" y2="10" />
            <line x1="-8.6" y1="-5" x2="-2.6" y2="-1.5" />
            <line x1="2.6" y1="1.5" x2="8.6" y2="5" />
            <line x1="-8.6" y1="5" x2="-2.6" y2="1.5" />
            <line x1="2.6" y1="-1.5" x2="8.6" y2="-5" />
          </g>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      svg: (
        <svg viewBox="0 0 135 34" className="h-7 sm:h-8 w-auto fill-current" aria-label="LinkedIn">
          <text
            x="0"
            y="24"
            fontFamily="'Montserrat', sans-serif"
            fontSize="24"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            Linked
          </text>
          <rect x="94" y="4" width="28" height="26" rx="5" fill="currentColor" />
          <text
            x="108"
            y="23"
            fontFamily="'Montserrat', sans-serif"
            fontSize="18"
            fontWeight="800"
            fill="#F8F6F0"
            textAnchor="middle"
          >
            in
          </text>
        </svg>
      ),
    },
    {
      name: 'Google',
      svg: (
        <svg viewBox="0 0 110 34" className="h-7 sm:h-8 w-auto fill-current" aria-label="Google">
          <text
            x="0"
            y="25"
            fontFamily="'Montserrat', sans-serif"
            fontSize="27"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            Google
          </text>
        </svg>
      ),
    },
    {
      name: 'Slack',
      svg: (
        <svg viewBox="0 0 115 34" className="h-7 sm:h-8 w-auto fill-current" aria-label="Slack">
          <g transform="translate(2, 5)">
            <rect x="0" y="8" width="6" height="12" rx="3" fill="currentColor" />
            <circle cx="3" cy="3" r="3" fill="currentColor" />
            <rect x="8" y="0" width="12" height="6" rx="3" fill="currentColor" />
            <circle cx="23" cy="3" r="3" fill="currentColor" />
          </g>
          <text
            x="36"
            y="25"
            fontFamily="'Montserrat', sans-serif"
            fontSize="26"
            fontWeight="800"
            letterSpacing="-0.03em"
          >
            slack
          </text>
        </svg>
      ),
    },
    {
      name: 'Amazon',
      svg: (
        <svg viewBox="0 0 115 36" className="h-7 sm:h-8 w-auto fill-current" aria-label="Amazon">
          <text
            x="0"
            y="22"
            fontFamily="'Montserrat', sans-serif"
            fontSize="24"
            fontWeight="700"
            letterSpacing="-0.02em"
          >
            amazon
          </text>
          <path
            d="M 12 28 Q 45 38 78 28"
            stroke="currentColor"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="76,26 84,28 78,33" fill="currentColor" />
        </svg>
      ),
    },
  ]

  // Duplicate for seamless 50% infinite translation
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies]

  const stats = [
    {
      value: '8+',
      label: 'Years Of Experience',
      highlight: '+',
    },
    {
      value: '1k+',
      label: 'Completed Projects',
      highlight: '+',
    },
    {
      value: '90%+',
      label: 'Client Satisfactions',
      highlight: '%+',
    },
  ]

  return (
    <section id="about" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden select-none">
      {/* Subtle modern ambient background glow */}
      <div 
        className="pointer-events-none absolute -top-40 right-1/4 w-[520px] h-[520px] bg-[#FF6634]/5 rounded-full blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* ================= TOP: COMPANY I WORKED WITH (SMOOTH INFINITE AUTO SLIDE) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Eyebrow Label */}
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/[0.03] border border-neutral-900/10 mb-6 sm:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6634]" />
            <h3 className="font-title text-[11px] sm:text-xs font-bold tracking-[0.24em] text-neutral-600 uppercase">
              COMPANY I WORKED WITH
            </h3>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6634]" />
          </div>

          {/* Smooth Infinity Auto-Slide Carousel with Gradient Fade Edges */}
          <div className="relative w-full overflow-hidden mask-marquee py-2">
            <div className="logo-slide-track">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="mx-4 sm:mx-8 md:mx-12 shrink-0 transition-all duration-300 text-neutral-400 hover:text-neutral-950 hover:scale-105 cursor-pointer opacity-75 hover:opacity-100 flex items-center justify-center"
                >
                  {company.svg}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= MIDDLE & BOTTOM: 2-COLUMN STRUCTURE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 xl:col-span-3 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-neutral-200/80 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6634] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6634]" />
              </span>
              <h2 className="font-title font-extrabold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                About Me
              </h2>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraph & Modern Stat Cards */}
          <div className="lg:col-span-9 xl:col-span-9 flex flex-col">
            
            {/* Bio Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-body text-base sm:text-lg md:text-xl font-normal leading-[1.65] text-neutral-800 tracking-[-0.01em]">
                I am <span className="text-neutral-950 font-bold border-b-2 border-[#FF6634]/30 pb-0.5">Labeeba</span>, a seasoned Digital Marketing Specialist with over 8 years of experience in crafting intuitive and engaging digital experiences. My journey began with a background in creative storytelling and brand strategy, where I discovered my passion for understanding consumer behavior and translating it into seamless, high-converting digital interactions.
              </p>
            </motion.div>

            {/* Bottom Stats: Modern interactive cards with Montserrat numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-neutral-300/60">
              {stats.map((stat, idx) => {
                const numericPart = stat.value.replace(stat.highlight, '')
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px', amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.12 * idx, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative bg-white/70 backdrop-blur-sm border border-neutral-200/90 hover:border-[#FF6634]/40 rounded-xl p-4 sm:p-5 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-6px_rgba(255,102,52,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-default"
                  >
                    <div className="flex items-baseline">
                      <span className="font-title font-black text-3xl sm:text-4xl text-neutral-950 tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block origin-left">
                        {numericPart}
                      </span>
                      <span className="font-title font-black text-2xl sm:text-3xl text-[#FF6634] ml-0.5">
                        {stat.highlight}
                      </span>
                    </div>
                    <span className="font-body text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-500 uppercase mt-2 leading-snug">
                      {stat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
