import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CorporateTraining = () => {
  const [activeProgram, setActiveProgram] = useState('government');

  const programs = [
    {
      id: 'government',
      name: 'Government Agencies',
      icon: 'Building',
      description: 'Specialized training programs for Chilean government health departments and municipal organizations.',
      features: [
        'Compliance with Chilean health regulations',
        'Integration with existing government systems',
        'Multi-level user training (administrators to end-users)',
        'Change management and adoption strategies',
        'Ongoing support and maintenance training'
      ],
      benefits: [
        'Reduced implementation time by 40%',
        'Improved data quality and reporting accuracy',
        'Enhanced inter-agency collaboration',
        'Cost-effective training delivery'
      ],
      pricing: 'Custom pricing based on organization size and requirements',
      duration: '3-6 months',
      delivery: 'On-site, Virtual, or Hybrid'
    },
    {
      id: 'healthcare',
      name: 'Healthcare Organizations',
      icon: 'Heart',
      description: 'Comprehensive DHIS2 training tailored for hospitals, clinics, and healthcare networks.',
      features: [
        'Clinical workflow integration',
        'Patient data management and privacy',
        'Quality improvement methodologies',
        'Performance monitoring and evaluation',
        'Emergency response and outbreak management'
      ],
      benefits: [
        'Streamlined clinical data collection',
        'Improved patient care coordination',
        'Enhanced quality metrics tracking',
        'Reduced administrative burden'
      ],
      pricing: 'Starting from CLP 2,500,000 per organization',
      duration: '2-4 months',
      delivery: 'Flexible scheduling to accommodate clinical operations'
    },
    {
      id: 'ngo',
      name: 'NGOs & International Organizations',
      icon: 'Globe',
      description: 'Specialized training for non-governmental organizations operating in Chile and Latin America.',
      features: [
        'Multi-country implementation strategies',
        'Donor reporting requirements',
        'Community health program management',
        'Mobile data collection training',
        'Cross-cultural implementation approaches'
      ],
      benefits: [
        'Standardized reporting across programs',
        'Improved donor compliance',
        'Enhanced program visibility',
        'Reduced operational costs'
      ],
      pricing: 'NGO-friendly pricing with flexible payment options',
      duration: '1-3 months',
      delivery: 'Remote-first with optional on-site components'
    }
  ];

  const currentProgram = programs?.find(p => p?.id === activeProgram);

  const trainingOptions = [
    {
      name: 'Executive Briefings',
      icon: 'Users',
      description: 'Strategic overview sessions for leadership teams',
      duration: '2-4 hours'
    },
    {
      name: 'Technical Workshops',
      icon: 'Code',
      description: 'Hands-on training for IT and technical staff',
      duration: '1-3 days'
    },
    {
      name: 'End-User Training',
      icon: 'Monitor',
      description: 'Practical training for daily system users',
      duration: '4-8 hours'
    },
    {
      name: 'Train-the-Trainer',
      icon: 'GraduationCap',
      description: 'Certification for internal training champions',
      duration: '2-5 days'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Corporate Training Programs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Customized DHIS2 training solutions designed for organizations implementing or optimizing their health information systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Program Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Select Your Organization Type</h3>
            {programs?.map((program) => (
              <button
                key={program?.id}
                onClick={() => setActiveProgram(program?.id)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeProgram === program?.id
                    ? 'border-primary bg-primary/5 shadow-elevation'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-elevation-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                    activeProgram === program?.id
                      ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                  }`}>
                    <Icon name={program?.icon} size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{program?.name}</h4>
                    <p className="text-sm text-text-secondary">{program?.description?.substring(0, 60)}...</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-elevation p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl">
                <Icon name={currentProgram?.icon} size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">{currentProgram?.name}</h3>
                <p className="text-text-secondary">{currentProgram?.description}</p>
              </div>
            </div>

            {/* Program Info */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Clock" size={16} color="var(--color-primary)" />
                  <span className="font-semibold text-text-primary">Duration</span>
                </div>
                <p className="text-text-secondary text-sm">{currentProgram?.duration}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MapPin" size={16} color="var(--color-primary)" />
                  <span className="font-semibold text-text-primary">Delivery</span>
                </div>
                <p className="text-text-secondary text-sm">{currentProgram?.delivery}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="DollarSign" size={16} color="var(--color-primary)" />
                  <span className="font-semibold text-text-primary">Investment</span>
                </div>
                <p className="text-text-secondary text-sm">{currentProgram?.pricing}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Program Features</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentProgram?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Expected Benefits</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentProgram?.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="TrendingUp" size={16} color="var(--color-primary)" className="mt-1 flex-shrink-0" />
                    <span className="text-text-secondary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="font-cta"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="font-cta"
              >
                Download Program Details
              </Button>
            </div>
          </div>
        </div>

        {/* Training Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Training Delivery Options
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingOptions?.map((option, index) => (
              <div key={index} className="bg-card rounded-xl border border-border shadow-elevation-sm hover:shadow-elevation transition-all duration-300 p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
                  <Icon name={option?.icon} size={20} />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{option?.name}</h4>
                <p className="text-text-secondary text-sm mb-3">{option?.description}</p>
                <div className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {option?.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-primary/5 to-dhis2-purple/5 rounded-2xl border border-primary/20 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Corporate Training Success Metrics
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our corporate training programs deliver measurable results for organizations across Chile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-text-secondary">Organizations Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,000+</div>
              <div className="text-text-secondary">Professionals Certified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-text-secondary">Implementation Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6 months</div>
              <div className="text-text-secondary">Average ROI Timeline</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="default" 
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="bg-conversion-red hover:bg-conversion-red/90 font-cta"
            >
              Discuss Your Training Needs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;