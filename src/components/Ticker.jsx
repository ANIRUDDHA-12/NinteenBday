/**
 * Ticker — Fixed bottom market-style horizontal marquee.
 *
 * A sleek dark strip at the very bottom of the viewport with
 * an infinite CSS marquee scrolling satirical "market" data.
 * Duplicated content ensures seamless looping.
 */
export default function Ticker() {
  const data =
    'AISH ▲ 19.00 (ALL-TIME HIGH)  •  VIBES INDEX +5.4%  •  EXAM PREP VOLATILITY ▼ 1.2%  •  GLOW UP ▲ 100%  •  PORTFOLIO SECURE  •  CAFFEINE FUTURES ▲ 3.8%  •  SLAY METRICS: OUTPERFORMING  •  '

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-charcoal overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate content for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="inline-block py-2 px-4 font-body text-ticker uppercase tracking-widest text-oxford/80"
          >
            {data}
          </span>
        ))}
      </div>
    </div>
  )
}
