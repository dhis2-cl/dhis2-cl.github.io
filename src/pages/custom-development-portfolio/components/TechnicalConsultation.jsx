import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const TechnicalConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    consultationType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    technicalRequirements: '',
    currentSystem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const consultationTypes = [
    { value: 'architecture-review', label: 'Architecture Review & Assessment' },
    { value: 'code-audit', label: 'Code Audit & Security Review' },
    { value: 'custom-development', label: 'Custom Development Scoping' },
    { value: 'integration-planning', label: 'System Integration Planning' },
    { value: 'performance-optimization', label: 'Performance Optimization' },
    { value: 'migration-strategy', label: 'Migration Strategy Consultation' }
  ];

  const roleOptions = [
    { value: 'cto', label: 'Chief Technology Officer' },
    { value: 'technical-director', label: 'Technical Director' },
    { value: 'it-manager', label: 'IT Manager' },
    { value: 'system-architect', label: 'System Architect' },
    { value: 'project-manager', label: 'Project Manager' },
    { value: 'health-informatics', label: 'Health Informatics Specialist' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 2 weeks)' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '1-year', label: '1 Year+' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetOptions = [
    { value: 'under-50k', label: 'Under $50,000 USD' },
    { value: '50k-100k', label: '$50,000 - $100,000 USD' },
    { value: '100k-250k', label: '$100,000 - $250,000 USD' },
    { value: '250k-500k', label: '$250,000 - $500,000 USD' },
    { value: 'over-500k', label: 'Over $500,000 USD' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Technical consultation request submitted successfully! Our team will contact you within 24 hours.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      role: '',
      consultationType: '',
      projectScope: '',
      timeline: '',
      budget: '',
      technicalRequirements: '',
      currentSystem: ''
    });
  };

  const consultationFeatures = [
    {
      icon: 'Users',
      title: 'Expert Technical Team',
      description: 'Direct access to our senior DHIS2 architects and developers'
    },
    {
      icon: 'Clock',
      title: '24-Hour Response',
      description: 'Guaranteed response within 24 hours for all consultation requests'
    },
    {
      icon: 'Shield',
      title: 'Confidential & Secure',
      description: 'All discussions covered by comprehensive NDAs and security protocols'
    },
    {
      icon: 'FileText',
      title: 'Detailed Assessment',
      description: 'Comprehensive technical reports with actionable recommendations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-clinical rounded-lg">
              <Icon name="UserCheck" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-clinical">
              Technical Consultation
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Schedule Your Technical Consultation
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect directly with our technical experts for architecture reviews, code audits, 
            and custom development scoping sessions tailored to your DHIS2 needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Consultation Features */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What You Get
              </h3>
              
              <div className="space-y-6">
                {consultationFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon name={feature?.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">
                        {feature?.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-4">
                  Direct Contact
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} color="var(--color-primary)" />
                    <span className="text-sm text-muted-foreground">
                      technical@dhis2chile.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} color="var(--color-primary)" />
                    <span className="text-sm text-muted-foreground">
                      +56 2 2345 6789
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={16} color="var(--color-primary)" />
                    <span className="text-sm text-muted-foreground">
                      Santiago, Chile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border shadow-clinical p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@organization.com"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Organization"
                    type="text"
                    placeholder="Your organization name"
                    value={formData?.organization}
                    onChange={(e) => handleInputChange('organization', e?.target?.value)}
                    required
                  />
                  
                  <Select
                    label="Your Role"
                    placeholder="Select your role"
                    options={roleOptions}
                    value={formData?.role}
                    onChange={(value) => handleInputChange('role', value)}
                    required
                  />
                </div>

                {/* Consultation Details */}
                <Select
                  label="Consultation Type"
                  placeholder="Select consultation type"
                  options={consultationTypes}
                  value={formData?.consultationType}
                  onChange={(value) => handleInputChange('consultationType', value)}
                  required
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <Select
                    label="Project Timeline"
                    placeholder="Select timeline"
                    options={timelineOptions}
                    value={formData?.timeline}
                    onChange={(value) => handleInputChange('timeline', value)}
                    required
                  />
                  
                  <Select
                    label="Budget Range"
                    placeholder="Select budget range"
                    options={budgetOptions}
                    value={formData?.budget}
                    onChange={(value) => handleInputChange('budget', value)}
                    required
                  />
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground">
                    Project Scope & Objectives
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={4}
                    placeholder="Describe your project scope, objectives, and key requirements..."
                    value={formData?.projectScope}
                    onChange={(e) => handleInputChange('projectScope', e?.target?.value)}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground">
                    Current System & Technical Requirements
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={4}
                    placeholder="Describe your current DHIS2 setup, technical challenges, and specific requirements..."
                    value={formData?.currentSystem}
                    onChange={(e) => handleInputChange('currentSystem', e?.target?.value)}
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-foreground">
                    Additional Technical Requirements
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={3}
                    placeholder="Any specific technical requirements, integrations, or constraints..."
                    value={formData?.technicalRequirements}
                    onChange={(e) => handleInputChange('technicalRequirements', e?.target?.value)}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                    fullWidth
                    className="bg-clinical hover:bg-clinical/90"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Schedule Technical Consultation'}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Our technical team will review your request and contact you within 24 hours 
                    to schedule your consultation session.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalConsultation;