import React, { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'

/**
 * Animated counter that smoothly counts up to `value` when scrolled into view.
 * Features:
 * - Deterministic Framer Motion `animate` engine with smooth cubic-bezier deceleration
 * - Guaranteed exact target completion (fixes bug where Math.floor stopped 1 below target, e.g. 14 instead of 15)
 * - Dynamic decimal precision detection & formatting (e.g. 33.4, 2.7)
 * - Tabular numbers (`tabular-nums`) to prevent horizontal layout twitching / jitter during counting
 * - Resilient viewport margin (`0px 0px -40px 0px`) to prevent clipping on top-of-page Hero stats
 * - Prefix & suffix support
 * - Automatic cancellation on unmount
 */
export default function Counter({
  value,
  duration = 1.8,
  delay = 0,
  className = '',
  prefix = '',
  suffix = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })

  // Parse raw value to extract embedded prefix, numeric part, decimal places, and embedded suffix
  const rawString = value != null ? value.toString().trim() : '0'
  const match = rawString.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)

  const embeddedPrefix = match ? match[1] : ''
  const numberStr = match ? match[2] : '0'
  const embeddedSuffix = match ? match[3] : ''

  const finalPrefix = prefix || embeddedPrefix
  const finalSuffix = suffix || embeddedSuffix

  const numericValue = parseFloat(numberStr) || 0
  const decimalParts = numberStr.includes('.') ? numberStr.split('.')[1] : ''
  const decimalPlaces = decimalParts.length

  useEffect(() => {
    const node = ref.current
    if (!isInView || !node) return

    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    })

    // Initialize display with 0 formatted to matching decimal places
    node.textContent = formatter.format(0)

    const controls = animate(0, numericValue, {
      duration: duration,
      delay: delay,
      ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier deceleration curve
      onUpdate(latest) {
        if (!node) return
        const safeVal = Math.min(numericValue, Math.max(0, latest))
        node.textContent = formatter.format(safeVal)
      },
      onComplete() {
        if (!node) return
        // Guarantee 100% exact target value is displayed at completion (never 14 instead of 15)
        node.textContent = formatter.format(numericValue)
      },
    })

    return () => controls.stop()
  }, [isInView, numericValue, duration, delay, decimalPlaces])

  // Initial SSR / pre-animation display
  const initialDisplay = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(0)

  if (!finalPrefix && !finalSuffix) {
    return (
      <span ref={ref} className={`tabular-nums inline-block ${className}`}>
        {initialDisplay}
      </span>
    )
  }

  return (
    <span className={`tabular-nums inline-block ${className}`}>
      {finalPrefix && <span>{finalPrefix}</span>}
      <span ref={ref}>{initialDisplay}</span>
      {finalSuffix && <span>{finalSuffix}</span>}
    </span>
  )
}

