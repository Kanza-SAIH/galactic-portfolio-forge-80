import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Compétences Techniques',
    skills: ['Python', 'JavaScript', 'React', 'HTML', 'CSS', 'Tailwind', 'WordPress', 'Prompt Engineering'],
    icon: '⚡',
    gradient: 'gradient-lightsaber'
  },
  {
    title: 'Base de Données',
    skills: ['SQL', 'NoSQL'],
    icon: '🗄️',
    gradient: 'gradient-force'
  },
  {
    title: 'Outils',
    skills: ['VSCode', 'Git/GitHub', 'Postman', 'Odoo'],
    icon: '🛠️',
    gradient: 'gradient-imperial'
  },
  {
    title: 'Méthodologies',
    skills: ['Méthodes agiles', 'Scrum', 'UML'],
    icon: '📋',
    gradient: 'gradient-space'
  },
  {
    title: 'Langues',
    skills: ['Arabe (Native)', 'Français (B2)', 'Anglais (B1)'],
    icon: '🌐',
    gradient: 'gradient-lightsaber'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-lightsaber bg-clip-text text-transparent">
            COMPÉTENCES
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les technologies et compétences que j'ai maîtrisées dans l'univers du développement et de l'IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-jedi hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="font-orbitron font-semibold text-xl text-primary">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200 font-exo"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}