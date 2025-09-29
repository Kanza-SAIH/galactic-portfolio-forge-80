import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '@/lib/i18n';

export function Education() {
  const { t } = useTranslation();
  const educationList = t('education.education', { returnObjects: true }) as Array<{
    title: string;
    institution: string;
    location: string;
    period: string;
    type: string;
    description: string;
    technologies?: string[];
    status: string;
  }>;
  const certifications = t('education.certifications', { returnObjects: true }) as string[];
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-space bg-clip-text text-transparent">
            {t('education.title')}
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('education.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-orbitron font-semibold text-2xl text-primary mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3" />
              {t('education.formationsTitle')}
            </h3>
            <div className="space-y-6">
              {educationList.map((edu, index) => (
                <Card 
                  key={index}
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-space opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  <div className="relative z-10 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="font-orbitron font-bold text-lg text-primary mb-1">
                          {edu.title}
                        </h4>
                        <div className="flex items-center text-accent font-exo font-semibold mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.institution} - {edu.location}
                        </div>
                      </div>
                      <Badge 
                        variant={edu.status === 'En cours' || edu.status === 'Ongoing' ? 'default' : 'secondary'}
                        className={`${edu.status === 'En cours' || edu.status === 'Ongoing' ? 'bg-accent text-accent-foreground animate-pulse-glow' : 'bg-secondary/50'} font-exo`}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground font-exo">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                        {edu.type}
                      </Badge>
                    </div>
                    <p className="font-exo text-foreground/90 mb-3">
                      {edu.description}
                    </p>
                    {edu.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {edu.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-200 font-exo text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-orbitron font-semibold text-2xl text-primary mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3" />
              {t('education.certificationsTitle')}
            </h3>
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-6">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-start group hover:bg-primary/5 p-2 rounded transition-colors duration-200"
                  >
                    <span className="text-primary mr-3 mt-1 text-sm">✨</span>
                    <span className="font-exo text-sm text-foreground/90 group-hover:text-primary transition-colors duration-200">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}