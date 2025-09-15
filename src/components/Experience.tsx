import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    title: 'Assistante RH - CDI',
    company: 'CASHPLUS',
    location: 'Casablanca',
    period: 'Novembre 2018 - Janvier 2022',
    description: [
      'Optimisation de l\'expérience employé grâce à la gestion centralisée sur Odoo des créations de profils, contrats, congés et suivis médicaux',
      'Transformation numérique des outils RH en collaboration avec l\'équipe IT',
      'Collaboration avec l\'équipe IT pour le développement de nouvelles fonctionnalités sur Odoo'
    ],
    technologies: ['Odoo', 'Gestion RH', 'Transformation digitale'],
    type: 'CDI'
  },
  {
    title: 'Développeur Full Stack - Stage',
    company: 'COPILOTE',
    location: 'Casablanca',
    period: 'Novembre 2022 - Avril 2023',
    description: [
      'Création d\'un Site-Web E-commerce 100% Digital pour vendre l\'ensemble des produits numériques (Vidéos, Audios, Documents...)'
    ],
    technologies: ['React', 'Tailwind CSS', 'Laravel'],
    type: 'Stage'
  },
  {
    title: 'Développeur Web - Stage',
    company: 'Coopérative MIHADDA',
    location: 'Casablanca',
    period: 'Novembre - Décembre 2023',
    description: [
      'Création d\'un Site-Web E-commerce MIHADDA pour vendre des produits cosmétiques'
    ],
    technologies: ['WordPress', 'WooCommerce'],
    type: 'Stage'
  },
  {
    title: 'Développeur - Stage',
    company: 'SKILLSOLUTIONS',
    location: 'Casablanca',
    period: 'Janvier - Juin 2024',
    description: [
      'Participation à la création d\'un Site-Web de recrutement pour un cabinet expert en recrutement, conseil et accompagnement RH'
    ],
    technologies: ['WordPress'],
    type: 'Stage'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-force bg-clip-text text-transparent">
            EXPÉRIENCES
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel dans le développement web et la transformation digitale
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-force hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-force opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-2 md:mb-0">
                    <h3 className="font-orbitron font-bold text-xl text-primary mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-accent font-exo font-semibold mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <Badge 
                    variant={exp.type === 'CDI' ? 'default' : 'secondary'}
                    className={`${exp.type === 'CDI' ? 'bg-accent text-accent-foreground' : 'bg-secondary/50'} font-exo`}
                  >
                    {exp.type}
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-muted-foreground font-exo">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                <ul className="space-y-2 mb-4 font-exo text-foreground/90">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200 font-exo"
                    >
                      {tech}
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