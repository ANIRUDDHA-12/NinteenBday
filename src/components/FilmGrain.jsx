/**
 * FilmGrain — Fixed full-screen noise overlay.
 *
 * Uses an inline SVG feTurbulence filter to generate organic film grain.
 * Applied with mix-blend-mode: multiply at ~3% opacity so the digital
 * screen feels like tactile paper / analogue film.
 *
 * pointer-events: none ensures it never blocks interaction.
 */
export default function FilmGrain() {
  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none"
      style={{ mixBlendMode: 'multiply' }}
    >
      {/* SVG noise source (invisible, defines the filter) */}
      <svg className="absolute w-0 h-0">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Grain layer */}
      <div
        className="absolute inset-0"
        style={{
          filter: 'url(#grain)',
          opacity: 0.035,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  )
}
