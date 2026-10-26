import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import MarqueeRibbons from './MarqueeRibbons'

export default function Hero({ onOpenProcess, onOpenContact }) {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-0 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Giant Headline: YOUR DIGITAL MARKETING EXPERT */}
        <div className="relative text-center z-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-neutral-950 uppercase tracking-[-0.03em] leading-[0.93] text-[25px] min-[360px]:text-[28px] sm:text-[46px] md:text-[60px] lg:text-[76px] xl:text-[88px]"
          >
            <span className="block">YOUR DIGITAL</span>
            <span className="block tracking-tight text-neutral-950">
              MARKETING EXPERT
            </span>
          </motion.h1>
        </div>

        {/* 3-Column Section on Desktop / Center Portrait on Mobile */}
        <div className="relative -mt-3 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 z-20 grid grid-cols-1 lg:grid-cols-12 items-center lg:items-center">

          {/* ================= LEFT COLUMN (Desktop only) ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-3 w-full flex-col items-start text-left pb-8 lg:pb-12 order-1"
          >
            {/* 100% Stat */}
            <div className="mb-6 lg:mb-10">
              <span className="font-display font-black text-5xl lg:text-[60px] text-neutral-950 tracking-tight block leading-none">
                100%
              </span>
              <p className="mt-2.5 text-xs lg:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[210px]">
                Client Satisfaction Globally I have worked with those clients. Always I give my best.
              </p>
            </div>
          </motion.div>

          {/* ================= CENTER COLUMN: LABEEBA IMAGE (Mobile & Desktop) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex justify-center items-end relative z-20 w-full order-1 lg:order-2"
          >
            {/* Subtle Warm Ambient Glow */}
            <div className="absolute bottom-6 w-[240px] sm:w-[340px] md:w-[400px] h-[340px] bg-gradient-to-t from-[#FF6634]/10 via-[#FFCD38]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Unclipped Natural Subject Container */}
            <div className="relative flex justify-center items-end">
              <img
                src="/labeeba_hero.png"
                alt="Labeeba - Digital Marketing Expert"
                width="500"
                height="610"
                fetchpriority="high"
                decoding="async"
                className="h-[320px] min-[360px]:h-[370px] sm:h-[450px] md:h-[510px] lg:h-[570px] xl:h-[610px] w-auto max-w-[90vw] sm:max-w-[85vw] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(20,20,22,0.15)] select-none pointer-events-none filter contrast-[1.03] [mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_95%,transparent_100%)]"
                loading="eager"
              />
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: BIO & CTA (Desktop only) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-3 w-full flex-col items-start text-left pb-8 lg:pb-12 order-3"
          >
            {/* Bio Paragraph */}
            <div className="mb-6 lg:mb-8">
              <p className="text-xs lg:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[220px]">
                I'm a Digital Marketer based in Dubai, UAE. Providing the best digital marketing services to help your brand to grow.
              </p>
            </div>

            {/* Let's Work CTA Button */}
            <div className="mb-6 lg:mb-8">
              <button
                onClick={onOpenContact || (() => {
                  window.location.href = '#contact'
                })}
                className="group inline-flex items-center gap-2.5 bg-[#FF6634] hover:bg-[#FF551E] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-[0_8px_20px_-4px_rgba(255,102,52,0.35)] hover:shadow-[0_12px_24px_-4px_rgba(255,102,52,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer select-none"
              >
                <span>Let's Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= DUAL ANGLED MARQUEE RIBBONS (Full width, layered behind portrait) ================= */}
      <div className="relative z-10 w-full">
        <MarqueeRibbons />
      </div>

      {/* ================= MOBILE & TABLET BOTTOM BLOCK: STATS & BIO CTA (Under Ribbons) ================= */}
      <div className="lg:hidden max-w-[1280px] mx-auto px-4 sm:px-6 pt-2 pb-10 flex flex-col sm:flex-row sm:justify-center sm:items-start items-center text-center sm:text-left gap-6 sm:gap-12 md:gap-16 select-none relative z-20">
        {/* 100% Stat */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center sm:items-start"
        >
          <span className="font-display font-black text-4xl sm:text-5xl text-neutral-950 tracking-tight block leading-none">
            100%
          </span>
          <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[260px]">
            Client Satisfaction Globally I have worked with those clients. Always I give my best.
          </p>
        </motion.div>

        {/* Bio Paragraph & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center sm:items-start"
        >
          <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[260px] mb-5">
            I'm a Digital Marketer based in Dubai, UAE. Providing the best digital marketing services to help your brand to grow.
          </p>
          <button
            onClick={onOpenContact || (() => {
              window.location.href = '#contact'
            })}
            className="group inline-flex items-center gap-2.5 bg-[#FF6634] hover:bg-[#FF551E] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-[0_8px_20px_-4px_rgba(255,102,52,0.35)] hover:shadow-[0_12px_24px_-4px_rgba(255,102,52,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <span>Let's Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
