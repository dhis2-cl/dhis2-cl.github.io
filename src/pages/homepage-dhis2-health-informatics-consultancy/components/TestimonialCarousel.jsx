import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    es: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Testimonios de líderes en salud pública y organizaciones que han transformado sus sistemas con DHIS2",
      playVideo: "Reproducir Video",
      pauseVideo: "Pausar Video",
      nextTestimonial: "Siguiente",
      prevTestimonial: "Anterior"
    },
    en: {
      title: "What Our Clients Say",
      subtitle: "Testimonials from public health leaders and organizations that have transformed their systems with DHIS2",
      playVideo: "Play Video",
      pauseVideo: "Pause Video",
      nextTestimonial: "Next",
      prevTestimonial: "Previous"
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Dr. María Elena Rodríguez",
      position: {
        es: "Directora de Informática Sanitaria",
        en: "Director of Health Informatics"
      },
      organization: "Ministerio de Salud de Chile",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      testimonial: {
        es: `La implementación de DHIS2 con el equipo de DHIS2 Solutions Chile ha sido transformadora para nuestro sistema de salud. Hemos logrado una reducción del 60% en el tiempo de recolección de datos y una mejora significativa en la calidad de la información sanitaria a nivel nacional.`,
        en: `The DHIS2 implementation with the DHIS2 Solutions Chile team has been transformative for our health system. We have achieved a 60% reduction in data collection time and significant improvement in health information quality at the national level.`
      },
      metrics: {
        improvement: "60%",
        metric: {
          es: "reducción en tiempo de recolección",
          en: "reduction in collection time"
        }
      },
      hasVideo: true,
      duration: "2:45"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: {
        es: "Coordinador de Sistemas de Información",
        en: "Information Systems Coordinator"
      },
      organization: "UNICEF Chile",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      testimonial: {
        es: `El soporte técnico y la expertise local de DHIS2 Solutions Chile han sido fundamentales para el éxito de nuestros programas de inmunización. Su comprensión del contexto chileno y las regulaciones locales marcó la diferencia.`,
        en: `The technical support and local expertise of DHIS2 Solutions Chile have been fundamental to the success of our immunization programs. Their understanding of the Chilean context and local regulations made the difference.`
      },
      metrics: {
        improvement: "98%",
        metric: {
          es: "precisión en datos de inmunización",
          en: "accuracy in immunization data"
        }
      },
      hasVideo: true,
      duration: "3:12"
    },
    {
      id: 3,
      name: "Dra. Ana Sofía Contreras",
      position: {
        es: "Jefa de Epidemiología",
        en: "Head of Epidemiology"
      },
      organization: "Hospital Regional de Valparaíso",
      avatar: "https://images.unsplash.com/photo-1594824388853-e4d9d8b0b5b5?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
      testimonial: {
        es: `La capacitación proporcionada por el equipo fue excepcional. Nuestro personal ahora maneja DHIS2 con confianza y hemos implementado dashboards en tiempo real que han mejorado significativamente nuestra toma de decisiones clínicas.`,
        en: `The training provided by the team was exceptional. Our staff now handles DHIS2 with confidence and we have implemented real-time dashboards that have significantly improved our clinical decision making.`
      },
      metrics: {
        improvement: "45%",
        metric: {
          es: "mejora en tiempo de respuesta",
          en: "improvement in response time"
        }
      },
      hasVideo: true,
      duration: "2:28"
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: {
        es: "Director de Tecnología",
        en: "Technology Director"
      },
      organization: "Fundación Salud Digital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      testimonial: {
        es: `La integración de DHIS2 con nuestros sistemas existentes fue perfecta. El equipo técnico demostró un profundo conocimiento tanto de DHIS2 como de las particularidades del sistema de salud chileno.`,
        en: `The integration of DHIS2 with our existing systems was seamless. The technical team demonstrated deep knowledge of both DHIS2 and the particularities of the Chilean health system.`
      },
      metrics: {
        improvement: "85%",
        metric: {
          es: "automatización de procesos",
          en: "process automation"
        }
      },
      hasVideo: true,
      duration: "3:05"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsPlaying(false);
  };

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTest = testimonials?.[currentTestimonial];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlaying) {
        nextTestimonial();
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {content?.[currentLanguage]?.title}
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {content?.[currentLanguage]?.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-elevation-lg">
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img
                  src={currentTest?.videoThumbnail}
                  alt={`${currentTest?.name} testimonial`}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={toggleVideo}
                    className="w-16 h-16 bg-white/90 backdrop-blur-glass rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group"
                  >
                    <Icon 
                      name={isPlaying ? "Pause" : "Play"} 
                      size={24} 
                      className="text-slate-900 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </button>
                </div>

                {/* Video Duration */}
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 text-white text-xs rounded">
                  {currentTest?.duration}
                </div>

                {/* Subtitles Indicator */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {currentLanguage === 'es' ? 'ES' : 'EN'}
                  </div>
                  <div className="px-2 py-1 bg-black/70 text-white text-xs rounded">
                    CC
                  </div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={currentTest?.avatar}
                      alt={currentTest?.name}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <div>
                      <div className="text-white font-medium text-sm">{currentTest?.name}</div>
                      <div className="text-white/80 text-xs">{currentTest?.organization}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-8 h-8 bg-white/20 backdrop-blur-glass rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <Icon name="ChevronLeft" size={16} color="white" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-8 h-8 bg-white/20 backdrop-blur-glass rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                    >
                      <Icon name="ChevronRight" size={16} color="white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Language Toggle */}
            <div className="mt-4 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Volume2" size={16} />
                <span>Audio: Español</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Subtitles" size={16} />
                <span>Subtítulos: {currentLanguage === 'es' ? 'Español' : 'English'}</span>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            {/* Quote */}
            <div className="relative">
              <Icon name="Quote" size={48} className="text-primary/20 absolute -top-4 -left-2" />
              <blockquote className="text-lg text-text-primary leading-relaxed pl-8">
                {currentTest?.testimonial?.[currentLanguage]}
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <img
                src={currentTest?.avatar}
                alt={currentTest?.name}
                className="w-16 h-16 rounded-full shadow-elevation"
              />
              <div>
                <div className="font-semibold text-text-primary text-lg">{currentTest?.name}</div>
                <div className="text-text-secondary">{currentTest?.position?.[currentLanguage]}</div>
                <div className="text-primary font-medium">{currentTest?.organization}</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-primary">{currentTest?.metrics?.improvement}</div>
                <div>
                  <div className="text-sm font-medium text-text-primary">
                    {currentLanguage === 'es' ? 'Mejora Lograda' : 'Improvement Achieved'}
                  </div>
                  <div className="text-sm text-text-secondary">{currentTest?.metrics?.metric?.[currentLanguage]}</div>
                </div>
                <Icon name="TrendingUp" size={24} className="text-success ml-auto" />
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <div className="text-sm text-text-secondary">
                {currentTestimonial + 1} / {testimonials?.length}
              </div>
            </div>

            {/* Additional Testimonials Preview */}
            <div className="grid grid-cols-3 gap-4">
              {testimonials?.filter((_, index) => index !== currentTestimonial)?.slice(0, 3)?.map((testimonial, index) => (
                  <button
                    key={testimonial?.id}
                    onClick={() => {
                      setCurrentTestimonial(testimonials?.findIndex(t => t?.id === testimonial?.id));
                      setIsPlaying(false);
                    }}
                    className="text-left p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <img
                        src={testimonial?.avatar}
                        alt={testimonial?.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-xs">
                        <div className="font-medium text-text-primary">{testimonial?.name}</div>
                        <div className="text-text-secondary">{testimonial?.organization}</div>
                      </div>
                    </div>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {testimonial?.testimonial?.[currentLanguage]?.substring(0, 80)}...
                    </p>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;