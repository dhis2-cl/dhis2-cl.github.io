import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [hoveredRegion, setHoveredRegion] = useState(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    es: {
      title: "Nuestro Impacto en Chile",
      subtitle: "Implementaciones DHIS2 exitosas a lo largo del país",
      viewAll: "Ver Todos los Proyectos"
    },
    en: {
      title: "Our Impact Across Chile",
      subtitle: "Successful DHIS2 implementations throughout the country",
      viewAll: "View All Projects"
    }
  };

  const implementations = [
    {
      id: 1,
      region: "Región Metropolitana",
      city: "Santiago",
      facilities: 45,
      population: "7.2M",
      improvement: "35% reduction in data collection time",
      status: "completed",
      coordinates: { x: 50, y: 70 }
    },
    {
      id: 2,
      region: "Región de Valparaíso",
      city: "Valparaíso",
      facilities: 28,
      population: "1.8M",
      improvement: "98% data accuracy achieved",
      status: "completed",
      coordinates: { x: 45, y: 65 }
    },
    {
      id: 3,
      region: "Región del Biobío",
      city: "Concepción",
      facilities: 32,
      population: "2.1M",
      improvement: "Real-time reporting implemented",
      status: "ongoing",
      coordinates: { x: 48, y: 80 }
    },
    {
      id: 4,
      region: "Región de La Araucanía",
      city: "Temuco",
      facilities: 18,
      population: "957K",
      improvement: "Mobile data collection deployed",
      status: "completed",
      coordinates: { x: 47, y: 85 }
    },
    {
      id: 5,
      region: "Región de Antofagasta",
      city: "Antofagasta",
      facilities: 15,
      population: "607K",
      improvement: "Mining health surveillance system",
      status: "planning",
      coordinates: { x: 52, y: 25 }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-success';
      case 'ongoing': return 'bg-accent';
      case 'planning': return 'bg-dhis2-purple';
      default: return 'bg-primary';
    }
  };

  const getStatusText = (status) => {
    const statusTexts = {
      es: {
        completed: 'Completado',
        ongoing: 'En Progreso',
        planning: 'Planificación'
      },
      en: {
        completed: 'Completed',
        ongoing: 'Ongoing',
        planning: 'Planning'
      }
    };
    return statusTexts?.[currentLanguage]?.[status];
  };

  return (
    <section className="py-16 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-elevation border border-border">
              {/* Chile Map SVG Container */}
              <div className="relative w-full h-96 bg-white rounded-xl shadow-inner overflow-hidden">
                {/* Simplified Chile Map Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-slate-100 to-blue-100 opacity-30"></div>
                
                {/* Chile Outline */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  <path
                    d="M45 10 L55 10 L58 15 L60 25 L58 35 L55 45 L52 55 L50 65 L48 75 L45 85 L42 90 L40 85 L42 75 L44 65 L46 55 L48 45 L46 35 L44 25 L42 15 Z"
                    fill="rgba(30, 58, 138, 0.1)"
                    stroke="rgba(30, 58, 138, 0.3)"
                    strokeWidth="0.5"
                  />
                </svg>

                {/* Implementation Points */}
                {implementations?.map((impl) => (
                  <div
                    key={impl?.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ 
                      left: `${impl?.coordinates?.x}%`, 
                      top: `${impl?.coordinates?.y}%` 
                    }}
                    onMouseEnter={() => setHoveredRegion(impl)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <div className={`w-4 h-4 ${getStatusColor(impl?.status)} rounded-full shadow-elevation animate-pulse`}>
                      <div className={`w-4 h-4 ${getStatusColor(impl?.status)} rounded-full opacity-50 animate-ping`}></div>
                    </div>
                  </div>
                ))}

                {/* Hover Tooltip */}
                {hoveredRegion && (
                  <div
                    className="absolute z-10 bg-white rounded-lg shadow-elevation-lg border border-border p-4 min-w-64 pointer-events-none"
                    style={{
                      left: `${hoveredRegion?.coordinates?.x + 5}%`,
                      top: `${hoveredRegion?.coordinates?.y - 10}%`,
                      transform: 'translateY(-100%)'
                    }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-text-primary">{hoveredRegion?.city}</h4>
                        <span className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getStatusColor(hoveredRegion?.status)}`}>
                          {getStatusText(hoveredRegion?.status)}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">{hoveredRegion?.region}</p>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-text-secondary">Facilities:</span>
                          <div className="font-medium text-text-primary">{hoveredRegion?.facilities}</div>
                        </div>
                        <div>
                          <span className="text-text-secondary">Population:</span>
                          <div className="font-medium text-text-primary">{hoveredRegion?.population}</div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-primary font-medium">{hoveredRegion?.improvement}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Map Legend */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-xs text-text-secondary">{getStatusText('completed')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-xs text-text-secondary">{getStatusText('ongoing')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-dhis2-purple rounded-full"></div>
                  <span className="text-xs text-text-secondary">{getStatusText('planning')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">15</div>
                    <div className="text-sm text-text-secondary">
                      {currentLanguage === 'es' ? 'Regiones' : 'Regions'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-6 border border-success/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Building2" size={24} className="text-success" />
                  <div>
                    <div className="text-2xl font-bold text-success">138</div>
                    <div className="text-sm text-text-secondary">
                      {currentLanguage === 'es' ? 'Centros' : 'Facilities'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Users" size={24} className="text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-accent">12.7M</div>
                    <div className="text-sm text-text-secondary">
                      {currentLanguage === 'es' ? 'Población' : 'Population'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-dhis2-purple/10 to-dhis2-purple/5 rounded-xl p-6 border border-dhis2-purple/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="TrendingUp" size={24} className="text-dhis2-purple" />
                  <div>
                    <div className="text-2xl font-bold text-dhis2-purple">94%</div>
                    <div className="text-sm text-text-secondary">
                      {currentLanguage === 'es' ? 'Mejora' : 'Improvement'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Implementation */}
            <div className="bg-white rounded-xl shadow-elevation border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-text-primary">
                  {currentLanguage === 'es' ? 'Implementación Reciente' : 'Recent Implementation'}
                </h3>
                <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  {getStatusText('completed')}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-primary">Hospital Regional de Temuco</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-primary">
                    {currentLanguage === 'es' ? 'Completado en Julio 2024' : 'Completed July 2024'}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-success">
                    {currentLanguage === 'es' ?'40% reducción en tiempo de reportes' :'40% reduction in reporting time'
                    }
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium">
                <span>{content?.[currentLanguage]?.viewAll}</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;