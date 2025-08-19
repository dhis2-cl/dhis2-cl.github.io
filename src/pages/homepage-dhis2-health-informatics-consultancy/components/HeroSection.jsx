import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [facilitiesCount, setFacilitiesCount] = useState(0);
  const [recordsCount, setRecordsCount] = useState(0);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    // Animate counters
    const facilitiesTarget = 247;
    const recordsTarget = 3.2;
    
    const animateCounter = (target, setter, duration = 2000, isDecimal = false) => {
      let start = 0;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(isDecimal ? target?.toFixed(1) : Math.floor(target));
          clearInterval(timer);
        } else {
          setter(isDecimal ? start?.toFixed(1) : Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(facilitiesTarget, setFacilitiesCount);
      animateCounter(recordsTarget, setRecordsCount, 2000, true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const content = {
    es: {
      headline: "Transformando Datos de Salud en Resultados de Salud",
      subheadline: "Somos el socio líder de Chile en implementación DHIS2, ayudando a organizaciones de salud a digitalizar sistemas y mejorar resultados poblacionales a través de soluciones de informática sanitaria de clase mundial.",
      facilitiesText: "centros de salud digitalizados en Chile",
      recordsText: "millones de registros de pacientes optimizados",
      ctaPrimary: "Programar Evaluación de Implementación",
      ctaSecondary: "Explorar Servicios DHIS2",
      trustBadge: "Socio Certificado DHIS2 Core Team"
    },
    en: {
      headline: "Transforming Health Data into Health Outcomes",
      subheadline: "Chile's leading DHIS2 implementation partner, helping health organizations digitize systems and improve population health outcomes through world-class health informatics solutions.",
      facilitiesText: "health facilities digitized across Chile",
      recordsText: "million patient records optimized",
      ctaPrimary: "Schedule Implementation Assessment",
      ctaSecondary: "Explore DHIS2 Services",
      trustBadge: "DHIS2 Core Team Certified Partner"
    }
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-dhis2-purple rounded-full blur-3xl"></div>
      </div>
      {/* Language Toggle */}
      <div className="absolute top-20 right-4 sm:right-8 z-10">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-glass rounded-lg shadow-elevation border border-border hover:bg-white transition-all duration-300"
        >
          <Icon name="Globe" size={16} className="text-primary" />
          <span className="text-sm font-medium text-text-primary">
            {currentLanguage === 'es' ? 'ES' : 'EN'}
          </span>
          <Icon name="ChevronDown" size={14} className="text-text-secondary" />
        </button>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                {content?.[currentLanguage]?.trustBadge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                <span className="text-gradient-primary">
                  {content?.[currentLanguage]?.headline}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl">
                {content?.[currentLanguage]?.subheadline}
              </p>
            </div>

            {/* Impact Metrics */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-glass rounded-xl p-6 shadow-elevation border border-border">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building2" size={20} className="text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{facilitiesCount}</div>
                </div>
                <p className="text-sm text-text-secondary">
                  {content?.[currentLanguage]?.facilitiesText}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-glass rounded-xl p-6 shadow-elevation border border-border">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent">{recordsCount}</div>
                </div>
                <p className="text-sm text-text-secondary">
                  {content?.[currentLanguage]?.recordsText}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion-red hover:bg-conversion-red/90 font-cta flex-1 sm:flex-none"
              >
                {content?.[currentLanguage]?.ctaPrimary}
              </Button>
              
              <Link to="/dhis2-implementation-services">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="font-cta w-full sm:w-auto"
                >
                  {content?.[currentLanguage]?.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white/90 backdrop-blur-glass rounded-2xl shadow-elevation-lg border border-border p-8">
              {/* DHIS2 Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-dhis2-purple rounded-lg flex items-center justify-center">
                      <Icon name="Activity" size={16} color="white" />
                    </div>
                    <h3 className="font-semibold text-text-primary">DHIS2 Dashboard</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-text-secondary">Live Data</span>
                  </div>
                </div>

                {/* Mock Charts */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-text-secondary">Vaccination Coverage</span>
                      <span className="text-sm font-semibold text-success">94.2%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-success h-2 rounded-full" style={{ width: '94.2%' }}></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-text-secondary">Data Quality</span>
                      <span className="text-sm font-semibold text-primary">98.7%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '98.7%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Mock Data Table */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-text-secondary mb-3">Recent Health Indicators</div>
                  {[
                    { indicator: 'Maternal Mortality Rate', value: '12.3/100k', trend: 'down' },
                    { indicator: 'Child Immunization', value: '96.8%', trend: 'up' },
                    { indicator: 'TB Treatment Success', value: '89.2%', trend: 'up' }
                  ]?.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-slate-200 last:border-0">
                      <span className="text-xs text-text-primary">{item?.indicator}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium">{item?.value}</span>
                        <Icon 
                          name={item?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                          size={12} 
                          className={item?.trend === 'up' ? 'text-success' : 'text-accent'} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-brand-copper rounded-xl shadow-elevation flex items-center justify-center">
              <Icon name="BarChart3" size={24} color="white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-success to-dhis2-purple rounded-lg shadow-elevation flex items-center justify-center">
              <Icon name="CheckCircle" size={16} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;