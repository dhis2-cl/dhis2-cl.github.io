import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalDocumentation = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Technical Documentation",
      subtitle: "Comprehensive guides for developers and system administrators",
      viewAll: "View All Documentation",
      download: "Download",
      docs: [
        {
          id: 1,
          title: "DHIS2 API Integration Guide",
          description: "Complete reference for integrating with DHIS2 Web API, including authentication, data exchange, and error handling.",
          type: "API Reference",
          format: "PDF",
          size: "2.4 MB",
          pages: 45,
          lastUpdated: "August 18, 2025",
          downloads: 1250,
          icon: "Code",
          difficulty: "Intermediate",
          tags: ["API", "Integration", "Web Services"]
        },
        {
          id: 2,
          title: "Custom App Development Tutorial",
          description: "Step-by-step tutorial for building custom DHIS2 applications using React and the DHIS2 App Platform.",
          type: "Tutorial",
          format: "Interactive",
          size: "N/A",
          pages: "Multi-page",
          lastUpdated: "August 16, 2025",
          downloads: 890,
          icon: "Smartphone",
          difficulty: "Advanced",
          tags: ["Development", "React", "Apps"]
        },
        {
          id: 3,
          title: "Data Import/Export Configuration",
          description: "Comprehensive guide for configuring data import and export processes, including CSV, JSON, and XML formats.",
          type: "Configuration Guide",
          format: "PDF",
          size: "1.8 MB",
          pages: 32,
          lastUpdated: "August 14, 2025",
          downloads: 2100,
          icon: "Database",
          difficulty: "Beginner",
          tags: ["Data Management", "Import", "Export"]
        },
        {
          id: 4,
          title: "Performance Optimization Manual",
          description: "Best practices for optimizing DHIS2 performance, including database tuning, caching strategies, and server configuration.",
          type: "Best Practices",
          format: "PDF",
          size: "3.1 MB",
          pages: 58,
          lastUpdated: "August 12, 2025",
          downloads: 675,
          icon: "Zap",
          difficulty: "Advanced",
          tags: ["Performance", "Optimization", "Database"]
        }
      ]
    },
    es: {
      title: "Documentación Técnica",
      subtitle: "Guías completas para desarrolladores y administradores de sistemas",
      viewAll: "Ver Toda la Documentación",
      download: "Descargar",
      docs: [
        {
          id: 1,
          title: "Guía de Integración API DHIS2",
          description: "Referencia completa para integrar con la API Web de DHIS2, incluyendo autenticación, intercambio de datos y manejo de errores.",
          type: "Referencia API",
          format: "PDF",
          size: "2.4 MB",
          pages: 45,
          lastUpdated: "18 de Agosto, 2025",
          downloads: 1250,
          icon: "Code",
          difficulty: "Intermedio",
          tags: ["API", "Integración", "Servicios Web"]
        },
        {
          id: 2,
          title: "Tutorial de Desarrollo de Apps Personalizadas",
          description: "Tutorial paso a paso para construir aplicaciones DHIS2 personalizadas usando React y la Plataforma de Apps DHIS2.",
          type: "Tutorial",
          format: "Interactivo",
          size: "N/A",
          pages: "Multi-página",
          lastUpdated: "16 de Agosto, 2025",
          downloads: 890,
          icon: "Smartphone",
          difficulty: "Avanzado",
          tags: ["Desarrollo", "React", "Apps"]
        },
        {
          id: 3,
          title: "Configuración de Importación/Exportación de Datos",
          description: "Guía completa para configurar procesos de importación y exportación de datos, incluyendo formatos CSV, JSON y XML.",
          type: "Guía de Configuración",
          format: "PDF",
          size: "1.8 MB",
          pages: 32,
          lastUpdated: "14 de Agosto, 2025",
          downloads: 2100,
          icon: "Database",
          difficulty: "Principiante",
          tags: ["Gestión de Datos", "Importación", "Exportación"]
        },
        {
          id: 4,
          title: "Manual de Optimización de Rendimiento",
          description: "Mejores prácticas para optimizar el rendimiento de DHIS2, incluyendo ajuste de base de datos, estrategias de caché y configuración de servidor.",
          type: "Mejores Prácticas",
          format: "PDF",
          size: "3.1 MB",
          pages: 58,
          lastUpdated: "12 de Agosto, 2025",
          downloads: 675,
          icon: "Zap",
          difficulty: "Avanzado",
          tags: ["Rendimiento", "Optimización", "Base de Datos"]
        }
      ]
    }
  };

  const text = content?.[currentLanguage];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': case'Principiante':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate': case'Intermedio':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced': case'Avanzado':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-text-secondary border-border';
    }
  };

  return (
    <section className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {text?.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {text?.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {text?.docs?.map((doc) => (
            <div 
              key={doc?.id}
              className="bg-white rounded-xl border border-border hover:shadow-elevation-lg transition-all duration-300 overflow-hidden group hover:transform hover:scale-[1.02]"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl">
                      <Icon name={doc?.icon} size={28} color="var(--color-primary)" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-text-secondary">
                          {doc?.type}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-md border ${getDifficultyColor(doc?.difficulty)}`}>
                          {doc?.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
                        {doc?.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-6 line-clamp-3">
                  {doc?.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {doc?.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {doc?.downloads?.toLocaleString()}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Downloads
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {doc?.pages}
                    </div>
                    <div className="text-sm text-text-secondary">
                      Pages
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={16} />
                      <span>{doc?.format}</span>
                    </div>
                    {doc?.size !== 'N/A' && (
                      <div className="flex items-center space-x-1">
                        <Icon name="HardDrive" size={16} />
                        <span>{doc?.size}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {doc?.lastUpdated}
                  </div>
                </div>
                
                <Button
                  variant="default"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 group-hover:bg-accent group-hover:border-accent"
                >
                  {text?.download}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="FileText"
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

export default TechnicalDocumentation;