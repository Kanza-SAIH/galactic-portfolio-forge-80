import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <StarField />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
