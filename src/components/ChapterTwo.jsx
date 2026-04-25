import { motion } from 'framer-motion'
import MiniAudioNode from './MiniAudioNode'

/**
 * Chapter 2 — "The Vault" (Dark Mode)
 *
 * Photos 7–13 in asymmetric masonry. Grayscale→colour on hover.
 * MiniAudioNodes injected on photos 8 and 11.
 * staggerChildren scroll reveal with whileInView.
 */

const VAULT_IMAGES = [
  { id: 7,  src: '/photos/7.jpg',  label: 'NIGHT // VIBES',   span: 'row-span-2' },
  { id: 8,  src: '/photos/8.jpg',  label: 'ECHOES OF TIME',   span: '',            hasAudio: true },
  { id: 9,  src: '/photos/9.jpg',  label: 'TEXTURES',         span: '' },
  { id: 10, src: '/photos/10.jpg', label: 'ARCHIVE // 03',    span: 'row-span-2' },
  { id: 11, src: '/photos/11.jpg', label: 'AISH // NINETEEN', span: '',            hasAudio: true },
  { id: 12, src: '/photos/12.jpg', label: 'SILHOUETTE',       span: '' },
  { id: 13, src: '/photos/13.jpg', label: 'GOLDEN HOUR',      span: 'col-span-2' },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function ChapterTwo() {
  return (
    <section className="relative w-full bg-charcoal py-24 md:py-32 px-6 md:px-16 overflow-hidden" id="chapter-2">
      {/* ——— Shutter Transition ——— */}
      <motion.div
        className="absolute inset-0 z-50 bg-black"
        initial={{ y: 0 }}
        whileInView={{ y: '-100%' }}
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 0.3, ease: 'easeIn' }}
      />

      {/* ——— Section header ——— */}
      <motion.div
        className="mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-ui-label uppercase tracking-widest text-blush/60 mb-3">
          Chapter Two
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-oxford font-normal" style={{ letterSpacing: '-0.03em' }}>
          The Vault.
        </h2>
        <div className="w-12 h-px bg-birkin/40 mt-5" />
      </motion.div>

      {/* ——— Asymmetric masonry grid ——— */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {VAULT_IMAGES.map((img) => (
          <motion.div
            key={img.id}
            variants={itemVariant}
            className={`relative overflow-hidden rounded-card group ${img.span}`}
            data-cursor="view"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover
                         grayscale-[30%] group-hover:grayscale-0
                         scale-100 group-hover:scale-105
                         transition-all duration-700 ease-out"
              draggable={false}
            />

            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            flex items-end p-4">
              <p className="font-body text-ui-label uppercase tracking-widest text-oxford/90">
                {img.label}
              </p>
            </div>

            {/* Audio node on selected images */}
            {img.hasAudio && (
              <MiniAudioNode id={img.id} />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* ——— Bottom flourish ——— */}
      <motion.div
        className="mt-16 md:mt-24 flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="flex-1 h-px bg-oxford/10" />
        <p className="font-body text-ticker text-oxford/30 uppercase tracking-widest">
          7 of 19 frames archived
        </p>
        <div className="flex-1 h-px bg-oxford/10" />
      </motion.div>
    </section>
  )
}
