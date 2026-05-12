import { Layers, Zap, Gauge } from 'lucide-react';
import { FadeInView } from './FadeInView';

const techRow1 = [
  'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite',
  'React Router', 'Lucide React', 'CSS3', 'HTML5', 'JavaScript ES6+',
  'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite',
  'React Router', 'Lucide React', 'CSS3', 'HTML5', 'JavaScript ES6+',
];

const techRow2 = [
  'Git & GitHub', 'Responsive Design', 'Component Architecture', 'REST APIs',
  'Performance Optimization', 'Accessibility', 'Dark Mode', 'Mobile-First',
  'Git & GitHub', 'Responsive Design', 'Component Architecture', 'REST APIs',
  'Performance Optimization', 'Accessibility', 'Dark Mode', 'Mobile-First',
];

const capabilities = [
  {
    icon: Layers,
    title: 'Frontend Architecture',
    description: 'Component-driven systems with TypeScript, clean separation of concerns, and scalable state patterns.',
  },
  {
    icon: Zap,
    title: 'Motion & Animation',
    description: 'Purposeful micro-interactions with Framer Motion — transitions that guide attention and reward engagement.',
  },
  {
    icon: Gauge,
    title: 'Performance & Accessibility',
    description: 'Lazy loading, optimized rendering, semantic HTML and ARIA attributes for inclusive, fast interfaces.',
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '8rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', marginBottom: '4rem' }}>
        <FadeInView>
          <span className="section-number">03 — TECH STACK</span>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--platinum)',
              lineHeight: 1.1,
            }}
          >
            Capabilities
          </h2>
        </FadeInView>
      </div>

      {/* Marquee rows */}
      <div style={{ marginBottom: '1rem', overflow: 'hidden' }}>
        <div
          className="animate-marquee-left"
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
          }}
        >
          {techRow1.map((tech, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
                padding: '0.4rem 1rem',
                border: '1px solid rgba(201,168,76,0.1)',
                whiteSpace: 'nowrap',
                background: 'rgba(201,168,76,0.03)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '5rem', overflow: 'hidden' }}>
        <div
          className="animate-marquee-right"
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
          }}
        >
          {techRow2.map((tech, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                letterSpacing: '0.1em',
                padding: '0.4rem 1rem',
                border: '1px solid rgba(201,168,76,0.08)',
                whiteSpace: 'nowrap',
                background: 'rgba(201,168,76,0.02)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Capabilities grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}
        >
          {capabilities.map((cap, i) => (
            <FadeInView key={cap.title} delay={i * 0.1}>
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid rgba(201,168,76,0.08)',
                  padding: '2rem',
                  transition: 'border-color 0.25s ease',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.2)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.08)')}
              >
                <cap.icon
                  size={20}
                  style={{ color: 'var(--gold)', marginBottom: '1.25rem', opacity: 0.8 }}
                />
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    color: 'var(--platinum)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {cap.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="gold-divider" style={{ marginTop: '6rem', marginBottom: 0 }} />
      </div>
    </section>
  );
}
