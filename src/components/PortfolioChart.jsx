import { motion } from 'framer-motion'

/**
 * PortfolioChart — Chapter 3: "The Portfolio Chart"
 *
 * An interactive "Asset Allocation" visualization using Framer Motion
 * animated horizontal progress bars. NO external chart library.
 *
 * Bars animate width from 0% → target% when entering viewport.
 * Champagne Pink background with editorial styling.
 */

const ALLOCATIONS = [
  { label: 'Academic Focus',          pct: 45, color: '#1A1A1A',  accent: 'bg-charcoal' },
  { label: 'High Fashion Aesthetic',  pct: 25, color: '#CBA135',  accent: 'bg-birkin' },
  { label: 'Gracie / Taylor / Weeknd', pct: 20, color: '#E5B8B8', accent: 'bg-blush' },
  { label: 'Iced Coffee',            pct: 10, color: '#6f5959',   accent: 'bg-wine' },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
}

const rowVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function PortfolioChart() {
  return (
    <section className="relative w-full bg-champagne py-24 md:py-32 px-6 md:px-16 overflow-hidden" id="chapter-3">
      {/* ——— Header ——— */}
      <motion.div
        className="max-w-[800px] mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-ui-label uppercase tracking-widest text-charcoal/40 mb-3">
          Chapter Three
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal font-normal" style={{ letterSpacing: '-0.03em' }}>
          The Portfolio.
        </h2>
        <p className="font-body text-body-std text-on-surface-variant mt-4 max-w-md">
          Asset allocation for the fiscal year of being nineteen. All positions long-term holds.
          No stop-losses set.
        </p>
        <div className="w-12 h-px bg-birkin/40 mt-6" />
      </motion.div>

      {/* ——— Chart bars ——— */}
      <motion.div
        className="max-w-[800px] mx-auto space-y-8"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {ALLOCATIONS.map((item) => (
          <motion.div key={item.label} variants={rowVariant}>
            {/* Label row */}
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-body text-ui-label uppercase tracking-widest text-charcoal">
                {item.label}
              </span>
              <span className="font-body text-ticker text-charcoal/60 tabular-nums">
                {item.pct}%
              </span>
            </div>

            {/* Bar track */}
            <div className="w-full h-3 rounded-full bg-charcoal/8 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.accent}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${item.pct}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ——— Summary line ——— */}
      <motion.div
        className="max-w-[800px] mx-auto mt-14 pt-6 border-t border-blush/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-ticker text-charcoal/40 uppercase tracking-widest">
            Total allocation: 100% — Fully invested
          </p>
          <p className="font-body text-ticker text-birkin uppercase tracking-widest">
            ▲ All positions outperforming benchmark
          </p>
        </div>
      </motion.div>
    </section>
  )
}
