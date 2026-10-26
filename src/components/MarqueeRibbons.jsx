import React from 'react'

export default function MarqueeRibbons() {
  const topItems = [
    'Digital Marketing',
    'Copywriting',
    'Email Marketing',
    'On-Page SEO',
    'Off-Page SEO',
    'PPC Campaigns',
    'Social Media Growth',
    'Brand Strategy',
  ]

  const bottomItems = [
    'Performance Marketing',
    'Conversion Optimization',
    'Technical SEO',
    'Paid Social Funnels',
    'Revenue Scaling',
    'Content Marketing',
    'Data-Driven Growth',
    'Brand Positioning',
  ]

  // Quadruple items for seamless 50% infinite translation loop
  const fullTopTrack = [...topItems, ...topItems, ...topItems, ...topItems]
  const fullBottomTrack = [...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems]

  return (
    <div className="relative w-full overflow-hidden pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 select-none z-10 -mt-6 sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16 isolate">
      {/* Parallel Angled Ribbons Wrapper (-2deg tilt with uniform gap) */}
      <div
        className="relative w-[116%] -left-[8%] flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 transform-gpu"
        style={{ transform: 'rotate(-2deg)', WebkitTransform: 'rotate(-2deg)' }}
      >
        {/* Top Ribbon (Sunflower Yellow) - Scrolls Left */}
        <div
          className="w-full bg-[#FFCD38] py-3.5 sm:py-4 flex overflow-hidden border-y border-neutral-950/15 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          style={{ backgroundColor: '#FFCD38' }}
        >
          <div className="marquee-track-left flex items-center whitespace-nowrap shrink-0">
            {fullTopTrack.map((item, idx) => (
              <div
                key={`yellow-${idx}`}
                className="flex items-center shrink-0 whitespace-nowrap"
              >
                <span className="font-display font-black text-neutral-950 uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight px-6 sm:px-8 md:px-10">
                  {item}
                </span>
                <span
                  className="text-neutral-950 text-xs sm:text-sm md:text-base font-black shrink-0 opacity-75"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Ribbon (Fresh Spring Green) - Scrolls Right */}
        <div
          className="w-full bg-[#85E26E] py-3.5 sm:py-4 flex overflow-hidden border-y border-neutral-950/15 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          style={{ backgroundColor: '#85E26E' }}
        >
          <div className="marquee-track-right flex items-center whitespace-nowrap shrink-0">
            {fullBottomTrack.map((item, idx) => (
              <div
                key={`green-${idx}`}
                className="flex items-center shrink-0"
              >
                <span className="font-display font-black text-neutral-950 uppercase tracking-wider text-xs sm:text-sm md:text-base leading-tight px-6 sm:px-8 md:px-10">
                  {item}
                </span>
                <span
                  className="text-neutral-950 text-xs sm:text-sm md:text-base font-black shrink-0 opacity-75"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

