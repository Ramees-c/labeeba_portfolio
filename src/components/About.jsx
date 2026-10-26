import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "./Counter";

export default function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Soft ambient glow parallax
  const glowY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const stats = [
    {
      numeric: 15,
      label: "Clients Served",
      highlight: "+",
    },
    {
      numeric: 20,
      label: "Completed Projects",
      highlight: "+",
    },
    {
      numeric: 98,
      label: "Client Satisfaction",
      highlight: "%",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-14 sm:py-18 md:py-24 overflow-hidden select-none"
    >
      {/* Subtle modern ambient background glow with parallax */}
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-40 right-1/4 w-[520px] h-[520px] bg-[#FF6634]/6 rounded-full blur-3xl -z-10 will-change-transform"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ================= 2-COLUMN STRUCTURE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 xl:col-span-3 lg:sticky"
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
            {/* Bio Paragraph with elegant blur-reveal */}
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3, margin: "-40px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-base sm:text-lg md:text-xl font-normal leading-[1.65] text-neutral-800 tracking-[-0.01em]">
                I am{" "}
                <span className="text-neutral-950 font-bold border-b-2 border-[#FF6634]/30 pb-0.5">
                  Labeeba
                </span>
                , a Digital Marketing & Web Development Executive passionate
                about helping brands grow online. With experience working with
                15+ clients across multiple industries, including GCC-based
                businesses, I specialize in SEO, paid advertising, social media
                marketing, and lead generation. I combine data-driven marketing
                strategies with creative thinking to improve online visibility,
                engage audiences, and support business growth.
              </p>
            </motion.div>

            {/* Bottom Stats: Modern interactive cards with Montserrat numbers and Count-Up */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-neutral-300/60">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "-30px" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + idx * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="group relative bg-white/80 backdrop-blur-sm border border-neutral-200/90 hover:border-[#FF6634]/50 rounded-xl p-4 sm:p-5 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(255,102,52,0.14)] transition-[border-color,box-shadow] duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex items-baseline">
                    <span className="font-title font-black text-3xl sm:text-4xl text-neutral-950 tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block origin-left">
                      <Counter value={stat.numeric} duration={1.8 + idx * 0.2} delay={0.15 + idx * 0.12} />
                    </span>
                    <span className="font-title font-black text-2xl sm:text-3xl text-[#FF6634] ml-0.5">
                      {stat.highlight}
                    </span>
                  </div>
                  <span className="font-body text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-500 uppercase mt-2 leading-snug">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
