import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. María Elena Rodríguez",
      position: "Director of Health Informatics",
      organization: "Ministry of Health, Chile",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      quote: "DHIS2 Chile's custom tracker program reduced our data entry time by 60% and achieved 99.2% data completeness across 200+ health facilities. Their technical expertise in offline synchronization was game-changing for our rural clinics.",
      metrics: [
        { label: "Data Entry Time Reduction", value: "60%", icon: "Clock" },
        { label: "Data Completeness", value: "99.2%", icon: "CheckCircle" },
        { label: "Health Facilities", value: "200+", icon: "Building" }
      ],
      project: "National Maternal Health Tracking System",
      techFocus: "Offline synchronization and multi-language support"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      position: "Chief Technology Officer",
      organization: "Fundación Salud Rural",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: "The custom analytics dashboard they developed provides real-time insights that transformed our decision-making process. The machine learning integration for predictive analytics has helped us prevent three potential disease outbreaks.",
      metrics: [
        { label: "Response Time Improvement", value: "75%", icon: "Zap" },
        { label: "Outbreak Prevention", value: "3", icon: "Shield" },
        { label: "Data Processing Speed", value: "< 2s", icon: "Activity" }
      ],
      project: "Advanced Analytics Platform",
      techFocus: "Real-time data processing and ML integration"
    },
    {
      id: 3,
      name: "Dr. Ana Sofía Contreras",
      position: "Regional Health Coordinator",
      organization: "WHO Chile Office",
      avatar: "https://randomuser.me/api/portraits/women/38.jpg",
      quote: "Their Android app customization with biometric integration and GPS tracking revolutionized our field data collection. The system\'s reliability in remote areas with poor connectivity is exceptional - zero data loss incidents in 18 months.",
      metrics: [
        { label: "Data Loss Incidents", value: "0", icon: "Database" },
        { label: "Field Workers Trained", value: "150+", icon: "Users" },
        { label: "System Uptime", value: "99.8%", icon: "Server" }
      ],
      project: "Mobile Field Data Collection System",
      techFocus: "Android customization and offline capabilities"
    },
    {
      id: 4,
      name: "Roberto Silva",
      position: "IT Director",
      organization: "Hospital Clínico Universidad de Chile",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      quote: "The blockchain integration for our supply chain tracking provided 100% transparency and reduced inventory discrepancies by 40%. Their technical architecture review identified critical security improvements that saved us from potential data breaches.",
      metrics: [
        { label: "Supply Chain Transparency", value: "100%", icon: "Eye" },
        { label: "Inventory Discrepancy Reduction", value: "40%", icon: "Package" },
        { label: "Security Improvements", value: "15", icon: "Lock" }
      ],
      project: "Blockchain Supply Chain System",
      techFocus: "Blockchain integration and security architecture"
    }
  ];

  const currentTestimonial = testimonials?.[activeTestimonial];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-success rounded-lg">
              <Icon name="MessageSquare" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-success">
              Client Success Stories
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Technical Outcomes That Matter
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from health organizations across Chile who trust our technical expertise 
            to transform their DHIS2 implementations.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-card rounded-2xl border border-border shadow-clinical-lg overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                {/* Quote */}
                <div className="mb-8">
                  <Icon name="Quote" size={32} color="var(--color-primary)" className="mb-4 opacity-50" />
                  <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                    "{currentTestimonial?.quote}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="relative">
                    <Image 
                      src={currentTestimonial?.avatar}
                      alt={`${currentTestimonial?.name} profile photo`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {currentTestimonial?.name}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {currentTestimonial?.position}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentTestimonial?.organization}
                    </p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-surface rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Folder" size={20} color="var(--color-accent)" />
                    <div>
                      <h5 className="font-medium text-foreground mb-1">
                        {currentTestimonial?.project}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Focus: {currentTestimonial?.techFocus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === activeTestimonial
                            ? 'bg-primary' :'bg-muted hover:bg-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                    >
                      <Icon name="ChevronLeft" size={16} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                    >
                      <Icon name="ChevronRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Metrics Side */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12">
                <h4 className="text-xl font-semibold text-foreground mb-8">
                  Measurable Technical Impact
                </h4>
                
                <div className="space-y-6">
                  {currentTestimonial?.metrics?.map((metric, index) => (
                    <div key={index} className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <Icon name={metric?.icon} size={24} color="var(--color-primary)" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric?.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric?.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Stats */}
                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-success mb-1">
                        18 months
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Project Duration
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent mb-1">
                        100%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        User Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to achieve similar results for your organization?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>Schedule Technical Consultation</span>
            </button>
            <button className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="FileText" size={16} />
              <span>View More Case Studies</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;