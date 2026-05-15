import {
  memo,
  useEffect,
  useMemo,
  useRef,
  type JSX,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

type WireMeshProps = { detail: number };

function WireMesh({ detail }: WireMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { geometry, material } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.85, detail);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#c9a84c'),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    return { geometry: geo, material: mat };
  }, [detail]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state, delta) => {
    const m = meshRef.current;
    if (!m) return;
    m.rotation.y += delta * 0.12;
    m.rotation.x += delta * 0.04;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.35) * 0.028;
    m.scale.setScalar(pulse);
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

type DustParticlesProps = { count: number };

function DustParticles({ count }: DustParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const velocitiesRef = useRef<Float32Array | null>(null);

  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 16;
      positions[i3 + 1] = (Math.random() - 0.5) * 16;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;
      velocities[i3] = (Math.random() - 0.5) * 0.006;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.006;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.004;
    }
    velocitiesRef.current = velocities;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      color: new THREE.Color('#f0e8d5'),
      size: 0.035,
      transparent: true,
      opacity: 0.04,
      sizeAttenuation: true,
      depthWrite: false,
    });

    return { geometry: geo, material: mat };
  }, [count]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((_, delta) => {
    const points = pointsRef.current;
    const velocities = velocitiesRef.current;
    if (!points || !velocities) return;

    const posAttr = points.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const wrapLimit = 9;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3] += velocities[i3] * delta;
      arr[i3 + 1] += velocities[i3 + 1] * delta;
      arr[i3 + 2] += velocities[i3 + 2] * delta;

      if (arr[i3] > wrapLimit) arr[i3] -= wrapLimit * 2;
      else if (arr[i3] < -wrapLimit) arr[i3] += wrapLimit * 2;

      if (arr[i3 + 1] > wrapLimit) arr[i3 + 1] -= wrapLimit * 2;
      else if (arr[i3 + 1] < -wrapLimit) arr[i3 + 1] += wrapLimit * 2;

      if (arr[i3 + 2] > wrapLimit) arr[i3 + 2] -= wrapLimit * 2;
      else if (arr[i3 + 2] < -wrapLimit) arr[i3 + 2] += wrapLimit * 2;
    }

    posAttr.needsUpdate = true;
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

type HeroThreeBackgroundProps = {
  particleCount: number;
  meshDetail: number;
};

const HeroThreeBackground = memo(function HeroThreeBackground({
  particleCount,
  meshDetail,
}: HeroThreeBackgroundProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 45 }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    >
      <AdaptiveDpr />
      <WireMesh detail={meshDetail} />
      <DustParticles count={particleCount} />
    </Canvas>
  );
});

function HeroThreeSceneBackdrop({
  particleCount,
  meshDetail,
}: HeroThreeBackgroundProps): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        minHeight: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <HeroThreeBackground particleCount={particleCount} meshDetail={meshDetail} />
    </motion.div>
  );
}

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const { particleCount, meshDetail } = useMemo(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1025;
    const mobile = w < 768;
    return {
      particleCount: mobile ? 40 : 120,
      meshDetail: mobile ? 0 : 2,
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        display: 'grid',
        gridTemplateRows: '1fr',
      }}
    >
      {/* Breathing radial aura */}
      <div
        className="aura-breath"
        style={{
          position: 'absolute',
          top: '20%',
          left: '60%',
          width: 'clamp(280px, 55vw, 600px)',
          height: 'clamp(280px, 55vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 'clamp(180px, 38vw, 400px)',
          height: 'clamp(180px, 38vw, 400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,170,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <HeroThreeSceneBackdrop particleCount={particleCount} meshDetail={meshDetail} />

      {/* Top-left label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: '6rem',
          left: '2rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.7rem',
          color: 'var(--text-secondary)',
          letterSpacing: '0.1em',
          zIndex: 10,
        }}
      >
        Frontend Developer — React · TypeScript · UI
      </motion.div>

      {/* Bottom-right vertical text — hidden below 480 px via .hero-sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hero-sidebar"
        style={{
          position: 'absolute',
          bottom: '3rem',
          right: '2rem',
          writingMode: 'vertical-rl',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--text-secondary)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          zIndex: 10,
          transform: 'rotate(180deg)',
        }}
      >
        Portfolio 2024–2025
      </motion.div>

      {/* Main content — left-anchored vertical center */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '0 clamp(1rem, 5vw, 4rem)',
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '700px' }}
        >
          {/* Section number */}
          <motion.span variants={fadeUp} className="section-number">
            00 —
          </motion.span>

          {/* Name block */}
          <motion.div variants={fadeUp}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 10vw, 7rem)',
                fontWeight: 300,
                color: 'var(--platinum)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '0.1em',
              }}
            >
              MARVELOUS
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 10vw, 7rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--gold)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              AGBROKO
            </div>
          </motion.div>

          {/* Gold line */}
          <motion.div
            variants={fadeUp}
            style={{
              width: '200px',
              height: '1px',
              backgroundColor: 'var(--gold)',
              margin: '2rem 0',
              opacity: 0.6,
            }}
          />

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              letterSpacing: '0.02em',
              marginBottom: '3rem',
            }}
          >
            Crafting interfaces that feel inevitable.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="hero-cta"
          >
            <button onClick={scrollToProjects} className="btn-ghost">
              View Work
            </button>

            <button
              onClick={scrollToContact}
              className="hero-text-btn"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 300,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.2s ease',
                padding: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--platinum)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Contact Me
              <ArrowRight size={13} />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            opacity: 0.5,
          }}
        />
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
