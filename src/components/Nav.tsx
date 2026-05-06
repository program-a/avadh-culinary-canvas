import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 flex items-center justify-between mix-blend-difference text-ivory"
    >
      <a href="#top" className="font-serif text-xl tracking-tight">
        Avadh<span className="text-crimson">.</span>
      </a>
      <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.28em] uppercase">
        <a href="#story" className="hover:text-crimson transition-colors">Story</a>
        <a href="#brands" className="hover:text-crimson transition-colors">Brands</a>
        <a href="#vision" className="hover:text-crimson transition-colors">Vision</a>
        <a href="#contact" className="hover:text-crimson transition-colors">Contact</a>
      </nav>
      <a href="#contact" className="text-[11px] tracking-[0.28em] uppercase border-b border-ivory/40 pb-1 hover:border-crimson hover:text-crimson transition-colors">
        Reserve
      </a>
    </motion.header>
  );
}
