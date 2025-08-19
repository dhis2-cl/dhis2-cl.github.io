import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalCapabilities = () => {
  const [activeCategory, setActiveCategory] = useState('web-api');

  const capabilities = {
    'web-api': {
      title: 'Web API Integrations',
      icon: 'Globe',
      description: 'Advanced DHIS2 Web API implementations and custom endpoint development',
      skills: [
        { name: 'RESTful API Design', level: 95, projects: 25 },
        { name: 'OAuth2 Authentication', level: 90, projects: 18 },
        { name: 'Data Import/Export', level: 98, projects: 30 },
        { name: 'Custom Metadata', level: 92, projects: 22 },
        { name: 'Analytics API', level: 88, projects: 15 },
        { name: 'Event Capture API', level: 94, projects: 20 }
      ],
      projects: [
        'Ministry of Health Data Integration',
        'NGO Multi-System Connector',
        'Research Institution Analytics Portal'
      ]
    },
    'android': {
      title: 'Android App Customizations',
      icon: 'Smartphone',
      description: 'Native Android development and DHIS2 mobile app customizations',
      skills: [
        { name: 'Kotlin Development', level: 90, projects: 12 },
        { name: 'Offline Synchronization', level: 95, projects: 15 },
        { name: 'Custom UI Components', level: 88, projects: 18 },
        { name: 'Push Notifications', level: 85, projects: 10 },
        { name: 'Biometric Integration', level: 80, projects: 8 },
        { name: 'GPS Tracking', level: 92, projects: 14 }
      ],
      projects: [
        'Rural Clinic Mobile Tracker',
        'Community Health Worker App',
        'Emergency Response Mobile System'
      ]
    },
    'dashboards': {
      title: 'Data Visualization Dashboards',
      icon: 'BarChart3',
      description: 'Interactive dashboards and advanced data visualization solutions',
      skills: [
        { name: 'D3.js Visualizations', level: 92, projects: 20 },
        { name: 'Real-time Analytics', level: 88, projects: 16 },
        { name: 'Custom Chart Types', level: 90, projects: 22 },
        { name: 'Interactive Maps', level: 85, projects: 12 },
        { name: 'Performance Optimization', level: 94, projects: 25 },
        { name: 'Responsive Design', level: 96, projects: 28 }
      ],
      projects: [
        'National Health Surveillance Dashboard',
        'Epidemic Monitoring System',
        'Resource Allocation Analytics'
      ]
    },
    'analytics': {
      title: 'Advanced Analytics',
      icon: 'TrendingUp',
      description: 'Machine learning integration and predictive analytics implementations',
      skills: [
        { name: 'Predictive Modeling', level: 85, projects: 8 },
        { name: 'Data Mining', level: 88, projects: 12 },
        { name: 'Statistical Analysis', level: 92, projects: 15 },
        { name: 'ML Model Integration', level: 80, projects: 6 },
        { name: 'Automated Reporting', level: 94, projects: 20 },
        { name: 'Anomaly Detection', level: 82, projects: 10 }
      ],
      projects: [
        'Disease Outbreak Prediction',
        'Resource Demand Forecasting',
        'Quality Assurance Automation'
      ]
    }
  };

  const categories = Object.keys(capabilities);
  const currentCapability = capabilities?.[activeCategory];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
              <Icon name="Layers" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Technical Excellence
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Full-Stack DHIS2 Capabilities
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical expertise across DHIS2's entire ecosystem, 
            from core platform development to cutting-edge integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {categories?.map((category) => {
                const capability = capabilities?.[category];
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg text-left transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground shadow-clinical'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    <Icon 
                      name={capability?.icon} 
                      size={20} 
                      color={activeCategory === category ? 'white' : 'var(--color-primary)'}
                    />
                    <div>
                      <div className="font-medium text-sm">
                        {capability?.title}
                      </div>
                      <div className={`text-xs mt-1 ${
                        activeCategory === category ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {capability?.skills?.length} Skills
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl p-8 border border-border shadow-clinical">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <Icon name={currentCapability?.icon} size={24} color="var(--color-primary)" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {currentCapability?.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    {currentCapability?.description}
                  </p>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {currentCapability?.skills?.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Core Skills
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {currentCapability?.skills?.map((skill, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-medium text-foreground">
                        {skill?.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill?.projects} projects
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-1000"
                          style={{ width: `${skill?.level}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {skill?.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Projects */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Featured Projects
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentCapability?.projects?.map((project, index) => (
                    <div key={index} className="bg-surface rounded-lg p-4 border border-border">
                      <div className="flex items-start space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-lg flex-shrink-0">
                          <Icon name="Folder" size={16} color="var(--color-accent)" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground text-sm mb-1">
                            {project}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            View case study →
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;