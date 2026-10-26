import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/labeeba-v-26a138339?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Instagram', href: 'https://www.instagram.com/labeeba_hassan?cplk=ejh2aTd0aGx4a2tx' },
    { name: 'WhatsApp', href: 'https://wa.me/918606268275' },
    { name: 'Email', href: 'mailto:labeebahassan333@gmail.com' },
  ]

  return (
    <footer id="contact" className="w-full bg-neutral-950 text-white py-12 sm:py-16 border-t border-neutral-900 select-none relative overflow-hidden">
      {/* Subtle ambient brand glow in the background */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-96 h-32 bg-[#FF6634]/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 sm:gap-10"
        >
          {/* ================= LEFT SIDE: NAME & DESCRIPTION ================= */}
          <div className="max-w-md">
            <a
              href="#home"
              className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white flex items-baseline select-none mb-3"
            >
              <span>LABEEBA</span>
              <span className="text-[#FF6634] text-3xl sm:text-4xl leading-none">.</span>
            </a>
            <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Digital Marketing & Web Development Executive helping businesses grow through SEO, paid advertising, social media marketing, and creative digital solutions.
            </p>
            <p className="font-body text-[11px] text-neutral-600 mt-4">
              © {new Date().getFullYear()} Labeeba. All rights reserved.
            </p>
          </div>

          {/* ================= RIGHT SIDE: ALL SOCIAL LINKS ================= */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 md:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-[#FF6634] text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#FF6634] text-xs sm:text-[13px] font-semibold transition-all duration-200 active:scale-95 shadow-xs"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
