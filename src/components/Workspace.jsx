import { useRef } from 'react'
import DraggableCard from './DraggableCard'

/**
 * Workspace — The "scattered desk" canvas for desktop viewports.
 *
 * Renders all cards as absolutely-positioned, draggable elements
 * within a full-viewport container. The container ref is passed
 * to each card as the drag boundary.
 *
 * Hidden on mobile (md:block) — replaced by MobileGallery.
 */
export default function Workspace({ cards, selectedCard, onCardClick, isMobile }) {
  const constraintsRef = useRef(null)

  if (isMobile) return null

  return (
    <div
      ref={constraintsRef}
      className="absolute inset-0 z-10 hidden md:block"
    >
      {cards.map((card) => (
        <DraggableCard
          key={card.id}
          card={card}
          constraintsRef={constraintsRef}
          isMobile={false}
          onClick={onCardClick}
          isHidden={selectedCard?.id === card.id}
        />
      ))}
    </div>
  )
}
