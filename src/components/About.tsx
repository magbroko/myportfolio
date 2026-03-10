import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { PhotoCard } from './PhotoCard';
import { contactInfo } from '@/data/portfolio';

const paragraphs = [
  "My journey in web development began with the fundamentals—HTML, CSS, and vanilla JavaScript. I built interfaces with Bootstrap, crafted responsive layouts by hand, and learned to debug in the browser console. That foundation taught me how the web actually works.",
  "Today, I architect modern applications with TypeScript, React, and Tailwind CSS. I leverage Framer Motion for cinematic interactions, design systems for consistency, and component-driven development for scalability. The principles remain the same; the tooling has evolved.",
  "I believe the best frontend engineers understand both the old and the new—the DOM manipulation that powers React under the hood, the CSS specificity that Tailwind abstracts away. That dual perspective informs every decision I make.",
];

const skillsPath = ['HTML', 'CSS', 'JS', 'Bootstrap', 'React', 'TypeScript', 'Tailwind'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const photoVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="relative py-24 sm:py-32 lg:py-40 bg-deep-black"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-16 items-center">
          {/* Left: Photo Card */}
          <motion.div variants={photoVariants} className="flex justify-center lg:justify-end">
            <PhotoCard
              src={contactInfo.profileImage}
              alt={contactInfo.name}
              className="w-56 sm:w-64 lg:w-72 xl:w-80"
            />
          </motion.div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            {/* Heading with gradient underline */}
            <motion.div variants={textVariants}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white mb-4">
                About
              </h2>
              <div
                className="h-1 w-24 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #10b981 0%, #0ea5e9 100%)',
                }}
              />
            </motion.div>

            {/* Paragraphs */}
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={textVariants}
                className="text-slate-300 text-lg sm:text-xl leading-relaxed font-light"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Skills Path - glassmorphism pills */}
            <motion.div variants={textVariants} className="pt-4">
              <div className="flex flex-wrap items-center gap-2">
                {skillsPath.map((skill, index) => (
                  <span key={skill} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                      {skill}
                    </span>
                    {index < skillsPath.length - 1 && (
                      <span className="text-slate-500 text-sm">→</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
