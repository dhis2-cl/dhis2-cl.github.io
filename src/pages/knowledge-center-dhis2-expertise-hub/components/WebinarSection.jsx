import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WebinarSection = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Webinar Recordings",
      subtitle: "Learn from expert presentations and community discussions",
      viewAll: "View All Webinars",
      watchNow: "Watch Now",
      duration: "Duration",
      views: "views",
      webinars: [
        {
          id: 1,
          title: "DHIS2 Implementation Best Practices for Chilean Healthcare",
          description: "Comprehensive overview of successful DHIS2 implementations across Chilean health facilities, featuring case studies and lessons learned.",
          presenter: "Dr. María González & Carlos Mendoza",
          duration: "45 min",
          views: 2840,
          publishDate: "August 10, 2025",
          category: "Implementation",
          thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop",
          tags: ["Best Practices", "Chile", "Healthcare"],
          featured: true,
          subtitles: ["Spanish", "English"]
        },
        {
          id: 2,
          title: "Advanced DHIS2 Analytics and Dashboard Creation",
          description: "Deep dive into creating powerful analytics dashboards and reports using DHIS2\'s advanced visualization capabilities.",
          presenter: "Ana Rodríguez",
          duration: "38 min",
          views: 1920,
          publishDate: "August 5, 2025",
          category: "Analytics",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
          tags: ["Analytics", "Dashboards", "Visualization"],
          featured: false,
          subtitles: ["Spanish", "English"]
        },
        {
          id: 3,
          title: "DHIS2 Mobile Data Collection in Rural Chile",
          description: "Strategies and solutions for implementing mobile data collection in remote Chilean healthcare facilities with limited connectivity.",
          presenter: "Roberto Silva",
          duration: "42 min",
          views: 1560,
          publishDate: "July 28, 2025",
          category: "Mobile",
          thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop",
          tags: ["Mobile", "Rural", "Data Collection"],
          featured: false,
          subtitles: ["Spanish", "English"]
        }
      ]
    },
    es: {
      title: "Grabaciones de Webinars",
      subtitle: "Aprende de presentaciones de expertos y discusiones de la comunidad",
      viewAll: "Ver Todos los Webinars",
      watchNow: "Ver Ahora",
      duration: "Duración",
      views: "visualizaciones",
      webinars: [
        {
          id: 1,
          title: "Mejores Prácticas de Implementación DHIS2 para Salud Chilena",
          description: "Visión general completa de implementaciones exitosas de DHIS2 en instalaciones de salud chilenas, con casos de estudio y lecciones aprendidas.",
          presenter: "Dra. María González & Carlos Mendoza",
          duration: "45 min",
          views: 2840,
          publishDate: "10 de Agosto, 2025",
          category: "Implementación",
          thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop",
          tags: ["Mejores Prácticas", "Chile", "Salud"],
          featured: true,
          subtitles: ["Español", "Inglés"]
        },
        {
          id: 2,
          title: "Analíticas Avanzadas DHIS2 y Creación de Dashboards",
          description: "Inmersión profunda en la creación de dashboards de analíticas poderosos y reportes usando las capacidades avanzadas de visualización de DHIS2.",
          presenter: "Ana Rodríguez",
          duration: "38 min",
          views: 1920,
          publishDate: "5 de Agosto, 2025",
          category: "Analíticas",
          thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
          tags: ["Analíticas", "Dashboards", "Visualización"],
          featured: false,
          subtitles: ["Español", "Inglés"]
        },
        {
          id: 3,
          title: "Recolección de Datos Móvil DHIS2 en Chile Rural",
          description: "Estrategias y soluciones para implementar recolección de datos móvil en instalaciones de salud chilenas remotas con conectividad limitada.",
          presenter: "Roberto Silva",
          duration: "42 min",
          views: 1560,
          publishDate: "28 de Julio, 2025",
          category: "Móvil",
          thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=450&fit=crop",
          tags: ["Móvil", "Rural", "Recolección de Datos"],
          featured: false,
          subtitles: ["Español", "Inglés"]
        }
      ]
    }
  };

  const text = content?.[currentLanguage];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {text?.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {text?.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {text?.webinars?.map((webinar, index) => (
            <div 
              key={webinar?.id}
              className={`bg-white rounded-xl border border-border hover:shadow-elevation-lg transition-all duration-300 overflow-hidden group hover:transform hover:scale-[1.02] ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={webinar?.thumbnail}
                  alt={webinar?.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    index === 0 ? 'h-64 lg:h-72' : 'h-48'
                  }`}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-glass rounded-full">
                    <Icon name="Play" size={24} color="var(--color-primary)" />
                  </div>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {webinar?.category}
                  </span>
                </div>
                
                {webinar?.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      <Icon name="Star" size={12} />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-4 right-4">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-black/70 text-white text-sm rounded-md">
                    <Icon name="Clock" size={14} />
                    <span>{webinar?.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {webinar?.tags?.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className={`font-bold text-text-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {webinar?.title}
                </h3>
                
                <p className={`text-text-secondary mb-6 line-clamp-3 ${
                  index === 0 ? 'text-lg' : 'text-base'
                }`}>
                  {webinar?.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-dhis2-purple rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} color="white" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary text-sm">
                        {webinar?.presenter}
                      </div>
                      <div className="text-text-secondary text-xs">
                        {webinar?.publishDate}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-text-secondary text-sm">
                      <Icon name="Eye" size={14} />
                      <span>{webinar?.views?.toLocaleString()} {text?.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Subtitles" size={16} color="var(--color-text-secondary)" />
                    <span className="text-sm text-text-secondary">
                      {webinar?.subtitles?.join(', ')}
                    </span>
                  </div>
                </div>
                
                <Button
                  variant="default"
                  fullWidth
                  iconName="Play"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:border-accent"
                >
                  {text?.watchNow}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="Video"
            iconPosition="left"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {text?.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebinarSection;