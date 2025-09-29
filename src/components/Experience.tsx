import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

export function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true }) as Array<{
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
    type: string;
  }>;
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-force bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experience.description')}
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
                    variant={exp.type === 'CDI' || exp.type === 'Permanent' ? 'default' : 'secondary'}
                    className={`${exp.type === 'CDI' || exp.type === 'Permanent' ? 'bg-accent text-accent-foreground' : 'bg-secondary/50'} font-exo`}
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