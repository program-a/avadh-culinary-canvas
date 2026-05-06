import { motion } from "framer-motion";
import swoosh from "@/assets/swoosh-pattern.jpg";

const words = "We exist to elevate the everyday meal into a moment of memory — through craft, atmosphere and unwavering taste.".split(" ");

export function Vision() {
  return (
    <section id="vision" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <img src={swoosh} alt="" aria-hidden width={1920} height={800} loading="lazy" className="absolute inset-x-0 bottom-0 w-full opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-3">
            <div className="text-eyebrow mb-4">Chapter 03</div>
            <div className="text-eyebrow text-crimson">Mission &amp; Vision</div>
          </div>

          <div className="md:col-span-9">
            <h2 className="text-display text-3xl md:text-6xl text-ivory leading-[1.1] flex flex-wrap gap-x-3 gap-y-2">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.1, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30%" }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  className="inline-block"
                >
                  {w === "memory" ? <em className="text-crimson italic font-serif">{w}</em> : w}
                </motion.span>
              ))}
            </h2>

            <div className="mt-20 grid md:grid-cols-3 gap-10">
              {[
                { k: "01", t: "Craft", b: "Recipes obsessed over, refined, never compromised." },
                { k: "02", t: "Atmosphere", b: "Spaces designed as scenes — every detail intentional." },
                { k: "03", t: "Hospitality", b: "An Indian sense of warmth, cinematically delivered." },
              ].map((c, i) => (
                <motion.div
                  key={c.k}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="hairline mb-6" />
                  <div className="text-eyebrow text-crimson mb-3">{c.k}</div>
                  <h4 className="text-display text-3xl text-ivory mb-3">{c.t}</h4>
                  <p className="text-warm-gray text-sm leading-relaxed">{c.b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
