import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import spaceBg from '@/assets/space-bg.jpg';

export function Hero() {
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${spaceBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="font-orbitron font-bold text-5xl md:text-7xl mb-6 bg-gradient-lightsaber bg-clip-text text-transparent">
            KANZA SAIH
          </h1>
          <div className="font-orbitron text-xl md:text-2xl mb-4 text-gold">
            [ INTÉGRATEUR IA ]
          </div>
          <p className="font-exo text-lg md:text-xl max-w-2xl mx-auto mb-8 text-foreground/90 leading-relaxed">
            Passionnée par l'intelligence artificielle et les nouvelles technologies, 
            j'aspire à intégrer une entreprise innovante où je pourrai mettre à profit 
            mes compétences en intégration et en développement de solutions IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToSkills}
              size="lg"
              className="group bg-gradient-lightsaber hover:shadow-jedi text-primary-foreground font-exo font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Explorer mon univers
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-primary/30 bg-card/20 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/60 font-exo font-semibold px-8 py-3 transition-all duration-300 hover:shadow-force"
            >
              <a href="#contact">Me contacter</a>
            </Button>
          </div>
        </div>

        {/* Lightsaber effect */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-20 bg-gradient-lightsaber animate-lightsaber opacity-60" />
        </div>
      </div>
    </section>
  );
}