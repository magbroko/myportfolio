import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

/**
 * Sub-nav bar with back navigation for project detail pages.
 * Sophisticated Heritage: ghost nav, maroon accent, no overlap with main Navbar.
 */
export function BackNavigation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 right-0 top-[5.5rem] z-40 border-b border-[var(--border)] bg-[var(--beige-dk)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3">
        <Link
          to="/"
          aria-label="Back to portfolio"
          className="ghost-nav-link group inline-flex items-center gap-3 w-10 h-10 md:w-auto md:h-auto md:py-2 md:pr-4 md:pl-3 rounded-lg border border-[var(--maroon-glow)] bg-white/5 backdrop-blur-xl text-white font-medium tracking-wide transition-all duration-[var(--ease-s)] [transition-timing-function:var(--ease)] hover:border-[var(--maroon)]/60 active:scale-[0.98]"
        >
          <ArrowLeft
            className="w-4 h-4 flex-shrink-0 transition-transform duration-[var(--ease-s)] group-hover:-translate-x-1.5 [transition-timing-function:var(--ease)]"
            strokeWidth={2}
            aria-hidden
          />
          <span className="hidden md:inline-flex items-center gap-2">
            <span className="text-[var(--muted)] text-xs font-medium uppercase tracking-widest">
              01 / Project
            </span>
            <span className="text-white">Back to portfolio</span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
