import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { ContactCard } from './ContactCard';
import { contactInfo } from '@/data/portfolio';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const iconGlowClass = 'drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]';

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.footer
      ref={ref}
      id="contact"
      className="relative py-24 sm:py-32 bg-deep-black"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Left-aligned heading - matches About section */}
        <motion.div
          variants={cardVariants}
          className="mb-16"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white mb-4">
            Contact
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Let&apos;s connect. Open to collaborations, opportunities, and thoughtful conversations about frontend architecture.
          </p>
        </motion.div>

        {/* Glass cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email */}
          <motion.div variants={cardVariants}>
            <ContactCard as="a" href={`mailto:${contactInfo.email}`}>
              <Mail className={cn('w-6 h-6 text-emerald-400 flex-shrink-0', iconGlowClass)} />
              <div className="relative z-10 min-w-0">
                <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                  Email
                </span>
                <span className="text-white font-medium break-all">{contactInfo.email}</span>
              </div>
            </ContactCard>
          </motion.div>

          {/* GitHub */}
          <motion.div variants={cardVariants}>
            <ContactCard
              as="a"
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={cn('w-6 h-6 text-emerald-400 flex-shrink-0', iconGlowClass)} />
              <div className="relative z-10 min-w-0">
                <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                  GitHub
                </span>
                <span className="text-white font-medium">@{contactInfo.github.split('/').pop()}</span>
              </div>
            </ContactCard>
          </motion.div>

          {/* LinkedIn */}
          <motion.div variants={cardVariants}>
            <ContactCard
              as="a"
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className={cn('w-6 h-6 text-emerald-400 flex-shrink-0', iconGlowClass)} />
              <div className="relative z-10 min-w-0">
                <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                  LinkedIn
                </span>
                <span className="text-white font-medium">Marvelous Agbroko</span>
              </div>
            </ContactCard>
          </motion.div>

          {/* Phone */}
          <motion.div variants={cardVariants}>
            <ContactCard as="div">
              <Phone className={cn('w-6 h-6 text-emerald-400 flex-shrink-0', iconGlowClass)} />
              <div className="relative z-10 min-w-0">
                <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                  Phone
                </span>
                <div className="space-y-1">
                  {contactInfo.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="block text-white font-medium hover:text-emerald-400 transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </ContactCard>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          variants={cardVariants}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="h-px w-8 bg-slate-700" />
              <span className="text-xs uppercase tracking-[0.2em] text-slate-600">
                Built with React, TypeScript & Framer Motion
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
