import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="text-eyebrow mb-8 flex items-center gap-3">
              <span className="inline-block w-10 h-px bg-crimson" /> Chapter 05 — Begin a Conversation
            </div>
            <h2 className="text-display text-5xl md:text-8xl text-ivory leading-[0.95]">
              Let's <em className="font-serif italic text-crimson">create</em><br />
              something rare.
            </h2>
            <p className="mt-10 text-warm-gray text-base md:text-lg max-w-md leading-relaxed">
              For partnerships, press, private dining, or franchise enquiries — we read every message personally.
            </p>

            <div className="mt-16 space-y-6">
              {[
                { l: "Studio", v: "Gurgaon, Haryana — India" },
                { l: "Email", v: "hello@avadhfoods.in" },
                { l: "Voice", v: "+91 124 000 0000" },
              ].map((row) => (
                <div key={row.l} className="grid grid-cols-12 gap-4 py-4 border-b border-border">
                  <span className="col-span-3 text-eyebrow">{row.l}</span>
                  <span className="col-span-9 font-serif text-xl md:text-2xl text-ivory">{row.v}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@avadhfoods.in"
              className="mt-14 inline-flex items-center gap-4 px-8 py-5 border border-ivory/30 text-[11px] tracking-[0.32em] uppercase text-ivory hover:bg-crimson hover:border-crimson hover:text-ivory transition-all duration-500 group"
            >
              <span>Begin the conversation</span>
              <span className="text-crimson group-hover:text-ivory group-hover:translate-x-1 transition-all">→</span>
            </a>
          </div>

          {/* Aesthetic "map" */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square border border-border bg-surface overflow-hidden"
            >
              {/* Grid */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.94 0.012 80 / 0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <motion.path
                  d="M 50 280 Q 150 200, 220 240 T 380 180"
                  stroke="oklch(0.52 0.20 25 / 0.6)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                <circle cx="220" cy="220" r="4" fill="oklch(0.52 0.20 25)" />
                <circle cx="220" cy="220" r="20" fill="none" stroke="oklch(0.52 0.20 25 / 0.4)">
                  <animate attributeName="r" values="6;30;6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-eyebrow">
                <div>
                  <div className="text-ivory mb-1">28.4595° N</div>
                  <div className="text-ivory">77.0266° E</div>
                </div>
                <div className="text-crimson">Gurgaon</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-eyebrow">
          <div>© {new Date().getFullYear()} Avadh Food &amp; Beverages</div>
          <div className="font-serif italic text-base text-ivory normal-case tracking-normal">Crafted by Passion. Inspired by Taste.</div>
          <div>Made in India</div>
        </div>
      </div>
    </section>
  );
}
