import { useState, useEffect } from 'react'

/**
 * Custom hook to track a CSS media query.
 * Returns true when the viewport matches the given query string.
 * Used primarily to detect mobile (<768px) for disabling drag physics.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)

    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [query])

  return matches
}
