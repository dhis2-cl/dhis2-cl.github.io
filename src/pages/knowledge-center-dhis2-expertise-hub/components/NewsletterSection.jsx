import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSection = ({ currentLanguage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const content = {
    en: {
      title: "Stay Updated with DHIS2 Insights",
      subtitle: "Get monthly implementation tips, regulatory updates, and case study highlights delivered to your inbox",
      emailPlaceholder: "Enter your email address",
      subscribe: "Subscribe Now",
      subscribing: "Subscribing...",
      successMessage: "Thank you for subscribing! Check your email for confirmation.",
      benefits: [
        {
          icon: "BookOpen",
          title: "Implementation Guides",
          description: "Latest best practices and step-by-step tutorials"
        },
        {
          icon: "Shield",
          title: "Regulatory Updates",
          description: "Chilean healthcare compliance and policy changes"
        },
        {
          icon: "TrendingUp",
          title: "Case Studies",
          description: "Real-world success stories and lessons learned"
        },
        {
          icon: "Users",
          title: "Community Highlights",
          description: "Featured discussions and expert contributions"
        }
      ],
      stats: [
        { number: "5,000+", label: "Subscribers" },
        { number: "98%", label: "Open Rate" },
        { number: "Monthly", label: "Delivery" }
      ]
    },
    es: {
      title: "Mantente Actualizado con Perspectivas DHIS2",
      subtitle: "Recibe consejos mensuales de implementación, actualizaciones regulatorias y destacados de casos de estudio en tu bandeja de entrada",
      emailPlaceholder: "Ingresa tu dirección de email",
      subscribe: "Suscribirse Ahora",
      subscribing: "Suscribiendo...",
      successMessage: "¡Gracias por suscribirte! Revisa tu email para confirmación.",
      benefits: [
        {
          icon: "BookOpen",
          title: "Guías de Implementación",
          description: "Últimas mejores prácticas y tutoriales paso a paso"
        },
        {
          icon: "Shield",
          title: "Actualizaciones Regulatorias",
          description: "Cumplimiento de salud chileno y cambios de políticas"
        },
        {
          icon: "TrendingUp",
          title: "Casos de Estudio",
          description: "Historias de éxito del mundo real y lecciones aprendidas"
        },
        {
          icon: "Users",
          title: "Destacados de la Comunidad",
          description: "Discusiones destacadas y contribuciones de expertos"
        }
      ],
      stats: [
        { number: "5,000+", label: "Suscriptores" },
        { number: "98%", label: "Tasa de Apertura" },
        { number: "Mensual", label: "Entrega" }
      ]
    }
  };

  const text = content?.[currentLanguage];

  const handleSubscribe = async (e) => {
    e?.preventDefault();
    if (!email) return;
    
    // Simulate subscription process
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-br from-primary via-dhis2-purple to-primary/90 text-white py-20">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-glass rounded-2xl">
              <Icon name="Mail" size={32} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {text?.title}
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            {text?.subtitle}
          </p>
          
          {/* Newsletter Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {text?.stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2 text-white">
                  {stat?.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Subscription Form */}
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-16">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    placeholder={text?.emailPlaceholder}
                    required
                    className="bg-white/95 backdrop-blur-glass text-text-primary placeholder-text-secondary border-white/20"
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  iconName="Send"
                  iconPosition="right"
                  className="bg-accent hover:bg-accent/90 whitespace-nowrap"
                >
                  {text?.subscribe}
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-16">
              <div className="flex items-center justify-center space-x-3 p-4 bg-success/20 backdrop-blur-glass rounded-lg border border-success/30">
                <Icon name="CheckCircle" size={24} color="var(--color-success)" />
                <p className="text-success font-medium">
                  {text?.successMessage}
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {text?.benefits?.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-glass rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4 mx-auto">
                <Icon name={benefit?.icon} size={28} color="white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white">
                {benefit?.title}
              </h3>
              
              <p className="text-white/80 text-sm">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Privacy Notice */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            {currentLanguage === 'en' 
              ? "We respect your privacy. Unsubscribe at any time. Your email will only be used for DHIS2 knowledge sharing and will never be shared with third parties."
              : "Respetamos tu privacidad. Cancela la suscripción en cualquier momento. Tu email solo será usado para compartir conocimiento DHIS2 y nunca será compartido con terceros."
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;