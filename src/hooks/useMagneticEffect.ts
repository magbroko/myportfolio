import { useState, useRef, useCallback, useEffect } from 'react';

interface MagneticDelta {
  x: number;
  y: number;
}

interface UseMagneticEffectOptions {
  strength?: number;
  radius?: number;
}

export function useMagneticEffect(options: UseMagneticEffectOptions = {}) {
  const { strength = 0.3, radius = 120 } = options;
  const [delta, setDelta] = useState<MagneticDelta>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el || !isHovered) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const clampedDistance = Math.min(distance, radius);
      const factor = (1 - clampedDistance / radius) * strength;

      setDelta({
        x: dx * factor,
        y: dy * factor,
      });
    },
    [isHovered, radius, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setDelta({ x: 0, y: 0 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return { ref, delta, isHovered, handleMouseEnter, handleMouseLeave };
}
