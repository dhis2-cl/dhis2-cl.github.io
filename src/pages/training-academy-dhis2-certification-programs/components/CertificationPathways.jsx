import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationPathways = () => {
  const [activePathway, setActivePathway] = useState('foundation');

  const pathways = [
    {
      id: 'foundation',
      name: 'Foundation Level',
      icon: 'BookOpen',
      duration: '4 weeks',
      level: 'Beginner',
      price: 'CLP 180,000',
      description: 'Master basic DHIS2 concepts and navigation with hands-on Chilean health data scenarios.',
      modules: [
        'DHIS2 Overview & Architecture',
        'Data Entry & Validation',
        'Basic Reporting & Analytics',
        'User Management Basics',
        'Chilean Health System Integration'
      ],
      outcomes: [
        'Navigate DHIS2 interface confidently',
        'Perform accurate data entry',
        'Generate basic reports',
        'Understand Chilean health indicators'
      ],
      prerequisites: 'Basic computer skills',
      certification: 'DHIS2 Foundation Certificate',
      nextLevel: 'Implementation Specialist'
    },
    {
      id: 'implementation',
      name: 'Implementation Specialist',
      icon: 'Settings',
      duration: '8 weeks',
      level: 'Intermediate',
      price: 'CLP 350,000',
      description: 'Advanced configuration and customization for Chilean healthcare organizations.',
      modules: [
        'System Configuration & Setup',
        'Data Model Design',
        'Advanced Analytics & Dashboards',
        'Integration with Chilean Systems',
        'Training & Change Management',
        'Quality Assurance & Testing'
      ],
      outcomes: [
        'Configure DHIS2 for organizations',
        'Design effective data models',
        'Create advanced dashboards',
        'Lead implementation projects'
      ],
      prerequisites: 'Foundation Level Certificate',
      certification: 'DHIS2 Implementation Specialist',
      nextLevel: 'System Administrator'
    },
    {
      id: 'administrator',
      name: 'System Administrator',
      icon: 'Shield',
      duration: '6 weeks',
      level: 'Advanced',
      price: 'CLP 280,000',
      description: 'Master system maintenance, optimization, and security for production environments.',
      modules: [
        'Server Administration & Deployment',
        'Performance Optimization',
        'Security & Access Control',
        'Backup & Disaster Recovery',
        'Monitoring & Troubleshooting',
        'Chilean Compliance Requirements'
      ],
      outcomes: [
        'Manage DHIS2 servers',
        'Optimize system performance',
        'Implement security protocols',
        'Handle system maintenance'
      ],
      prerequisites: 'Implementation Specialist Certificate',
      certification: 'DHIS2 System Administrator',
      nextLevel: 'Master Trainer'
    }
  ];

  const currentPathway = pathways?.find(p => p?.id === activePathway);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Certification Pathways
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Structured learning paths designed for Chilean healthcare professionals at every skill level
          </p>
        </div>

        {/* Pathway Navigation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {pathways?.map((pathway) => (
                <button
                  key={pathway?.id}
                  onClick={() => setActivePathway(pathway?.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                    activePathway === pathway?.id
                      ? 'border-primary bg-primary/5 shadow-elevation'
                      : 'border-border bg-card hover:border-primary/50 hover:shadow-elevation-sm'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${
                      activePathway === pathway?.id
                        ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                    }`}>
                      <Icon name={pathway?.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">
                        {pathway?.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-text-secondary">
                        <span>{pathway?.duration}</span>
                        <span>•</span>
                        <span>{pathway?.level}</span>
                      </div>
                      <div className="text-lg font-bold text-primary mt-2">
                        {pathway?.price}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <div className="bg-card rounded-2xl border border-border shadow-elevation p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {currentPathway?.name}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {currentPathway?.description}
                  </p>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} color="var(--color-text-secondary)" />
                      <span>{currentPathway?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="BarChart" size={16} color="var(--color-text-secondary)" />
                      <span>{currentPathway?.level}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} color="var(--color-text-secondary)" />
                      <span>{currentPathway?.certification}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {currentPathway?.price}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Group discounts available
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Course Modules
                </h4>
                <div className="grid gap-3">
                  {currentPathway?.modules?.map((module, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 bg-primary text-white rounded-full text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-text-primary">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Learning Outcomes
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentPathway?.outcomes?.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites & Next Level */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-muted rounded-lg">
                  <h5 className="font-semibold text-text-primary mb-2">Prerequisites</h5>
                  <p className="text-text-secondary">{currentPathway?.prerequisites}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Next Level</h5>
                  <p className="text-text-secondary">{currentPathway?.nextLevel}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="left"
                  className="font-cta"
                >
                  Enroll Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="font-cta"
                >
                  Download Curriculum
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPathways;