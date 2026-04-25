import { motion } from 'framer-motion'

/**
 * DraggableCard — A scattered polaroid / glass card.
 *
 * Props:
 *   card          — card data object (from cards.js)
 *   constraintsRef — ref to the parent container for drag bounds
 *   isMobile      — disables drag on mobile viewports
 *   onClick       — handler to open the modal
 *   isHidden      — true when this card is selected (shown in modal)
 *
 * Physics (per spec):
 *   drag + dragConstraints + dragElastic={0.1}
 *   whileDrag={{ scale: 1.05, zIndex: 50, cursor: 'grabbing' }}
 */
export default function DraggableCard({ card, constraintsRef, isMobile, onClick, isHidden }) {
  const isDark = card.darkText === false // cards with light gradients use dark text by default

  return (
    <motion.div
      className={`absolute cursor-grab active:cursor-grabbing ${isHidden ? 'invisible' : ''}`}
      style={{
        left: card.position.left,
        top: card.position.top,
        width: card.size.w,
        zIndex: 10,
      }}
      /* ——— Drag physics ——— */
      drag={!isMobile}
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragMomentum={false}
      whileDrag={{ scale: 1.05, zIndex: 50, cursor: 'grabbing' }}
      /* ——— Hover: lift + Matte Blush shadow (Level 2) ——— */
      whileHover={{
        y: -4,
        boxShadow: '0 8px 30px rgba(229, 184, 184, 0.35)',
        transition: { duration: 0.25 },
      }}
      /* ——— Entrance stagger ——— */
      initial={{ opacity: 0, scale: 0.85, rotate: card.rotation }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: card.rotation,
        transition: {
          duration: 0.6,
          delay: 0.4 + card.id * 0.07,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      onClick={() => onClick(card)}
    >
      {/* ——— Card shell ——— */}
      <div
        className={`
          rounded-card overflow-hidden
          ${card.type === 'glass'
            ? 'backdrop-blur-sm border border-line-variant/40'
            : card.type === 'accent'
              ? 'border-2 border-birkin/30'
              : 'bg-white p-2 pb-3 shadow-sm border border-surface-highest/60'
          }
        `}
      >
        {/* ——— Visual area (photo) ——— */}
        <div
          className="w-full rounded-sm relative overflow-hidden"
          style={{
            height: card.type === 'glass' ? '100%' : card.size.h - 60,
            minHeight: card.type === 'glass' ? card.size.h : undefined,
          }}
        >
          <img src={card.src} alt={card.label} className="absolute inset-0 w-full h-full object-cover" />
          
          {/* Glass & accent cards render text inside the photo */}
          {(card.type === 'glass' || card.type === 'accent') && (
            <div className="relative z-10 p-4 flex flex-col justify-between h-full">
              <div>
                <p className={`font-body text-ui-label uppercase font-semibold tracking-wider
                  ${card.type === 'accent' ? 'text-white' : 'text-charcoal'}`}>
                  {card.label} <span className="text-wine opacity-60">{card.tag}</span>
                </p>
                <p className={`font-body text-ticker mt-2 leading-relaxed opacity-70
                  ${card.type === 'accent' ? 'text-white/80' : 'text-on-surface-variant'}`}>
                  {card.subtitle.slice(0, 80)}…
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ——— Polaroid label strip ——— */}
        {card.type === 'polaroid' && (
          <div className="pt-2 px-1">
            <p className={`font-body text-ui-label uppercase font-semibold tracking-wider
              ${isDark ? 'text-white' : 'text-charcoal'}`}>
              {card.label} <span className="text-wine opacity-50">{card.tag}</span>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
