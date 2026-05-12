// Home page composition — rendered directly by App.tsx's HomePage component.
// This file is kept for reference but not used in routing.
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export function Home() {
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
