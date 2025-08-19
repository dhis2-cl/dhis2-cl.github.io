import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ currentLanguage, activeCategory, setActiveCategory }) => {
  const content = {
    en: {
      title: "Browse by Category",
      categories: [
        {
          id: 'all',
          name: 'All Resources',
          icon: 'Grid3X3',
          count: 225,
          description: 'Complete knowledge base'
        },
        {
          id: 'implementation',
          name: 'Implementation Guides',
          icon: 'Settings',
          count: 85,
          description: 'Step-by-step implementation'
        },
        {
          id: 'compliance',
          name: 'Chilean Compliance',
          icon: 'Shield',
          count: 42,
          description: 'Regulatory requirements'
        },
        {
          id: 'technical',
          name: 'Technical Documentation',
          icon: 'Code',
          count: 68,
          description: 'API & development guides'
        },
        {
          id: 'training',
          name: 'Training Materials',
          icon: 'GraduationCap',
          count: 30,
          description: 'Learning resources'
        }
      ]
    },
    es: {
      title: "Explorar por Categoría",
      categories: [
        {
          id: 'all',
          name: 'Todos los Recursos',
          icon: 'Grid3X3',
          count: 225,
          description: 'Base de conocimiento completa'
        },
        {
          id: 'implementation',
          name: 'Guías de Implementación',
          icon: 'Settings',
          count: 85,
          description: 'Implementación paso a paso'
        },
        {
          id: 'compliance',
          name: 'Cumplimiento Chileno',
          icon: 'Shield',
          count: 42,
          description: 'Requisitos regulatorios'
        },
        {
          id: 'technical',
          name: 'Documentación Técnica',
          icon: 'Code',
          count: 68,
          description: 'Guías de API y desarrollo'
        },
        {
          id: 'training',
          name: 'Materiales de Capacitación',
          icon: 'GraduationCap',
          count: 30,
          description: 'Recursos de aprendizaje'
        }
      ]
    }
  };

  const text = content?.[currentLanguage];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {text?.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {text?.categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:transform hover:scale-105 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-elevation-lg'
                  : 'bg-white text-text-primary border-border hover:border-primary/30 hover:shadow-elevation'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                  activeCategory === category?.id
                    ? 'bg-white/20' :'bg-primary/10'
                }`}>
                  <Icon 
                    name={category?.icon} 
                    size={24} 
                    color={activeCategory === category?.id ? 'white' : 'var(--color-primary)'} 
                  />
                </div>
                <span className={`text-2xl font-bold ${
                  activeCategory === category?.id ? 'text-white' : 'text-primary'
                }`}>
                  {category?.count}
                </span>
              </div>
              
              <h3 className="font-semibold text-lg mb-2">
                {category?.name}
              </h3>
              
              <p className={`text-sm ${
                activeCategory === category?.id ? 'text-white/80' : 'text-text-secondary'
              }`}>
                {category?.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;