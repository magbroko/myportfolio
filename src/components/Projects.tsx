import { useState } from 'react';
import { FadeInView } from './FadeInView';
import { ProjectCard } from './ProjectCard';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { projects } from '@/data/portfolio';

type FilterKey = 'all' | 'residential' | 'commercial' | 'industrial';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'industrial', label: 'Industrial' },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const nelshop = projects.find((p) => p.id === 'nelshop');
  const showBento = activeFilter === 'all' && nelshop;

  return (
    <section id="projects" className="relative py-24 sm:py-32 lg:py-40 bg-deep-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeInView direction="up" delay={0}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-8">
            A curated selection of work spanning from vanilla foundations to modern React architectures.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {FILTERS.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={`
                  px-5 py-2.5 text-sm font-medium rounded-[var(--r-pill)] transition-all duration-300
                  [transition-timing-function:var(--ease)]
                  ${activeFilter === key
                    ? 'bg-[var(--maroon)] text-white border border-[var(--maroon)]'
                    : 'bg-transparent text-white border border-white/30 hover:border-white/50'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </FadeInView>

        {showBento ? (
          <div className="bento-grid">
            <div style={{ gridArea: 'feat' }}>
              <FeaturedProjectCard project={nelshop} index={0} />
            </div>
            <div style={{ gridArea: 'side1' }}>
              <ProjectCard project={projects.find((p) => p.id === 'solarsol')!} index={1} />
            </div>
            <div style={{ gridArea: 'side2' }}>
              <ProjectCard project={projects.find((p) => p.id === 'thegracebaker')!} index={2} />
            </div>
            <div style={{ gridArea: 'low1' }}>
              <ProjectCard project={projects.find((p) => p.id === 'medicare')!} index={3} />
            </div>
            <div style={{ gridArea: 'low2' }}>
              <ProjectCard project={projects.find((p) => p.id === 'kabashimagery')!} index={4} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) =>
              project.overlay && project.useBrandStyling ? (
                <FeaturedProjectCard key={project.id} project={project} index={index} />
              ) : (
                <ProjectCard key={project.id} project={project} index={index} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
