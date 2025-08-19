import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const InnovationLab = () => {
  const [activeInnovation, setActiveInnovation] = useState('ml-analytics');

  const innovations = {
    'ml-analytics': {
      title: 'Machine Learning Integration',
      subtitle: 'Predictive Health Analytics',
      icon: 'Brain',
      status: 'Beta Testing',
      progress: 75,
      description: 'Advanced machine learning algorithms integrated with DHIS2 for predictive health analytics and early warning systems.',
      features: [
        'Disease outbreak prediction with 85% accuracy',
        'Resource demand forecasting',
        'Automated anomaly detection in health data',
        'Real-time risk assessment algorithms'
      ],
      techStack: ['Python', 'TensorFlow', 'DHIS2 API', 'Docker'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      metrics: {
        accuracy: '85%',
        processing: '< 2s',
        facilities: '150+'
      }
    },
    'blockchain-supply': {
      title: 'Blockchain Integration',
      subtitle: 'Supply Chain Tracking',
      icon: 'Link',
      status: 'Pilot Phase',
      progress: 60,
      description: 'Blockchain-based supply chain tracking system for pharmaceutical and medical equipment traceability.',
      features: [
        'Immutable supply chain records',
        'Smart contract automation',
        'Multi-stakeholder verification',
        'Real-time inventory tracking'
      ],
      techStack: ['Ethereum', 'Solidity', 'Web3.js', 'DHIS2'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      metrics: {
        transparency: '100%',
        reduction: '40%',
        partners: '25+'
      }
    },
    'iot-monitoring': {
      title: 'IoT Sensor Integration',
      subtitle: 'Environmental Health Monitoring',
      icon: 'Wifi',
      status: 'Development',
      progress: 45,
      description: 'Internet of Things sensors integrated with DHIS2 for real-time environmental health monitoring and data collection.',
      features: [
        'Real-time air quality monitoring',
        'Water quality sensor integration',
        'Temperature and humidity tracking',
        'Automated alert systems'
      ],
      techStack: ['Arduino', 'LoRaWAN', 'MQTT', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      metrics: {
        sensors: '500+',
        coverage: '75km²',
        uptime: '99.5%'
      }
    }
  };

  const currentInnovation = innovations?.[activeInnovation];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg">
              <Icon name="Zap" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Innovation Lab
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Cutting-Edge DHIS2 Developments
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of health informatics with advanced technologies 
            that push the boundaries of what's possible with DHIS2.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Innovation Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {Object.entries(innovations)?.map(([key, innovation]) => (
                <button
                  key={key}
                  onClick={() => setActiveInnovation(key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                    activeInnovation === key
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary shadow-clinical'
                      : 'bg-card border-border hover:border-primary/50 hover:shadow-clinical'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                      activeInnovation === key
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={innovation?.icon} size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {innovation?.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {innovation?.subtitle}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          innovation?.status === 'Beta Testing' ?'bg-success/10 text-success'
                            : innovation?.status === 'Pilot Phase' ?'bg-warning/10 text-warning' :'bg-primary/10 text-primary'
                        }`}>
                          {innovation?.status}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {innovation?.progress}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-1 mt-2">
                        <div 
                          className="bg-primary rounded-full h-1 transition-all duration-500"
                          style={{ width: `${innovation?.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Innovation Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border shadow-clinical overflow-hidden">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={currentInnovation?.image}
                  alt={`${currentInnovation?.title} visualization`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    currentInnovation?.status === 'Beta Testing' ?'bg-success text-success-foreground'
                      : currentInnovation?.status === 'Pilot Phase' ?'bg-warning text-warning-foreground' :'bg-primary text-primary-foreground'
                  }`}>
                    {currentInnovation?.status}
                  </span>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Icon name={currentInnovation?.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {currentInnovation?.title}
                      </h3>
                      <p className="text-white/80">
                        {currentInnovation?.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      Development Progress
                    </span>
                    <span className="text-sm text-primary font-semibold">
                      {currentInnovation?.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary rounded-full h-2 transition-all duration-1000"
                      style={{ width: `${currentInnovation?.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {currentInnovation?.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Key Features
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentInnovation?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex items-center justify-center w-5 h-5 bg-success/10 rounded-full flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={12} color="var(--color-success)" />
                        </div>
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentInnovation?.techStack?.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Performance Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(currentInnovation?.metrics)?.map(([key, value], index) => (
                      <div key={index} className="bg-surface rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg"
                    iconName="Play"
                    iconPosition="left"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    Request Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="FileText"
                    iconPosition="left"
                  >
                    Technical Specs
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg"
                    iconName="MessageSquare"
                    iconPosition="left"
                  >
                    Discuss Integration
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;