import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const subtextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const name = 'Marvelous Oghenetejiri Agbroko';
const words = name.split(' ');

export function Hero() {
  const { x, y } = useMousePosition();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-black">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Aura gradients - Emerald top-left, Deep Blue bottom-right */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[30%] -left-[20%] w-[80%] h-[80%] rounded-full bg-emerald-500/15 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[80%] h-[80%] rounded-full bg-blue-900/20 blur-[120px]" />
      </div>

      {/* Mouse-follow spotlight */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.06), transparent 40%)`,
        }}
      />

      {/* Split-grid layout: content left, accent right on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
        <div className="grid lg:grid-cols-[1fr_auto] lg:gap-16 items-center">
          {/* Left: Main content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Name - Display font, gradient */}
            <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Subtext with highlighted phrase */}
            <motion.p
              variants={subtextVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed"
            >
              Bridging Vanilla foundations with{' '}
              <span className="inline-block bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-[length:200%_auto] animate-gradient-shift text-transparent bg-clip-text font-medium">
                Modern React Architectures
              </span>
            </motion.p>

            {/* Frontend Architect tag - responsive, no awkward wrap */}
            <motion.div
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <span className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-emerald-500/50 shrink-0" />
              <span className="text-sm sm:text-base uppercase tracking-[0.25em] sm:tracking-[0.3em] text-emerald-400/90 font-semibold whitespace-nowrap">
                Frontend Architect
              </span>
              <span className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-sky-500/50 shrink-0" />
            </motion.div>
          </motion.div>

          {/* Right: Decorative accent on desktop - subtle gradient orb */}
          <div className="hidden lg:block w-64 h-64 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-emerald-500/10 to-sky-500/10 blur-3xl self-center" />
        </div>
      </div>

      {/* Custom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="flex flex-col items-center gap-2"
    >
      <svg
        width="26"
        height="42"
        viewBox="0 0 26 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-slate-500"
      >
        <rect
          x="1"
          y="1"
          width="24"
          height="40"
          rx="12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          fill="none"
        />
        <motion.circle
          cx="13"
          cy="13"
          r="4"
          fill="currentColor"
          fillOpacity="0.5"
          animate={{ cy: [13, 27, 13] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-medium">
        Scroll
      </span>
    </motion.div>
  );
}
