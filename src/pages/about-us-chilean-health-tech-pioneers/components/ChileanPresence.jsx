import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ChileanPresence = () => {
  const [selectedLocation, setSelectedLocation] = useState('santiago');

  const locations = [
    {
      id: 'santiago',
      name: 'Santiago',
      type: 'Oficina Principal',
      address: 'Av. Providencia 1208, Providencia, Santiago',
      coordinates: '-33.4489,-70.6693',
      team: 12,
      clients: 25,
      coverage: 'Región Metropolitana',
      travelTime: '0 min',
      services: ['Implementación DHIS2', 'Desarrollo Personalizado', 'Soporte 24/7', 'Capacitación'],
      description: 'Nuestra sede principal alberga el equipo de liderazgo y desarrollo, sirviendo como centro de innovación para toda la región.'
    },
    {
      id: 'valparaiso',
      name: 'Valparaíso',
      type: 'Oficina Regional',
      address: 'Av. Brasil 2241, Valparaíso',
      coordinates: '-33.0472,-71.6127',
      team: 6,
      clients: 12,
      coverage: 'Región de Valparaíso',
      travelTime: '90 min desde Santiago',
      services: ['Implementación DHIS2', 'Soporte Técnico', 'Capacitación Local'],
      description: 'Centro de operaciones para la zona central-costera, especializado en sistemas portuarios de salud.'
    },
    {
      id: 'concepcion',
      name: 'Concepción',
      type: 'Oficina Regional',
      address: 'Av. Libertador Bernardo O\'Higgins 1234, Concepción',
      coordinates: '-36.8201,-73.0444',
      team: 8,
      clients: 18,
      coverage: 'Región del Biobío',
      travelTime: '5 horas desde Santiago',
      services: ['Implementación DHIS2', 'Gestión del Cambio', 'Soporte Regional'],
      description: 'Hub para el sur de Chile, enfocado en sistemas de salud rural y gestión del cambio organizacional.'
    },
    {
      id: 'laserena',
      name: 'La Serena',
      type: 'Oficina Satélite',
      address: 'Av. Francisco de Aguirre 389, La Serena',
      coordinates: '-29.9027,-71.2519',
      team: 4,
      clients: 8,
      coverage: 'Región de Coquimbo',
      travelTime: '4 horas desde Santiago',
      services: ['Soporte Técnico', 'Integración de Sistemas', 'Consultoría'],
      description: 'Punto de apoyo para el norte chico, especializado en integración con sistemas mineros de salud ocupacional.'
    }
  ];

  const stats = [
    {
      icon: 'Building2',
      label: 'Oficinas en Chile',
      value: '4',
      description: 'Cobertura nacional'
    },
    {
      icon: 'Users',
      label: 'Profesionales',
      value: '30+',
      description: 'Equipo especializado'
    },
    {
      icon: 'MapPin',
      label: 'Clientes Activos',
      value: '63',
      description: 'En todo el país'
    },
    {
      icon: 'Clock',
      label: 'Tiempo de Respuesta',
      value: '< 4h',
      description: 'Soporte en sitio'
    }
  ];

  const selectedLocationData = locations?.find(loc => loc?.id === selectedLocation);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Presencia Nacional en Chile
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Red de oficinas estratégicamente ubicadas para brindar soporte local y comprensión 
            profunda de las necesidades regionales de salud.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="surface-elevated text-center p-6 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
              <div className="font-medium text-text-primary mb-1">{stat?.label}</div>
              <div className="text-sm text-text-secondary">{stat?.description}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="surface-elevated p-6">
            <h3 className="text-xl font-semibold text-text-primary mb-6">Mapa de Cobertura</h3>
            <div className="relative h-96 bg-muted rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Oficinas DHIS2 Solutions Chile"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${selectedLocationData?.coordinates}&z=10&output=embed`}
                className="rounded-lg"
              />
              
              {/* Location Selector Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-glass rounded-lg p-3 shadow-elevation">
                <div className="space-y-2">
                  {locations?.map((location) => (
                    <button
                      key={location?.id}
                      onClick={() => setSelectedLocation(location?.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full text-left ${
                        selectedLocation === location?.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted text-text-primary'
                      }`}
                    >
                      <Icon name="MapPin" size={14} />
                      <span>{location?.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <div className="surface-elevated p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-1">
                    {selectedLocationData?.name}
                  </h3>
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {selectedLocationData?.type}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">Tiempo de viaje</div>
                  <div className="font-medium text-text-primary">{selectedLocationData?.travelTime}</div>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {selectedLocationData?.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-text-primary">Dirección</div>
                    <div className="text-sm text-text-secondary">{selectedLocationData?.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={16} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-text-primary">Equipo Local</div>
                    <div className="text-sm text-text-secondary">{selectedLocationData?.team} profesionales</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Building" size={16} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-text-primary">Clientes Atendidos</div>
                    <div className="text-sm text-text-secondary">{selectedLocationData?.clients} organizaciones</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Globe" size={16} className="text-primary mt-1" />
                  <div>
                    <div className="font-medium text-text-primary">Área de Cobertura</div>
                    <div className="text-sm text-text-secondary">{selectedLocationData?.coverage}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Available */}
            <div className="surface-elevated p-6">
              <h4 className="font-semibold text-text-primary mb-4">Servicios Disponibles</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedLocationData?.services?.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-muted rounded-lg">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChileanPresence;