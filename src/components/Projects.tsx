import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView } from './FadeInView';
import ProjectCard from './ProjectCard';
import { projects, type Project } from '../data/portfolio';

type FilterKey = 'All' | 'Featured' | 'EdTech' | 'HealthTech' | 'Creative' | 'E-Commerce';

const filters: FilterKey[] = ['All', 'Featured', 'EdTech', 'HealthTech', 'Creative', 'E-Commerce'];

function matchFilter(project: Project, filter: FilterKey): boolean {
  if (filter === 'All') return true;
  if (filter === 'Featured') return project.featured;
  if (filter === 'EdTech') return project.category.toLowerCase().includes('edtech');
  if (filter === 'HealthTech') return project.category.toLowerCase().includes('healthtech');
  if (filter === 'Creative') return project.category.toLowerCase().includes('creative');
  if (filter === 'E-Commerce') return project.category.toLowerCase().includes('e-commerce');
  return true;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');

  const filtered = projects.filter(p => matchFilter(p, activeFilter));
  const featured = filtered.filter(p => p.featured);
  const standard = filtered.filter(p => !p.featured);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <FadeInView>
          <span className="section-number">02 — SELECTED WORK</span>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: 'var(--platinum)',
              marginBottom: '3rem',
              lineHeight: 1.1,
            }}
          >
            Projects
          </h2>
        </FadeInView>

        {/* Filter tabs */}
        <FadeInView delay={0.1}>
          <div
            role="tablist"
            aria-label="Filter projects"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              marginBottom: '4rem',
            }}
          >
            {filters.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  padding: '0.45rem 1rem',
                  borderRadius: '2px',
                  border: activeFilter === f ? 'none' : '1px solid rgba(232,234,240,0.15)',
                  background: activeFilter === f ? 'var(--gold)' : 'transparent',
                  color: activeFilter === f ? 'var(--bg-primary)' : 'var(--platinum)',
                  cursor: 'none',
                  transition: 'all 0.2s ease',
                  fontWeight: activeFilter === f ? 500 : 400,
                }}
                onMouseEnter={e => {
                  if (activeFilter !== f) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeFilter !== f) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(232,234,240,0.15)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--platinum)';
                  }
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeInView>

        {/* Grid with AnimatePresence for smooth filter transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Featured projects */}
            {featured.length > 0 && (
              <div style={{ marginBottom: standard.length > 0 ? '3rem' : 0 }}>
                {/* First featured — full width on mobile, spans on desktop */}
                {featured.length >= 1 && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <ProjectCard project={featured[0]} index={projects.indexOf(featured[0])} featured />
                  </div>
                )}
                {/* Remaining featured in 2-col grid */}
                {featured.length > 1 && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '1.5rem',
                    }}
                  >
                    {featured.slice(1).map((p) => (
                      <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} featured />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Standard projects in 3-col grid */}
            {standard.length > 0 && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {standard.map((p) => (
                  <ProjectCard key={p.id} project={p} index={projects.indexOf(p)} />
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '5rem 0',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.1em',
                }}
              >
                No projects in this category yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="gold-divider" style={{ marginTop: '6rem', marginBottom: 0 }} />
      </div>
    </section>
  );
}
