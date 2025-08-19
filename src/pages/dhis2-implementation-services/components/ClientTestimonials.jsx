import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. María Elena Rodríguez",
      title: "Director of Health Informatics",
      organization: "Ministry of Health, Chile",
      location: "Santiago, Chile",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      quote: `DHIS2 Chile transformed our national health data management completely. Their deep understanding of MINSAL regulations and FONASA integration requirements made the difference. We went from fragmented data across 15 regions to a unified system serving 2.5 million patients.`,
      metrics: {
        implementation: "18 months",
        users: "1,200+ users",
        coverage: "15 regions"
      },
      project: "National Health Information System",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      title: "IT Director",
      organization: "Hospital Clínico Universidad de Chile",
      location: "Santiago, Chile",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: `The technical expertise and local knowledge combination is unmatched. They handled our complex legacy system migration flawlessly, and the custom tracker programs they developed for our research department exceeded expectations. Zero downtime during the transition.`,
      metrics: {
        implementation: "12 months",
        users: "800+ users",
        uptime: "99.9%"
      },
      project: "Hospital Information System Modernization",
      rating: 5
    },
    {
      id: 3,
      name: "Ana Patricia Silva",
      title: "Program Manager",
      organization: "World Health Organization Chile",
      location: "Santiago, Chile",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: `Working with DHIS2 Chile on our maternal health monitoring program was exceptional. Their understanding of both international standards and local healthcare realities enabled us to deploy across rural and urban areas successfully. The training program was comprehensive and culturally appropriate.`,
      metrics: {
        implementation: "8 months",
        facilities: "150+ facilities",
        coverage: "Rural & Urban"
      },
      project: "Maternal Health Monitoring System",
      rating: 5
    },
    {
      id: 4,
      name: "Roberto Fernández",
      title: "Chief Technology Officer",
      organization: "Red de Salud UC-CHRISTUS",
      location: "Santiago, Chile",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: `The enterprise integration they delivered connected our 12 facilities seamlessly. Real-time data synchronization, advanced analytics, and mobile access for our field teams. The ROI was evident within 6 months through improved operational efficiency and better patient outcomes.`,
      metrics: {
        implementation: "15 months",
        facilities: "12 facilities",
        roi: "6 months"
      },
      project: "Multi-facility Health Network Integration",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Healthcare Leaders Across Chile
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From national ministries to local clinics, our implementations have transformed health data management for organizations of all sizes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card border border-border rounded-xl shadow-clinical-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                    <Icon name="Quote" size={16} className="text-primary-foreground" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-foreground text-lg">
                    {currentTestimonial?.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {currentTestimonial?.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial?.organization}
                  </p>
                  <div className="flex items-center justify-center lg:justify-start mt-2">
                    <Icon name="MapPin" size={14} className="mr-1 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {currentTestimonial?.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote and Details */}
              <div className="flex-1">
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg leading-relaxed italic">
                    "{currentTestimonial?.quote}"
                  </blockquote>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Icon name="Briefcase" size={16} className="mr-2 text-primary" />
                    <span className="font-medium text-foreground">
                      {currentTestimonial?.project}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(currentTestimonial?.metrics)?.map(([key, value]) => (
                      <div key={key}>
                        <div className="font-bold text-primary text-lg">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:shadow-clinical transition-all duration-200"
            >
              <Icon name="ChevronLeft" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Previous</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === activeTestimonial
                      ? 'bg-primary' :'bg-muted hover:bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-4 py-2 bg-card border border-border rounded-lg hover:shadow-clinical transition-all duration-200"
            >
              <span className="text-sm text-muted-foreground">Next</span>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Successful Implementations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">500K+</div>
            <div className="text-sm text-muted-foreground">Patients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Coverage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;