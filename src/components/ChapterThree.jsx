import { motion } from 'framer-motion'

/**
 * Chapter 3 — "The Future Ledger"
 *
 * Background transitions to Champagne Pink (#F2D4D4).
 * Styled as a prestigious magazine column:
 *   - Massive serif drop cap (first letter)
 *   - Justified body text
 *   - Matte Blush hairline divider
 *   - Finance ledger watermark at 15% opacity
 *
 * Elements use whileInView stagger reveals.
 */

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ChapterThree() {
  return (
    <section className="relative w-full bg-champagne py-24 md:py-32 px-6 md:px-16 overflow-hidden" id="chapter-3">

      {/* ——— Finance ledger watermark (15% opacity) ——— */}
      <div className="absolute top-12 right-8 md:right-16 opacity-[0.15] select-none pointer-events-none">
        <div className="space-y-1 text-right">
          <p className="font-body text-ui-label uppercase text-charcoal tracking-widest">VOL. 19.01</p>
          <div className="flex items-center justify-end gap-2">
            <span className="font-body text-ticker text-birkin">▲ 2.4%</span>
            <span className="font-body text-ticker text-charcoal">QTR</span>
          </div>
          <div className="mt-2 space-y-0.5">
            <div className="flex justify-end gap-6">
              <span className="font-body text-ticker text-charcoal">YTD GROWTH</span>
              <span className="font-body text-ticker text-charcoal font-medium">EXPONENTIAL</span>
            </div>
            <div className="flex justify-end gap-6">
              <span className="font-body text-ticker text-charcoal">CONFIDENCE</span>
              <span className="font-body text-ticker text-charcoal font-medium">+19.00</span>
            </div>
            <div className="flex justify-end gap-6">
              <span className="font-body text-ticker text-charcoal">PORTFOLIO</span>
              <span className="font-body text-ticker text-birkin font-medium">DIVERSIFIED</span>
            </div>
          </div>
          <div className="w-24 h-px bg-charcoal/20 mt-3 ml-auto" />
          <p className="font-body text-ticker text-charcoal italic">archive // entry 19</p>
        </div>
      </div>

      {/* ——— Content column ——— */}
      <motion.div
        className="max-w-[620px] mx-auto"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Chapter label */}
        <motion.div variants={itemVariant}>
          <p className="font-body text-ui-label uppercase tracking-widest text-charcoal/40 mb-3">
            Chapter Three
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-charcoal font-normal mb-2" style={{ letterSpacing: '-0.03em' }}>
            The Future Ledger.
          </h2>
        </motion.div>

        {/* Matte Blush hairline divider */}
        <motion.div variants={itemVariant} className="w-full h-px bg-blush/60 my-8 md:my-10" />

        {/* Editorial paragraph with drop cap */}
        <motion.div variants={itemVariant}>
          <p className="font-display text-lg md:text-xl text-charcoal leading-relaxed text-justify-editorial drop-cap">
            Nineteen is not an age — it is a coordinate. A precise intersection of who you were
            and who you are becoming. The childhood drafts have been filed; the first real chapters
            are being inked in permanent typeface. You stand at the glass desk now, not as a visitor,
            but as the architect. Every late-night spreadsheet, every morning run, every conversation
            that cracked open a new corridor in your thinking — they compound. Quietly. Relentlessly.
            The way good investments always do.
          </p>
        </motion.div>

        <motion.div variants={itemVariant} className="w-16 h-px bg-blush/40 my-8 mx-auto" />

        <motion.div variants={itemVariant}>
          <p className="font-body text-body-std text-on-surface-variant leading-relaxed text-justify-editorial">
            This is the year the portfolio diversifies beyond grades and plans into taste,
            conviction, and the quiet confidence of knowing your own mind. The ledger shows
            growth in every column — not because everything worked, but because you learned to
            read the margins. The footnotes. The spaces between what happened and what it meant.
          </p>
        </motion.div>

        <motion.div variants={itemVariant}>
          <p className="font-body text-body-std text-on-surface-variant leading-relaxed text-justify-editorial mt-6">
            So here's to the next fiscal year of being alive. May your returns be asymmetric,
            your taste impeccable, and your mornings start with both espresso and intention.
            The desk is glass because the future should be transparent — and because it looks
            stunning in the right light.
          </p>
        </motion.div>

        {/* Signature block */}
        <motion.div variants={itemVariant} className="mt-12 md:mt-16">
          <div className="w-10 h-px bg-birkin/50 mb-4" />
          <p className="font-display text-lg text-charcoal italic">With love & compound interest,</p>
          <p className="font-body text-ui-label uppercase tracking-widest text-charcoal/50 mt-2">
            The Archive — Entry 19
          </p>
        </motion.div>
      </motion.div>

      {/* ——— Bottom spacer for breathing room ——— */}
      <div className="h-16 md:h-24" />
    </section>
  )
}
