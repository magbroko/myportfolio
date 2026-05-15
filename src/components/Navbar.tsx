import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const MOBILE_QUERY = '(max-width: 767px)';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY).matches : false
  );
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track viewport so we can switch between desktop links and mobile hamburger
  // without relying on Tailwind classes (the existing inline styles override
  // them) — this keeps the responsive switch authoritative and contained.
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  // Auto-close the dropdown if the viewport grows past the mobile breakpoint
  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);

  // Close on outside tap (pointerdown covers both mouse and touch)
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      const inDropdown = dropdownRef.current?.contains(target);
      const inHamburger = hamburgerRef.current?.contains(target);
      if (!inDropdown && !inHamburger) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
        backgroundColor: scrolled || menuOpen ? 'rgba(8,10,15,0.85)' : 'transparent',
        borderBottom: scrolled || menuOpen ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'var(--gold)',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          M.A
        </Link>

        {/* Desktop nav (≥ 768px) */}
        {!isMobile && (
          <nav aria-label="Primary navigation" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 400,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--platinum-dim)',
                  cursor: 'none',
                  transition: 'color 0.2s ease',
                  padding: '0.25rem 0',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--platinum-dim)')}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}

        {/* Mobile hamburger (< 768px) */}
        {isMobile && (
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-mobile-menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              cursor: 'none',
              padding: 0,
              width: 44,
              height: 44,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  <line x1="17" y1="5" x2="5" y2="17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile slide-down dropdown */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            ref={dropdownRef}
            id="primary-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              overflow: 'hidden',
              backgroundColor: 'rgba(8,10,15,0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            <nav
              aria-label="Mobile navigation"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                padding: '0.75rem clamp(1rem, 5vw, 2rem) 1.5rem',
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.85rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    cursor: 'none',
                    padding: '1rem 0.5rem',
                    width: '100%',
                    minHeight: 44,
                    textAlign: 'center',
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
