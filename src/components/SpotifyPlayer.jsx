import { motion } from 'framer-motion'

/**
 * SpotifyPlayer — Glassmorphism widget wrapping a Spotify iframe
 * Positioned at bottom-right. Subtly tilts toward the cursor on hover.
 */
export default function SpotifyPlayer() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 w-[300px] h-[80px] md:w-[350px]
                 bg-white/10 backdrop-blur-md border border-white/20
                 rounded-xl overflow-hidden shadow-2xl cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      whileHover={{
        rotateX: -10,
        rotateY: 10,
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      data-cursor="view"
      style={{ perspective: 1000 }}
    >
      <iframe
        // Explicitly using the /embed/ path for inline playback
        src="https://open.spotify.com/embed/track/6IPwKM3fUUzlElbvKw2sKl?si=zu0oOWm2T0CCQsC4Yk9TNg" 
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Aishwarya's Birthday Mix"
      />
    </motion.div>
  )
}