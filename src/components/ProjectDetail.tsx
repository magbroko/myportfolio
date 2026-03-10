import { useParams, Link } from 'react-router-dom';
import { BackNavigation } from './BackNavigation';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Target,
  Leaf,
  Sun,
  Smartphone,
  Image,
  Palette,
  ShoppingCart,
  LayoutGrid,
  FileText,
  Shield,
  Calendar,
  Users,
  Filter,
  Maximize2,
  LayoutDashboard,
  Store,
  ShoppingBag,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { projects } from '@/data/portfolio';
import type { ProjectFeature } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Target,
  Leaf,
  Sun,
  Smartphone,
  Image,
  Palette,
  ShoppingCart,
  LayoutGrid,
  FileText,
  Shield,
  Calendar,
  Users,
  Filter,
  Maximize2,
  LayoutDashboard,
  Store,
  ShoppingBag,
  MapPin,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function FadeInSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-deep-black flex items-center justify-center relative pt-44">
        <BackNavigation />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project not found</h1>
          <Link to="/" className="text-emerald-400 hover:underline">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black text-white relative pt-44">
      <BackNavigation />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-deep-black to-deep-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.1),transparent)]" />

        {/* Mockup / Image */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-12"
            style={{ boxShadow: 'var(--sh-xl)' }}
          >
            {project.id === 'medicare' ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/medicare_hero_image.png)' }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(15, 15, 18, 0.6), transparent)',
                  }}
                  aria-hidden
                />
              </>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/10 via-slate-800 to-sky-500/10"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(16,185,129,0.1) 0%, transparent 50%, rgba(14,165,233,0.1) 100%)`,
                }}
              >
                <span className="font-display font-extrabold text-6xl text-white/20 tracking-tighter">
                  {project.title}
                </span>
              </div>
            )}
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <motion.h1
                layoutId={`project-title-${project.id}`}
                className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white mb-4"
              >
                {project.title}
              </motion.h1>
              <p className="text-slate-400 text-lg max-w-2xl">{project.description}</p>
            </div>

            <div className="flex gap-4">
              {!project.isComingSoon && (
                <>
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-emerald-500 hover:bg-emerald-400 text-white transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/5 border border-white/10 hover:border-white/30 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Architecture Overview (MediCare) */}
      {project.id === 'medicare' && (
        <section className="py-16">
          <div className="max-w-[1024px] mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Administrative & Clinical Insights Dashboard
              </h2>
              <div className="app-mockup overflow-hidden rounded-[var(--r-lg)] bg-white/5 backdrop-blur-sm hover:backdrop-blur-md">
                <img
                  src="/medicare-dashboard.png"
                  alt="MediCare Dashboard — Vitals & Overview, Medical History, Appointment Scheduling"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed max-w-3xl">
                Featuring real-time vitals monitoring (Heart Rate, BP), upcoming appointment scheduling, and role-based access control for patient Robert Johnson. The system is optimized for low-bandwidth internet in Lagos and Abuja, enabling asynchronous E-Prescription sharing.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Narrative sections */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 space-y-24">
        {/* The Problem */}
        {project.problem && (
          <FadeInSection>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              The Problem
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mb-6" />
            <p className="text-slate-300 text-lg leading-relaxed">{project.problem}</p>
          </FadeInSection>
        )}

        {/* The Features */}
        {project.features && project.features.length > 0 && (
          <FadeInSection>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              The Features
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mb-8" />
            <div className="grid sm:grid-cols-2 gap-6">
              {project.features.map((feature: ProjectFeature, index: number) => {
                const Icon = iconMap[feature.icon] ?? LayoutGrid;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-emerald-400 mb-4 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </FadeInSection>
        )}

        {/* The Tools Used */}
        <FadeInSection>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            The Tools Used
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mb-6" />
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeInSection>

        {/* The Challenge Solved */}
        {project.challenge && (
          <FadeInSection>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              The Challenge Solved
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mb-6" />
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h3 className="font-semibold text-emerald-400 mb-4">{project.challenge.title}</h3>
              <p className="text-slate-300 leading-relaxed">{project.challenge.description}</p>
            </div>
          </FadeInSection>
        )}
      </div>

      {/* Back to projects CTA */}
      <div className="py-16 text-center">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          View all projects
        </Link>
      </div>
    </div>
  );
}
