import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPlatform = () => {
  const [activeFeature, setActiveFeature] = useState('virtual-labs');

  const features = [
    {
      id: 'virtual-labs',
      name: 'Virtual Lab Environment',
      icon: 'Monitor',
      description: 'Practice safely with dedicated DHIS2 instances loaded with Chilean health data scenarios.',
      benefits: [
        'Isolated practice environments',
        'Real Chilean health datasets',
        'No risk to production systems',
        '24/7 lab access'
      ]
    },
    {
      id: 'interactive-modules',
      name: 'Interactive Learning Modules',
      icon: 'Play',
      description: 'Engaging multimedia content with hands-on exercises and immediate feedback.',
      benefits: [
        'Video tutorials with subtitles',
        'Interactive simulations',
        'Progress tracking',
        'Bilingual content delivery'
      ]
    },
    {
      id: 'assessment-tools',
      name: 'Assessment & Certification',
      icon: 'Award',
      description: 'Comprehensive evaluation system with practical assessments and official certification.',
      benefits: [
        'Practical skill assessments',
        'Automated progress tracking',
        'Official DHIS2 certificates',
        'Continuing education credits'
      ]
    },
    {
      id: 'community-support',
      name: 'Community & Support',
      icon: 'Users',
      description: 'Connect with peers and instructors through forums, study groups, and mentorship programs.',
      benefits: [
        'Peer discussion forums',
        'Expert instructor support',
        'Study group formation',
        'Alumni network access'
      ]
    }
  ];

  const currentFeature = features?.find(f => f?.id === activeFeature);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Advanced Learning Platform
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            State-of-the-art learning management system designed specifically for DHIS2 education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {features?.map((feature) => (
              <button
                key={feature?.id}
                onClick={() => setActiveFeature(feature?.id)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeFeature === feature?.id
                    ? 'border-primary bg-primary/5 shadow-elevation'
                    : 'border-border bg-card hover:border-primary/50 hover:shadow-elevation-sm'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                    activeFeature === feature?.id
                      ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                  }`}>
                    <Icon name={feature?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-2">
                      {feature?.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {feature?.description}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    color={activeFeature === feature?.id ? 'var(--color-primary)' : 'var(--color-text-secondary)'}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Feature Details */}
          <div className="bg-card rounded-2xl border border-border shadow-elevation p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-xl">
                <Icon name={currentFeature?.icon} size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary">
                  {currentFeature?.name}
                </h3>
                <p className="text-text-secondary">
                  {currentFeature?.description}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {currentFeature?.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                  <span className="text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Platform Preview */}
            <div className="bg-muted rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-text-primary">Platform Preview</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="PlayCircle" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-medium">Module 1: DHIS2 Introduction</span>
                  </div>
                  <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">Completed</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="PlayCircle" size={16} color="var(--color-primary)" />
                    <span className="text-sm font-medium">Module 2: Data Entry Basics</span>
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">In Progress</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg opacity-60">
                  <div className="flex items-center space-x-3">
                    <Icon name="Lock" size={16} color="var(--color-text-secondary)" />
                    <span className="text-sm font-medium">Module 3: Advanced Analytics</span>
                  </div>
                  <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-full">Locked</span>
                </div>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg" 
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              className="font-cta"
            >
              Explore Platform Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPlatform;