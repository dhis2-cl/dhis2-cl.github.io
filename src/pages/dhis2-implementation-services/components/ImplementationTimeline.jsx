import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ImplementationTimeline = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const phases = [
    {
      id: 1,
      title: "Assessment & Planning",
      duration: "2-4 weeks",
      description: "Comprehensive evaluation of current systems and requirements",
      activities: [
        "Current system analysis and data audit",
        "Stakeholder interviews and requirement gathering",
        "Technical infrastructure assessment",
        "DHIS2-Chile Readiness Assessment completion",
        "Implementation roadmap creation"
      ],
      deliverables: [
        "Technical Assessment Report",
        "Implementation Strategy Document",
        "Resource Allocation Plan",
        "Risk Mitigation Framework"
      ],
      metrics: "95% accuracy in timeline predictions"
    },
    {
      id: 2,
      title: "System Design & Setup",
      duration: "3-6 weeks",
      description: "DHIS2 instance configuration and customization",
      activities: [
        "DHIS2 server installation and configuration",
        "Database structure design and setup",
        "User roles and permissions configuration",
        "Integration points identification",
        "Security protocols implementation"
      ],
      deliverables: [
        "Configured DHIS2 Instance",
        "System Architecture Documentation",
        "Security Implementation Report",
        "Integration Specifications"
      ],
      metrics: "99.9% system uptime guarantee"
    },
    {
      id: 3,
      title: "Data Migration & Integration",
      duration: "4-8 weeks",
      description: "Legacy data transfer and system integration",
      activities: [
        "Data mapping and transformation",
        "FONASA system integration setup",
        "Legacy system data extraction",
        "Data quality validation and cleansing",
        "Integration testing and validation"
      ],
      deliverables: [
        "Migrated Historical Data",
        "Integration Connectors",
        "Data Quality Report",
        "Validation Test Results"
      ],
      metrics: "99.5% data integrity maintained"
    },
    {
      id: 4,
      title: "Training & Deployment",
      duration: "3-5 weeks",
      description: "User training and system go-live",
      activities: [
        "Administrator training program",
        "End-user training sessions",
        "Documentation and user guides creation",
        "Pilot deployment with select users",
        "Full system deployment"
      ],
      deliverables: [
        "Trained User Base",
        "Comprehensive Documentation",
        "Training Materials",
        "Go-Live Support Plan"
      ],
      metrics: "90% user adoption within 30 days"
    },
    {
      id: 5,
      title: "Optimization & Support",
      duration: "Ongoing",
      description: "Performance optimization and continuous support",
      activities: [
        "System performance monitoring",
        "User feedback collection and analysis",
        "Optimization recommendations",
        "Ongoing technical support",
        "Regular system updates and maintenance"
      ],
      deliverables: [
        "Performance Reports",
        "Optimization Recommendations",
        "Support Documentation",
        "Maintenance Schedule"
      ],
      metrics: "24/7 support with 2-hour response time"
    }
  ];

  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <div className="bg-surface rounded-xl p-8 shadow-clinical">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Implementation Timeline
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our proven 5-phase methodology ensures successful DHIS2 deployment with minimal disruption to your operations
        </p>
      </div>
      <div className="space-y-4">
        {phases?.map((phase, index) => (
          <div key={phase?.id} className="relative">
            {/* Timeline connector */}
            {index < phases?.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-border"></div>
            )}
            
            <div 
              className={`bg-card border border-border rounded-lg transition-all duration-300 ${
                expandedPhase === phase?.id ? 'shadow-clinical-lg' : 'hover:shadow-clinical'
              }`}
            >
              <button
                onClick={() => togglePhase(phase?.id)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      expandedPhase === phase?.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <span className="font-bold">{phase?.id}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {phase?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {phase?.duration} • {phase?.description}
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name={expandedPhase === phase?.id ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground transition-transform duration-200"
                  />
                </div>
              </button>

              {expandedPhase === phase?.id && (
                <div className="px-6 pb-6 border-t border-border mt-4 pt-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="CheckSquare" size={16} className="mr-2 text-primary" />
                        Key Activities
                      </h5>
                      <ul className="space-y-2">
                        {phase?.activities?.map((activity, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <Icon name="ArrowRight" size={12} className="mr-2 mt-1 text-primary flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="FileText" size={16} className="mr-2 text-secondary" />
                        Deliverables
                      </h5>
                      <ul className="space-y-2">
                        {phase?.deliverables?.map((deliverable, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <Icon name="Check" size={12} className="mr-2 mt-1 text-secondary flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center">
                        <Icon name="Target" size={16} className="mr-2 text-accent" />
                        Success Metrics
                      </h5>
                      <div className="bg-accent/10 rounded-lg p-4">
                        <p className="text-sm font-medium text-accent">
                          {phase?.metrics}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
          <Icon name="Clock" size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary">
            Total Implementation Time: 6-18 months depending on complexity
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImplementationTimeline;