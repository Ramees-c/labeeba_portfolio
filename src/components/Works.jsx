import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Works() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const glow1Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const projects = [
    {
      id: "proj-1",
      title: "Healthcare Lead Generation — Meta Ads",
      category: "Paid Advertising",
      tag: "Messaging Campaign",
      client: "Medical Center · Ajman, UAE",
      image: "/projects/project1.jpeg",
      isNumeric: true,
      numericValue: 152,
      suffix: "",
      heroMetric: "152",
      heroMetricLabel: "Messaging Conversations Started",
      description:
        "Executed a Meta Ads messaging campaign for a medical center in Ajman, UAE, generating 152 messaging conversations at an average cost of AED 4.19 per",
      deliverables: [
        "Meta Ads Campaign Management",
        "Audience Targeting",
        "Messaging Lead Generation",
        "Campaign Performance Monitoring",
      ],
      badgeBg: "bg-white/95 text-[#FF6634] border-white/60 shadow-xs",
    },
    {
      id: "proj-2",
      title: "SEO Blog Writing & Optimization",
      category: "SEO & Content Marketing",
      tag: "Google Search Ranking",
      client: "Taxi Service · Kannur",
      image: "/projects/project2.jpeg",
      isNumeric: false,
      heroMetric: "2nd",
      heroMetricLabel: "Google Search Position",
      description:
        "Created SEO-friendly blog content focused on keyword research, on-page optimization, and organic search visibility, achieving the 2nd position on Google for the target keyword.",
      deliverables: [
        "SEO Keyword Research",
        "SEO Blog Writing",
        "On-Page SEO",
        "Content Optimization",
      ],
      badgeBg: "bg-white/95 text-[#1e6a10] border-white/60 shadow-xs",
    },
    {
      id: "proj-3",
      title: "Social Media Performance & Audience Growth",
      category: "Social Media Marketing",
      tag: "Audience Growth",
      client: "Baby Clothing Brand",
      image: "/projects/project3.jpeg",
      isNumeric: true,
      numericValue: 33.4,
      suffix: "K",
      heroMetric: "33.4K",
      heroMetricLabel: "Total Views",
      description:
        "Managed Instagram and Facebook content and promotional activities to improve brand visibility, audience reach, and engagement, achieving 33.4K views and 9.2K reach during the reporting period.",
      deliverables: [
        "Social Media Management",
        "Content Strategy",
        "Audience Engagement",
        "Performance Analytics",
      ],
      badgeBg: "bg-white/95 text-[#926000] border-white/60 shadow-xs",
    },
    {
      id: "proj-4",
      title: "E-commerce Conversion Tracking",
      category: "Analytics & Tracking",
      tag: "Meta Pixel",
      client: "Baby Clothing Brand",
      image: "/projects/project4.jpeg",
      isNumeric: true,
      numericValue: 2.7,
      suffix: "K+",
      heroMetric: "2.7K+",
      heroMetricLabel: "View Content Events",
      description:
        "Implemented and monitored Meta Pixel events for a newly launched e-commerce website, tracking customer interactions from product views to checkout and purchases.",
      deliverables: [
        "Meta Pixel Event Tracking",
        "Add to Cart Tracking",
        "Checkout Event Monitoring",
        "Purchase Tracking",
        "Conversion Funnel Analysis",
      ],
      badgeBg: "bg-white/95 text-[#FF6634] border-white/60 shadow-xs",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative w-full py-14 sm:py-18 md:py-24 overflow-hidden select-none bg-[#F9F7F2]"
    >
      {/* Subtle ambient lighting with parallax */}
      <motion.div
        style={{ y: glow1Y }}
        className="pointer-events-none absolute top-10 right-1/4 w-[480px] h-[480px] bg-[#FFCD38]/10 rounded-full blur-3xl -z-10 will-change-transform"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: glow2Y }}
        className="pointer-events-none absolute bottom-10 left-1/4 w-[480px] h-[480px] bg-[#FF6634]/5 rounded-full blur-3xl -z-10 will-change-transform"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
              FEATURED WORK &{" "}
              <span className="text-[#FF6634] underline decoration-neutral-900/10 decoration-wavy decoration-2">
                MEASURABLE RESULTS
              </span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-xs sm:text-sm text-neutral-600 max-w-md leading-relaxed"
          >
            Explore real-world client campaigns delivering qualified leads, top
            Google search rankings, audience growth, and verified conversion
            tracking.
          </motion.p>
        </div>

        {/* Projects Grid with Rich Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 35, scale: 0.97, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: (idx % 2) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/85 hover:border-[#FF6634]/50 p-4 sm:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_-12px_rgba(255,102,52,0.14)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between overflow-hidden"
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
                    className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle top/bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-full border backdrop-blur-md ${project.badgeBg}`}
                    >
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
  );
}
