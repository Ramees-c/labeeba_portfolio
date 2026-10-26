import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MinimalLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Initial load timer: quick and clean small wait for initial rendering
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 750)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="minimal-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F6F0] pointer-events-auto"
          aria-label="Loading"
          role="status"
        >
          {/* Small sleek circular spinner only - 100% CSS compositor accelerated */}
          <div className="relative w-8 h-8">
            <div className="w-full h-full rounded-full border-[2.5px] border-[#141416]/10 border-t-[#FF6634] animate-spin" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
