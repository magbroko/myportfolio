import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function PhotoCard({ src, alt = 'Profile', className }: PhotoCardProps) {
  const [imageError, setImageError] = useState(false);
  const showPlaceholder = !src || imageError;

  const { ref, delta, isHovered, handleMouseEnter, handleMouseLeave } = useMagneticEffect({
    strength: 0.25,
    radius: 150,
  });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        x: delta.x,
        y: delta.y,
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={cn('relative flex-shrink-0 aspect-square', className)}
    >
      {/* Soft aura - expands on hover */}
      <motion.div
        className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-sky-500/20 blur-3xl -z-10"
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={isHovered ? { scale: 1.15, opacity: 0.9 } : { scale: 0.9, opacity: 0.6 }}
        transition={{ duration: 0.4 }}
      />

      {/* Gradient border container */}
      <div className="relative w-full h-full p-1 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500">
        {/* Inner circle - clips image */}
        <div className="relative w-full aspect-square rounded-full overflow-hidden bg-slate-800">
          {!showPlaceholder ? (
            <motion.img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <span
                className="font-display font-extrabold text-4xl text-slate-600"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MO
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
