import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesOverview = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    es: {
      title: "Servicios Especializados DHIS2",
      subtitle: "Soluciones integrales adaptadas al sistema de salud chileno",
      viewAll: "Ver Todos los Servicios"
    },
    en: {
      title: "Specialized DHIS2 Services",
      subtitle: "Comprehensive solutions tailored to the Chilean health system",
      viewAll: "View All Services"
    }
  };

  const services = [
    {
      id: 1,
      icon: "Settings",
      title: {
        es: "Implementación DHIS2",
        en: "DHIS2 Implementation"
      },
      description: {
        es: "Implementación completa de DHIS2 con configuración personalizada para el sistema de salud chileno, incluyendo migración de datos y capacitación del personal.",
        en: "Complete DHIS2 implementation with custom configuration for Chilean health system, including data migration and staff training."
      },
      features: {
        es: ["Configuración personalizada", "Migración de datos", "Capacitación integral", "Soporte 24/7"],
        en: ["Custom configuration", "Data migration", "Comprehensive training", "24/7 support"]
      },
      link: "/dhis2-implementation-services",
      color: "primary",
      bgGradient: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20"
    },
    {
      id: 2,
      icon: "Code",
      title: {
        es: "Desarrollo Personalizado",
        en: "Custom Development"
      },
      description: {
        es: "Desarrollo de módulos y aplicaciones personalizadas para DHIS2, integraciones con sistemas existentes y soluciones específicas para necesidades únicas.",
        en: "Development of custom modules and applications for DHIS2, integrations with existing systems and specific solutions for unique needs."
      },
      features: {
        es: ["Módulos personalizados", "Integraciones API", "Apps móviles", "Dashboards avanzados"],
        en: ["Custom modules", "API integrations", "Mobile apps", "Advanced dashboards"]
      },
      link: "/dhis2-implementation-services",
      color: "accent",
      bgGradient: "from-accent/10 to-accent/5",
      borderColor: "border-accent/20"
    },
    {
      id: 3,
      icon: "GraduationCap",
      title: {
        es: "Academia de Entrenamiento",
        en: "Training Academy"
      },
      description: {
        es: "Programas de certificación DHIS2, talleres especializados y desarrollo de capacidades para equipos técnicos y usuarios finales.",
        en: "DHIS2 certification programs, specialized workshops and capacity building for technical teams and end users."
      },
      features: {
        es: ["Certificación oficial", "Talleres prácticos", "E-learning", "Mentorías técnicas"],
        en: ["Official certification", "Hands-on workshops", "E-learning", "Technical mentoring"]
      },
      link: "/training-academy-dhis2-certification-programs",
      color: "dhis2-purple",
      bgGradient: "from-dhis2-purple/10 to-dhis2-purple/5",
      borderColor: "border-dhis2-purple/20"
    },
    {
      id: 4,
      icon: "Headphones",
      title: {
        es: "Soporte Continuo",
        en: "Ongoing Support"
      },
      description: {
        es: "Soporte técnico especializado, mantenimiento de sistemas, actualizaciones y optimización continua de rendimiento para instalaciones DHIS2.",
        en: "Specialized technical support, system maintenance, updates and continuous performance optimization for DHIS2 installations."
      },
      features: {
        es: ["Soporte 24/7", "Mantenimiento preventivo", "Actualizaciones", "Monitoreo continuo"],
        en: ["24/7 support", "Preventive maintenance", "Updates", "Continuous monitoring"]
      },
      link: "/dhis2-implementation-services",
      color: "success",
      bgGradient: "from-success/10 to-success/5",
      borderColor: "border-success/20"
    }
  ];

  const getColorClass = (color, type) => {
    const colorMap = {
      primary: {
        text: 'text-primary',
        bg: 'bg-primary',
        hover: 'hover:bg-primary/90'
      },
      accent: {
        text: 'text-accent',
        bg: 'bg-accent',
        hover: 'hover:bg-accent/90'
      },
      'dhis2-purple': {
        text: 'text-dhis2-purple',
        bg: 'bg-dhis2-purple',
        hover: 'hover:bg-dhis2-purple/90'
      },
      success: {
        text: 'text-success',
        bg: 'bg-success',
        hover: 'hover:bg-success/90'
      }
    };
    return colorMap?.[color]?.[type];
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`bg-gradient-to-br ${service?.bgGradient} rounded-xl p-6 border ${service?.borderColor} hover-lift animation-smooth group`}
            >
              {/* Service Icon */}
              <div className={`w-12 h-12 ${getColorClass(service?.color, 'bg')} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service?.icon} size={24} color="white" />
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {service?.title?.[currentLanguage]}
              </h3>

              {/* Service Description */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {service?.description?.[currentLanguage]}
              </p>

              {/* Service Features */}
              <div className="space-y-2 mb-6">
                {service?.features?.[currentLanguage]?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className={getColorClass(service?.color, 'text')} />
                    <span className="text-xs text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service Link */}
              <Link
                to={service?.link}
                className={`inline-flex items-center space-x-2 text-sm font-medium ${getColorClass(service?.color, 'text')} hover:underline`}
              >
                <span>
                  {currentLanguage === 'es' ? 'Saber más' : 'Learn more'}
                </span>
                <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl shadow-elevation border border-border p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {currentLanguage === 'es' ?'Nuestro Proceso de Implementación' :'Our Implementation Process'
              }
            </h3>
            <p className="text-text-secondary">
              {currentLanguage === 'es' ?'Metodología probada para garantizar el éxito de su proyecto DHIS2' :'Proven methodology to ensure the success of your DHIS2 project'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: "Search",
                title: currentLanguage === 'es' ? 'Evaluación' : 'Assessment',
                description: currentLanguage === 'es' ?'Análisis completo de necesidades y sistemas existentes' :'Complete analysis of needs and existing systems'
              },
              {
                step: "02",
                icon: "PenTool",
                title: currentLanguage === 'es' ? 'Diseño' : 'Design',
                description: currentLanguage === 'es' ?'Configuración personalizada y arquitectura de solución' :'Custom configuration and solution architecture'
              },
              {
                step: "03",
                icon: "Cog",
                title: currentLanguage === 'es' ? 'Implementación' : 'Implementation',
                description: currentLanguage === 'es' ?'Despliegue técnico y migración de datos' :'Technical deployment and data migration'
              },
              {
                step: "04",
                icon: "Users",
                title: currentLanguage === 'es' ? 'Capacitación' : 'Training',
                description: currentLanguage === 'es' ?'Entrenamiento de usuarios y transferencia de conocimiento' :'User training and knowledge transfer'
              }
            ]?.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-dhis2-purple rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name={process.icon} size={24} color="white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {process.step}
                  </div>
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{process.title}</h4>
                <p className="text-sm text-text-secondary">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link to="/dhis2-implementation-services">
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

export default ServicesOverview;