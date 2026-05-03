export function Marquee() {
  const items = ["LET'S GET TANGY", '★', 'NEVER FRIED', '★', 'FAMILY RECIPE', '★', 'SWEET ALWAYS', '★', '12g PROTEIN', '★', 'COLD-PRESSED', '★', 'GUT-LOVED', '★']
  const row = [...items, ...items, ...items]

  return (
    <section className="bg-[#1a1a1a] py-5 overflow-hidden border-y-4 border-[#E94B5C]">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: 'marquee 35s linear infinite' }}>
        {row.map((it, i) => (
          <div
            key={i}
            className="text-[#FFF8EE] text-2xl md:text-3xl font-black tracking-tight"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {it === '★' ? <span className="text-[#FFD93D]">★</span> : it}
          </div>
        ))}
      </div>
    </section>
  )
}
