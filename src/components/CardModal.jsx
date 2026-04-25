import { motion } from 'framer-motion'
import { X } from 'lucide-react'

/**
 * CardModal — Cinematic expand-on-click modal.
 *
 * Uses Framer Motion `layoutId` so the clicked card smoothly
 * animates from its scattered position to the centre of the screen.
 *
 * Overlay: backdrop-blur-md + semi-transparent Champagne Pink tint.
 * Layout:  Dual-pane — gradient visual left, text content right,
 *          separated by a hairline Matte Blush divider.
 * Close:   Detached "X" icon, top-right, with hover scale.
 */
export default function CardModal({ card, onClose }) {
  if (!card) return null

  const isDark = card.darkText === false

  return (
    <>
      {/* ——— Blurred overlay ——— */}
      <motion.div
        className="fixed inset-0 z-40 bg-champagne/25 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      {/* ——— Close button (detached, top-right) ——— */}
      <motion.button
        className="fixed top-6 right-6 z-[60] p-2 rounded-full bg-white/60 backdrop-blur-sm
                   border border-line-variant/30 text-charcoal hover:scale-110
                   transition-transform duration-200 cursor-pointer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.15 }}
        onClick={onClose}
        aria-label="Close modal"
      >
        <X size={18} strokeWidth={1.5} />
      </motion.button>

      {/* ——— Expanded card (Cinematic Scale) ——— */}
      <motion.div
        className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[90vw] max-w-[720px] rounded-lg overflow-hidden
                   bg-white shadow-2xl border border-surface-highest/50"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 10 }}
        style={{ rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* ——— Left pane: photo visual ——— */}
          <div
            className="w-full md:w-1/2 min-h-[240px] md:min-h-[360px] relative overflow-hidden"
          >
            <img src={card.src} alt={card.label} className="absolute inset-0 w-full h-full object-cover" />
            
            {/* Floating label inside the visual */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black/40 to-transparent">
              <p className={`font-body text-ui-label uppercase font-semibold tracking-widest
                ${isDark ? 'text-white/90' : 'text-charcoal/80'}`}>
                {card.label} <span className="opacity-50">{card.tag}</span>
              </p>
            </div>
          </div>

          {/* ——— Hairline Matte Blush divider ——— */}
          <div className="hidden md:block w-px bg-blush/40" />

          {/* ——— Right pane: text content ——— */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal mb-1">
              {card.label}
              {card.tag && (
                <span className="text-wine text-lg ml-2 font-normal">{card.tag}</span>
              )}
            </h2>

            {/* Subtle horizontal rule */}
            <div className="w-12 h-px bg-blush my-4" />

            <p className="font-body text-body-std text-on-surface-variant leading-relaxed">
              {card.subtitle}
            </p>

            {/* Meta tag */}
            <p className="font-body text-ticker text-line uppercase mt-6 tracking-wider">
              Entry {String(card.id).padStart(2, '0')} — Personal Archive
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
