import { FadeInView } from './FadeInView';

const credentials = [
  '> React 18 + TypeScript',
  '> Framer Motion',
  '> Tailwind CSS',
  '> 6 production projects',
  '> Available for hire',
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 2rem)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <FadeInView>
          <span className="section-number">01 — ABOUT</span>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--platinum)',
              marginBottom: '4rem',
              lineHeight: 1.1,
            }}
          >
            The Developer
          </h2>
        </FadeInView>

        <div
          style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(2rem, 6vw, 5rem)',
          alignItems: 'start',
          }}
        >
          {/* Left: paragraphs */}
          <FadeInView delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                }}
              >
                My journey began with Vanilla JavaScript and Bootstrap — learning
                the fundamentals of the web from first principles. That foundation
                gave me an intuition for how the DOM works, how browsers render,
                and why performance decisions matter at every layer.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                }}
              >
                Today I build with React 18 and TypeScript, but the craft hasn't
                changed — just the tools. I'm drawn to the intersection of motion
                design and interface performance: animations that feel native,
                interactions that build trust, and UIs that communicate hierarchy
                without saying a word.
              </p>
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.9,
                }}
              >
                I approach every client-facing product as if it were a flagship —
                because for the people using it, it is. From EdTech platforms to
                HealthTech dashboards and creative portfolios, I build with the
                same attention to detail regardless of scope.
              </p>
            </div>
          </FadeInView>

          {/* Right: credentials */}
          <FadeInView delay={0.2}>
            <div>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                Credentials
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {credentials.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.03em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: 'var(--teal)' }}>&gt;</span>
                    <span>{item.replace('> ', '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="gold-divider" style={{ marginTop: '6rem', marginBottom: 0 }} />
      </div>
    </section>
  );
}
