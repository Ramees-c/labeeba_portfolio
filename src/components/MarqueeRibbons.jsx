import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function MarqueeRibbons() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Spring-smoothed scroll-driven opposing drift (natural inertia with zero jitter)
  const rawTopShift = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const rawBottomShift = useTransform(scrollYProgress, [0, 1], [40, -40])

  const topScrollShift = useSpring(rawTopShift, { stiffness: 90, damping: 28 })
  const bottomScrollShift = useSpring(rawBottomShift, { stiffness: 90, damping: 28 })

  const topItems = [
    'Digital Marketing',
    'Search Engine Optimization',
    'Meta Ads Campaigns',
    'Social Media Marketing',
    'Web Development',
    'Google Ads & SEM',
    'Lead Generation',
    'E-commerce Marketing',
    'Poster Design',
  ]

  const bottomItems = [
    'Meta Pixel Tracking',
    'AI Video Creation',
    'On-Page & Off-Page SEO',
    'Social Media Management',
    'Audience Growth',
    'Conversion Tracking',
    'Keyword Research',
    'Content Optimization',
  ]

  // Quadruple items for seamless 50% infinite translation loop
  const fullTopTrack = [...topItems, ...topItems, ...topItems, ...topItems]
  const fullBottomTrack = [...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems]

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 select-none z-10 -mt-6 sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16 isolate"
    >
      {/* Parallel Angled Ribbons Wrapper with in-view entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[116%] -left-[8%] flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 transform-gpu"
        style={{ transform: 'rotate(-2deg)', WebkitTransform: 'rotate(-2deg)' }}
      >
        {/* Top Ribbon (Sunflower Yellow) - Scrolls Left + Spring Scroll Drift */}
        <motion.div
          style={{ x: topScrollShift }}
          className="relative group w-full bg-[#FFCD38] py-3.5 sm:py-4 flex overflow-hidden border-y border-neutral-950/15 shadow-[0_10px_26px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.06)] will-change-transform cursor-pointer transition-all duration-300 hover:shadow-[0_14px_32px_rgba(255,205,56,0.45)] hover:scale-[1.008]"
        >
          {/* Animated Light Sweep Sheen */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-ribbon-shimmer" />
          </div>

          <div className="marquee-track-left flex items-center whitespace-nowrap shrink-0 relative z-10">
            {fullTopTrack.map((item, idx) => (
              <div
                key={`yellow-${idx}`}
                className="flex items-center shrink-0 whitespace-nowrap group/item py-1"
              >
                <span className="font-display font-black text-neutral-950 uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight px-4 sm:px-6 md:px-7 py-1 rounded-full transition-all duration-200 group-hover/item:scale-105 group-hover/item:bg-neutral-950/10 inline-block">
                  {item}
                </span>
                <span
                  className="text-neutral-950 text-xs sm:text-sm md:text-base font-black shrink-0 px-2 opacity-85 transition-all duration-300 group-hover/item:scale-135 group-hover/item:text-neutral-950"
                  aria-hidden="true"
                >
                  <span className="animate-spin-slow">✦</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Ribbon (Fresh Spring Green) - Scrolls Right + Spring Scroll Drift */}
        <motion.div
          style={{ x: bottomScrollShift }}
          className="relative group w-full bg-[#85E26E] py-3.5 sm:py-4 flex overflow-hidden border-y border-neutral-950/15 shadow-[0_10px_26px_rgba(0,0,0,0.09),0_2px_6px_rgba(0,0,0,0.04)] will-change-transform cursor-pointer transition-all duration-300 hover:shadow-[0_14px_32px_rgba(133,226,110,0.45)] hover:scale-[1.008]"
        >
          {/* Animated Light Sweep Sheen (offset delay) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            <div
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-ribbon-shimmer"
              style={{ animationDelay: '3.5s' }}
            />
          </div>

          <div className="marquee-track-right flex items-center whitespace-nowrap shrink-0 relative z-10">
            {fullBottomTrack.map((item, idx) => (
              <div
                key={`green-${idx}`}
                className="flex items-center shrink-0 whitespace-nowrap group/item py-1"
              >
                <span className="font-display font-black text-neutral-950 uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight px-4 sm:px-6 md:px-7 py-1 rounded-full transition-all duration-200 group-hover/item:scale-105 group-hover/item:bg-neutral-950/10 inline-block">
                  {item}
                </span>
                <span
                  className="text-neutral-950 text-xs sm:text-sm md:text-base font-black shrink-0 px-2 opacity-85 transition-all duration-300 group-hover/item:scale-135 group-hover/item:text-neutral-950"
                  aria-hidden="true"
                >
                  <span className="animate-spin-slow" style={{ animationDirection: 'reverse' }}>✦</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
