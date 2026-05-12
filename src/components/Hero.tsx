import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        display: 'grid',
        gridTemplateRows: '1fr',
      }}
    >
      {/* Breathing radial aura */}
      <div
        className="aura-breath"
        style={{
          position: 'absolute',
          top: '20%',
          left: '60%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,170,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Top-left label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '6rem',
          left: '2rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.7rem',
          color: 'var(--text-secondary)',
          letterSpacing: '0.1em',
          zIndex: 10,
        }}
      >
        Frontend Developer — React · TypeScript · UI
      </motion.div>

      {/* Bottom-right vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          right: '2rem',
          writingMode: 'vertical-rl',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--text-secondary)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          zIndex: 10,
          transform: 'rotate(180deg)',
        }}
      >
        Portfolio 2024–2025
      </motion.div>

      {/* Main content — left-anchored vertical center */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '0 2rem',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '700px' }}
        >
          {/* Section number */}
          <motion.span variants={fadeUp} className="section-number">
            00 —
          </motion.span>

          {/* Name block */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                fontWeight: 300,
                color: 'var(--platinum)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '0.1em',
              }}
            >
              MARVELOUS
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.5rem, 7vw, 7rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--gold)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              AGBROKO
            </div>
          </motion.div>

          {/* Gold line */}
          <motion.div
            variants={fadeUp}
            style={{
              width: '200px',
              height: '1px',
              backgroundColor: 'var(--gold)',
              margin: '2rem 0',
              opacity: 0.6,
            }}
          />

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '3rem',
            }}
          >
            Crafting interfaces that feel inevitable.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}
          >
            <button
              onClick={scrollToProjects}
              style={{
                background: 'transparent',
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                padding: '0.85rem 2rem',
                cursor: 'none',
                transition: 'background 0.2s ease, color 0.2s ease',
                textTransform: 'uppercase',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--gold)';
              }}
            >
              View Work
            </button>

            <button
              onClick={scrollToContact}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                cursor: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.2s ease',
                padding: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--platinum)';
                const arrow = e.currentTarget.querySelector('svg') as SVGElement | null;
                if (arrow) (arrow as SVGElement & { style: CSSStyleDeclaration }).style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const arrow = e.currentTarget.querySelector('svg') as SVGElement | null;
                if (arrow) (arrow as SVGElement & { style: CSSStyleDeclaration }).style.transform = 'translateX(0)';
              }}
            >
              Contact Me
              <ArrowRight size={14} style={{ transition: 'transform 0.2s ease' }} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            opacity: 0.5,
          }}
        />
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
