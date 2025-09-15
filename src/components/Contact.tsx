import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saihkanza@gmail.com',
    href: 'mailto:saihkanza@gmail.com',
    description: 'Envoyez-moi un email'
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+212 663 032 752',
    href: 'tel:+212663032752',
    description: 'Appelez-moi directement'
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Casablanca, Maroc',
    description: 'Ma localisation actuelle'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Kenza Saih',
    href: 'https://www.linkedin.com/in/kenzasaih/',
    description: 'Connectons-nous sur LinkedIn'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Kanza-SAIH',
    href: 'https://github.com/Kanza-SAIH',
    description: 'Découvrez mes projets'
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-4 bg-gradient-lightsaber bg-clip-text text-transparent">
            CONTACTEZ-MOI
          </h2>
          <p className="font-exo text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-jedi hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-lightsaber opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                <div className="relative z-10 p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="font-orbitron font-semibold text-lg text-primary mb-2">
                    {contact.label}
                  </h3>
                  
                  <p className="font-exo text-sm text-muted-foreground mb-3">
                    {contact.description}
                  </p>
                  
                  {contact.href ? (
                    <Button 
                      asChild
                      variant="ghost"
                      size="sm"
                      className="font-exo text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    </Button>
                  ) : (
                    <span className="font-exo text-foreground">
                      {contact.value}
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-lightsaber text-primary-foreground mb-6">
              <Send className="h-8 w-8" />
            </div>
            
            <h3 className="font-orbitron font-bold text-2xl text-primary mb-4">
              Travaillons ensemble !
            </h3>
            
            <p className="font-exo text-foreground/90 mb-6 leading-relaxed">
              Je suis toujours à la recherche de nouveaux défis et opportunités pour mettre mes compétences 
              en IA et développement web au service de projets innovants. Que ce soit pour un stage, 
              un CDI ou une collaboration, n'hésitez pas à me contacter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-lightsaber hover:shadow-jedi text-primary-foreground font-exo font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:saihkanza@gmail.com">
                  <Mail className="h-5 w-5 mr-2" />
                  Envoyer un email
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 bg-card/50 hover:bg-primary/10 hover:border-primary/60 font-exo font-semibold px-8 py-3 transition-all duration-300 hover:shadow-force"
              >
                <a href="https://www.linkedin.com/in/kenzasaih/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}