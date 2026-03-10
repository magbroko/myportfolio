import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="flex items-center justify-between gap-4 mb-4 min-w-0">
        <motion.h3
          layoutId={`project-title-${project.id}`}
          className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors truncate"
        >
          {project.title}
        </motion.h3>
        <div className="flex items-center justify-end gap-3 flex-shrink-0">
          {project.isHighlighted && project.highlightLabel && (
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-[var(--r-pill)] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex-shrink-0 mr-3">
              {project.highlightLabel}
            </span>
          )}
          {project.isComingSoon && (
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-[var(--r-pill)] bg-slate-600/50 text-slate-400 border border-slate-500/50 flex-shrink-0 mr-3">
              Coming soon
            </span>
          )}
          {!project.isComingSoon && (
            <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 flex-shrink-0 transition-colors" />
          )}
        </div>
      </div>

      <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--maroon-muted)] text-[var(--maroon-lt)] border border-[var(--maroon)]/40"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-sky-500/0 group-hover:from-emerald-500/5 group-hover:to-sky-500/5 transition-all duration-300 pointer-events-none" />
    </>
  );

  const cardClassName = cn(
    'block relative overflow-hidden rounded-[var(--r-lg)] p-6',
    'bg-slate-800/30 backdrop-blur-xl border border-slate-700/50',
    'transition-all duration-300',
    '[transition-timing-function:var(--ease)]',
    !project.isComingSoon && 'hover:border-emerald-500/30 hover:bg-slate-800/50 hover:shadow-[var(--sh-lg)]'
  );

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
      whileHover={!project.isComingSoon ? { scale: 1.025 } : undefined}
      className="group"
    >
      {project.isComingSoon ? (
        <div className={cardClassName}>{cardContent}</div>
      ) : (
        <Link to={`/project/${project.id}`} className={cardClassName}>
          {cardContent}
        </Link>
      )}
    </motion.article>
  );
}
