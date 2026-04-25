import { useState } from 'react'
import { LayoutGroup } from 'framer-motion'
import FilmGrain from './components/FilmGrain'
import CustomCursor from './components/CustomCursor'
import EntryScreen from './components/EntryScreen'
import SpotifyPlayer from './components/SpotifyPlayer'
import ChapterOne from './components/ChapterOne'
import ChapterTwo from './components/ChapterTwo'
import PortfolioChart from './components/PortfolioChart'
import ChapterFive from './components/ChapterFive'
import Ticker from './components/Ticker'

/**
 * App — Root of "Project 19: Aishwarya. Nineteen."
 * 5-Part Interactive Editorial Experience (Director's Cut).
 */
export default function App() {
  const [gateDismissed, setGateDismissed] = useState(false)

  return (
    <LayoutGroup>
      {/* ——— Phase 1: Entry Gate ——— */}
      {!gateDismissed && <EntryScreen onDismiss={() => setGateDismissed(true)} />}

      {/* ——— Tactile layer ——— */}
      <FilmGrain />
      <CustomCursor />

      {/* ——— Cinematic scroll ——— */}
      {/* scale background slightly down and then back to normal when gate dismisses */}
      <main
        className="relative w-full pb-8 transition-transform duration-[1.5s] ease-out origin-center"
        style={{ transform: gateDismissed ? 'scale(1)' : 'scale(1.05)' }}
      >
        <ChapterOne gateDismissed={gateDismissed} />
        <ChapterTwo />
        <PortfolioChart />
        <ChapterFive />
      </main>

      {/* ——— Fixed global components ——— */}
      {gateDismissed && <SpotifyPlayer />}
      {gateDismissed && <Ticker />}
    </LayoutGroup>
  )
}
