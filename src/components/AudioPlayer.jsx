import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, SkipForward, Music } from 'lucide-react'

/**
 * AudioPlayer — Floating music control widget (bottom-right).
 *
 * Per Stitch spec: blur background, thin Charcoal Noir borders,
 * Lucide icons at 16–18px. Track: "Gracie / Taylor / Abel mix".
 *
 * This is a visual-only player (no actual audio file loaded).
 * The play/pause toggle controls the visual state.
 */
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-30 flex items-center gap-3
                 px-4 py-3 rounded-full
                 bg-white/60 backdrop-blur-md
                 border border-charcoal/8
                 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
    >
      {/* Music icon */}
      <Music size={14} className="text-blush" strokeWidth={1.5} />

      {/* Track title */}
      <div className="hidden sm:block">
        <p className="font-body text-ticker text-charcoal tracking-wider uppercase">
          Gracie / Taylor / Abel mix
        </p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-4 bg-line-variant/40" />

      {/* Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-1 rounded-full hover:bg-champagne/40 transition-colors duration-200 cursor-pointer"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause size={16} className="text-charcoal" strokeWidth={1.5} />
          ) : (
            <Play size={16} className="text-charcoal" strokeWidth={1.5} />
          )}
        </button>
        <button
          className="p-1 rounded-full hover:bg-champagne/40 transition-colors duration-200 cursor-pointer"
          aria-label="Next track"
        >
          <SkipForward size={14} className="text-on-surface-variant" strokeWidth={1.5} />
        </button>
      </div>

      {/* Playing indicator — animated dot */}
      {isPlaying && (
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-birkin"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      )}
    </motion.div>
  )
}
