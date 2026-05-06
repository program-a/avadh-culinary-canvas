import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;
    let raf = 0;
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / duration);
      setCount(Math.floor(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.7, 0, 0.3, 1], delay: 0.1 } }}
            className="absolute inset-0 bg-background"
          />
          <div className="relative z-10 flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-eyebrow"
            >
              Avadh — Est. Gurgaon
            </motion.div>

            <svg viewBox="0 0 600 80" className="w-[60vw] max-w-[480px]">
              <motion.path
                d="M 0 40 Q 150 0, 300 40 T 600 40"
                stroke="oklch(0.52 0.20 25)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />
            </svg>

            <div className="flex items-baseline gap-2 font-serif">
              <span className="text-6xl text-ivory tabular-nums">{count.toString().padStart(2, "0")}</span>
              <span className="text-2xl text-warm-gray">/100</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
