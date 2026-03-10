import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#tech', label: 'Tech Stack' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 pointer-events-auto">
        {/* Global Navigation - Tier 1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center justify-between gap-4 px-6 py-3 rounded-2xl bg-[var(--ink2)]/80 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-sky-400 select-none"
          >
            MO
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-[var(--faint)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              to="/#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 transition-all shadow-[0_2px_12px_rgba(16,185,129,0.3)]"
            >
              <FileDown className="w-4 h-4" />
              Hire Me
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col p-4 gap-1">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 mt-2 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10"
                  >
                    <FileDown className="w-4 h-4" />
                    Hire Me
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
