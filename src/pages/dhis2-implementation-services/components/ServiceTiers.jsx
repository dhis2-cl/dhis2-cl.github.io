import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceTiers = () => {
  const [selectedTier, setSelectedTier] = useState('enterprise');

  const tiers = [
    {
      id: 'standard',
      name: 'Standard Implementation',
      subtitle: 'Perfect for straightforward deployments',
      price: 'CLP $50M - $150M',
      duration: '6-12 months',
      users: 'Up to 200 users',
      description: 'Ideal for organizations with clear requirements and minimal system integration needs.',
      features: [
        'DHIS2 core system setup and configuration',
        'Basic data migration from existing systems',
        'Standard user training program (40 hours)',
        'Documentation and user guides',
        '3 months post-deployment support',
        'MINSAL compliance configuration',
        'Basic reporting dashboards',
        'Email and phone support'
      ],
      limitations: [
        'Limited custom development',
        'Standard integration options only',
        'Basic training materials'
      ],
      ideal: [
        'Small to medium health facilities',
        'Organizations with basic IT infrastructure',
        'Clear, well-defined requirements'
      ],
      support: '40 hours included',
      popular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise Integration',
      subtitle: 'For complex multi-system environments',
      price: 'CLP $150M - $300M',
      duration: '9-15 months',
      users: 'Up to 1000 users',
      description: 'Comprehensive solution for large organizations requiring extensive system integration and customization.',
      features: [
        'Advanced DHIS2 configuration with custom modules',
        'Complex data migration and system integration',
        'FONASA system integration',
        'Comprehensive user training program (80 hours)',
        'Custom reporting and analytics dashboards',
        '6 months post-deployment support',
        'Advanced security and compliance setup',
        'Dedicated project manager',
        'Priority support (24/7)',
        'Performance optimization',
        'Multi-site deployment support'
      ],
      limitations: [
        'Requires dedicated IT team',
        'Longer implementation timeline'
      ],
      ideal: [
        'Large hospital networks',
        'Regional health authorities',
        'Organizations with complex workflows'
      ],
      support: '120 hours included',
      popular: true
    },
    {
      id: 'custom',
      name: 'Custom Development',
      subtitle: 'Specialized tracker programs and modules',
      price: 'CLP $300M+',
      duration: '12-18 months',
      users: 'Unlimited',
      description: 'Fully customized DHIS2 solution with specialized tracker programs and unique organizational requirements.',
      features: [
        'Custom tracker program development',
        'Specialized module creation',
        'Advanced API integrations',
        'Custom mobile applications',
        'Comprehensive training program (120+ hours)',
        'White-label solutions available',
        '12 months post-deployment support',
        'Dedicated development team',
        'Source code ownership',
        'Advanced analytics and AI integration',
        'Multi-language support',
        'Custom workflow automation'
      ],
      limitations: [
        'Highest investment required',
        'Longest development timeline'
      ],
      ideal: [
        'National health ministries',
        'International organizations',
        'Unique specialized requirements'
      ],
      support: '200+ hours included',
      popular: false
    }
  ];

  const selectedTierData = tiers?.find(tier => tier?.id === selectedTier);

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Implementation Service Tiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the service level that matches your organization's complexity and requirements. All tiers include transparent pricing and comprehensive support.
          </p>
        </div>

        {/* Tier Selection Tabs */}
        <div className="flex flex-col sm:flex-row justify-center mb-8">
          <div className="inline-flex bg-muted rounded-lg p-1">
            {tiers?.map((tier) => (
              <button
                key={tier?.id}
                onClick={() => setSelectedTier(tier?.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  selectedTier === tier?.id
                    ? 'bg-primary text-primary-foreground shadow-clinical'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tier?.name}
                {tier?.popular && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tier Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl shadow-clinical-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 border-b border-border">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedTierData?.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {selectedTierData?.subtitle}
                  </p>
                  <p className="text-foreground">
                    {selectedTierData?.description}
                  </p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {selectedTierData?.price}
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center justify-center lg:justify-end">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {selectedTierData?.duration}
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                      <Icon name="Users" size={14} className="mr-1" />
                      {selectedTierData?.users}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="CheckCircle" size={20} className="mr-2 text-success" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {selectedTierData?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={16} className="mr-3 mt-0.5 text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 bg-success/10 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Icon name="Headphones" size={16} className="mr-2 text-success" />
                      <span className="font-medium text-success">Support Included</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedTierData?.support}
                    </p>
                  </div>
                </div>

                {/* Ideal For & Limitations */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="Target" size={20} className="mr-2 text-primary" />
                      Ideal For
                    </h4>
                    <ul className="space-y-2">
                      {selectedTierData?.ideal?.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="ArrowRight" size={14} className="mr-2 mt-1 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <Icon name="AlertCircle" size={20} className="mr-2 text-warning" />
                      Considerations
                    </h4>
                    <ul className="space-y-2">
                      {selectedTierData?.limitations?.map((limitation, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Minus" size={14} className="mr-2 mt-1 text-warning flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4">
                    <h5 className="font-medium text-primary mb-2">Timeline Breakdown</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Planning & Setup</span>
                        <span>20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Development & Configuration</span>
                        <span>40%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Testing & Training</span>
                        <span>25%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deployment & Support</span>
                        <span>15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="default" 
                    size="lg"
                    iconName="Calendar" 
                    iconPosition="left"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="Download" 
                    iconPosition="left"
                  >
                    Download Detailed Specs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-muted rounded-full px-6 py-3">
            <Icon name="Info" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              All pricing includes implementation, training, and initial support. Custom quotes available for unique requirements.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTiers;