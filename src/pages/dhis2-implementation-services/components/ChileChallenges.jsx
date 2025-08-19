import React from 'react';
import Icon from '../../../components/AppIcon';

const ChileChallenges = () => {
  const challenges = [
    {
      icon: "Building2",
      title: "FONASA Integration",
      description: "Seamless integration with Chile's National Health Fund system for unified patient data and billing processes.",
      solution: "Custom API connectors and real-time data synchronization protocols",
      complexity: "High",
      timeline: "8-12 weeks"
    },
    {
      icon: "Shield",
      title: "MINSAL Compliance",
      description: "Full adherence to Ministry of Health regulations for health data management and reporting standards.",
      solution: "Built-in compliance frameworks and automated reporting modules",
      complexity: "Medium",
      timeline: "4-6 weeks"
    },
    {
      icon: "Network",
      title: "Regional Health Networks",
      description: "Adaptation to Chile\'s diverse regional health network structures and varying technical capabilities.",
      solution: "Flexible deployment models and regional customization options",
      complexity: "Medium",
      timeline: "6-8 weeks"
    },
    {
      icon: "Database",
      title: "Legacy System Migration",
      description: "Safe migration from outdated health information systems while maintaining data integrity.",
      solution: "Proven data migration tools and validation frameworks",
      complexity: "High",
      timeline: "10-14 weeks"
    },
    {
      icon: "Users",
      title: "Multi-language Support",
      description: "Support for Spanish language interfaces and indigenous language considerations in rural areas.",
      solution: "Localized DHIS2 interfaces and cultural adaptation protocols",
      complexity: "Low",
      timeline: "2-3 weeks"
    },
    {
      icon: "Wifi",
      title: "Connectivity Challenges",
      description: "Reliable operation in areas with limited internet connectivity and infrastructure constraints.",
      solution: "Offline-capable modules and data synchronization protocols",
      complexity: "Medium",
      timeline: "4-5 weeks"
    }
  ];

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'High': return 'text-error bg-error/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Low': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Chile-Specific Implementation Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our deep understanding of Chilean healthcare infrastructure ensures successful DHIS2 deployment despite complex regulatory and technical requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {challenges?.map((challenge, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-clinical transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={challenge?.icon} size={24} className="text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {challenge?.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(challenge?.complexity)}`}>
                      {challenge?.complexity}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {challenge?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Our Solution:</p>
                        <p className="text-sm text-muted-foreground">{challenge?.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} className="text-accent" />
                        <span className="text-muted-foreground">Timeline: {challenge?.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
          <div className="text-center">
            <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Proven Track Record in Chile
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We've successfully navigated these challenges across 15+ implementations in Chilean health institutions, from rural clinics to major hospital networks.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Compliance Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Successful Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Local Support Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChileChallenges;