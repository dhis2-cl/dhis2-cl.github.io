import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StudentTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Roberto Fernández",
      title: "Health Information Manager",
      organization: "Hospital Regional de Valparaíso",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      course: "Implementation Specialist Certification",
      testimonial: `The DHIS2 training program transformed how we manage health data at our hospital. The hands-on approach with real Chilean health scenarios made the learning incredibly practical. Within 3 months of completing the certification, we successfully implemented DHIS2 across our entire facility, improving our reporting efficiency by 60%.`,
      outcome: "Implemented DHIS2 hospital-wide, improved reporting efficiency by 60%",
      beforeAfter: {
        before: "Manual paper-based reporting taking 2-3 days",
        after: "Automated digital reporting completed in hours"
      }
    },
    {
      id: 2,
      name: "Carmen Morales",
      title: "Public Health Analyst",
      organization: "Ministerio de Salud - Región Metropolitana",
      avatar: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      course: "Foundation Level + Analytics Specialization",
      testimonial: `As someone new to DHIS2, I was initially overwhelmed by the complexity. The structured learning path and excellent instructor support made all the difference. The virtual lab environment allowed me to practice safely without affecting our production systems. Now I'm leading our regional analytics initiatives and training other staff members.`,
      outcome: "Promoted to lead regional analytics team, training other staff",
      beforeAfter: {
        before: "Struggled with basic DHIS2 navigation",
        after: "Leading analytics initiatives and training others"
      }
    },
    {
      id: 3,
      name: "Miguel Torres",
      title: "IT Systems Administrator",
      organization: "Red de Salud UC-CHRISTUS",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      course: "System Administrator Certification",
      testimonial: `The technical depth of the system administrator course exceeded my expectations. Learning about server optimization, security protocols, and disaster recovery specifically for DHIS2 was invaluable. The instructors' real-world experience with large-scale Chilean implementations provided insights you can't get from documentation alone.`,
      outcome: "Successfully managing 5 DHIS2 instances across health network",
      beforeAfter: {
        before: "Limited DHIS2 technical knowledge",
        after: "Managing complex multi-instance DHIS2 infrastructure"
      }
    },
    {
      id: 4,
      name: "Dra. Patricia Sánchez",
      title: "Epidemiologist",
      organization: "SEREMI de Salud Biobío",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      course: "Advanced Analytics & Dashboard Design",
      testimonial: `The analytics training revolutionized how we approach epidemiological surveillance in our region. Learning to create dynamic dashboards and automated alerts has dramatically improved our response time to health events. The course content was perfectly aligned with Chilean health surveillance requirements.`,
      outcome: "Reduced disease outbreak response time from days to hours",
      beforeAfter: {
        before: "Manual data analysis taking several days",
        after: "Real-time automated surveillance and alerts"
      }
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
    <section className="py-20 bg-gradient-to-br from-primary/5 to-dhis2-purple/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Hear from Chilean health professionals who transformed their careers and organizations through our DHIS2 training programs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div className="bg-card rounded-2xl border border-border shadow-elevation p-8">
            {/* Header */}
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-text-primary mb-1">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-text-secondary text-sm mb-1">
                  {currentTestimonial?.title}
                </p>
                <p className="text-text-secondary text-sm font-medium">
                  {currentTestimonial?.organization}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mt-2">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={14} color="var(--color-accent)" className="fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Course Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Icon name="Award" size={14} />
              <span>{currentTestimonial?.course}</span>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-text-primary text-lg leading-relaxed mb-6 italic">
              "{currentTestimonial?.testimonial}"
            </blockquote>

            {/* Outcome */}
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Icon name="TrendingUp" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-success mb-1">Key Outcome</h4>
                  <p className="text-text-secondary text-sm">{currentTestimonial?.outcome}</p>
                </div>
              </div>
            </div>

            {/* Before/After */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h5 className="font-semibold text-red-700 mb-2 text-sm">Before Training</h5>
                <p className="text-red-600 text-sm">{currentTestimonial?.beforeAfter?.before}</p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h5 className="font-semibold text-green-700 mb-2 text-sm">After Training</h5>
                <p className="text-green-600 text-sm">{currentTestimonial?.beforeAfter?.after}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="flex items-center space-x-2 px-4 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
              >
                <Icon name="ChevronLeft" size={16} />
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === activeTestimonial ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 px-4 py-2 text-text-secondary hover:text-primary transition-colors duration-200"
              >
                <span>Next</span>
                <Icon name="ChevronRight" size={16} />
              </button>
            </div>
          </div>

          {/* Stats & Impact */}
          <div className="space-y-8">
            {/* Impact Stats */}
            <div className="bg-card rounded-2xl border border-border shadow-elevation p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Training Impact</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-text-secondary text-sm">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-text-secondary text-sm">Certification Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-text-secondary text-sm">Career Advancement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <div className="text-text-secondary text-sm">Organizations Served</div>
                </div>
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="bg-card rounded-2xl border border-border shadow-elevation p-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">Career Outcomes</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Promoted within 6 months</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-border rounded-full h-2">
                      <div className="bg-success h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-sm font-medium text-success">80%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Salary increase achieved</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-border rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                    <span className="text-sm font-medium text-primary">75%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Leading DHIS2 projects</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-border rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-4/5"></div>
                    </div>
                    <span className="text-sm font-medium text-accent">85%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-dhis2-purple rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-white/90 mb-6">
                Join hundreds of Chilean health professionals who have advanced their careers through our DHIS2 certification programs.
              </p>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors duration-300 font-cta">
                <Icon name="ArrowRight" size={16} />
                <span>Start Your Journey</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;