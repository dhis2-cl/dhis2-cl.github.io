import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunityForum = ({ currentLanguage }) => {
  const content = {
    en: {
      title: "Community Forum",
      subtitle: "Connect with DHIS2 experts and share experiences",
      joinCommunity: "Join Community",
      askQuestion: "Ask Question",
      viewTopic: "View Topic",
      replies: "replies",
      views: "views",
      lastActivity: "Last activity",
      topics: [
        {
          id: 1,
          title: "Best practices for DHIS2 data validation in Chilean context",
          excerpt: "Looking for recommendations on setting up data validation rules that align with Chilean health ministry requirements...",
          author: "Carlos M.",
          authorRole: "System Administrator",
          category: "Implementation",
          replies: 12,
          views: 245,
          lastActivity: "2 hours ago",
          tags: ["Data Validation", "Chile", "Best Practices"],
          solved: false,
          pinned: true
        },
        {
          id: 2,
          title: "Custom indicator formulas for maternal health tracking",
          excerpt: "Has anyone implemented custom indicators for tracking maternal health outcomes? Need help with formula syntax...",
          author: "Ana R.",
          authorRole: "Health Data Analyst",
          category: "Analytics",
          replies: 8,
          views: 156,
          lastActivity: "4 hours ago",
          tags: ["Indicators", "Maternal Health", "Formulas"],
          solved: true,
          pinned: false
        },
        {
          id: 3,
          title: "Mobile app configuration for offline data collection",
          excerpt: "Struggling with configuring the Android app for offline data collection in rural areas with poor connectivity...",
          author: "Roberto S.",
          authorRole: "Field Coordinator",
          category: "Mobile",
          replies: 15,
          views: 389,
          lastActivity: "6 hours ago",
          tags: ["Mobile", "Offline", "Android"],
          solved: false,
          pinned: false
        },
        {
          id: 4,
          title: "Integration with Chilean laboratory information systems",
          excerpt: "Need guidance on integrating DHIS2 with existing LIS systems used in Chilean hospitals...",
          author: "María G.",
          authorRole: "Technical Lead",
          category: "Integration",
          replies: 6,
          views: 198,
          lastActivity: "8 hours ago",
          tags: ["Integration", "LIS", "Hospitals"],
          solved: false,
          pinned: false
        }
      ],
      stats: [
        { label: "Active Members", value: "1,250+" },
        { label: "Topics Discussed", value: "3,400+" },
        { label: "Questions Answered", value: "2,800+" },
        { label: "Expert Contributors", value: "45+" }
      ]
    },
    es: {
      title: "Foro de la Comunidad",
      subtitle: "Conéctate con expertos DHIS2 y comparte experiencias",
      joinCommunity: "Unirse a la Comunidad",
      askQuestion: "Hacer Pregunta",
      viewTopic: "Ver Tema",
      replies: "respuestas",
      views: "visualizaciones",
      lastActivity: "Última actividad",
      topics: [
        {
          id: 1,
          title: "Mejores prácticas para validación de datos DHIS2 en contexto chileno",
          excerpt: "Buscando recomendaciones para configurar reglas de validación de datos que se alineen con los requisitos del ministerio de salud chileno...",
          author: "Carlos M.",
          authorRole: "Administrador de Sistemas",
          category: "Implementación",
          replies: 12,
          views: 245,
          lastActivity: "hace 2 horas",
          tags: ["Validación de Datos", "Chile", "Mejores Prácticas"],
          solved: false,
          pinned: true
        },
        {
          id: 2,
          title: "Fórmulas de indicadores personalizados para seguimiento de salud materna",
          excerpt: "¿Alguien ha implementado indicadores personalizados para rastrear resultados de salud materna? Necesito ayuda con la sintaxis de fórmulas...",
          author: "Ana R.",
          authorRole: "Analista de Datos de Salud",
          category: "Analíticas",
          replies: 8,
          views: 156,
          lastActivity: "hace 4 horas",
          tags: ["Indicadores", "Salud Materna", "Fórmulas"],
          solved: true,
          pinned: false
        },
        {
          id: 3,
          title: "Configuración de app móvil para recolección de datos offline",
          excerpt: "Tengo problemas configurando la app Android para recolección de datos offline en áreas rurales con conectividad pobre...",
          author: "Roberto S.",
          authorRole: "Coordinador de Campo",
          category: "Móvil",
          replies: 15,
          views: 389,
          lastActivity: "hace 6 horas",
          tags: ["Móvil", "Offline", "Android"],
          solved: false,
          pinned: false
        },
        {
          id: 4,
          title: "Integración con sistemas de información de laboratorio chilenos",
          excerpt: "Necesito orientación para integrar DHIS2 con sistemas LIS existentes usados en hospitales chilenos...",
          author: "María G.",
          authorRole: "Líder Técnico",
          category: "Integración",
          replies: 6,
          views: 198,
          lastActivity: "hace 8 horas",
          tags: ["Integración", "LIS", "Hospitales"],
          solved: false,
          pinned: false
        }
      ],
      stats: [
        { label: "Miembros Activos", value: "1,250+" },
        { label: "Temas Discutidos", value: "3,400+" },
        { label: "Preguntas Respondidas", value: "2,800+" },
        { label: "Contribuyentes Expertos", value: "45+" }
      ]
    }
  };

  const text = content?.[currentLanguage];

  const getCategoryColor = (category) => {
    const colors = {
      'Implementation': 'bg-primary/10 text-primary',
      'Implementación': 'bg-primary/10 text-primary',
      'Analytics': 'bg-accent/10 text-accent',
      'Analíticas': 'bg-accent/10 text-accent',
      'Mobile': 'bg-success/10 text-success',
      'Móvil': 'bg-success/10 text-success',
      'Integration': 'bg-dhis2-purple/10 text-dhis2-purple',
      'Integración': 'bg-dhis2-purple/10 text-dhis2-purple'
    };
    return colors?.[category] || 'bg-muted text-text-secondary';
  };

  return (
    <section className="bg-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {text?.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            {text?.subtitle}
          </p>
          
          {/* Community Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {text?.stats?.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat?.value}
                </div>
                <div className="text-sm text-text-secondary font-medium">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Users"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              {text?.joinCommunity}
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {text?.askQuestion}
            </Button>
          </div>
        </div>
        
        {/* Forum Topics */}
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-bold text-text-primary">Recent Discussions</h3>
          </div>
          
          <div className="divide-y divide-border">
            {text?.topics?.map((topic) => (
              <div key={topic?.id} className="p-6 hover:bg-muted/50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      {topic?.pinned && (
                        <Icon name="Pin" size={16} color="var(--color-accent)" />
                      )}
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(topic?.category)}`}>
                        {topic?.category}
                      </span>
                      {topic?.solved && (
                        <div className="flex items-center space-x-1 px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                          <Icon name="CheckCircle" size={12} />
                          <span>Solved</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold text-text-primary mb-2 hover:text-primary transition-colors duration-200 cursor-pointer">
                      {topic?.title}
                    </h4>
                    
                    <p className="text-text-secondary mb-4 line-clamp-2">
                      {topic?.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {topic?.tags?.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-dhis2-purple rounded-full flex items-center justify-center">
                            <Icon name="User" size={12} color="white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-text-primary">
                              {topic?.author}
                            </div>
                            <div className="text-xs text-text-secondary">
                              {topic?.authorRole}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={16} />
                          <span>{topic?.replies} {text?.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={16} />
                          <span>{topic?.views} {text?.views}</span>
                        </div>
                        <div className="text-xs">
                          {text?.lastActivity}: {topic?.lastActivity}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="ml-6">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="text-primary hover:bg-primary/10"
                    >
                      {text?.viewTopic}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;