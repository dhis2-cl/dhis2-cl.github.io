import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArticles = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Featured Articles",
      subtitle: "Essential reading for DHIS2 implementation success",
      viewAll: "View All Articles",
      readMore: "Read More",
      articles: [
        {
          id: 1,
          title: "Integrating DHIS2 with Legacy Chilean Health Systems",
          excerpt: "A comprehensive guide to seamlessly connecting DHIS2 with existing health information systems in Chilean healthcare facilities, addressing common integration challenges and providing practical solutions.",
          author: "Dr. María González",
          authorRole: "Senior DHIS2 Consultant",
          readTime: "12 min read",
          publishDate: "August 15, 2025",
          category: "Implementation",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
          tags: ["Integration", "Legacy Systems", "Chile"],
          featured: true
        },
        {
          id: 2,
          title: "DHIS2 Configuration for Chilean Health Ministry Reporting",
          excerpt: "Step-by-step configuration guide for meeting Chilean Ministry of Health reporting requirements, including data elements, indicators, and automated report generation.",
          author: "Carlos Mendoza",
          authorRole: "Technical Lead",
          readTime: "18 min read",
          publishDate: "August 12, 2025",
          category: "Compliance",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
          tags: ["Configuration", "Reporting", "Ministry"],
          featured: true
        },
        {
          id: 3,
          title: "Custom DHIS2 Apps for Chilean Healthcare Workflows",
          excerpt: "Learn how to develop custom DHIS2 applications tailored to Chilean healthcare workflows, including patient tracking, resource management, and performance monitoring.",
          author: "Ana Rodríguez",
          authorRole: "Full Stack Developer",
          readTime: "25 min read",
          publishDate: "August 10, 2025",
          category: "Development",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
          tags: ["Custom Apps", "Development", "Workflows"],
          featured: true
        }
      ]
    },
    es: {
      title: "Artículos Destacados",
      subtitle: "Lectura esencial para el éxito de la implementación DHIS2",
      viewAll: "Ver Todos los Artículos",
      readMore: "Leer Más",
      articles: [
        {
          id: 1,
          title: "Integrando DHIS2 con Sistemas de Salud Chilenos Heredados",
          excerpt: "Una guía completa para conectar sin problemas DHIS2 con sistemas de información de salud existentes en instalaciones de salud chilenas, abordando desafíos comunes de integración y proporcionando soluciones prácticas.",
          author: "Dra. María González",
          authorRole: "Consultora Senior DHIS2",
          readTime: "12 min de lectura",
          publishDate: "15 de Agosto, 2025",
          category: "Implementación",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
          tags: ["Integración", "Sistemas Heredados", "Chile"],
          featured: true
        },
        {
          id: 2,
          title: "Configuración DHIS2 para Reportes del Ministerio de Salud Chileno",
          excerpt: "Guía de configuración paso a paso para cumplir con los requisitos de reporte del Ministerio de Salud de Chile, incluyendo elementos de datos, indicadores y generación automatizada de reportes.",
          author: "Carlos Mendoza",
          authorRole: "Líder Técnico",
          readTime: "18 min de lectura",
          publishDate: "12 de Agosto, 2025",
          category: "Cumplimiento",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
          tags: ["Configuración", "Reportes", "Ministerio"],
          featured: true
        },
        {
          id: 3,
          title: "Apps DHIS2 Personalizadas para Flujos de Trabajo de Salud Chilenos",
          excerpt: "Aprende cómo desarrollar aplicaciones DHIS2 personalizadas adaptadas a flujos de trabajo de salud chilenos, incluyendo seguimiento de pacientes, gestión de recursos y monitoreo de rendimiento.",
          author: "Ana Rodríguez",
          authorRole: "Desarrolladora Full Stack",
          readTime: "25 min de lectura",
          publishDate: "10 de Agosto, 2025",
          category: "Desarrollo",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
          tags: ["Apps Personalizadas", "Desarrollo", "Flujos de Trabajo"],
          featured: true
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
          {text?.articles?.map((article, index) => (
            <article 
              key={article?.id}
              className={`bg-white rounded-xl border border-border hover:shadow-elevation-lg transition-all duration-300 overflow-hidden group hover:transform hover:scale-[1.02] ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article?.image}
                  alt={article?.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    index === 0 ? 'h-64 lg:h-80' : 'h-48'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {article?.category}
                  </span>
                </div>
                {article?.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      <Icon name="Star" size={12} />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article?.tags?.map((tag, tagIndex) => (
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
                  {article?.title}
                </h3>
                
                <p className={`text-text-secondary mb-6 line-clamp-3 ${
                  index === 0 ? 'text-lg' : 'text-base'
                }`}>
                  {article?.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-dhis2-purple rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} color="white" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary text-sm">
                        {article?.author}
                      </div>
                      <div className="text-text-secondary text-xs">
                        {article?.authorRole}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-text-secondary text-sm mb-1">
                      {article?.publishDate}
                    </div>
                    <div className="text-text-secondary text-xs">
                      {article?.readTime}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  >
                    {text?.readMore}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="BookOpen"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            {text?.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;