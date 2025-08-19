import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Organization Info
    organizationName: '',
    organizationType: '',
    contactName: '',
    contactTitle: '',
    email: '',
    phone: '',
    
    // Step 2: Project Details
    currentSystem: '',
    projectScope: '',
    userCount: '',
    timeline: '',
    budget: '',
    
    // Step 3: Requirements
    integrationNeeds: [],
    complianceRequirements: [],
    trainingNeeds: '',
    supportLevel: '',
    
    // Step 4: Preferences
    preferredMeetingType: '',
    preferredTime: '',
    urgency: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const organizationTypes = [
    { value: 'hospital', label: 'Hospital/Health Network' },
    { value: 'ministry', label: 'Ministry/Government Agency' },
    { value: 'ngo', label: 'NGO/International Organization' },
    { value: 'research', label: 'Research Institution' },
    { value: 'private', label: 'Private Healthcare Provider' },
    { value: 'other', label: 'Other' }
  ];

  const systemOptions = [
    { value: 'none', label: 'No existing system' },
    { value: 'excel', label: 'Excel/Spreadsheet based' },
    { value: 'legacy', label: 'Legacy health information system' },
    { value: 'multiple', label: 'Multiple disconnected systems' },
    { value: 'modern', label: 'Modern HIS (non-DHIS2)' },
    { value: 'dhis2', label: 'Existing DHIS2 (upgrade/migration)' }
  ];

  const scopeOptions = [
    { value: 'new', label: 'New DHIS2 implementation' },
    { value: 'migration', label: 'Migration from existing system' },
    { value: 'upgrade', label: 'DHIS2 upgrade/enhancement' },
    { value: 'integration', label: 'System integration project' },
    { value: 'custom', label: 'Custom development' },
    { value: 'consulting', label: 'Consulting/assessment only' }
  ];

  const userCountOptions = [
    { value: '1-10', label: '1-10 users' },
    { value: '11-50', label: '11-50 users' },
    { value: '51-200', label: '51-200 users' },
    { value: '201-500', label: '201-500 users' },
    { value: '500+', label: '500+ users' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (within 3 months)' },
    { value: '3-6', label: '3-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12+', label: '12+ months' },
    { value: 'planning', label: 'Still in planning phase' }
  ];

  const budgetOptions = [
    { value: '0-50', label: 'CLP $0 - $50M' },
    { value: '50-150', label: 'CLP $50M - $150M' },
    { value: '150-300', label: 'CLP $150M - $300M' },
    { value: '300+', label: 'CLP $300M+' },
    { value: 'tbd', label: 'To be determined' }
  ];

  const integrationOptions = [
    { value: 'fonasa', label: 'FONASA system integration' },
    { value: 'his', label: 'Hospital Information System' },
    { value: 'lis', label: 'Laboratory Information System' },
    { value: 'ehr', label: 'Electronic Health Records' },
    { value: 'pharmacy', label: 'Pharmacy Management System' },
    { value: 'billing', label: 'Billing/Financial System' },
    { value: 'mobile', label: 'Mobile applications' },
    { value: 'other', label: 'Other systems' }
  ];

  const complianceOptions = [
    { value: 'minsal', label: 'MINSAL reporting compliance' },
    { value: 'data-protection', label: 'Chilean data protection laws' },
    { value: 'international', label: 'International standards (WHO, etc.)' },
    { value: 'audit', label: 'Audit trail requirements' },
    { value: 'security', label: 'Advanced security requirements' }
  ];

  const trainingOptions = [
    { value: 'basic', label: 'Basic user training' },
    { value: 'advanced', label: 'Advanced administrator training' },
    { value: 'train-trainer', label: 'Train-the-trainer program' },
    { value: 'custom', label: 'Custom training program' },
    { value: 'ongoing', label: 'Ongoing training support' }
  ];

  const supportOptions = [
    { value: 'basic', label: 'Basic support (email, business hours)' },
    { value: 'standard', label: 'Standard support (phone + email)' },
    { value: 'premium', label: 'Premium support (24/7)' },
    { value: 'dedicated', label: 'Dedicated account manager' }
  ];

  const meetingTypeOptions = [
    { value: 'video', label: 'Video conference' },
    { value: 'phone', label: 'Phone call' },
    { value: 'in-person', label: 'In-person meeting (Santiago)' },
    { value: 'on-site', label: 'On-site visit' }
  ];

  const timePreferenceOptions = [
    { value: 'morning', label: 'Morning (9:00 - 12:00)' },
    { value: 'afternoon', label: 'Afternoon (14:00 - 17:00)' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const urgencyOptions = [
    { value: 'high', label: 'High - Need to start immediately' },
    { value: 'medium', label: 'Medium - Within next month' },
    { value: 'low', label: 'Low - Exploring options' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleCheckboxChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev?.[field], value]
        : prev?.[field]?.filter(item => item !== value)
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData?.organizationName) newErrors.organizationName = 'Organization name is required';
        if (!formData?.organizationType) newErrors.organizationType = 'Organization type is required';
        if (!formData?.contactName) newErrors.contactName = 'Contact name is required';
        if (!formData?.email) newErrors.email = 'Email is required';
        if (!formData?.phone) newErrors.phone = 'Phone number is required';
        break;
      case 2:
        if (!formData?.currentSystem) newErrors.currentSystem = 'Current system information is required';
        if (!formData?.projectScope) newErrors.projectScope = 'Project scope is required';
        if (!formData?.userCount) newErrors.userCount = 'User count is required';
        if (!formData?.timeline) newErrors.timeline = 'Timeline is required';
        break;
      case 3:
        if (!formData?.trainingNeeds) newErrors.trainingNeeds = 'Training needs are required';
        if (!formData?.supportLevel) newErrors.supportLevel = 'Support level is required';
        break;
      case 4:
        if (!formData?.preferredMeetingType) newErrors.preferredMeetingType = 'Meeting type is required';
        if (!formData?.urgency) newErrors.urgency = 'Urgency level is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setCurrentStep(5); // Success step
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Organization Information
        </h3>
        <p className="text-muted-foreground">
          Tell us about your organization and primary contact
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Organization Name"
          type="text"
          value={formData?.organizationName}
          onChange={(e) => handleInputChange('organizationName', e?.target?.value)}
          error={errors?.organizationName}
          placeholder="Enter organization name"
          required
        />

        <Select
          label="Organization Type"
          options={organizationTypes}
          value={formData?.organizationType}
          onChange={(value) => handleInputChange('organizationType', value)}
          error={errors?.organizationType}
          placeholder="Select organization type"
          required
        />

        <Input
          label="Contact Name"
          type="text"
          value={formData?.contactName}
          onChange={(e) => handleInputChange('contactName', e?.target?.value)}
          error={errors?.contactName}
          placeholder="Your full name"
          required
        />

        <Input
          label="Contact Title"
          type="text"
          value={formData?.contactTitle}
          onChange={(e) => handleInputChange('contactTitle', e?.target?.value)}
          placeholder="Your job title"
        />

        <Input
          label="Email Address"
          type="email"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          placeholder="your.email@organization.cl"
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
          error={errors?.phone}
          placeholder="+56 9 XXXX XXXX"
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Project Details
        </h3>
        <p className="text-muted-foreground">
          Help us understand your project scope and requirements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          label="Current System"
          options={systemOptions}
          value={formData?.currentSystem}
          onChange={(value) => handleInputChange('currentSystem', value)}
          error={errors?.currentSystem}
          placeholder="Describe your current system"
          required
        />

        <Select
          label="Project Scope"
          options={scopeOptions}
          value={formData?.projectScope}
          onChange={(value) => handleInputChange('projectScope', value)}
          error={errors?.projectScope}
          placeholder="What type of project?"
          required
        />

        <Select
          label="Expected User Count"
          options={userCountOptions}
          value={formData?.userCount}
          onChange={(value) => handleInputChange('userCount', value)}
          error={errors?.userCount}
          placeholder="Number of system users"
          required
        />

        <Select
          label="Preferred Timeline"
          options={timelineOptions}
          value={formData?.timeline}
          onChange={(value) => handleInputChange('timeline', value)}
          error={errors?.timeline}
          placeholder="When do you want to start?"
          required
        />

        <Select
          label="Budget Range"
          options={budgetOptions}
          value={formData?.budget}
          onChange={(value) => handleInputChange('budget', value)}
          placeholder="Estimated budget (optional)"
          className="md:col-span-2"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Technical Requirements
        </h3>
        <p className="text-muted-foreground">
          Specify your integration, compliance, and support needs
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Integration Requirements (select all that apply)
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {integrationOptions?.map((option) => (
              <Checkbox
                key={option?.value}
                label={option?.label}
                checked={formData?.integrationNeeds?.includes(option?.value)}
                onChange={(e) => handleCheckboxChange('integrationNeeds', option?.value, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Compliance Requirements (select all that apply)
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {complianceOptions?.map((option) => (
              <Checkbox
                key={option?.value}
                label={option?.label}
                checked={formData?.complianceRequirements?.includes(option?.value)}
                onChange={(e) => handleCheckboxChange('complianceRequirements', option?.value, e?.target?.checked)}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Select
            label="Training Needs"
            options={trainingOptions}
            value={formData?.trainingNeeds}
            onChange={(value) => handleInputChange('trainingNeeds', value)}
            error={errors?.trainingNeeds}
            placeholder="What training do you need?"
            required
          />

          <Select
            label="Support Level"
            options={supportOptions}
            value={formData?.supportLevel}
            onChange={(value) => handleInputChange('supportLevel', value)}
            error={errors?.supportLevel}
            placeholder="Required support level"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Consultation Preferences
        </h3>
        <p className="text-muted-foreground">
          Let us know how you'd like to schedule your consultation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          label="Preferred Meeting Type"
          options={meetingTypeOptions}
          value={formData?.preferredMeetingType}
          onChange={(value) => handleInputChange('preferredMeetingType', value)}
          error={errors?.preferredMeetingType}
          placeholder="How would you like to meet?"
          required
        />

        <Select
          label="Preferred Time"
          options={timePreferenceOptions}
          value={formData?.preferredTime}
          onChange={(value) => handleInputChange('preferredTime', value)}
          placeholder="Best time for you"
        />

        <Select
          label="Urgency Level"
          options={urgencyOptions}
          value={formData?.urgency}
          onChange={(value) => handleInputChange('urgency', value)}
          error={errors?.urgency}
          placeholder="How urgent is this project?"
          required
          className="md:col-span-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Additional Notes
        </label>
        <textarea
          value={formData?.additionalNotes}
          onChange={(e) => handleInputChange('additionalNotes', e?.target?.value)}
          placeholder="Any additional information about your project, specific requirements, or questions you'd like to discuss..."
          rows={4}
          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-8">
      <Icon name="CheckCircle" size={64} className="text-success mx-auto mb-6" />
      <h3 className="text-2xl font-bold text-foreground mb-4">
        Consultation Request Submitted!
      </h3>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        Thank you for your interest in DHIS2 Chile. Our team will review your requirements and contact you within 24 hours to schedule your consultation.
      </p>
      
      <div className="bg-primary/10 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-foreground mb-3">What happens next?</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center">
            <Icon name="Clock" size={16} className="mr-2 text-primary" />
            <span>We'll contact you within 24 hours</span>
          </div>
          <div className="flex items-center justify-center">
            <Icon name="Calendar" size={16} className="mr-2 text-primary" />
            <span>Schedule a detailed consultation call</span>
          </div>
          <div className="flex items-center justify-center">
            <Icon name="FileText" size={16} className="mr-2 text-primary" />
            <span>Receive a customized proposal</span>
          </div>
        </div>
      </div>

      <Button 
        variant="default" 
        onClick={() => window.location?.reload()}
        iconName="ArrowLeft" 
        iconPosition="left"
      >
        Submit Another Request
      </Button>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-xl shadow-clinical-lg overflow-hidden">
          {currentStep <= 4 && (
            <>
              {/* Progress Bar */}
              <div className="bg-muted px-8 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Step {currentStep} of 4
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round((currentStep / 4) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                {/* Navigation */}
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    iconName="ChevronLeft"
                    iconPosition="left"
                  >
                    Previous
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      variant="default"
                      onClick={nextStep}
                      iconName="ChevronRight"
                      iconPosition="right"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      onClick={handleSubmit}
                      loading={isSubmitting}
                      iconName="Send"
                      iconPosition="right"
                      className="bg-primary hover:bg-primary/90"
                    >
                      Submit Request
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}

          {currentStep === 5 && (
            <div className="p-8">
              {renderSuccess()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;