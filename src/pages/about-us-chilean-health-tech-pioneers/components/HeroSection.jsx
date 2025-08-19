import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-dhis2-purple to-accent overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-glass rounded-lg">
                <Icon name="Users" size={24} color="white" />
              </div>
              <span className="text-white/80 font-medium">Conoce Nuestro Equipo</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Pioneros en
              <span className="block text-gradient-primary bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Salud Digital
              </span>
              en Chile
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transformamos sistemas de información sanitaria complejos en soluciones que mejoran la salud poblacional. 
              Somos el socio de confianza para organizaciones que buscan excelencia en implementación DHIS2.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-3 text-white/90">
                <Icon name="MapPin" size={20} />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Icon name="Calendar" size={20} />
                <span>Fundada en 2019</span>
              </div>
              <div className="flex items-center space-x-3 text-white/90">
                <Icon name="Award" size={20} />
                <span>Certificados DHIS2</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-glass rounded-2xl p-8 border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center"
                alt="Equipo DHIS2 Solutions Chile en oficinas de Santiago"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Nuestro Compromiso</h3>
                <p className="text-white/80 text-sm">
                  Cada proyecto que emprendemos está guiado por nuestra misión de convertir datos de salud en resultados que salvan vidas.
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;