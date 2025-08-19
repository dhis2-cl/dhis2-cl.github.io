import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamProfiles = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "PhD Felipe Aguilera Millacura",
      position: "CEO & Fundador",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEpF5LNLO8e1w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724180844863?e=1758758400&v=beta&t=AIkXZF_C_ankmwOGV0wZW6SzLsw0MANjh3b3Nhk7rpA",
      experience: "5 años en DHIS2",
      certifications: ["DHIS2 Core Certified", "Public Health Informatics", "Project Management Professional"],
      expertise: ["Implementación DHIS2", "Sistemas de Salud Pública", "Gestión de Proyectos"],
      contributions: "Líder en la comunidad DHIS2 de América Latina, autora de 15+ publicaciones sobre informática sanitaria",
      conferences: ["DHIS2 Annual Conference 2023", "HL7 FHIR DevDays", "Latin American Health Informatics Summit"],
      bio: `Pionero en la implementación de sistemas DHIS2 en Chile, con más de cinco años de experiencia transformando 
      sistemas de información sanitaria. Su visión estratégica ha posicionado a la empresa como líder regional en 
      soluciones de salud digital.`,
      location: "Santiago, Chile",
      languages: ["Español", "Inglés"]
    },
    {
      id: 2,
      name: "Ing. Carlos Mendoza",
      position: "CTO & Arquitecto de Soluciones",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "10 años en DHIS2",
      certifications: ["DHIS2 Developer Certified", "AWS Solutions Architect", "Scrum Master"],
      expertise: ["Desarrollo DHIS2", "Arquitectura de Sistemas", "Integración de APIs"],
      contributions: "Contribuidor activo al código base de DHIS2, desarrollador de 20+ módulos personalizados",
      conferences: ["DHIS2 Developer Academy", "AWS re:Invent", "DevOps Chile Conference"],
      bio: `Experto técnico con profundo conocimiento del ecosistema DHIS2. Lidera el desarrollo de soluciones 
      innovadoras que integran tecnologías emergentes con sistemas de salud tradicionales.`,
      location: "Valparaíso, Chile",
      languages: ["Español", "Inglés"]
    },
    {
      id: 3,
      name: "Dra. Ana Sofía Herrera",
      position: "Directora de Implementación",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      experience: "8 años en DHIS2",
      certifications: ["DHIS2 Implementation Specialist", "Change Management", "Healthcare Quality Improvement"],
      expertise: ["Gestión del Cambio", "Capacitación de Usuarios", "Optimización de Procesos"],
      contributions: "Especialista en adopción de usuarios, ha capacitado a más de 500 profesionales de salud",
      conferences: ["International Health Informatics Conference", "DHIS2 Implementation Workshop"],
      bio: `Especialista en la adopción exitosa de sistemas DHIS2, con enfoque en la experiencia del usuario y 
      la gestión del cambio organizacional. Su metodología ha logrado tasas de adopción superiores al 95%.`,
      location: "Concepción, Chile",
      languages: ["Español", "Inglés", "Francés"]
    },
    {
      id: 4,
      name: "Ing. Roberto Silva",
      position: "Especialista en Integración",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "6 años en DHIS2",
      certifications: ["DHIS2 Integration Certified", "HL7 FHIR", "API Security Specialist"],
      expertise: ["Integración de Sistemas", "APIs RESTful", "Seguridad de Datos"],
      contributions: "Desarrollador de conectores para sistemas hospitalarios chilenos, experto en interoperabilidad",
      conferences: ["HL7 Chile Summit", "API Security Conference", "Healthcare Interoperability Forum"],
      bio: `Experto en conectar sistemas DHIS2 con infraestructuras de salud existentes. Su trabajo en 
      interoperabilidad ha facilitado la integración con más de 50 sistemas hospitalarios.`,
      location: "La Serena, Chile",
      languages: ["Español", "Inglés"]
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Profesionales certificados con profunda experiencia en DHIS2 y conocimiento especializado 
            del sistema de salud chileno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="surface-elevated hover-lift cursor-pointer" onClick={() => openModal(member)}>
              <div className="p-6">
                <div className="relative mb-6">
                  <Image
                    src={member?.avatar}
                    alt={`${member?.name} - ${member?.position}`}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Award" size={16} color="white" />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member?.position}
                  </p>
                  <p className="text-xs text-text-secondary mb-4">
                    {member?.experience}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member?.expertise?.slice(0, 2)?.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-xs text-text-secondary rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-text-secondary">
                    <Icon name="MapPin" size={14} />
                    <span className="text-xs">{member?.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-text-primary">Perfil del Equipo</h3>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors duration-200"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-center mb-6">
                      <Image
                        src={selectedMember?.avatar}
                        alt={`${selectedMember?.name} - ${selectedMember?.position}`}
                        className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                      />
                      <h4 className="text-xl font-semibold text-text-primary mb-1">
                        {selectedMember?.name}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {selectedMember?.position}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {selectedMember?.experience}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-text-primary mb-2 flex items-center">
                          <Icon name="MapPin" size={16} className="mr-2" />
                          Ubicación
                        </h5>
                        <p className="text-sm text-text-secondary">{selectedMember?.location}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-text-primary mb-2 flex items-center">
                          <Icon name="Languages" size={16} className="mr-2" />
                          Idiomas
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {selectedMember?.languages?.map((lang, index) => (
                            <span key={index} className="px-2 py-1 bg-muted text-xs text-text-secondary rounded-full">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h5 className="font-semibold text-text-primary mb-3">Biografía</h5>
                      <p className="text-text-secondary leading-relaxed">{selectedMember?.bio}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-text-primary mb-3">Certificaciones</h5>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {selectedMember?.certifications?.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-muted rounded-lg">
                            <Icon name="Award" size={16} className="text-primary" />
                            <span className="text-sm text-text-secondary">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-text-primary mb-3">Áreas de Expertise</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember?.expertise?.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-text-primary mb-3">Contribuciones a la Comunidad</h5>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">{selectedMember?.contributions}</p>
                      <div className="space-y-2">
                        <h6 className="font-medium text-text-primary text-sm">Conferencias Recientes:</h6>
                        <ul className="space-y-1">
                          {selectedMember?.conferences?.map((conf, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                              <Icon name="Calendar" size={14} />
                              <span>{conf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamProfiles;