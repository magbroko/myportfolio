import { motion } from 'framer-motion';
import {
  Code2,
  FileCode,
  Palette,
  GitBranch,
  Plug,
  type LucideIcon,
} from 'lucide-react';
import { FadeInView } from './FadeInView';

interface TechItem {
  name: string;
  icon: LucideIcon;
}

const techItems: TechItem[] = [
  { name: 'React', icon: Code2 },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Git', icon: GitBranch },
  { name: 'APIs', icon: Plug },
];

const marqueeItems = [...techItems, ...techItems];

export function TechStack() {
  return (
    <section id="tech" className="relative py-24 sm:py-32 bg-deep-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <FadeInView direction="up" delay={0}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Tools and technologies that power modern, scalable frontend architectures.
          </p>
        </FadeInView>
      </div>

      {/* Marquee */}
      <div className="relative">
        <motion.div
          className="flex gap-12 sm:gap-16 w-max"
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm flex-shrink-0"
            >
              <item.icon className="w-8 h-8 text-emerald-400/80" />
              <span className="text-lg font-semibold text-white whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Staggered grid for larger screens - visible on md+ */}
      <div className="relative mt-20 hidden md:block">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {techItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <item.icon className="w-10 h-10 text-emerald-400/80" />
                <span className="text-sm font-medium text-slate-300">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
