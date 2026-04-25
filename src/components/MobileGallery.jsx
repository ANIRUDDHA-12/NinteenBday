import { motion } from 'framer-motion'

/**
 * MobileGallery — Horizontal snap-scroll gallery for viewports < 768px.
 *
 * Replaces free-form drag physics on mobile to prevent viewport
 * breaking. Uses CSS snap-x for a swipe-friendly card carousel.
 */
export default function MobileGallery({ cards, onCardClick }) {
  return (
    <motion.div
      className="absolute bottom-20 left-0 right-0 z-20 px-4 md:hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Section label */}
      <p className="font-body text-ui-label uppercase text-on-surface-variant tracking-widest mb-3 px-1">
        Swipe to explore
      </p>

      {/* Scrollable container */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2"
        style={{ scrollPaddingLeft: '16px' }}
      >
        {cards.map((card) => {
          const isDark = card.darkText === false
          return (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              className="flex-shrink-0 snap-center cursor-pointer"
              style={{ width: 160 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onCardClick(card)}
            >
              <div className={`
                rounded-card overflow-hidden
                ${card.type === 'glass'
                  ? 'backdrop-blur-sm border border-line-variant/40'
                  : card.type === 'accent'
                    ? 'border-2 border-birkin/30'
                    : 'bg-white p-1.5 pb-2 shadow-sm border border-surface-highest/60'
                }
              `}>
                {/* Gradient visual */}
                <div
                  className="w-full rounded-sm"
                  style={{
                    height: card.type === 'glass' || card.type === 'accent' ? 130 : 100,
                    background: card.gradient,
                  }}
                >
                  {(card.type === 'glass' || card.type === 'accent') && (
                    <div className="p-3 h-full flex items-end">
                      <p className={`font-body text-ticker uppercase font-semibold tracking-wider
                        ${card.type === 'accent' ? 'text-white' : 'text-charcoal'}`}>
                        {card.label} <span className="opacity-50">{card.tag}</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* Polaroid label */}
                {card.type === 'polaroid' && (
                  <div className="pt-1.5 px-0.5">
                    <p className={`font-body text-ticker uppercase font-semibold tracking-wider
                      ${isDark ? 'text-white' : 'text-charcoal'}`}>
                      {card.label} <span className="text-wine opacity-50">{card.tag}</span>
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
