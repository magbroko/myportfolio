import { motion, type Variants } from 'framer-motion';
import { type ReactNode, type ComponentType } from 'react';

/**
 * Spring transition specs for natural, non-robotic feel.
 * stiffness: 100, damping: 20
 */
const SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20,
};

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_TRANSITION,
  },
};

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay for child animations (seconds) */
  delay?: number;
  /** Amount of element visible to trigger (0-1) */
  amount?: number;
  /** Animate only once when in view */
  once?: boolean;
  /** Custom variants - overrides default if provided */
  variants?: Variants;
  /** Enable will-change for performance */
  enableWillChange?: boolean;
}

/**
 * ScrollReveal - Progressive reveal wrapper for section content.
 * Elements start at opacity: 0, y: 40 and transition to opacity: 1, y: 0
 * using spring physics for an Apple-grade fluid feel.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  once = true,
  variants = defaultVariants,
  enableWillChange = true,
}: ScrollRevealProps) {
  const transition = { ...SPRING_TRANSITION, delay };
  const resolvedVariants: Variants = {
    hidden: { opacity: 0, y: 40, ...variants.hidden },
    visible: {
      opacity: 1,
      y: 0,
      transition,
      ...(typeof variants.visible === 'object' && variants.visible !== null
        ? { ...variants.visible, transition }
        : {}),
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={resolvedVariants}
      style={enableWillChange ? { willChange: 'transform, opacity' } : undefined}
    >
      {children}
    </motion.div>
  );
}

/**
 * HOC to wrap any component with ScrollReveal.
 */
export function withScrollReveal<P extends object>(
  WrappedComponent: ComponentType<P>,
  scrollRevealProps?: Omit<ScrollRevealProps, 'children'>
) {
  return function ScrollRevealWrapper(props: P) {
    return (
      <ScrollReveal {...scrollRevealProps}>
        <WrappedComponent {...props} />
      </ScrollReveal>
    );
  };
}
