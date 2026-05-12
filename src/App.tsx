import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={
              <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                Loading...
              </div>
            }>
              <ProjectDetail />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursor-ring" />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
