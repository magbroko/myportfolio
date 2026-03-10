import { useState, useRef, useCallback, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContactCardProps {
  children: ReactNode;
  as?: 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export function ContactCard({
  children,
  as: Component = 'div',
  href,
  target,
  rel,
  className,
}: ContactCardProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePosition(null);
  }, []);

  const eventHandlers = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  const wrapperClassName = cn(
      'relative overflow-hidden rounded-2xl p-6 h-full flex items-start gap-4',
      'bg-white/5 backdrop-blur-xl',
      'border-[0.5px] border-white/10',
      'transition-all duration-300',
      'hover:scale-[1.02] hover:border-white/30',
      className
    );

  const wrapperProps = {
    ...eventHandlers,
    className: wrapperClassName,
  };

  const content = (
    <>
      {/* Magnetic spotlight - follows cursor when hovering inside card */}
      {mousePosition && (
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.08), transparent 60%)`,
          }}
        />
      )}
      {children}
    </>
  );

  if (Component === 'a') {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={wrapperClassName}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={cardRef} className="absolute inset-0 pointer-events-none" aria-hidden />
        {content}
      </a>
    );
  }

  return (
    <div ref={cardRef} {...wrapperProps}>
      {content}
    </div>
  );
}
