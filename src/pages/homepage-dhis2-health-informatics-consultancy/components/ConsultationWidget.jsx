import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationWidget = () => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    projectType: '',
    urgency: '',
    message: ''
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setCurrentLanguage(savedLanguage);
  }, []);

  const content = {
    es: {
      title: "Consulta Gratuita DHIS2",
      subtitle: "Agenda una evaluación sin costo de tu proyecto",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        organization: "Organización",
        phone: "Teléfono",
        projectType: "Tipo de proyecto",
        urgency: "Urgencia",
        message: "Describe tu proyecto",
        submit: "Solicitar Consulta",
        submitting: "Enviando..."
      },
      projectTypes: [
        { value: 'implementation', label: 'Nueva Implementación DHIS2' },
        { value: 'migration', label: 'Migración de Sistema Existente' },
        { value: 'optimization', label: 'Optimización de DHIS2 Actual' },
        { value: 'training', label: 'Capacitación y Entrenamiento' },
        { value: 'support', label: 'Soporte Técnico' },
        { value: 'custom', label: 'Desarrollo Personalizado' }
      ],
      urgencyLevels: [
        { value: 'low', label: 'Baja - Planificación a largo plazo' },
        { value: 'medium', label: 'Media - Próximos 3-6 meses' },
        { value: 'high', label: 'Alta - Próximas semanas' },
        { value: 'urgent', label: 'Urgente - Inmediato' }
      ],
      quickActions: {
        title: "Acciones Rápidas",
        schedule: "Agendar Llamada",
        download: "Descargar Guía",
        demo: "Ver Demo",
        contact: "Contacto Directo"
      }
    },
    en: {
      title: "Free DHIS2 Consultation",
      subtitle: "Schedule a no-cost assessment of your project",
      form: {
        name: "Full name",
        email: "Email address",
        organization: "Organization",
        phone: "Phone number",
        projectType: "Project type",
        urgency: "Urgency",
        message: "Describe your project",
        submit: "Request Consultation",
        submitting: "Submitting..."
      },
      projectTypes: [
        { value: 'implementation', label: 'New DHIS2 Implementation' },
        { value: 'migration', label: 'Existing System Migration' },
        { value: 'optimization', label: 'Current DHIS2 Optimization' },
        { value: 'training', label: 'Training and Capacity Building' },
        { value: 'support', label: 'Technical Support' },
        { value: 'custom', label: 'Custom Development' }
      ],
      urgencyLevels: [
        { value: 'low', label: 'Low - Long-term planning' },
        { value: 'medium', label: 'Medium - Next 3-6 months' },
        { value: 'high', label: 'High - Coming weeks' },
        { value: 'urgent', label: 'Urgent - Immediate' }
      ],
      quickActions: {
        title: "Quick Actions",
        schedule: "Schedule Call",
        download: "Download Guide",
        demo: "View Demo",
        contact: "Direct Contact"
      }
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        projectType: '',
        urgency: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
        setIsOpen(false);
      }, 3000);
    }, 2000);
  };

  const quickActions = [
    {
      icon: 'Calendar',
      label: content?.[currentLanguage]?.quickActions?.schedule,
      color: 'bg-primary hover:bg-primary/90',
      action: () => setIsOpen(true)
    },
    {
      icon: 'Download',
      label: content?.[currentLanguage]?.quickActions?.download,
      color: 'bg-accent hover:bg-accent/90',
      action: () => console.log('Download guide')
    },
    {
      icon: 'Play',
      label: content?.[currentLanguage]?.quickActions?.demo,
      color: 'bg-dhis2-purple hover:bg-dhis2-purple/90',
      action: () => console.log('View demo')
    },
    {
      icon: 'Phone',
      label: content?.[currentLanguage]?.quickActions?.contact,
      color: 'bg-conversion-red hover:bg-conversion-red/90',
      action: () => console.log('Direct contact')
    }
  ];

  return (
    <>
      {/* Floating Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Quick Actions Menu */}
          <div className={`absolute bottom-16 right-0 space-y-2 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
          }`}>
            {quickActions?.map((action, index) => (
              <button
                key={index}
                onClick={action?.action}
                className={`flex items-center space-x-3 px-4 py-3 ${action?.color} text-white rounded-lg shadow-elevation hover-lift animation-smooth min-w-48`}
              >
                <Icon name={action?.icon} size={16} />
                <span className="text-sm font-medium">{action?.label}</span>
              </button>
            ))}
          </div>

          {/* Main Widget Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-gradient-to-br from-primary to-dhis2-purple rounded-full shadow-elevation-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
          >
            <Icon 
              name={isOpen ? "X" : "MessageCircle"} 
              size={24} 
              color="white" 
              className="group-hover:scale-110 transition-transform duration-300" 
            />
          </button>

          {/* Pulse Animation */}
          {!isOpen && (
            <div className="absolute inset-0 w-14 h-14 bg-primary rounded-full animate-ping opacity-20"></div>
          )}
        </div>
      </div>
      {/* Consultation Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-elevation-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-border p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {content?.[currentLanguage]?.title}
                  </h3>
                  <p className="text-text-secondary mt-1">
                    {content?.[currentLanguage]?.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-success" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    {currentLanguage === 'es' ? '¡Solicitud Enviada!' : 'Request Sent!'}
                  </h4>
                  <p className="text-text-secondary">
                    {currentLanguage === 'es' ?'Nos pondremos en contacto contigo dentro de 24 horas.' :'We will contact you within 24 hours.'
                    }
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label={content?.[currentLanguage]?.form?.name}
                      type="text"
                      required
                      value={formData?.name}
                      onChange={(e) => handleInputChange('name', e?.target?.value)}
                      placeholder="Juan Pérez"
                    />
                    <Input
                      label={content?.[currentLanguage]?.form?.email}
                      type="email"
                      required
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label={content?.[currentLanguage]?.form?.organization}
                      type="text"
                      required
                      value={formData?.organization}
                      onChange={(e) => handleInputChange('organization', e?.target?.value)}
                      placeholder="Hospital Regional"
                    />
                    <Input
                      label={content?.[currentLanguage]?.form?.phone}
                      type="tel"
                      value={formData?.phone}
                      onChange={(e) => handleInputChange('phone', e?.target?.value)}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label={content?.[currentLanguage]?.form?.projectType}
                      options={content?.[currentLanguage]?.projectTypes}
                      value={formData?.projectType}
                      onChange={(value) => handleInputChange('projectType', value)}
                      placeholder={currentLanguage === 'es' ? 'Selecciona tipo' : 'Select type'}
                      required
                    />
                    <Select
                      label={content?.[currentLanguage]?.form?.urgency}
                      options={content?.[currentLanguage]?.urgencyLevels}
                      value={formData?.urgency}
                      onChange={(value) => handleInputChange('urgency', value)}
                      placeholder={currentLanguage === 'es' ? 'Selecciona urgencia' : 'Select urgency'}
                      required
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {content?.[currentLanguage]?.form?.message}
                    </label>
                    <textarea
                      value={formData?.message}
                      onChange={(e) => handleInputChange('message', e?.target?.value)}
                      placeholder={currentLanguage === 'es' ?'Describe brevemente tu proyecto, objetivos y desafíos actuales...' :'Briefly describe your project, objectives and current challenges...'
                      }
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    iconName="Send"
                    iconPosition="left"
                    className="bg-conversion-red hover:bg-conversion-red/90 font-cta"
                  >
                    {isSubmitting 
                      ? content?.[currentLanguage]?.form?.submitting
                      : content?.[currentLanguage]?.form?.submit
                    }
                  </Button>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-6 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Shield" size={16} className="text-success" />
                      <span>{currentLanguage === 'es' ? 'Datos Seguros' : 'Secure Data'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{currentLanguage === 'es' ? 'Respuesta 24h' : '24h Response'}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span>{currentLanguage === 'es' ? 'Sin Compromiso' : 'No Commitment'}</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationWidget;