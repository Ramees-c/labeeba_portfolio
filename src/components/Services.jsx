import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Target,
  Share2,
  PenTool,
  BarChart3,
  Compass,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export default function Services() {
  const [activeCard, setActiveCard] = useState(null)

  const services = [
    {
      id: '01',
      title: 'Search Engine Optimization',
      category: 'Organic Growth',
      tagline: 'Top 1% Google rankings & sustained organic pipeline',
      description:
        'Transform your organic presence into your highest-converting acquisition engine. Comprehensive technical audits, high-intent keyword architectures, and elite link acquisition.',
      metric: '+280%',
      metricLabel: 'Avg Organic Traffic Surge',
      badgeColor: 'bg-[#85E26E]/15 text-[#2e7d18] border-[#85E26E]/30',
      accentColor: '#85E26E',
      icon: TrendingUp,
      deliverables: [
        'Technical Site & Core Web Vitals Optimization',
        'High-Intent Keyword Intelligence & Clusters',
        'Topical Authority Architecture',
        'High-DR Strategic Backlink Acquisition',
      ],
    },
    {
      id: '02',
      title: 'Paid Media & PPC Advertising',
      category: 'Performance Marketing',
      tagline: 'Hyper-targeted ad funnels engineered for maximum ROAS',
      description:
        'Stop burning budget on unoptimized clicks. I construct multi-tier Google Search, Performance Max, and Meta ad ecosystems engineered for high-intent customer acquisition.',
      metric: '4.8x',
      metricLabel: 'Average Campaign ROAS',
      badgeColor: 'bg-[#FF6634]/15 text-[#FF6634] border-[#FF6634]/30',
      accentColor: '#FF6634',
      icon: Target,
      deliverables: [
        'Google Ads & Performance Max Setup',
        'Meta (Instagram & Facebook) Funnels',
        'Dynamic Retargeting & Custom Audiences',
        'Ad Creative A/B Testing & Copy Frameworks',
      ],
    },
    {
      id: '03',
      title: 'Social Media Growth & Branding',
      category: 'Brand Authority',
      tagline: 'Viral reach, loyal communities & magnetic content',
      description:
        'Scale brand authority across Instagram, LinkedIn, and TikTok. Combining data-driven viral trends with high-aesthetic storytelling that builds unshakeable brand equity.',
      metric: '500K+',
      metricLabel: 'Direct Social Engagements',
      badgeColor: 'bg-[#FFCD38]/20 text-[#a06800] border-[#FFCD38]/40',
      accentColor: '#FFCD38',
      icon: Share2,
      deliverables: [
        'Short-Form Video (Reels & Shorts) Strategy',
        'Brand Narrative & Visual Styling',
        'Creator & Influencer Partnership Management',
        'Community Engagement & Lead Generation',
      ],
    },
    {
      id: '04',
      title: 'Conversion Copy & Funnel Content',
      category: 'Content Marketing',
      tagline: 'Words that captivate minds and command action',
      description:
        'Persuasive, high-converting copy that addresses consumer friction points. From high-converting landing pages to email nurture sequences that convert cold traffic into loyal advocates.',
      metric: '34%',
      metricLabel: 'Average Email Open Rate',
      badgeColor: 'bg-[#FF6634]/15 text-[#FF6634] border-[#FF6634]/30',
      accentColor: '#FF6634',
      icon: PenTool,
      deliverables: [
        'High-Converting Landing Page Sales Copy',
        'Automated Welcome & Abandonment Drips',
        'Authority Blog Articles & Whitepapers',
        'Value Proposition & Brand Positioning Tone',
      ],
    },
    {
      id: '05',
      title: 'Conversion Rate Optimization (CRO)',
      category: 'Data Analytics',
      tagline: 'Turn existing web visitors into paying customers',
      description:
        'Eliminate funnel friction points. We analyze user sessions, heatmaps, and drop-off analytics to conduct systematic split tests that maximize revenue per session.',
      metric: '+64%',
      metricLabel: 'Checkout Conversion Lift',
      badgeColor: 'bg-[#85E26E]/15 text-[#2e7d18] border-[#85E26E]/30',
      accentColor: '#85E26E',
      icon: BarChart3,
      deliverables: [
        'User Heatmaps & Session Recording Audits',
        'A/B Multivariate Split Testing',
        'Checkout & Inquiry Form Friction Removal',
        'GA4 & Server-Side Event Tracking',
      ],
    },
    {
      id: '06',
      title: 'Omnichannel Brand Scaling Strategy',
      category: 'Strategic Advisory',
      tagline: 'Comprehensive blueprints for enterprise market leadership',
      description:
        'Holistic digital roadmaps that unify all growth channels. Ideal for venture-backed startups and growing brands in the UAE & international markets ready to scale predictably.',
      metric: '100+',
      metricLabel: 'Brands Successfully Scaled',
      badgeColor: 'bg-[#FFCD38]/20 text-[#a06800] border-[#FFCD38]/40',
      accentColor: '#FFCD38',
      icon: Compass,
      deliverables: [
        'Market & Competitor Vulnerability Analysis',
        'Omnichannel Customer Journey Architecture',
        'Customer Acquisition Cost (CAC) Optimization',
        'Quarterly Growth Sprint Roadmaps',
      ],
    },
  ]

  return (
    <section id="services" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden select-none bg-[#F9F7F2]">
      {/* Ambient background glows matching brand palette */}
      <div
        className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 bg-[#FF6634]/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/3 -right-48 w-96 h-96 bg-[#FFCD38]/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-neutral-200/80 shadow-xs mb-5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6634] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6634]" />
              </span>
              <h2 className="font-title font-extrabold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                Services
              </h2>
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-neutral-950 tracking-tight uppercase leading-[1.1]">
              HIGH-IMPACT STRATEGIES TAILORED FOR{' '}
              <span className="text-[#FF6634] underline decoration-neutral-900/10 decoration-wavy decoration-2">
                MEASURABLE ROI
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed"
          >
            Every campaign is precision-engineered using verified behavioral data, aggressive audience testing, and bespoke funnel architecture designed to outperform competitors.
          </motion.p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = activeCard === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative bg-white/85 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-neutral-200/80 hover:border-[#FF6634]/50 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(255,102,52,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Bar: Icon, Number, & Metric Pill */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-neutral-100/90 group-hover:bg-[#FF6634] transition-colors duration-300 flex items-center justify-center text-neutral-800 group-hover:text-white shadow-xs">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="font-title text-xs font-black tracking-widest text-neutral-400 uppercase">
                        {service.id}
                      </span>
                    </div>

                    <div className={`px-2.5 py-1 rounded-full border text-[11px] font-bold tracking-tight ${service.badgeColor}`}>
                      {service.category}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-title font-extrabold text-xl text-neutral-950 group-hover:text-[#FF6634] transition-colors duration-200 mb-2 leading-snug">
                    {service.title}
                  </h4>

                  {/* Tagline / Subtitle */}
                  <p className="font-body text-xs font-semibold text-neutral-500 mb-3.5 tracking-tight">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Metric Box */}
                  <div className="bg-[#F9F7F2] rounded-xl p-3.5 mb-6 border border-neutral-200/60 flex items-center justify-between">
                    <div>
                      <span className="font-title font-black text-2xl text-neutral-950 tracking-tight block leading-none">
                        {service.metric}
                      </span>
                      <span className="font-body text-[11px] font-medium text-neutral-500 uppercase tracking-wider mt-1 block">
                        {service.metricLabel}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF6634] shadow-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2">
                    <span className="font-title text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-1.5">
                      Included Deliverables
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6634] shrink-0 mt-0.5" />
                        <span className="font-body text-xs text-neutral-700 leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

