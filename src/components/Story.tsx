import { motion } from "framer-motion";
import foundersImg from "@/assets/founders.jpg";

const milestones = [
  { year: "2018", title: "The First Spark", body: "Two restaurateurs in Gurgaon imagine an Indian-born culinary house unbound by category." },
  { year: "2020", title: "Asian Kitchen Bokchoy", body: "A flame-driven Pan-Asian concept opens — wok, smoke and intent." },
  { year: "2022", title: "Swooshi Arrives", body: "A futuristic Japanese fusion brand carves its red signature into the city." },
  { year: "2024", title: "Lil Buns", body: "Soft, warm, modern comfort — the third chapter of the house." },
];

export function Story() {
  return (
    <section id="story" className="relative py-32 md:py-48 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          {/* Left intro */}
          <div className="md:col-span-5 md:sticky md:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className="text-eyebrow mb-8 flex items-center gap-3"
            >
              <span className="inline-block w-10 h-px bg-crimson" />
              Chapter 01 — The House
            </motion.div>

            <h2 className="text-display text-5xl md:text-7xl text-ivory mb-10">
              A house built on <em className="text-crimson not-italic font-serif italic">obsession</em>.
            </h2>

            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                src={foundersImg}
                alt="Founders of Avadh Food and Beverages"
                width={1080}
                height={1440}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-eyebrow text-ivory">The Founders, Gurgaon</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="md:col-span-7 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:block hidden" />
            <ul className="space-y-20 md:pl-16">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-16 top-3 hidden md:flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-crimson glow-crimson" />
                    <span className="w-10 h-px bg-border" />
                  </span>
                  <div className="text-eyebrow text-crimson mb-3">{m.year}</div>
                  <h3 className="text-display text-3xl md:text-5xl text-ivory mb-4">{m.title}</h3>
                  <p className="text-warm-gray text-base md:text-lg max-w-lg leading-relaxed">{m.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
