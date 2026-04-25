import { motion } from 'framer-motion'

/**
 * FinanceLedger — Easter egg widget (bottom-left).
 *
 * Per Stitch spec: rendered at 30-40% opacity using ui-label and
 * finance-ticker typography. Appears as a watermark of financial data,
 * only becoming fully legible on conscious inspection.
 */
export default function FinanceLedger() {
  return (
    <motion.div
      className="fixed bottom-5 left-5 z-30 opacity-30 hover:opacity-60
                 transition-opacity duration-700 select-none pointer-events-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1.2, delay: 1.8 }}
      whileHover={{ opacity: 0.6 }}
    >
      <div className="space-y-1">
        {/* Ticker header */}
        <p className="font-body text-ui-label uppercase text-charcoal tracking-widest">
          VOL. 19.01
        </p>

        {/* Growth indicator */}
        <div className="flex items-center gap-2">
          <span className="font-body text-ticker text-birkin">▲ 2.4%</span>
          <span className="font-body text-ticker text-on-surface-variant">QTR</span>
        </div>

        {/* Ledger lines */}
        <div className="mt-2 space-y-0.5">
          <div className="flex justify-between gap-6">
            <span className="font-body text-ticker text-on-surface-variant">YTD GROWTH</span>
            <span className="font-body text-ticker text-charcoal">EXPONENTIAL</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="font-body text-ticker text-on-surface-variant">CONFIDENCE</span>
            <span className="font-body text-ticker text-charcoal">+19.00</span>
          </div>
          <div className="flex justify-between gap-6">
            <span className="font-body text-ticker text-on-surface-variant">PORTFOLIO</span>
            <span className="font-body text-ticker text-birkin">DIVERSIFIED</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-charcoal/10 mt-2" />

        <p className="font-body text-ticker text-on-surface-variant italic">
          archive // entry 19
        </p>
      </div>
    </motion.div>
  )
}
