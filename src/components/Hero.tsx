import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const reveal = {
  hidden: { y: "120%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 2.2 + i * 0.12 },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden grain">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-slow-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-eyebrow mb-8 md:mb-10 flex items-center gap-3"
        >
          <span className="inline-block w-10 h-px bg-crimson" />
          A Multi-Brand Culinary House — Gurgaon, India
        </motion.div>

        <h1 className="text-display text-[clamp(3rem,11vw,11rem)] text-ivory">
          {["Crafted by", "Passion."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={reveal} initial="hidden" animate="show" custom={i} className="block">
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden italic text-crimson">
            <motion.span variants={reveal} initial="hidden" animate="show" custom={2} className="block">
              Inspired by Taste.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <p className="max-w-md text-sm md:text-base text-warm-gray leading-relaxed">
            Three brands. One obsession. A modern Indian house redefining how the world experiences flavour, atmosphere and craft.
          </p>
          <div className="flex items-center gap-6">
            <a href="#brands" className="group relative inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase text-ivory">
              <span className="relative">
                Discover Our Brands
                <span className="absolute -bottom-2 left-0 h-px w-full bg-ivory/40 group-hover:bg-crimson transition-colors" />
              </span>
              <span className="text-crimson">→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-warm-gray"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-gradient-to-b from-crimson to-transparent"
        />
      </motion.div>
    </section>
  );
}
