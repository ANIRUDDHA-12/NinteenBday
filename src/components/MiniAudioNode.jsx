import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

/**
 * MiniAudioNode — Minimalist audio trigger overlay for masonry images.
 * Plays local HTML5 audio (node1.mp3, node2.mp3) and shows a sonar pulse.
 */
export default function MiniAudioNode({ id }) {
  const [active, setActive] = useState(false)
  const audioRef = useRef(null)

  // Map IDs to specific local audio files
  const audioSrc = id === 8 ? '/audio/node1.mp3' : '/audio/node2.mp3'

  const handleClick = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return

    if (active) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setActive(!active)
  }

  // Handle cleanup
  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => setActive(false)
    if (audio) audio.addEventListener('ended', handleEnded)
    return () => {
      if (audio) {
        audio.removeEventListener('ended', handleEnded)
        audio.pause()
      }
    }
  }, [])

  return (
    <div className="absolute bottom-3 right-3 z-20">
      <audio ref={audioRef} src={audioSrc} preload="none" />
      
      {/* Sonar pulse animation when active */}
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/40"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
        />
      )}

      <motion.button
      className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5
                 px-3 py-2 rounded-full
                 bg-white/10 backdrop-blur-xl
                 border border-oxford/10
                 text-oxford/90 hover:bg-white/20
                 transition-colors duration-300"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      data-cursor="view"
    >
      {active ? (
        <Pause size={12} strokeWidth={2} />
      ) : (
        <Play size={12} strokeWidth={2} />
      )}
      <span className="font-body text-[9px] font-semibold tracking-widest uppercase">
        {active ? 'PAUSE' : 'PLAY'}
      </span>
    </motion.button>
    </div>
  )
}
