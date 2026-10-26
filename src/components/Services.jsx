import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  TrendingUp,
  Share2,
  CheckCircle2,
  Sparkles,
  MousePointerClick,
  Palette,
  ShoppingCart,
} from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glow1Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const services = [
    {
      id: "01",
      title: "Search Engine Optimization",
      category: "Organic Growth",
      tagline: "Improve rankings & grow organic visibility",
      description:
        "Improve search engine visibility through strategic keyword research, on-page and off-page SEO, and content optimization. Focus on achieving higher Google rankings and sustainable organic growth.",
      metric: "Top 3",
      metricLabel: "Google Search Ranking Achieved",
      badgeColor: "bg-[#85E26E]/15 text-[#2e7d18] border-[#85E26E]/30",
      accentColor: "#85E26E",
      icon: TrendingUp,
      deliverables: [
        "Keyword Research & Competitor Analysis",
        "On-Page SEO Optimization",
        "Off-Page SEO & Link Building",
        "Content Optimization",
        "Google Search Console Monitoring",
      ],
    },
    {
      id: "02",
      title: "Social Media Marketing",
      category: "Social & Growth",
      tagline: "Build brand awareness & engage the right audience",
      description:
        "Build a strong social media presence through strategic content planning, consistent page management, and engaging promotional campaigns. Help brands strengthen their online identity, connect with their target audience, and grow across platforms like Instagram and Facebook.",
      metric: "15+",
      metricLabel: "Clients Across Brands & Industries",
      badgeColor: "bg-[#38BDF8]/15 text-[#0369a1] border-[#38BDF8]/30",
      accentColor: "#38BDF8",
      icon: Share2,
      deliverables: [
        "Social Media Strategy & Content Planning",
        "Instagram & Facebook Page Management",
        "Content Calendar & Post Scheduling",
        "Promotional Post & Creative Design",
        "Audience Engagement & Performance Tracking",
      ],
    },
    {
      id: "03",
      title: "Google Ads & SEM",
      category: "Paid Search",
      tagline: "Connect with customers actively searching for your services",
      description:
        "Create targeted Google Ads campaigns to help businesses reach potential customers at the right moment. Focus on keyword targeting, compelling ad copy, campaign optimization, and conversion tracking to improve visibility, attract relevant traffic, and support business growth.",
      metric: "Search Ads",
      metricLabel: "Campaign Setup & Optimization",
      badgeColor: "bg-[#FACC15]/15 text-[#854d0e] border-[#FACC15]/30",
      accentColor: "#FACC15",
      icon: MousePointerClick,
      deliverables: [
        "Google Search Ads Campaign Setup",
        "Keyword Research & Targeting",
        "Ad Copy Creation & Optimization",
        "Campaign Budget & Bid Optimization",
        "Conversion Tracking & Performance Reporting",
      ],
    },
    {
      id: "04",
      title: "Poster Design & AI Video Creation",
      category: "Creative Production",
      tagline: "Create eye-catching posters & AI-powered videos",
      description:
        "Create visually engaging promotional posters and AI-generated videos for brands, products, and digital marketing campaigns. Combine creative design, AI-powered video production, and compelling visual storytelling to help businesses promote their offerings and capture audience attention across digital platforms.",
      metric: "Multi-Format",
      metricLabel: "Poster Design & AI Video Production",
      badgeColor: "bg-[#FB7185]/15 text-[#be123c] border-[#FB7185]/30",
      accentColor: "#FB7185",
      icon: Palette,
      deliverables: [
        "Social Media Posters",
        "AI-Generated Videos",
        "Creative Design Using Canva & Photoshop",
        "AI Video Production Using Google Flow & Kling AI",
      ],
    },
    {
      id: "05",
      title: "E-commerce Marketing",
      category: "Online Sales Growth",
      tagline: "Turn product visibility into online sales",
      description:
        "Help e-commerce businesses promote products, reach relevant audiences, and increase online sales through strategic digital marketing campaigns. Combine paid advertising, Meta Pixel tracking, promotional creatives, audience targeting, and conversion monitoring to measure campaign performance, understand customer behavior, and support online sales growth.",
      metric: "Sales-Focused",
      metricLabel: "E-commerce & Conversion Tracking",
      badgeColor: "bg-[#F97316]/15 text-[#c2410c] border-[#F97316]/30",
      accentColor: "#F97316",
      icon: ShoppingCart,
      deliverables: [
        "E-commerce Marketing Strategy",
        "Product Promotion Campaigns",
        "Meta Ads for Product Sales",
        "Meta Pixel Setup & Configuration",
        "Website Event & Conversion Tracking",
        "Campaign Performance Monitoring",
      ],
    },

    {
      id: "06",
      title: "Social Media Management",
      category: "Social Media Growth",
      tagline: "Build a consistent brand presence across social platforms",
      description:
        "Manage social media accounts through strategic content planning, post scheduling, creative publishing, and audience engagement. Maintain a consistent brand identity across platforms like Instagram and Facebook while monitoring performance insights to improve content effectiveness and strengthen online presence.",
      metric: "End-to-End",
      metricLabel: "Social Media Account Management",
      badgeColor: "bg-[#38BDF8]/15 text-[#0369a1] border-[#38BDF8]/30",
      accentColor: "#38BDF8",
      icon: Share2,
      deliverables: [
        "Instagram & Facebook Page Management",
        "Monthly Content Calendar Planning",
        "Post Scheduling & Publishing",
        "Caption & Hashtag Research",
        "Community Management & Audience Engagement",
        "Insights Monitoring & Performance Reporting",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-14 sm:py-18 md:py-24 overflow-hidden select-none bg-[#F9F7F2]"
    >
      {/* Ambient background glows matching brand palette with parallax */}
      <motion.div
        style={{ y: glow1Y }}
        className="pointer-events-none absolute top-1/4 -left-48 w-96 h-96 bg-[#FF6634]/5 rounded-full blur-3xl -z-10 will-change-transform"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: glow2Y }}
        className="pointer-events-none absolute bottom-1/3 -right-48 w-96 h-96 bg-[#FFCD38]/10 rounded-full blur-3xl -z-10 will-change-transform"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              COMPREHENSIVE SERVICES TAILORED FOR{" "}
              <span className="text-[#FF6634] underline decoration-neutral-900/10 decoration-wavy decoration-2">
                BUSINESS GROWTH
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed"
          >
            Combining data-driven marketing strategies with creative execution to
            boost online visibility, engage the right audiences, and drive
            measurable results.
          </motion.p>
        </div>

        {/* Services Grid with Row-Aware Cascade Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Row-aware stagger (modulo 3 on desktop, modulo 2 on tablet)
            const staggerDelay = (index % 3) * 0.1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.15, margin: "-40px" }}
                transition={{ duration: 0.65, delay: staggerDelay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-neutral-200/80 hover:border-[#FF6634]/50 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_-12px_rgba(255,102,52,0.16)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between"
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

                    <div
                      className={`px-2.5 py-1 rounded-full border text-[11px] font-bold tracking-tight ${service.badgeColor}`}
                    >
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
