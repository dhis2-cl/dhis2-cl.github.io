import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const KnowledgeCenterPreview = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    es: {
      title: "Centro de Conocimiento DHIS2",
      subtitle: "Recursos especializados, mejores prácticas y guías técnicas para implementaciones exitosas",
      viewAll: "Ver Todos los Recursos",
      readMore: "Leer Más",
      downloadGuide: "Descargar Guía",
      categories: {
        bestPractices: "Mejores Prácticas",
        compliance: "Cumplimiento Normativo",
        technical: "Documentación Técnica",
        caseStudy: "Caso de Estudio"
      }
    },
    en: {
      title: "DHIS2 Knowledge Center",
      subtitle: "Specialized resources, best practices and technical guides for successful implementations",
      viewAll: "View All Resources",
      readMore: "Read More",
      downloadGuide: "Download Guide",
      categories: {
        bestPractices: "Best Practices",
        compliance: "Regulatory Compliance",
        technical: "Technical Documentation",
        caseStudy: "Case Study"
      }
    }
  };

  const knowledgeResources = [
    {
      id: 1,
      category: "bestPractices",
      title: {
        es: "Guía Completa de Implementación DHIS2 en Chile",
        en: "Complete Guide to DHIS2 Implementation in Chile"
      },
      excerpt: {
        es: "Una guía paso a paso para implementar DHIS2 en el contexto del sistema de salud chileno, incluyendo consideraciones regulatorias y mejores prácticas locales.",
        en: "A step-by-step guide to implementing DHIS2 in the context of the Chilean health system, including regulatory considerations and local best practices."
      },
      author: "Dr. Patricia Morales",
      readTime: "15 min",
      publishDate: "2024-08-15",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      downloadCount: 1247,
      isDownloadable: true,
      tags: ["DHIS2", "Implementación", "Chile", "Salud Pública"]
    },
    {
      id: 2,
      category: "compliance",
      title: {
        es: "Cumplimiento Normativo DHIS2: Regulaciones Chilenas de Datos de Salud",
        en: "DHIS2 Regulatory Compliance: Chilean Health Data Regulations"
      },
      excerpt: {
        es: "Análisis detallado de los requisitos normativos chilenos para sistemas de información sanitaria y cómo DHIS2 cumple con estas regulaciones.",
        en: "Detailed analysis of Chilean regulatory requirements for health information systems and how DHIS2 complies with these regulations."
      },
      author: "Carlos Mendoza",
      readTime: "12 min",
      publishDate: "2024-08-10",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop",
      downloadCount: 892,
      isDownloadable: true,
      tags: ["Normativas", "Compliance", "Datos", "Privacidad"]
    },
    {
      id: 3,
      category: "technical",
      title: {
        es: "Integración de DHIS2 con Sistemas Hospitalarios Existentes",
        en: "DHIS2 Integration with Existing Hospital Systems"
      },
      excerpt: {
        es: "Documentación técnica sobre patrones de integración, APIs y mejores prácticas para conectar DHIS2 con sistemas hospitalarios legacy.",
        en: "Technical documentation on integration patterns, APIs and best practices for connecting DHIS2 with legacy hospital systems."
      },
      author: "Ing. Roberto Silva",
      readTime: "20 min",
      publishDate: "2024-08-05",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop",
      downloadCount: 654,
      isDownloadable: false,
      tags: ["API", "Integración", "Sistemas", "Técnico"]
    },
    {
      id: 4,
      category: "caseStudy",
      title: {
        es: "Caso de Éxito: Digitalización del Hospital Regional de Temuco",
        en: "Success Case: Digitalization of Temuco Regional Hospital"
      },
      excerpt: {
        es: "Estudio detallado de la implementación DHIS2 en el Hospital Regional de Temuco, incluyendo desafíos, soluciones y resultados obtenidos.",
        en: "Detailed study of the DHIS2 implementation at Temuco Regional Hospital, including challenges, solutions and results achieved."
      },
      author: "Dra. Ana Contreras",
      readTime: "18 min",
      publishDate: "2024-07-28",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop",
      downloadCount: 1156,
      isDownloadable: true,
      tags: ["Caso de Éxito", "Hospital", "Temuco", "Resultados"]
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      bestPractices: 'bg-primary/10 text-primary border-primary/20',
      compliance: 'bg-accent/10 text-accent border-accent/20',
      technical: 'bg-dhis2-purple/10 text-dhis2-purple border-dhis2-purple/20',
      caseStudy: 'bg-success/10 text-success border-success/20'
    };
    return colors?.[category] || 'bg-slate-100 text-slate-600 border-slate-200';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date?.toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {content?.[currentLanguage]?.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {content?.[currentLanguage]?.subtitle}
          </p>
        </div>

        {/* Featured Resource */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-elevation border border-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="relative">
                <img
                  src={knowledgeResources?.[0]?.image}
                  alt={knowledgeResources?.[0]?.title?.[currentLanguage]}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(knowledgeResources?.[0]?.category)}`}>
                    {content?.[currentLanguage]?.categories?.[knowledgeResources?.[0]?.category]}
                  </span>
                </div>
                {knowledgeResources?.[0]?.isDownloadable && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-glass rounded-lg px-3 py-1 flex items-center space-x-2">
                      <Icon name="Download" size={14} className="text-primary" />
                      <span className="text-xs font-medium text-primary">
                        {knowledgeResources?.[0]?.downloadCount?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Featured Content */}
              <div className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-text-primary leading-tight">
                    {knowledgeResources?.[0]?.title?.[currentLanguage]}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {knowledgeResources?.[0]?.excerpt?.[currentLanguage]}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center space-x-6 text-sm text-text-secondary">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} />
                      <span>{knowledgeResources?.[0]?.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>{knowledgeResources?.[0]?.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>{formatDate(knowledgeResources?.[0]?.publishDate)}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {knowledgeResources?.[0]?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4 pt-4">
                    <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
                      <Icon name="BookOpen" size={16} />
                      <span>{content?.[currentLanguage]?.readMore}</span>
                    </button>
                    
                    {knowledgeResources?.[0]?.isDownloadable && (
                      <button className="flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-300 font-medium">
                        <Icon name="Download" size={16} />
                        <span>{content?.[currentLanguage]?.downloadGuide}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {knowledgeResources?.slice(1)?.map((resource) => (
            <div
              key={resource?.id}
              className="bg-white rounded-xl shadow-elevation border border-border overflow-hidden hover-lift animation-smooth group"
            >
              {/* Resource Image */}
              <div className="relative">
                <img
                  src={resource?.image}
                  alt={resource?.title?.[currentLanguage]}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getCategoryColor(resource?.category)}`}>
                    {content?.[currentLanguage]?.categories?.[resource?.category]}
                  </span>
                </div>
                {resource?.isDownloadable && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-glass rounded-lg p-2">
                      <Icon name="Download" size={16} className="text-primary" />
                    </div>
                  </div>
                )}
              </div>

              {/* Resource Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-3 leading-tight">
                  {resource?.title?.[currentLanguage]}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {resource?.excerpt?.[currentLanguage]}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={12} />
                    <span>{resource?.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={12} />
                    <span>{resource?.readTime}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1">
                    <span>{content?.[currentLanguage]?.readMore}</span>
                    <Icon name="ArrowRight" size={14} />
                  </button>
                  
                  {resource?.isDownloadable && (
                    <div className="flex items-center space-x-1 text-xs text-text-secondary">
                      <Icon name="Download" size={12} />
                      <span>{resource?.downloadCount?.toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Stats */}
        <div className="bg-white rounded-2xl shadow-elevation border border-border p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-dhis2-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="BookOpen" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">150+</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Recursos Disponibles' : 'Available Resources'}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-copper rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Download" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">25K+</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Descargas Totales' : 'Total Downloads'}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-dhis2-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">500+</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Profesionales Capacitados' : 'Trained Professionals'}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-dhis2-purple to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">98%</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Satisfacción' : 'Satisfaction'}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/knowledge-center-dhis2-expertise-hub">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-conversion-red text-conversion-red-foreground rounded-lg hover:bg-conversion-red/90 transition-colors duration-300 font-cta text-lg shadow-elevation">
              <span>{content?.[currentLanguage]?.viewAll}</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenterPreview;