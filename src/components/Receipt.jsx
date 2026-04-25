import { motion } from 'framer-motion'

/**
 * Receipt — Chapter 4: "The Final Audit Receipt"
 *
 * Styled as a physical luxury boutique receipt:
 *   - Narrow max-width, white background, CSS paper noise
 *   - Monospace font (Courier / terminal aesthetic)
 *   - Slight drop shadow
 *   - "Prints" downward via Framer Motion scroll reveal
 *     using a clipPath animation from top to full height
 */

const ITEMS = [
  { name: 'Sibling Tolerance',          value: 'PRICELESS' },
  { name: 'Late Night Study Sessions',  value: 'INFINITE' },
  { name: 'Iced Coffee Consumption',    value: '∞ CUPS' },
  { name: 'Main Character Energy',      value: 'MAXED OUT' },
  { name: 'Spotify Wrapped Hours',      value: '9,999+' },
  { name: 'Growth Mindset',             value: 'COMPOUNDING' },
  { name: 'Aesthetic Curation',         value: 'MUSEUM-GRADE' },
  { name: 'Friendship Portfolio',       value: 'BLUE CHIP' },
]

/* Reveal animation — clips from top to bottom like a receipt printing */
const printVariant = {
  hidden: {
    clipPath: 'inset(0 0 100% 0)',
    opacity: 0,
  },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Receipt() {
  return (
    <div className="relative w-full overflow-hidden flex flex-col justify-center h-full">
      {/* ——— Section header ——— */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-ui-label uppercase tracking-widest text-charcoal/40 mb-3">
          Chapter Four
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-charcoal font-normal" style={{ letterSpacing: '-0.03em' }}>
          The Final Audit.
        </h2>
      </motion.div>

      {/* ——— Receipt card — "prints" into view ——— */}
      <motion.div
        className="max-w-[420px] mx-auto"
        variants={printVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        <div
          className="bg-white rounded-sm shadow-lg border border-surface-highest/50 px-8 py-10 relative overflow-hidden"
          style={{
            /* Subtle CSS paper noise texture */
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          }}
        >
          {/* ——— Receipt header ——— */}
          <div className="text-center mb-6">
            <p className="font-mono text-xs tracking-[0.3em] text-charcoal/70 uppercase">
              ═══════════════════════
            </p>
            <p className="font-mono text-sm font-bold tracking-widest text-charcoal mt-2 uppercase">
              Aishwarya & Co.
            </p>
            <p className="font-mono text-[10px] text-charcoal/50 tracking-wider mt-1">
              EST. 2007 — PREMIUM DIVISION
            </p>
            <p className="font-mono text-xs tracking-[0.3em] text-charcoal/70 uppercase mt-2">
              ═══════════════════════
            </p>
          </div>

          {/* ——— Receipt meta ——— */}
          <div className="flex justify-between mb-6">
            <span className="font-mono text-[10px] text-charcoal/50 uppercase">
              Receipt No. 0019
            </span>
            <span className="font-mono text-[10px] text-charcoal/50 uppercase">
              Date: Today
            </span>
          </div>

          {/* ——— Line items ——— */}
          <div className="space-y-3 mb-6">
            {ITEMS.map((item, i) => (
              <div key={i} className="flex justify-between items-baseline gap-2">
                <span className="font-mono text-xs text-charcoal/80 uppercase flex-shrink-0">
                  {item.name}
                </span>
                {/* Dotted leader */}
                <span className="flex-1 border-b border-dotted border-charcoal/15 mx-1 translate-y-[-3px]" />
                <span className="font-mono text-xs text-charcoal font-bold uppercase flex-shrink-0">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* ——— Divider ——— */}
          <p className="font-mono text-xs tracking-[0.15em] text-charcoal/30 text-center">
            ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
          </p>

          {/* ——— Total ——— */}
          <div className="mt-4 flex justify-between items-baseline">
            <span className="font-mono text-sm font-bold text-charcoal uppercase tracking-wider">
              Total Balance
            </span>
            <span className="font-mono text-sm font-bold text-birkin uppercase">
              19 Years of Excellence
            </span>
          </div>

          {/* ——— Footer ——— */}
          <div className="mt-8 text-center">
            <p className="font-mono text-[10px] text-charcoal/40 tracking-wider uppercase">
              Thank you for being extraordinary
            </p>
            <p className="font-mono text-[10px] text-charcoal/30 tracking-wider mt-1">
              — No refunds. No exchanges. All growth final. —
            </p>

            {/* Barcode aesthetic */}
            <div className="flex items-center justify-center gap-[2px] mt-5 opacity-20">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-charcoal"
                  style={{
                    width: Math.random() > 0.5 ? 2 : 1,
                    height: 20 + Math.random() * 10,
                  }}
                />
              ))}
            </div>
            <p className="font-mono text-[8px] text-charcoal/25 mt-1 tracking-[0.5em]">
              0019 2007 2026
            </p>
          </div>
        </div>

        {/* ——— Torn paper edge effect ——— */}
        <div className="w-full h-4 bg-white relative overflow-hidden shadow-lg"
          style={{
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,8 Q10,0 20,8 T40,8 T60,8 T80,8 T100,8 T120,8 T140,8 T160,8 T180,8 T200,8 T220,8 T240,8 T260,8 T280,8 T300,8 T320,8 T340,8 T360,8 T380,8 T400,8 L400,16 L0,16 Z\' fill=\'white\'/%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 16\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,8 Q10,0 20,8 T40,8 T60,8 T80,8 T100,8 T120,8 T140,8 T160,8 T180,8 T200,8 T220,8 T240,8 T260,8 T280,8 T300,8 T320,8 T340,8 T360,8 T380,8 T400,8 L400,16 L0,16 Z\' fill=\'white\'/%3E%3C/svg%3E")',
          }}
        />
      </motion.div>
    </div>
  )
}
