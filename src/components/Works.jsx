import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

export default function Works() {
  const projects = [
    {
      id: 'proj-1',
      title: 'LuxeVibe GCC — E-Commerce Fashion',
      category: 'Paid Ads (PPC)',
      tag: 'E-Commerce Scaling',
      client: 'LuxeVibe Apparel · Dubai, UAE',
      image: '/projects/luxevibe.jpg',
      heroMetric: '+380%',
      heroMetricLabel: 'ROAS Surge',
      description:
        'Engineered an omnichannel performance funnel across Meta Ads, Google Performance Max, and TikTok Shop, scaling revenue while reducing cost per purchase.',
      deliverables: ['Meta Ads Funnels', 'Google PMax', 'UGC Creatives'],
      badgeBg: 'bg-white/95 text-[#FF6634] border-white/60 shadow-xs',
    },
    {
      id: 'proj-2',
      title: 'Nexara Pay — Enterprise FinTech',
      category: 'SEO & Search',
      tag: 'Organic Lead Gen',
      client: 'Nexara Global FinTech · DIFC Dubai',
      image: '/projects/nexara.jpg',
      heroMetric: '#1 Rank',
      heroMetricLabel: 'For 60+ Target Keywords',
      description:
        'Architected a topical authority content network and executed technical SEO enhancements, dominating page one search rankings across Middle East & Europe.',
      deliverables: ['Technical SEO Audit', 'Cluster Architecture', 'Digital PR'],
      badgeBg: 'bg-white/95 text-[#1e6a10] border-white/60 shadow-xs',
    },
    {
      id: 'proj-3',
      title: 'Aura Botanicals — DTC Skincare',
      category: 'Social & Growth',
      tag: 'Viral Community',
      client: 'Aura Skincare Labs · Dubai & Riyadh',
      image: '/projects/aura.jpg',
      heroMetric: '3.8M+',
      heroMetricLabel: 'Organic Reel Impressions',
      description:
        'Devised and rolled out a creator-led viral marketing campaign across TikTok and Instagram, generating 3 consecutive sold-out product drops in the UAE.',
      deliverables: ['Micro-Creator Strategy', 'Viral Video Hooks', 'Drip Funnels'],
      badgeBg: 'bg-white/95 text-[#926000] border-white/60 shadow-xs',
    },
    {
      id: 'proj-4',
      title: 'Oasis Wellness Clinics — Healthcare',
      category: 'Paid Ads (PPC)',
      tag: 'Lead Gen & CRO',
      client: 'Oasis Medical Care · Abu Dhabi & Dubai',
      image: '/projects/oasis.jpg',
      heroMetric: '+72%',
      heroMetricLabel: 'Consultation Booking Rate',
      description:
        'Redesigned appointment booking funnels and deployed precision geolocated Google Search & Meta Lead Ads for premier aesthetic clinics in Dubai & Abu Dhabi.',
      deliverables: ['Mobile Booking CRO', 'Local Search Ads', 'WhatsApp Automation'],
      badgeBg: 'bg-white/95 text-[#FF6634] border-white/60 shadow-xs',
    },
  ]

  return (
    <section id="works" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden select-none bg-[#F9F7F2]">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 right-1/4 w-[480px] h-[480px] bg-[#FFCD38]/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/4 w-[480px] h-[480px] bg-[#FF6634]/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-neutral-200/80 shadow-xs mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6634] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6634]" />
              </span>
              <h2 className="font-title font-extrabold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Selected Works
              </h2>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-neutral-950 tracking-tight uppercase leading-[1.1]">
              FEATURED CLIENT CASE STUDIES &{' '}
              <span className="text-[#FF6634] underline decoration-neutral-900/10 decoration-wavy decoration-2">
                PROVEN RESULTS
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed"
          >
            Real campaigns, verified revenue growth, and scalable marketing architectures executed across the UAE and global markets.
          </motion.p>
        </div>

        {/* Projects Grid with Rich Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/85 hover:border-neutral-300 p-4 sm:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl mb-5 sm:mb-6 bg-neutral-100 border border-neutral-200/60 shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    width="600"
                    height="375"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle top/bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md ${project.badgeBg}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Interactive Floating Arrow */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md text-neutral-900 flex items-center justify-center shadow-md group-hover:bg-[#FF6634] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                  </div>

                  {/* Floating Client Pill */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                    <span className="text-[11px] font-semibold text-white/95 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-2xs">
                      {project.client}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="font-title font-extrabold text-xl sm:text-2xl text-neutral-950 mb-2.5 leading-snug group-hover:text-[#FF6634] transition-colors duration-200">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="font-body text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-6 sm:mb-7">
                  {project.description}
                </p>
              </div>

              {/* Bottom Row: Key Metric & Deliverables */}
              <div className="pt-4 sm:pt-5 border-t border-neutral-100 flex items-center justify-between gap-4">
                <div>
                  <span className="font-display font-black text-2xl sm:text-3xl text-neutral-950 tracking-tight block leading-none">
                    {project.heroMetric}
                  </span>
                  <span className="font-title text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mt-1.5">
                    {project.heroMetricLabel}
                  </span>
                </div>

                {/* Deliverables Chip List */}
                <div className="hidden sm:flex items-center gap-1.5 flex-wrap justify-end">
                  {project.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="font-body text-[11px] font-medium px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
