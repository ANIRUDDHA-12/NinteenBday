import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Play, Pause, SkipForward } from 'lucide-react'

/**
 * Chapter 1 — "The Glass Desk" (first 100vh)
 *
 * Photos 1–6 scattered as draggable polaroids around the "Aishwarya." hero.
 * Drag physics use spring config: stiffness 100, damping 20 for
 * a weighty, luxurious feel.
 *
 * Includes the glassmorphism audio player (bottom-right).
 */

/* ——— Card layout: positions, rotations, sizes for photos 1–6 ——— */
const DESK_CARDS = [
  { id: 1, src: '/photos/1.jpg', label: 'PARIS',     tag: '// 01', rotation: -5,  left: '5%',  top: '8%',   w: 200, h: 260 },
  { id: 2, src: '/photos/2.jpg', label: 'MOMENT',    tag: '// 02', rotation: 4,   left: '72%', top: '5%',   w: 190, h: 250 },
  { id: 3, src: '/photos/3.jpg', label: 'STRUCTURE', tag: '',       rotation: -8,  left: '3%',  top: '52%',  w: 180, h: 240 },
  { id: 4, src: '/photos/4.jpg', label: 'THE EDIT',  tag: 'VOL.19', rotation: 6,  left: '76%', top: '48%',  w: 195, h: 255 },
  { id: 5, src: '/photos/5.jpg', label: 'BOTANICA', tag: '',        rotation: -3,  left: '28%', top: '3%',   w: 170, h: 225 },
  { id: 6, src: '/photos/6.jpg', label: 'FOCUS',    tag: '',        rotation: 7,   left: '58%', top: '60%',  w: 185, h: 245 },
]

/* ——— Expanded modal for clicked cards ——— */
function DeskModal({ card, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[9999] bg-champagne/20 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        layoutId={`desk-card-${card.id}`}
        className="fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[88vw] max-w-[640px] rounded-lg overflow-hidden bg-white
                   shadow-2xl border border-surface-highest/50"
        style={{ rotate: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      >
        <div className="flex flex-col md:flex-row">
          <img
            src={card.src}
            alt={card.label}
            className="w-full md:w-1/2 h-[240px] md:h-[380px] object-cover"
          />
          <div className="hidden md:block w-px bg-blush/40" />
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal">
              {card.label}
              {card.tag && <span className="text-wine text-base ml-2 font-normal">{card.tag}</span>}
            </h2>
            <div className="w-10 h-px bg-blush my-4" />
            <p className="font-body text-body-std text-on-surface-variant leading-relaxed">
              A fragment of nineteen years, suspended in light and feeling.
              Some moments refuse to be filed chronologically — they belong to emotion, not time.
            </p>
            <p className="font-body text-ticker text-line uppercase mt-6 tracking-wider">
              Entry {String(card.id).padStart(2, '0')} — Personal Archive
            </p>
          </div>
        </div>
      </motion.div>
      <motion.button
        className="fixed top-6 right-6 z-[9999] w-9 h-9 flex items-center justify-center
                   rounded-full bg-white/60 backdrop-blur-sm border border-line-variant/30
                   text-charcoal hover:scale-110 transition-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={onClose}
        data-cursor="view"
      >
        <span className="text-sm font-body">✕</span>
      </motion.button>
    </>
  )
}

/* Old AudioWidget removed to make way for global SpotifyPlayer */

/* ——— Main Chapter 1 export ——— */
export default function ChapterOne({ gateDismissed }) {
  const constraintsRef = useRef(null)
  const [activeCard, setActiveCard] = useState(null)
  const close = useCallback(() => setActiveCard(null), [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-oxford" id="chapter-1">
      {/* ——— Hero text ——— */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="font-display text-hero-sm md:text-hero text-charcoal font-normal flex overflow-hidden" style={{ letterSpacing: '-0.04em' }}>
          {"Aishwarya.".split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={gateDismissed ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: gateDismissed ? 0.6 + (index * 0.05) : 0
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="font-body text-subtitle uppercase text-on-surface-variant mt-3 md:mt-4"
          initial={{ y: 16, opacity: 0 }}
          animate={gateDismissed ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
          transition={{ duration: 1, delay: gateDismissed ? 1.4 : 0, ease: [0.22, 1, 0.36, 1] }}
        >
          Nineteen.
        </motion.p>
      </motion.div>

      {/* ——— Drag workspace (desktop only) ——— */}
      <div ref={constraintsRef} className="absolute inset-0 z-10 hidden md:block">
        {DESK_CARDS.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`desk-card-${card.id}`}
            className={`absolute ${activeCard?.id === card.id ? 'invisible' : ''}`}
            style={{ left: card.left, top: card.top, width: card.w, zIndex: 10 }}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            whileDrag={{ scale: 1.05, zIndex: 50 }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 40px rgba(229,184,184,0.35)',
              transition: { duration: 0.25 },
            }}
            initial={{ opacity: 0, scale: 0.85, rotate: card.rotation }}
            animate={{ opacity: 1, scale: 1, rotate: card.rotation, transition: { duration: 0.6, delay: 0.5 + card.id * 0.1, ease: [0.22, 1, 0.36, 1] } }}
            onClick={() => setActiveCard(card)}
            data-cursor="drag"
          >
            <div className="bg-white p-2 pb-3 rounded-card shadow-sm border border-surface-highest/60">
              <div className="w-full relative overflow-hidden rounded-sm" style={{ height: card.h - 60 || 240 }}>
                <img
                  src={card.src}
                  alt={card.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="pt-2 px-1">
                <p className="font-body text-ui-label uppercase font-semibold tracking-wider text-charcoal">
                  {card.label} <span className="text-wine opacity-50">{card.tag}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ——— Mobile gallery fallback ——— */}
      <div className="absolute bottom-20 left-0 right-0 z-20 px-4 md:hidden">
        <p className="font-body text-ui-label uppercase text-on-surface-variant tracking-widest mb-3">Swipe to explore</p>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
          {DESK_CARDS.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`desk-card-${card.id}`}
              className="flex-shrink-0 snap-center"
              style={{ width: 160 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCard(card)}
              data-cursor="view"
            >
              <div className="bg-white p-1.5 pb-2 rounded-card shadow-sm border border-surface-highest/60">
                <img src={card.src} alt={card.label} className="w-full h-[120px] rounded-sm object-cover" draggable={false} />
                <p className="pt-1.5 px-0.5 font-body text-ticker uppercase font-semibold tracking-wider text-charcoal">
                  {card.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* ——— Modal ——— */}
      <AnimatePresence>
        {activeCard && <DeskModal key="modal" card={activeCard} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
