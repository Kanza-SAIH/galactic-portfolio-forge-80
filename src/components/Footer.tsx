import React from 'react';
import { Heart, Code2, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 bg-gradient-space border-t border-primary/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="font-orbitron font-bold text-2xl bg-gradient-lightsaber bg-clip-text text-transparent mb-2">
              KANZA SAIH
            </h3>
            <p className="font-exo text-muted-foreground">
              {t('footer.subtitle')}
            </p>
          </div>

          {/* Inspirational quote */}
          <div className="mb-8">
            <blockquote className="font-exo text-lg italic text-foreground/80 max-w-2xl mx-auto">
              {t('footer.quote')}
            </blockquote>
          </div>

          {/* Tech stack icons */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 text-primary">
              <Code2 className="h-5 w-5" />
              <span className="font-exo text-sm">{t('footer.builtWith')}</span>
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span className="font-exo text-sm">React</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span className="font-exo text-sm">TypeScript</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span className="font-exo text-sm">Tailwind CSS</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground font-exo">
            <span>{t('footer.copyright', { year: currentYear })}</span>
            <div className="hidden sm:block w-1 h-1 bg-primary/30 rounded-full"></div>
            <div className="flex items-center space-x-1">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-4 w-4 text-destructive animate-pulse" />
              <span>{t('footer.and')}</span>
              <Zap className="h-4 w-4 text-accent animate-pulse" />
              <span>{t('footer.forInnovation')}</span>
            </div>
          </div>

          {/* Force quote */}
          <div className="mt-6 text-xs text-muted-foreground/60 font-exo italic">
            {t('footer.forceQuote')}
          </div>
        </div>
      </div>
    </footer>
  );
}