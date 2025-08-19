import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import TeamProfiles from './components/TeamProfiles';
import ChileanPresence from './components/ChileanPresence';
import CompanyValues from './components/CompanyValues';
import CertificationsPartnerships from './components/CertificationsPartnerships';
import RegionalExpansion from './components/RegionalExpansion';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Sobre Nosotros - Pioneros en Salud Digital de Chile | Dhis2 Solutions</title>
        <meta name="description" content="Conoce la historia, equipo y visión de Dhis2 Solutions Chile. Pioneros en transformación digital sanitaria con presencia nacional y expansión regional en América Latina." />
        <meta name="keywords" content="DHIS2 Chile, equipo expertos, salud digital, implementación DHIS2, certificaciones, alianzas estratégicas" />
        <meta property="og:title" content="Sobre Nosotros - Pioneros en Salud Digital de Chile" />
        <meta property="og:description" content="Transformamos sistemas de información sanitaria complejos en soluciones que mejoran la salud poblacional en Chile y América Latina." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us-chilean-health-tech-pioneers" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CompanyTimeline />
        <TeamProfiles />
        <ChileanPresence />
        <CompanyValues />
        <CertificationsPartnerships />
        <RegionalExpansion />
        
        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-dhis2-purple to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-white">
              <Icon name="Users" size={48} color="white" className="mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Listo para Transformar tu Sistema de Salud?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Únete a más de 60 organizaciones que han confiado en nuestra experiencia 
                para implementar soluciones DHIS2 exitosas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-cta"
                >
                  Agendar Consulta Gratuita
                </Button>
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90 font-cta"
                >
                  Descargar Portafolio
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>Certificados DHIS2</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Presencia Nacional</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="Activity" size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">DHIS2 Solutions - Chile</h3>
                  <p className="text-sm text-secondary-foreground/80">Transformando Salud Digital</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
                Pioneros en la implementación de DHIS2 en Chile, comprometidos con transformar los
                sistemas de información sanitaria y mejorar la salud poblacional.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-200">
                  <Icon name="Linkedin" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-200">
                  <Icon name="Twitter" size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors duration-200">
                  <Icon name="Github" size={16} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>Santiago, Chile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>+56 2 2XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>contacto@dhis2.cl</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Certificaciones</h4>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={14} />
                  <span>DHIS2 Core Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} />
                  <span>ISO 27001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={14} />
                  <span>Registro ChileCompra</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} Dhis2 Solutions - Chile. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;