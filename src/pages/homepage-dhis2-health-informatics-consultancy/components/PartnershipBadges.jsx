import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PartnershipBadges = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    es: {
      title: "Nuestros Socios y Certificaciones",
      subtitle: "Reconocimientos oficiales y alianzas estratégicas que respaldan nuestra expertise en DHIS2",
      viewCredentials: "Ver Credenciales"
    },
    en: {
      title: "Our Partners and Certifications",
      subtitle: "Official recognitions and strategic alliances that support our DHIS2 expertise",
      viewCredentials: "View Credentials"
    }
  };

  const partnerships = [
    {
      id: 1,
      name: "DHIS2 Core Team",
      type: "certification",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=80&fit=crop",
      description: {
        es: "Socio Certificado Oficial del Equipo Central DHIS2",
        en: "Official Certified Partner of DHIS2 Core Team"
      },
      credential: "DHIS2-CERT-2024-001",
      validUntil: "2025-12-31",
      level: "Gold Partner",
      isVerified: true
    },
    {
      id: 2,
      name: "Ministerio de Salud Chile",
      type: "government",
      logo: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=120&h=80&fit=crop",
      description: {
        es: "Proveedor Oficial de Servicios de Informática Sanitaria",
        en: "Official Health Informatics Services Provider"
      },
      credential: "MINSAL-PROV-2024-047",
      validUntil: "2026-06-30",
      level: "Preferred Vendor",
      isVerified: true
    },
    {
      id: 3,
      name: "UNICEF",
      type: "international",
      logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=120&h=80&fit=crop",
      description: {
        es: "Socio Implementador para Programas de Salud Infantil",
        en: "Implementation Partner for Child Health Programs"
      },
      credential: "UNICEF-IP-2024-CHL-003",
      validUntil: "2025-08-15",
      level: "Strategic Partner",
      isVerified: true
    },
    {
      id: 4,
      name: "OPS/OMS",
      type: "international",
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=120&h=80&fit=crop",
      description: {
        es: "Colaborador Técnico en Sistemas de Información Sanitaria",
        en: "Technical Collaborator in Health Information Systems"
      },
      credential: "PAHO-COLLAB-2024-012",
      validUntil: "2025-11-30",
      level: "Technical Collaborator",
      isVerified: true
    },
    {
      id: 5,
      name: "Universidad de Chile",
      type: "academic",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=80&fit=crop",
      description: {
        es: "Socio Académico para Investigación en Salud Digital",
        en: "Academic Partner for Digital Health Research"
      },
      credential: "UCHILE-ACAD-2024-008",
      validUntil: "2026-03-31",
      level: "Research Partner",
      isVerified: true
    },
    {
      id: 6,
      name: "Colegio Médico de Chile",
      type: "professional",
      logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=120&h=80&fit=crop",
      description: {
        es: "Proveedor Reconocido de Capacitación Médica Continua",
        en: "Recognized Provider of Continuing Medical Education"
      },
      credential: "COLMED-EDU-2024-015",
      validUntil: "2025-09-30",
      level: "Approved Provider",
      isVerified: true
    }
  ];

  const getPartnershipColor = (type) => {
    const colors = {
      certification: 'from-primary to-dhis2-purple',
      government: 'from-accent to-brand-copper',
      international: 'from-success to-dhis2-purple',
      academic: 'from-dhis2-purple to-primary',
      professional: 'from-brand-copper to-accent'
    };
    return colors?.[type] || 'from-slate-400 to-slate-600';
  };

  const getPartnershipIcon = (type) => {
    const icons = {
      certification: 'Award',
      government: 'Building',
      international: 'Globe',
      academic: 'GraduationCap',
      professional: 'Users'
    };
    return icons?.[type] || 'Shield';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date?.toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US', options);
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

        {/* Partnership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {partnerships?.map((partnership) => (
            <div
              key={partnership?.id}
              className="bg-white rounded-xl shadow-elevation border border-border p-6 hover-lift animation-smooth group"
            >
              {/* Partnership Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getPartnershipColor(partnership?.type)} rounded-lg flex items-center justify-center`}>
                    <Icon name={getPartnershipIcon(partnership?.type)} size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{partnership?.name}</h3>
                    <p className="text-sm text-text-secondary">{partnership?.level}</p>
                  </div>
                </div>
                
                {partnership?.isVerified && (
                  <div className="flex items-center space-x-1 bg-success/10 text-success px-2 py-1 rounded-full">
                    <Icon name="CheckCircle" size={14} />
                    <span className="text-xs font-medium">
                      {currentLanguage === 'es' ? 'Verificado' : 'Verified'}
                    </span>
                  </div>
                )}
              </div>

              {/* Partnership Logo */}
              <div className="mb-4">
                <div className="w-full h-20 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={partnership?.logo}
                    alt={`${partnership?.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              {/* Partnership Description */}
              <p className="text-sm text-text-secondary mb-4">
                {partnership?.description?.[currentLanguage]}
              </p>

              {/* Credential Information */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {currentLanguage === 'es' ? 'Credencial:' : 'Credential:'}
                  </span>
                  <span className="font-mono text-text-primary">{partnership?.credential}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {currentLanguage === 'es' ? 'Válido hasta:' : 'Valid until:'}
                  </span>
                  <span className="text-text-primary">{formatDate(partnership?.validUntil)}</span>
                </div>
              </div>

              {/* View Credentials Button */}
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-300 text-sm font-medium text-text-primary">
                <Icon name="ExternalLink" size={14} />
                <span>{content?.[currentLanguage]?.viewCredentials}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-dhis2-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Shield" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">6</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Certificaciones Activas' : 'Active Certifications'}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-dhis2-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">100%</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Cumplimiento Normativo' : 'Regulatory Compliance'}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-brand-copper rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">15+</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Países de Experiencia' : 'Countries Experience'}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-dhis2-purple to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} color="white" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">5+</div>
              <div className="text-sm text-text-secondary">
                {currentLanguage === 'es' ? 'Años de Experiencia' : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 text-success rounded-full border border-success/20">
            <Icon name="CheckCircle" size={16} />
            <span className="text-sm font-medium">
              {currentLanguage === 'es' ?'Todas las certificaciones son verificables y están actualizadas' :'All certifications are verifiable and up to date'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBadges;