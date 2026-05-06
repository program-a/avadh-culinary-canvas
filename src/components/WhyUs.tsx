import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { n: "I", t: "Multi-Brand House", b: "Three distinct culinary identities under one rigorous standard of craft." },
  { n: "II", t: "Founder-Led", b: "Every decision passes through the founders. No compromise leaves the kitchen." },
  { n: "III", t: "Atmospheric Design", b: "Light, sound, scent, surface — composed as deliberately as the menu." },
  { n: "IV", t: "Modern Indian Lens", b: "Born in Gurgaon. Global in reference, unmistakably Indian in soul." },
  { n: "V", t: "Built to Scale", b: "Operational backbone designed for international expansion without dilution." },
  { n: "VI", t: "Obsessive Sourcing", b: "Provenance-led ingredients, traceable, seasonal, uncompromised." },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 md:px-10 max-w-[1400px] mx-auto w-full mb-12">
          <div className="text-eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block w-10 h-px bg-crimson" /> Chapter 04 — Why Avadh
          </div>
          <h2 className="text-display text-4xl md:text-7xl text-ivory">
            Six reasons. <em className="font-serif italic text-crimson">One</em> standard.
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-10 pl-6 md:pl-10 will-change-transform">
          {cards.map((c) => (
            <article
              key={c.n}
              className="relative shrink-0 w-[80vw] md:w-[42vw] lg:w-[34vw] h-[55vh] p-8 md:p-10 flex flex-col justify-between border border-border bg-surface/50 backdrop-blur-sm overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/0 to-crimson/0 group-hover:from-crimson/10 transition-all duration-700" />
              <div className="relative flex justify-between items-start">
                <span className="font-serif italic text-7xl md:text-8xl text-crimson/70">{c.n}</span>
                <span className="text-eyebrow">— Pillar</span>
              </div>
              <div className="relative">
                <h3 className="text-display text-3xl md:text-4xl text-ivory mb-4">{c.t}</h3>
                <p className="text-warm-gray text-sm md:text-base leading-relaxed max-w-sm">{c.b}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
