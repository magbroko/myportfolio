import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = memo(function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const navigate = useNavigate();

  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => navigate(`/project/${project.id}`)}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid rgba(201,168,76,0.08)',
        padding: featured ? '2.5rem' : '2rem',
        cursor: 'none',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.3)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(201,168,76,0.07)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Decorative number */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1.5rem',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '5rem',
          fontWeight: 300,
          color: 'var(--platinum)',
          opacity: 0.06,
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {num}
      </span>

      {/* Top row: category */}
      <div style={{ marginBottom: '1.5rem' }}>
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

      {/* Title */}
      <h3
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: featured ? '1.8rem' : '1.4rem',
          fontWeight: 400,
          color: 'var(--platinum)',
          lineHeight: 1.2,
          marginBottom: '0.5rem',
          letterSpacing: '-0.01em',
        }}
      >
        {project.title}
      </h3>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 300,
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          marginBottom: '1.5rem',
          lineHeight: 1.6,
        }}
      >
        {project.subtitle}
      </p>

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
        {project.tech.map((t) => (
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
              letterSpacing: '0.05em',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom row: links + view details */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(201,168,76,0.08)',
          paddingTop: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={project.githubUrl}
            aria-label={`GitHub repository for ${project.title}`}
            onClick={e => e.stopPropagation()}
            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', cursor: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Github size={15} />
          </a>
          <a
            href={project.liveUrl}
            aria-label={`Live demo for ${project.title}`}
            onClick={e => e.stopPropagation()}
            style={{ color: 'var(--text-secondary)', transition: 'color 0.2s ease', cursor: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <button
          onClick={e => { e.stopPropagation(); navigate(`/project/${project.id}`); }}
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 400,
            fontSize: '0.72rem',
            color: 'var(--gold)',
            cursor: 'none',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: 0,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold-hover)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--gold)')}
        >
          View Details →
        </button>
      </div>
    </motion.article>
  );
});

export default ProjectCard;
