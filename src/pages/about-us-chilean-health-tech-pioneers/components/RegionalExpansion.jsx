import React from 'react';
import Icon from '../../../components/AppIcon';


const RegionalExpansion = () => {
  const expansionPlan = [
    {
      phase: 'Fase 1',
      timeline: '2024 - 2025',
      countries: ['Argentina', 'Perú'],
      status: 'En Progreso',
      description: 'Establecimiento de oficinas regionales y partnerships locales',
      milestones: [
        'Oficina en Buenos Aires (Q2 2024)',
        'Partnership con MINSA Perú (Q3 2024)',
        'Primer proyecto piloto en Argentina (Q4 2024)',
        'Certificación local de equipo (Q1 2025)'
      ],
      investment: '$500K USD',
      expectedClients: 15
    },
    {
      phase: 'Fase 2',
      timeline: '2025 - 2026',
      countries: ['Colombia', 'Ecuador'],
      status: 'Planificado',
      description: 'Expansión a mercados andinos con fuerte presencia gubernamental',
      milestones: [
        'Análisis de mercado y regulaciones (Q1 2025)',
        'Establecimiento de partnerships (Q2 2025)',
        'Oficina en Bogotá (Q3 2025)',
        'Primeros contratos gubernamentales (Q4 2025)'
      ],
      investment: '$750K USD',
      expectedClients: 25
    },
    {
      phase: 'Fase 3',
      timeline: '2026 - 2027',
      countries: ['Brasil', 'México'],
      status: 'Visión',
      description: 'Entrada a los mercados más grandes de América Latina',
      milestones: [
        'Alianzas estratégicas con integradores locales',
        'Adaptación de soluciones a regulaciones locales',
        'Establecimiento de centros de desarrollo',
        'Expansión del equipo técnico regional'
      ],
      investment: '$1.2M USD',
      expectedClients: 50
    }
  ];

  const competitiveAdvantages = [
    {
      icon: 'Award',
      title: 'Experiencia Comprobada',
      description: 'Track record exitoso en implementaciones gubernamentales complejas'
    },
    {
      icon: 'Users',
      title: 'Equipo Multicultural',
      description: 'Profesionales con experiencia en múltiples países latinoamericanos'
    },
    {
      icon: 'Globe',
      title: 'Conocimiento Regional',
      description: 'Comprensión profunda de regulaciones y culturas locales'
    },
    {
      icon: 'Zap',
      title: 'Metodología Probada',
      description: 'Framework de implementación adaptable a diferentes contextos'
    }
  ];

  const currentPresence = [
    {
      country: 'Chile',
      flag: '🇨🇱',
      status: 'Sede Principal',
      offices: 4,
      clients: 63,
      team: 30,
      revenue: '100%'
    },
    {
      country: 'Argentina',
      flag: '🇦🇷',
      status: 'En Desarrollo',
      offices: 1,
      clients: 3,
      team: 5,
      revenue: '5%'
    },
    {
      country: 'Perú',
      flag: '🇵🇪',
      status: 'Piloto',
      offices: 0,
      clients: 1,
      team: 2,
      revenue: '2%'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Visión de Expansión Regional
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Nuestro plan estratégico para convertirnos en el líder regional de implementación DHIS2 
            en América Latina, manteniendo nuestra sede y expertise en Chile.
          </p>
        </div>

        {/* Current Presence */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Presencia Actual
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentPresence?.map((presence, index) => (
              <div key={index} className="surface-elevated text-center p-6 hover-lift">
                <div className="text-4xl mb-4">{presence?.flag}</div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {presence?.country}
                </h4>
                <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                  presence?.status === 'Sede Principal' ? 'bg-primary/10 text-primary' :
                  presence?.status === 'En Desarrollo'? 'bg-warning/10 text-warning' : 'bg-accent/10 text-accent'
                }`}>
                  {presence?.status}
                </span>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Oficinas:</span>
                    <span className="font-medium text-text-primary">{presence?.offices}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Clientes:</span>
                    <span className="font-medium text-text-primary">{presence?.clients}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Equipo:</span>
                    <span className="font-medium text-text-primary">{presence?.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Revenue:</span>
                    <span className="font-medium text-text-primary">{presence?.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expansion Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Plan de Expansión 2024-2027
          </h3>
          <div className="space-y-8">
            {expansionPlan?.map((phase, index) => (
              <div key={index} className="surface-elevated hover-lift">
                <div className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          phase?.status === 'En Progreso' ? 'bg-primary' :
                          phase?.status === 'Planificado'? 'bg-warning' : 'bg-muted'
                        }`}>
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-text-primary">{phase?.phase}</h4>
                          <p className="text-sm text-text-secondary">{phase?.timeline}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-text-primary mb-2">Países Objetivo:</h5>
                          <div className="flex flex-wrap gap-2">
                            {phase?.countries?.map((country, idx) => (
                              <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
                                {country}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-text-secondary">Inversión:</span>
                            <div className="font-medium text-text-primary">{phase?.investment}</div>
                          </div>
                          <div>
                            <span className="text-text-secondary">Clientes Meta:</span>
                            <div className="font-medium text-text-primary">{phase?.expectedClients}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {phase?.description}
                      </p>
                      
                      <h5 className="font-medium text-text-primary mb-3">Hitos Clave:</h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {phase?.milestones?.map((milestone, idx) => (
                          <div key={idx} className="flex items-start space-x-2 p-2 bg-muted rounded-lg">
                            <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                            <span className="text-sm text-text-secondary">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-8 text-center">
            Ventajas Competitivas para la Expansión
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitiveAdvantages?.map((advantage, index) => (
              <div key={index} className="surface-elevated text-center p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{advantage?.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{advantage?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="surface-elevated p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Icon name="Telescope" size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Nuestra Visión 2027
            </h3>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              "Ser reconocidos como el socio de confianza número uno para implementación DHIS2 
              en América Latina, manteniendo nuestra sede en Chile como centro de excelencia 
              e innovación para toda la región."
            </p>
            
            <div className="grid sm:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-text-secondary">Países con Presencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-text-secondary">Clientes Regionales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-text-secondary">Profesionales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$10M</div>
                <div className="text-sm text-text-secondary">Revenue Anual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalExpansion;