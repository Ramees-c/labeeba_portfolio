import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles, Star } from "lucide-react";
import MarqueeRibbons from "./MarqueeRibbons";
import Counter from "./Counter";

export default function Hero({ onOpenProcess, onOpenContact }) {
  const heroRef = useRef(null);

  // Smooth scroll parallax strictly bounded to Hero (0 to 1 progress)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Spring-smoothed scroll parallax values (eliminates any micro-jitter)
  const rawHeadlineY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const rawHeadlineOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);
  const rawPortraitY = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const rawColumnsY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  const headlineY = useSpring(rawHeadlineY, { stiffness: 100, damping: 30 });
  const headlineOpacity = useSpring(rawHeadlineOpacity, { stiffness: 100, damping: 30 });
  const portraitY = useSpring(rawPortraitY, { stiffness: 100, damping: 30 });
  const columnsY = useSpring(rawColumnsY, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-0 overflow-hidden select-none"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Pill & Giant Headline */}
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="relative text-center z-0 will-change-transform flex flex-col items-center"
        >
          {/* Top Status Pill: Available for Projects */}
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-neutral-900/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-3.5 sm:mb-4 group hover:border-[#85E26E]/60 transition-colors duration-300 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85E26E] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3bb31e]"></span>
            </span>
            <span className="font-display font-bold text-[10px] sm:text-[11px] tracking-wider uppercase text-neutral-700">
              Available for Projects & Consulting
            </span>
          </motion.div>

          {/* Staggered Main Headline */}
          <h1 className="font-display font-black text-neutral-950 uppercase tracking-[-0.03em] leading-[0.93] text-[25px] min-[360px]:text-[28px] sm:text-[46px] md:text-[60px] lg:text-[76px]">
            <motion.span
              initial={{ opacity: 0, y: -22, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              GROWING BRANDS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="block tracking-tight text-neutral-950"
            >
              THROUGH DIGITAL MARKETING
            </motion.span>
          </h1>
        </motion.div>

        {/* 3-Column Section on Desktop / Center Portrait on Mobile */}
        <div className="relative -mt-3 sm:-mt-8 md:-mt-12 lg:-mt-16 xl:-mt-20 z-20 grid grid-cols-1 lg:grid-cols-12 items-center lg:items-center">
          {/* ================= LEFT COLUMN (Desktop only) ================= */}
          <motion.div
            style={{ y: columnsY }}
            initial={{ opacity: 0, x: -35, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-3 w-full flex-col items-start text-left pb-8 lg:pb-12 order-1 will-change-transform"
          >
            {/* 15+ Stat Card with smooth animated spring counter & star ratings */}
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="mb-6 lg:mb-10 p-5 rounded-2xl bg-white/40 hover:bg-white/80 border border-neutral-900/5 hover:border-neutral-900/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-2 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[11px] font-bold text-neutral-700 ml-1.5">5.0</span>
              </div>
              <span className="font-display font-black text-5xl lg:text-[60px] text-neutral-950 tracking-tight block leading-none">
                <Counter value={15} duration={1.8} delay={0.25} />+
              </span>
              <p className="mt-2.5 text-xs lg:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[210px]">
                Clients Across Multiple Industries, Helping Brands Grow Through
                Digital Marketing.
              </p>
            </motion.div>
          </motion.div>

          {/* ================= CENTER COLUMN: LABEEBA IMAGE & FLOATING BADGES ================= */}
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-end relative z-20 w-full order-1 lg:order-2 will-change-transform"
          >
            {/* Multi-layered Ambient Glow with gentle breathing pulse */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.75, 0.95, 0.75],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 w-[260px] sm:w-[360px] md:w-[440px] h-[360px] bg-gradient-to-t from-[#FF6634]/15 via-[#FFCD38]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 will-change-transform"
            />

            {/* Floating Glass Badge 1: Upper Left (ROI Growth) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-1 sm:left-3 md:-left-2 lg:-left-6 top-16 sm:top-24 z-30 pointer-events-none"
            >
             
            </motion.div>

           

            {/* Unclipped Natural Subject Container with subtle breathing idle float */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center items-end"
            >
              <img
                src="/labeeba_hero.png"
                alt="Labeeba - Digital Marketing Expert"
                width="500"
                height="610"
                fetchpriority="high"
                decoding="async"
                className="h-[320px] min-[360px]:h-[370px] sm:h-[450px] md:h-[510px] lg:h-[570px] xl:h-[610px] w-auto max-w-[90vw] sm:max-w-[85vw] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(20,20,22,0.15)] select-none pointer-events-none hero-portrait-mask"
                loading="eager"
              />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: BIO & CTA (Desktop only) ================= */}
          <motion.div
            style={{ y: columnsY }}
            initial={{ opacity: 0, x: 35, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-3 w-full flex-col items-end text-right pb-8 lg:pb-12 order-3 will-change-transform"
          >
            {/* Bio Paragraph */}
            <div className="mb-6 lg:mb-8">
              <p className="text-xs lg:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[220px]">
                I'm a Digital Marketing & Web Development Executive, helping
                brands grow through SEO, paid advertising, social media
                marketing, and creative digital solutions.
              </p>
            </div>

            {/* Let's Work CTA Button with animated light-sweep sheen */}
            <div className="mb-6 lg:mb-8">
              <button
                onClick={
                  onOpenContact ||
                  (() => {
                    window.location.href = "#contact";
                  })
                }
                className="relative group overflow-hidden inline-flex items-center gap-2.5 bg-[#FF6634] hover:bg-[#FF551E] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_8px_24px_-4px_rgba(255,102,52,0.4)] hover:shadow-[0_12px_28px_-2px_rgba(255,102,52,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer select-none"
              >
                {/* Continuous Shimmer Light Sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-btn-shimmer pointer-events-none" />

                <span className="relative z-10">Let's Work</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
        {/* 15+ Clients Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center sm:items-start"
        >
          <div className="flex items-center gap-1 mb-1.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-[11px] font-bold text-neutral-700 ml-1.5">5.0</span>
          </div>
          <span className="font-display font-black text-4xl sm:text-5xl text-neutral-950 tracking-tight block leading-none">
            <Counter value={15} duration={1.8} delay={0.15} />+
          </span>
          <p className="mt-2 text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[260px]">
            Clients Across Multiple Industries, Helping Brands Grow Through
            Digital Marketing.
          </p>
        </motion.div>

        {/* Bio Paragraph & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center sm:items-start"
        >
          <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed max-w-[260px] mb-5">
            I'm a Digital Marketing & Web Development Executive, helping brands
            grow through SEO, paid advertising, social media marketing, and
            creative digital solutions.
          </p>
          <button
            onClick={
              onOpenContact ||
              (() => {
                window.location.href = "#contact";
              })
            }
            className="relative group overflow-hidden inline-flex items-center gap-2.5 bg-[#FF6634] hover:bg-[#FF551E] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-[0_8px_24px_-4px_rgba(255,102,52,0.4)] hover:shadow-[0_12px_28px_-2px_rgba(255,102,52,0.55)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer select-none"
          >
            {/* Continuous Shimmer Light Sweep */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent animate-btn-shimmer pointer-events-none" />

            <span className="relative z-10">Let's Work</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
