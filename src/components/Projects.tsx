import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, Users } from 'lucide-react';

const projects = [
  {
    title: 'SkillSolutions',
    description: 'Site-Web de recrutement pour un cabinet expert en recrutement, conseil et accompagnement RH.',
    url: 'https://www.skillsolutions.ma/',
    technologies: ['WordPress'],
    type: 'Site Web',
    icon: Users,
    category: 'Recrutement RH'
  },
  {
    title: 'Mihadda',
    description: 'Site-Web E-commerce pour vendre des produits cosmétiques de qualité.',
    url: 'https://www.mihadda.ma/',
    technologies: ['WordPress', 'WooCommerce'],
    type: 'E-commerce',
    icon: ShoppingCart,
    category: 'Cosmétiques'
  },
  {
    title: 'Copilote',
    description: 'Site-Web E-commerce 100% Digital pour vendre l\'ensemble des produits numériques (Vidéos, Audios, Documents...).',
    technologies: ['React', 'Tailwind CSS', 'Laravel'],
    type: 'E-commerce Digital',
    icon: Globe,
    category: 'Produits Numériques'
  },
  {
    title: 'SE7ATY',
    description: 'Application Mobile - une plateforme intégrée permettant de trouver un médecin, de prendre des rendez-vous médicaux, de commander des médicaments à domicile et d\'organiser des analyses médicales.',
    technologies: ['Android', 'SQLite', 'Java'],
    type: 'Application Mobile',
    icon: Smartphone,
    category: 'Santé'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-imperial bg-clip-text text-transparent">
            PROJETS RÉALISÉS
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets que j'ai développés, allant des sites e-commerce aux applications mobiles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-imperial opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-xl text-primary mb-1">
                          {project.title}
                        </h3>
                        <Badge 
                          variant="secondary"
                          className="bg-accent/20 text-accent font-exo text-xs"
                        >
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <Badge 
                      variant="outline"
                      className="border-primary/30 text-primary font-exo"
                    >
                      {project.type}
                    </Badge>
                  </div>

                  <p className="font-exo text-foreground/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 font-exo text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.url && (
                      <Button 
                        asChild
                        size="sm"
                        className="bg-gradient-lightsaber hover:shadow-jedi text-primary-foreground font-exo transition-all duration-300 hover:scale-105"
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Voir le site
                        </a>
                      </Button>
                    )}
                    
                    {project.title === 'SE7ATY' && (
                      <Button 
                        variant="outline"
                        size="sm"
                        className="border-primary/30 bg-card/50 hover:bg-primary/10 hover:border-primary/60 font-exo transition-all duration-300"
                      >
                        <Smartphone className="h-4 w-4 mr-2" />
                        Projet d'étude
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 bg-card/50 hover:bg-primary/10 hover:border-primary/60 font-exo font-semibold px-8 py-3 transition-all duration-300 hover:shadow-force"
          >
            <a href="https://github.com/Kanza-SAIH" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Voir plus sur GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}