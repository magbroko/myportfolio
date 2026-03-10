import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/portfolio';

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Featured project card with image mockup + overlay.
 * Premium Heritage aesthetic: --maroon tags, --ink text, --r-lg corners, --sh-lg shadow.
 */
export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const navigate = useNavigate();
  const { overlay, image, techStack, useBrandStyling } = project;

  if (!overlay || !useBrandStyling) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.025, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/project/${project.id}`)}
        onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.id}`)}
        className="block relative overflow-hidden rounded-[var(--r-lg)] bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl transition-all duration-300 cursor-pointer [transition-timing-function:var(--ease)] hover:shadow-[var(--sh-lg)] hover:border-[var(--maroon)]/40"
      >
        {/* Image: Super Admin desktop + Customer mobile mockup */}
        <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={`${project.title} — Super Admin dashboard and Customer view`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--maroon-muted)] via-[var(--ink)] to-slate-900"
              aria-hidden
            >
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-white/20 tracking-tighter">
                {project.title}
              </span>
            </div>
          )}

          {/* Overlay - .proj-overlay */}
          <div
            className="proj-overlay absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-900/95 to-transparent p-6 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-[var(--maroon-light)] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-2">
              {overlay.clientSector}
            </p>
            <p className="text-white/90 text-lg sm:text-xl font-semibold mb-4">
              {overlay.metric}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-[var(--maroon-light)] font-medium text-sm hover:text-white transition-colors w-fit"
              aria-label={`${overlay.cta} — opens in new tab`}
            >
              {overlay.cta}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card footer: --ink for primary text, --maroon for tags */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--maroon-light)] transition-colors mb-3">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-[var(--maroon)]/40 text-[var(--maroon-lt)] bg-[var(--maroon-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
