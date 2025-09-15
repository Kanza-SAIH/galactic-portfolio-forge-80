import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expériences' },
  { id: 'education', label: 'Formations' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20 shadow-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron font-bold text-xl bg-gradient-lightsaber bg-clip-text text-transparent">
            KANZA SAIH
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-exo transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-lightsaber transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}