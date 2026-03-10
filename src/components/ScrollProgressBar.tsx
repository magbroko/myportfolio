import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Ultra-thin (2px) fixed progress bar at the top of the viewport.
 * Grows from 0% to 100% width based on scroll, with cyan-to-teal gradient.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #06b6d4 0%, #14b8a6 50%, #0d9488 100%)',
        boxShadow: '0 0 12px rgba(6, 182, 212, 0.4)',
      }}
      aria-hidden="true"
    />
  );
}
