import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsPartnerships = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      id: 1,
      name: 'DHIS2 Core Team Certified',
      issuer: 'University of Oslo - HISP Centre',
      date: '2021',
      level: 'Expert',
      description: 'Certificación oficial del equipo central de DHIS2 para implementación y desarrollo avanzado',
      badge: 'https://cdn.prod.website-files.com/65172550b7da667da21f80ce/65e623ed80ddba2542dd2400_dhis2.png',
      members: ['Felipe Aguilera Millacura','Juan Pablo Espinoza'],
      validity: 'Vigente hasta 2025'
    },
    {
      id: 2,
      name: 'ISO 27001 Information Security',
      issuer: 'International Organization for Standardization',
      date: '2022',
      level: 'Organizational',
      description: 'Certificación en gestión de seguridad de la información para protección de datos sanitarios',
      badge: 'https://www.qassurance.com/wp-content/uploads/QAssurance-logos.png',
      members: ['Toda la organización'],
      validity: 'Vigente hasta 2025'
    },
    {
      id: 3,
      name: 'HL7 FHIR Implementation',
      issuer: 'HL7 International',
      date: '2023',
      level: 'Technical',
      description: 'Especialización en estándares de interoperabilidad para sistemas de salud',
      badge: 'https://media.licdn.com/dms/image/v2/D560BAQFSbrSThbxPgw/company-logo_100_100/company-logo_100_100/0/1694951088394/hl7_fhir_foundation_logo?e=1758758400&v=beta&t=eYi1c9h05Darx3gq05-273ZCy992eGbu6RPeZaNJSDU',
      members: ['Felipe Aguilera Millacura'],
      validity: 'Vigente hasta 2026'
    },
    {
      id: 4,
      name: 'Google cloud certified',
      issuer: 'Google Cloud solutions',
      date: '2023',
      level: 'Professional',
      description: 'Google Cloud Engineer; DevOps; Cybersecurity; Kubernetes in Google Cloud.',
      badge: 'https://ausum.cloud/wp-content/uploads/2024/04/0_r4wOvRFGy78MfMh4.png',
      members: ['Felipe Aguilera Millacura'],
      validity: 'Vigente hasta 2026'
    }
  ];

  const partnerships = [
    {
      id: 1,
      name: 'DHIS2 Core Team',
      type: 'Socio Tecnológico Oficial',
      logo: 'https://cdn.prod.website-files.com/65172550b7da667da21f80ce/65e623ed80ddba2542dd2400_dhis2.png',
      description: 'Reconocimiento como implementador oficial y contribuidor al ecosistema DHIS2 global',
      benefits: ['Acceso temprano a nuevas versiones', 'Soporte directo del equipo central', 'Participación en roadmap'],
      since: '2020'
    },
    {
      id: 2,
      name: 'Ministerio de Salud de Chile',
      type: 'Socio Gubernamental',
      logo: 'https://www.virginiogomez.cl/media/bases-datos/9/9.jpg',
      description: 'Colaboración estratégica para la transformación digital del sistema de salud chileno',
      benefits: ['Proyectos de implementación nacional', 'Desarrollo de estándares locales', 'Capacitación institucional'],
      since: '2020'
    },
    {
      id: 3,
      name: 'Organización Panamericana de la Salud',
      type: 'Socio Internacional',
      logo: 'https://i0.wp.com/mepyd.gob.do/wp-content/uploads/2021/10/ops.png?w=1220&ssl=1',
      description: 'Apoyo en iniciativas regionales de fortalecimiento de sistemas de información sanitaria',
      benefits: ['Proyectos regionales', 'Intercambio de mejores prácticas', 'Financiamiento para innovación'],
      since: '2021'
    },
    {
      id: 4,
      name: 'Universidad de Chile - Facultad de Medicina',
      type: 'Socio Académico',
      logo: 'https://www.curriculumnacional.cl/estudiante/621/articles-31802_thumbnail.jpg',
      description: 'Colaboración en investigación y desarrollo de soluciones innovadoras en salud digital',
      benefits: ['Investigación conjunta', 'Programas de práctica', 'Desarrollo de talento'],
      since: '2022'
    },
    {
      id: 5,
      name: 'Colegio Médico de Chile',
      type: 'Socio Profesional',
      logo: 'https://www.colegiomedico.cl/wp-content/uploads/2018/02/logo-.jpeg',
      description: 'Validación profesional y apoyo en la adopción de tecnologías por parte de médicos',
      benefits: ['Validación clínica', 'Programas de capacitación', 'Certificación profesional'],
      since: '2022'
    }
  ];

  const businessRegistrations = [
    {
      name: 'Registro de Empresas de Chile',
      number: 'RUT: 77.416.816-8',
      status: 'Activo',
      icon: 'Building'
    },
    {
      name: 'Registro de Proveedores del Estado',
      number: 'ChileCompra ID: XXXXXXX',
      status: 'Habilitado',
      icon: 'Shield'
    },
    {
      name: 'Certificación de Calidad ISO 9001',
      number: 'Cert: ISO-9001-2023-CL',
      status: 'Vigente',
      icon: 'Award'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Certificaciones y Alianzas Estratégicas
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Nuestras certificaciones y partnerships reflejan nuestro compromiso con la excelencia 
            y nuestra posición como líderes en el ecosistema DHIS2.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="surface-elevated p-1 rounded-lg">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'certifications'
                    ? 'bg-primary text-primary-foreground shadow-elevation' :'text-text-primary hover:bg-muted'
                }`}
              >
                <Icon name="Award" size={18} className="mr-2 inline" />
                Certificaciones
              </button>
              <button
                onClick={() => setActiveTab('partnerships')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'partnerships' ?'bg-primary text-primary-foreground shadow-elevation' :'text-text-primary hover:bg-muted'
                }`}
              >
                <Icon name="Handshake" size={18} className="mr-2 inline" />
                Alianzas
              </button>
              <button
                onClick={() => setActiveTab('registrations')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'registrations' ?'bg-primary text-primary-foreground shadow-elevation' :'text-text-primary hover:bg-muted'
                }`}
              >
                <Icon name="FileText" size={18} className="mr-2 inline" />
                Registros
              </button>
            </div>
          </div>
        </div>

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications?.map((cert) => (
              <div key={cert?.id} className="surface-elevated hover-lift">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={cert?.badge}
                        alt={`Certificación ${cert?.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-primary mb-1">
                        {cert?.name}
                      </h3>
                      <p className="text-sm text-text-secondary mb-2">{cert?.issuer}</p>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span className="flex items-center">
                          <Icon name="Calendar" size={12} className="mr-1" />
                          {cert?.date}
                        </span>
                        <span className={`px-2 py-1 rounded-full ${
                          cert?.level === 'Expert' ? 'bg-primary/10 text-primary' :
                          cert?.level === 'Professional'? 'bg-accent/10 text-accent' : 'bg-success/10 text-success'
                        }`}>
                          {cert?.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {cert?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-text-primary text-sm mb-2">Miembros Certificados:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert?.members?.map((member, index) => (
                          <span key={index} className="px-2 py-1 bg-muted text-xs text-text-secondary rounded-full">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-text-secondary">{cert?.validity}</span>
                      <div className="flex items-center text-success text-xs">
                        <Icon name="CheckCircle" size={12} className="mr-1" />
                        Verificado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Partnerships Tab */}
        {activeTab === 'partnerships' && (
          <div className="space-y-8">
            {partnerships?.map((partner) => (
              <div key={partner?.id} className="surface-elevated hover-lift">
                <div className="p-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                      <Image
                        src={partner?.logo}
                        alt={`Logo de ${partner?.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-text-primary mb-1">
                            {partner?.name}
                          </h3>
                          <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {partner?.type}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-text-secondary">Desde</div>
                          <div className="font-medium text-text-primary">{partner?.since}</div>
                        </div>
                      </div>
                      
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {partner?.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium text-text-primary mb-3">Beneficios de la Alianza:</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {partner?.benefits?.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-2 p-2 bg-muted rounded-lg">
                              <Icon name="CheckCircle" size={14} className="text-success" />
                              <span className="text-sm text-text-secondary">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Business Registrations Tab */}
        {activeTab === 'registrations' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {businessRegistrations?.map((reg, index) => (
                <div key={index} className="surface-elevated text-center p-6 hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={reg?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">{reg?.name}</h3>
                  <p className="text-sm text-text-secondary mb-2">{reg?.number}</p>
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    reg?.status === 'Activo' || reg?.status === 'Habilitado' || reg?.status === 'Vigente'
                      ? 'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    <Icon name="CheckCircle" size={12} className="mr-1" />
                    {reg?.status}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="surface-elevated p-8 text-center">
              <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Cumplimiento Regulatorio Total
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto mb-6">
                Mantenemos todos los registros y certificaciones requeridos para operar como 
                proveedor de servicios tecnológicos para el sector salud en Chile.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-text-secondary">Cumplimiento Legal</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-text-secondary">Certificaciones Activas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">2024</div>
                  <div className="text-sm text-text-secondary">Última Auditoría</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsPartnerships;