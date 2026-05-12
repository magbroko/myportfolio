import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { projects } from '../data/portfolio';
import { FadeInView } from '../components/FadeInView';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--bg-primary)',
          gap: '2rem',
        }}
      >
        <p style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
          Project not found.
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'none',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.85rem',
            padding: '0.75rem 1.75rem',
            cursor: 'none',
          }}
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-5%', opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '6rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.85rem',
              cursor: 'none',
              letterSpacing: '0.05em',
              transition: 'opacity 0.2s ease',
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <ArrowLeft size={14} />
            Back to Projects
          </button>

          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Hero */}
        <FadeInView>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 300,
              color: 'var(--platinum)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
            }}
          >
            {project.subtitle}
          </p>
        </FadeInView>

        {/* Gold divider */}
        <div className="gold-divider" style={{ marginTop: '3rem' }} />

        {/* Main content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'start',
            paddingBottom: '8rem',
          }}
        >
          {/* Left: overview + highlights (65%) */}
          <div style={{ flex: '1 1 60%' }}>
            <FadeInView>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  color: 'var(--gold)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                Overview
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.85,
                  marginBottom: '3rem',
                }}
              >
                {project.summary}
              </p>
            </FadeInView>

            <FadeInView delay={0.1}>
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
                Key Achievements
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--gold)',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.85rem',
                        lineHeight: 1.7,
                        flexShrink: 0,
                      }}
                    >
                      —
                    </span>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.75,
                      }}
                    >
                      {h}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </FadeInView>
          </div>

          {/* Right: sticky sidebar (35%) */}
          <div style={{ flex: '1 1 30%' }}>
            <FadeInView delay={0.15}>
              <div
                style={{
                  position: 'sticky',
                  top: '6rem',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid rgba(201,168,76,0.1)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {/* Tech stack */}
                <div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.65rem',
                      color: 'var(--gold)',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    Tech Stack
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {project.tech.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.65rem',
                          color: 'var(--gold)',
                          background: 'rgba(201,168,76,0.08)',
                          border: '1px solid rgba(201,168,76,0.2)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '2px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.6rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Category
                  </div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: 'var(--platinum)' }}>
                    {project.category}
                  </div>
                </div>

                {/* CTA buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={project.githubUrl}
                    aria-label={`GitHub repository for ${project.title}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      padding: '0.85rem',
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: 'var(--gold)',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.82rem',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      transition: 'background 0.2s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <Github size={14} />
                    GitHub Repository
                  </a>
                  <a
                    href={project.liveUrl}
                    aria-label={`Live demo for ${project.title}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      padding: '0.85rem',
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: 'var(--gold)',
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.82rem',
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      transition: 'background 0.2s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
