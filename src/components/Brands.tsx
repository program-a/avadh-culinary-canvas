import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bokchoy from "@/assets/brand-bokchoy.jpg";
import swooshi from "@/assets/brand-swooshi.jpg";
import lilbuns from "@/assets/brand-lilbuns.jpg";

type Brand = {
  index: string;
  name: string;
  tagline: string;
  body: string;
  image: string;
  accent: string;
  motif: "flame" | "wave" | "soft";
};

const brands: Brand[] = [
  {
    index: "01",
    name: "Asian Kitchen Bokchoy",
    tagline: "The flame remembers",
    body: "A pan-Asian temple where the wok dictates rhythm. Smoke, scallion, sesame — composed with intent, served with restraint.",
    image: bokchoy,
    accent: "from-crimson/30 via-transparent to-transparent",
    motif: "flame",
  },
  {
    index: "02",
    name: "Swooshi",
    tagline: "Tradition, accelerated",
    body: "Japanese fusion sketched in a single red line. Precision sushi craft pulled forward into a kinetic, neon-lit future.",
    image: swooshi,
    accent: "from-crimson/40 via-transparent to-transparent",
    motif: "wave",
  },
  {
    index: "03",
    name: "Lil Buns",
    tagline: "Soft is the new luxury",
    body: "Pillow-soft bao and slow-warmed comfort. A study in tenderness — playful, premium, deeply familiar.",
    image: lilbuns,
    accent: "from-amber-200/20 via-transparent to-transparent",
    motif: "soft",
  },
];

function BrandPanel({ brand, idx }: { brand: Brand; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const reverse = idx % 2 === 1;

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent} opacity-60`} />

      <div className="relative max-w-[1400px] mx-auto w-full grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Image */}
        <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
          <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
            <motion.div style={{ y: imgY }} className="absolute -inset-y-[15%] inset-x-0">
              <motion.img
                initial={{ scale: 1.25, filter: "brightness(0.5)" }}
                whileInView={{ scale: 1, filter: "brightness(0.95)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                src={brand.image}
                alt={brand.name}
                width={1080}
                height={1600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 vignette pointer-events-none" />

            {/* Motif overlay */}
            {brand.motif === "wave" && (
              <svg viewBox="0 0 600 600" className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen">
                <motion.path
                  d="M -50 350 Q 150 250, 300 350 T 650 350"
                  stroke="oklch(0.52 0.20 25 / 0.7)"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M -50 380 Q 200 280, 320 400 T 650 380"
                  stroke="oklch(0.52 0.20 25 / 0.4)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
                />
              </svg>
            )}
            {brand.motif === "flame" && (
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.5, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-crimson/30 via-orange-500/10 to-transparent mix-blend-screen pointer-events-none"
              />
            )}
            {brand.motif === "soft" && (
              <div className="absolute inset-0 bg-gradient-radial from-amber-100/10 to-transparent mix-blend-soft-light pointer-events-none" />
            )}

            <div className="absolute top-6 left-6 text-eyebrow text-ivory/80">— {brand.index} / 03</div>
          </div>
        </div>

        {/* Text */}
        <motion.div style={{ y: textY }} className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <div className="text-eyebrow text-crimson mb-6">Brand {brand.index}</div>
          <h3 className="text-display text-5xl md:text-7xl text-ivory mb-6">{brand.name}</h3>
          <p className="font-serif italic text-2xl md:text-3xl text-ivory/80 mb-8">"{brand.tagline}"</p>
          <p className="text-warm-gray text-base md:text-lg max-w-md leading-relaxed mb-10">{brand.body}</p>
          <a href="#contact" className="group inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-ivory">
            <span className="relative">
              Visit Brand
              <span className="absolute -bottom-2 left-0 h-px w-full bg-ivory/30 group-hover:bg-crimson transition-colors" />
            </span>
            <span className="text-crimson group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <div id="brands" className="relative">
      <div className="px-6 md:px-10 pt-32 pb-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-eyebrow mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-crimson" /> Chapter 02 — The Brands
        </motion.div>
        <h2 className="text-display text-5xl md:text-8xl text-ivory max-w-4xl">
          Three worlds, <em className="font-serif italic text-crimson">one</em> kitchen.
        </h2>
      </div>

      {brands.map((b, i) => (
        <BrandPanel key={b.name} brand={b} idx={i} />
      ))}
    </div>
  );
}
