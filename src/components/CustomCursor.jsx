import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * CustomCursor — Smooth-trailing custom cursor replacing the system default.
 *
 * States:
 *   - Default:  small Charcoal Noir dot (8px)
 *   - Hover:    expanded circle (64px) with "DRAG" or "VIEW" label
 *
 * Interactive elements should have data-cursor="drag" or data-cursor="view"
 * attributes to trigger the expanded state.
 *
 * Uses Framer Motion spring for a luxurious trailing feel.
 * Hidden on touch devices (pointer: coarse).
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [cursorLabel, setCursorLabel] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    /* ——— Detect touch devices and bail out ——— */
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      /* Walk up the DOM to find the nearest [data-cursor] attribute */
      let target = e.target
      let label = null
      while (target && target !== document.body) {
        if (target.dataset?.cursor) {
          label = target.dataset.cursor.toUpperCase()
          break
        }
        target = target.parentElement
      }
      setCursorLabel(label)
    }

    const handleLeave = () => setIsVisible(false)
    const handleEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [isVisible])

  /* Don't render on touch devices */
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const isExpanded = cursorLabel !== null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (isExpanded ? 32 : 4),
        y: position.y - (isExpanded ? 32 : 4),
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white"
        animate={{
          width: isExpanded ? 64 : 8,
          height: isExpanded ? 64 : 8,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              className="font-body text-charcoal text-[10px] font-semibold tracking-widest uppercase"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
            >
              {cursorLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
