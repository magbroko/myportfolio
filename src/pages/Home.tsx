import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { Contact } from '@/components/Contact';

export function Home() {
  return (
    <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
    </main>
  );
}
