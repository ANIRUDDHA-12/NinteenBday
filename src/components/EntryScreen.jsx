import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

/**
 * EntryScreen — Phase 1 "The Gatekeeper"
 *
 * Fullscreen overlay (z-index 9999) with Oxford White background.
 * Triggers a sequence on "BEGIN AUDIT" click:
 * 1. Scales up background slightly
 * 2. Fades out opacity
 */
export default function EntryScreen({ onDismiss }) {
  const [isDismissing, setIsDismissing] = useState(false)

  const handleDismiss = () => {
    setIsDismissing(true)
    // Wait for the exit animation to finish before unmounting
    setTimeout(() => {
      onDismiss()
    }, 1000)
  }

  return (
    <AnimatePresence>
      {!isDismissing && (
        <motion.div
          className={`fixed inset-0 z-[9999] bg-oxford flex flex-col items-center justify-center origin-center cursor-auto ${isDismissing ? 'pointer-events-none hidden' : 'pointer-events-auto'}`}
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-mono text-sm tracking-[0.3em] text-charcoal/70 uppercase mb-8">
              AISHWARYA // ARCHIVE
            </p>
            <motion.button
              onClick={handleDismiss}
              className="font-body text-ui-label tracking-widest uppercase border border-charcoal/20 px-8 py-3 rounded-full hover:bg-charcoal hover:text-white transition-colors duration-500 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor="view"
            >
              Begin Audit
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
