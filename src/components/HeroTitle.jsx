import { motion } from 'framer-motion'

/**
 * HeroTitle — The centrepiece of the workspace.
 * Renders "Aishwarya." in Playfair Display serif and
 * "NINETEEN." in spaced Inter caps, absolutely centred.
 *
 * Fades in on mount with a staggered animation.
 */
export default function HeroTitle() {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* Primary name — editorial serif */}
      <motion.h1
        className="font-display text-hero-sm md:text-hero text-charcoal font-normal tracking-tight"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        Aishwarya.
      </motion.h1>

      {/* Subtitle — spaced uppercase sans */}
      <motion.p
        className="font-body text-subtitle uppercase text-on-surface-variant mt-3 md:mt-4"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Nineteen.
      </motion.p>
    </motion.div>
  )
}
