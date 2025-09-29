import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

export function Skills() {
  const { t } = useTranslation();
  const skillCategories = t('skills.categories', { returnObjects: true }) as Array<{
    title: string;
    skills: string[];
    icon: string;
  }>;
  const gradients = [
    'gradient-lightsaber',
    'gradient-force',
    'gradient-imperial',
    'gradient-space',
    'gradient-lightsaber'
  ];
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-lightsaber bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-jedi hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="font-orbitron font-semibold text-xl text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string) => (
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