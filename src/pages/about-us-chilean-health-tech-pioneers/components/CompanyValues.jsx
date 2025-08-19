import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyValues = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Excelencia Técnica',
      description: 'Mantenemos los más altos estándares en cada implementación DHIS2',
      example: 'Proyecto Hospital Salvador: Reducción del 40% en tiempo de reportes mediante optimización de flujos de datos',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'
    },
    {
      icon: 'Heart',
      title: 'Impacto Humano',
      description: 'Cada línea de código que escribimos tiene el potencial de salvar vidas',
      example: 'Sistema de Vigilancia Epidemiológica: Detección temprana de brotes redujo casos en 60%',
      color: 'bg-conversion-red',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      icon: 'Handshake',
      title: 'Enfoque de Asociación',
      description: 'Trabajamos como socios estratégicos, no solo como proveedores',
      example: 'Ministerio de Salud: Colaboración continua durante 4 años con 98% de satisfacción',
      color: 'bg-dhis2-purple',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop'
    },
    {
      icon: 'Globe',
      title: 'Competencia Cultural',
      description: 'Profundo entendimiento del contexto sanitario y regulatorio chileno',
      example: 'Adaptación DHIS2 para cumplir con normativas MINSAL y protocolos GES',
      color: 'bg-accent',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovación Continua',
      description: 'Pioneros en integrar tecnologías emergentes con sistemas de salud',
      example: 'IA Predictiva: Algoritmos de machine learning para predicción de demanda hospitalaria',
      color: 'bg-warning',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop'
    },
    {
      icon: 'Shield',
      title: 'Transparencia Total',
      description: 'Comunicación abierta y honesta en cada etapa del proyecto',
      example: 'Dashboard de Proyecto: Clientes acceden en tiempo real al progreso y métricas',
      color: 'bg-success',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Nuestros Valores en Acción
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Cada valor que profesamos se refleja en proyectos reales que han transformado 
            la salud pública en Chile y la región.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {values?.map((value, index) => (
            <div key={index} className="surface-elevated hover-lift overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={value?.image}
                  alt={`Ejemplo de ${value?.title} en acción`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${value?.color} rounded-lg flex items-center justify-center shadow-elevation`}>
                  <Icon name={value?.icon} size={24} color="white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {value?.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {value?.description}
                </p>
                
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-text-primary text-sm mb-1">Ejemplo Real:</h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {value?.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Video Section */}
        <div className="mt-16">
          <div className="surface-elevated p-8 text-center">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Conoce Nuestra Cultura
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Escucha directamente de nuestro equipo sobre su pasión por la informática sanitaria 
              y su compromiso con mejorar los resultados de salud poblacional.
            </p>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop"
                  alt="Video de cultura empresarial - Equipo DHIS2 Solutions Chile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 backdrop-blur-glass rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group">
                    <Icon name="Play" size={32} className="text-primary ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-glass rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-1">
                      "Transformando Datos en Esperanza"
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Testimonios del equipo sobre su misión de mejorar la salud pública a través de la tecnología
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-text-secondary">Satisfacción del Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                <div className="text-sm text-text-secondary">Rating de Empleados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-text-secondary">Retención de Talento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;