import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = ({ currentLanguage, searchQuery, setSearchQuery, handleSearch }) => {
  const content = {
    en: {
      title: "DHIS2 Knowledge Center",
      subtitle: "Your comprehensive resource hub for DHIS2 implementation expertise in Chile",
      description: "Access implementation guides, technical documentation, and best practices tailored for Chilean healthcare systems and regulatory requirements.",
      searchPlaceholder: "Search guides, documentation, tutorials...",
      searchButton: "Search Knowledge Base",
      stats: [
        { number: "150+", label: "Implementation Guides" },
        { number: "50+", label: "Technical Articles" },
        { number: "25+", label: "Video Tutorials" },
        { number: "1000+", label: "Community Members" }
      ]
    },
    es: {
      title: "Centro de Conocimiento DHIS2",
      subtitle: "Tu centro integral de recursos para experiencia en implementación DHIS2 en Chile",
      description: "Accede a guías de implementación, documentación técnica y mejores prácticas adaptadas para sistemas de salud chilenos y requisitos regulatorios.",
      searchPlaceholder: "Buscar guías, documentación, tutoriales...",
      searchButton: "Buscar Base de Conocimiento",
      stats: [
        { number: "150+", label: "Guías de Implementación" },
        { number: "50+", label: "Artículos Técnicos" },
        { number: "25+", label: "Video Tutoriales" },
        { number: "1000+", label: "Miembros de la Comunidad" }
      ]
    }
  };

  const text = content?.[currentLanguage];

  return (
    <section className="relative bg-gradient-to-br from-primary via-dhis2-purple to-primary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-glass rounded-2xl">
              <Icon name="BookOpen" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            {text?.title}
          </h1>
          
          <p className="text-xl lg:text-2xl font-medium mb-4 text-white/90">
            {text?.subtitle}
          </p>
          
          <p className="text-lg mb-12 text-white/80 max-w-3xl mx-auto">
            {text?.description}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon name="Search" size={20} color="rgb(100, 116, 139)" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                placeholder={text?.searchPlaceholder}
                className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-glass text-text-primary placeholder-text-secondary rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-lg"
                onKeyPress={(e) => e?.key === 'Enter' && handleSearch()}
              />
              <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleSearch}
                  className="bg-accent hover:bg-accent/90"
                >
                  {text?.searchButton}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {text?.stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                  {stat?.number}
                </div>
                <div className="text-sm lg:text-base text-white/80 font-medium">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;