import { motion } from 'framer-motion'
import { useState } from 'react'
import EditorialLetter from './EditorialLetter'
import Receipt from './Receipt'

/**
 * Chapter 5 — "The Finale Audit"
 * 
 * Full-viewport split layout.
 * On scroll reveal, shows a "Generating Final Audit..." progress bar for 1.5s,
 * then reveals the split layout (Letter left, Receipt right).
 */
export default function ChapterFive() {
  const [auditComplete, setAuditComplete] = useState(false)

  return (
    <section className="relative w-full min-h-screen bg-champagne py-24 md:py-32 px-6 lg:px-16 overflow-hidden flex flex-col" id="chapter-5">
      {/* ——— Finance Watermark ——— */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15 overflow-hidden">
        <p className="font-display text-[20vw] leading-none text-white font-bold whitespace-nowrap rotate-[-15deg] select-none">
          YTD GROWTH
        </p>
      </div>

      {/* ——— Progress Bar Sequence ——— */}
      {!auditComplete && (
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-20%' }}
          onAnimationComplete={() => {
            // After entering viewport, start the progress and then reveal
            setTimeout(() => setAuditComplete(true), 2500)
          }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-charcoal/60 mb-4">
            Generating Final Audit...
          </p>
          <div className="w-[200px] h-1 bg-charcoal/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-charcoal"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}

      {/* ——— Split Layout Reveal ——— */}
      <motion.div 
        className="relative z-20 flex-1 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={auditComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="order-2 md:order-1 pt-12 md:pt-0">
          <EditorialLetter />
        </div>
        
        <div className="order-1 md:order-2 flex justify-center h-full">
          {auditComplete && <Receipt />}
        </div>
      </motion.div>
    </section>
  )
}
