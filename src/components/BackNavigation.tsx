import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

/**
 * Sub-nav bar with back navigation for project detail pages.
 * Ghost Navigation: transparent glassmorphism, maroon accent, no overlap with main Navbar.
 */
export function BackNavigation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 right-0 top-[7.5rem] z-40 border-b border-white/[0.08] bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <Link
          to="/"
          aria-label="Back to portfolio"
          className="ghost-nav-link group inline-flex items-center justify-center md:justify-start gap-2.5 w-11 h-11 md:w-auto md:h-auto md:py-2.5 md:pr-5 md:pl-3 rounded-xl border border-[var(--maroon-glow)]/80 bg-white/[0.03] backdrop-blur-xl text-slate-200 font-medium tracking-wide transition-all duration-[var(--ease-s)] [transition-timing-function:var(--ease)] hover:bg-white/[0.06] hover:border-[var(--maroon)]/70 active:scale-[0.98]"
        >
          <ArrowLeft
            className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover:text-white transition-all duration-[var(--ease-s)] group-hover:-translate-x-1.5 [transition-timing-function:var(--ease)]"
            strokeWidth={2}
            aria-hidden
          />
          <span className="hidden md:inline-flex items-center gap-3">
            <span className="text-[var(--muted)] text-[11px] font-medium uppercase tracking-[0.2em]">
              01 / Project
            </span>
            <span className="text-white group-hover:text-white">Back to portfolio</span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
