import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2021",
      title: "Fundación de la Empresa",
      description: "Inicio de operaciones con la visión de transformar la informática sanitaria en Chile",
      icon: "Rocket",
      color: "bg-primary"
    },
    {
      year: "2022",
      title: "Primera Asociación Gubernamental",
      description: "Implementación exitosa del primer sistema DHIS2 para el Ministerio de Salud de Chile",
      icon: "Building",
      color: "bg-dhis2-purple"
    },
    {
      year: "2023",
      title: "Certificación DHIS2 Core",
      description: "Reconocimiento oficial como implementadores certificados por el equipo central de DHIS2",
      icon: "Award",
      color: "bg-accent"
    },
    {
      year: "2024",
      title: "Expansión Regional",
      description: "Inicio de operaciones en países vecinos de América Latina",
      icon: "Globe",
      color: "bg-success"
    },
    {
      year: "2025",
      title: "Centro de Excelencia",
      description: "Establecimiento como centro de referencia DHIS2 para la región",
      icon: "Star",
      color: "bg-warning"
    },
    {
      year: "2026",
      title: "Innovación Continua",
      description: "Lanzamiento de soluciones de IA integradas para análisis predictivo de salud",
      icon: "Zap",
      color: "bg-conversion-red"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Nuestra Historia de Crecimiento
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Desde nuestros inicios hasta convertirnos en líderes regionales en implementación DHIS2, 
            cada hito marca nuestro compromiso con la excelencia en salud digital.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border lg:block hidden"></div>
          
          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div key={milestone?.year} className={`relative flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:space-x-8`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
                  <div className={`w-12 h-12 ${milestone?.color} rounded-full flex items-center justify-center shadow-elevation`}>
                    <Icon name={milestone?.icon} size={20} color="white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                }`}>
                  <div className="surface-elevated p-6 hover-lift">
                    <div className="flex items-center space-x-3 mb-4 lg:hidden">
                      <div className={`w-10 h-10 ${milestone?.color} rounded-full flex items-center justify-center`}>
                        <Icon name={milestone?.icon} size={18} color="white" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{milestone?.year}</span>
                    </div>
                    <div className="hidden lg:block">
                      <span className="text-2xl font-bold text-primary mb-2 block">{milestone?.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {milestone?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;