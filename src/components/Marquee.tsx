export function Marquee() {
  const items = ["Asian Kitchen Bokchoy", "Swooshi", "Lil Buns", "Crafted in Gurgaon", "Est. India"];
  return (
    <div className="relative border-y border-border py-8 overflow-hidden bg-surface/40">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 px-12">
            <span className="font-serif italic text-3xl md:text-5xl text-ivory/90">{t}</span>
            <span className="text-crimson text-2xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
