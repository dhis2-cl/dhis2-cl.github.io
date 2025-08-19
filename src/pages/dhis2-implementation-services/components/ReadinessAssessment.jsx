import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';


const ReadinessAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    organizationType: '',
    currentSystem: '',
    userCount: '',
    dataVolume: '',
    budget: '',
    timeline: '',
    technicalTeam: '',
    compliance: ''
  });
  const [showResults, setShowResults] = useState(false);

  const organizationOptions = [
    { value: 'hospital', label: 'Hospital/Health Network' },
    { value: 'ministry', label: 'Ministry/Government Agency' },
    { value: 'ngo', label: 'NGO/International Organization' },
    { value: 'research', label: 'Research Institution' },
    { value: 'private', label: 'Private Healthcare Provider' }
  ];

  const systemOptions = [
    { value: 'none', label: 'No existing system' },
    { value: 'excel', label: 'Excel/Spreadsheet based' },
    { value: 'legacy', label: 'Legacy health information system' },
    { value: 'multiple', label: 'Multiple disconnected systems' },
    { value: 'modern', label: 'Modern HIS (non-DHIS2)' }
  ];

  const userCountOptions = [
    { value: '1-10', label: '1-10 users' },
    { value: '11-50', label: '11-50 users' },
    { value: '51-200', label: '51-200 users' },
    { value: '201-500', label: '201-500 users' },
    { value: '500+', label: '500+ users' }
  ];

  const dataVolumeOptions = [
    { value: 'low', label: 'Low (< 1GB monthly)' },
    { value: 'medium', label: 'Medium (1-10GB monthly)' },
    { value: 'high', label: 'High (10-100GB monthly)' },
    { value: 'very-high', label: 'Very High (> 100GB monthly)' }
  ];

  const budgetOptions = [
    { value: '0-50', label: 'CLP $0 - $50M' },
    { value: '50-150', label: 'CLP $50M - $150M' },
    { value: '150-300', label: 'CLP $150M - $300M' },
    { value: '300+', label: 'CLP $300M+' }
  ];

  const timelineOptions = [
    { value: '3-6', label: '3-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12-18', label: '12-18 months' },
    { value: '18+', label: '18+ months' }
  ];

  const technicalOptions = [
    { value: 'none', label: 'No dedicated IT team' },
    { value: 'basic', label: 'Basic IT support (1-2 people)' },
    { value: 'moderate', label: 'Moderate IT team (3-5 people)' },
    { value: 'advanced', label: 'Advanced IT team (5+ people)' }
  ];

  const complianceOptions = [
    { value: 'basic', label: 'Basic compliance awareness' },
    { value: 'moderate', label: 'Some compliance experience' },
    { value: 'advanced', label: 'Strong compliance framework' },
    { value: 'expert', label: 'Expert compliance management' }
  ];

  const handleInputChange = (field, value) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateReadiness = () => {
    let score = 0;
    let complexity = 'Standard';
    let recommendedTier = 'Standard Implementation';
    let estimatedCost = 'CLP $50M - $150M';
    let estimatedTimeline = '6-12 months';

    // Scoring logic based on responses
    const scoring = {
      organizationType: { hospital: 3, ministry: 4, ngo: 2, research: 2, private: 3 },
      currentSystem: { none: 1, excel: 2, legacy: 4, multiple: 5, modern: 3 },
      userCount: { '1-10': 1, '11-50': 2, '51-200': 3, '201-500': 4, '500+': 5 },
      dataVolume: { low: 1, medium: 2, high: 3, 'very-high': 4 },
      technicalTeam: { none: 1, basic: 2, moderate: 3, advanced: 4 },
      compliance: { basic: 1, moderate: 2, advanced: 3, expert: 4 }
    };

    Object.keys(scoring)?.forEach(key => {
      if (assessmentData?.[key] && scoring?.[key]?.[assessmentData?.[key]]) {
        score += scoring?.[key]?.[assessmentData?.[key]];
      }
    });

    if (score >= 20) {
      complexity = 'Enterprise';
      recommendedTier = 'Enterprise Integration';
      estimatedCost = 'CLP $300M+';
      estimatedTimeline = '12-18 months';
    } else if (score >= 15) {
      complexity = 'Advanced';
      recommendedTier = 'Custom Development';
      estimatedCost = 'CLP $150M - $300M';
      estimatedTimeline = '9-15 months';
    }

    return { score, complexity, recommendedTier, estimatedCost, estimatedTimeline };
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentStep(1);
    setAssessmentData({
      organizationType: '',
      currentSystem: '',
      userCount: '',
      dataVolume: '',
      budget: '',
      timeline: '',
      technicalTeam: '',
      compliance: ''
    });
    setShowResults(false);
  };

  const results = showResults ? calculateReadiness() : null;

  if (showResults) {
    return (
      <div className="bg-surface rounded-xl p-8 shadow-clinical">
        <div className="text-center mb-8">
          <Icon name="CheckCircle" size={64} className="text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Assessment Complete
          </h3>
          <p className="text-muted-foreground">
            Based on your responses, here's your DHIS2 implementation readiness profile
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Target" size={20} className="mr-2 text-primary" />
                Readiness Score
              </h4>
              <div className="flex items-center space-x-4">
                <div className="flex-1 bg-muted rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${(results?.score / 25) * 100}%` }}
                  ></div>
                </div>
                <span className="text-2xl font-bold text-primary">
                  {results?.score}/25
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Complexity Level: <span className="font-medium text-foreground">{results?.complexity}</span>
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Layers" size={20} className="mr-2 text-secondary" />
                Recommended Service Tier
              </h4>
              <div className="bg-secondary/10 rounded-lg p-4 mb-4">
                <p className="font-medium text-secondary text-lg">
                  {results?.recommendedTier}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Icon name="Check" size={14} className="mr-2 text-success" />
                  Tailored to your complexity level
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={14} className="mr-2 text-success" />
                  Includes all necessary components
                </li>
                <li className="flex items-center">
                  <Icon name="Check" size={14} className="mr-2 text-success" />
                  Optimized for your timeline
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="DollarSign" size={20} className="mr-2 text-accent" />
                Estimated Investment
              </h4>
              <div className="text-2xl font-bold text-accent mb-2">
                {results?.estimatedCost}
              </div>
              <p className="text-sm text-muted-foreground">
                Includes implementation, training, and 6 months support
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                Estimated Timeline
              </h4>
              <div className="text-2xl font-bold text-primary mb-2">
                {results?.estimatedTimeline}
              </div>
              <p className="text-sm text-muted-foreground">
                From project kickoff to full deployment
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Icon name="Lightbulb" size={20} className="mr-2 text-primary" />
            Next Steps Recommendation
          </h4>
          <p className="text-muted-foreground mb-4">
            Based on your assessment, we recommend scheduling a detailed consultation to discuss your specific requirements and create a customized implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="default" 
              iconName="Calendar" 
              iconPosition="left"
              className="bg-primary hover:bg-primary/90"
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              iconName="Download" 
              iconPosition="left"
            >
              Download Assessment Report
            </Button>
          </div>
        </div>
        <div className="text-center">
          <Button 
            variant="ghost" 
            onClick={resetAssessment}
            iconName="RotateCcw" 
            iconPosition="left"
          >
            Take Assessment Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl p-8 shadow-clinical">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          DHIS2-Chile Readiness Assessment
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get a preliminary implementation scope estimate based on your organization's specific requirements and current infrastructure.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Select
            label="Organization Type"
            options={organizationOptions}
            value={assessmentData?.organizationType}
            onChange={(value) => handleInputChange('organizationType', value)}
            placeholder="Select your organization type"
            required
          />

          <Select
            label="Current System"
            options={systemOptions}
            value={assessmentData?.currentSystem}
            onChange={(value) => handleInputChange('currentSystem', value)}
            placeholder="Describe your current system"
            required
          />

          <Select
            label="Expected User Count"
            options={userCountOptions}
            value={assessmentData?.userCount}
            onChange={(value) => handleInputChange('userCount', value)}
            placeholder="Number of system users"
            required
          />

          <Select
            label="Data Volume"
            options={dataVolumeOptions}
            value={assessmentData?.dataVolume}
            onChange={(value) => handleInputChange('dataVolume', value)}
            placeholder="Expected data volume"
            required
          />

          <Select
            label="Budget Range"
            options={budgetOptions}
            value={assessmentData?.budget}
            onChange={(value) => handleInputChange('budget', value)}
            placeholder="Available budget"
            required
          />

          <Select
            label="Preferred Timeline"
            options={timelineOptions}
            value={assessmentData?.timeline}
            onChange={(value) => handleInputChange('timeline', value)}
            placeholder="Implementation timeline"
            required
          />

          <Select
            label="Technical Team Capacity"
            options={technicalOptions}
            value={assessmentData?.technicalTeam}
            onChange={(value) => handleInputChange('technicalTeam', value)}
            placeholder="Your IT team size"
            required
          />

          <Select
            label="Compliance Experience"
            options={complianceOptions}
            value={assessmentData?.compliance}
            onChange={(value) => handleInputChange('compliance', value)}
            placeholder="Regulatory compliance level"
            required
          />
        </div>

        <div className="text-center">
          <Button 
            variant="default" 
            size="lg"
            onClick={handleSubmit}
            disabled={Object.values(assessmentData)?.some(value => !value)}
            iconName="ArrowRight" 
            iconPosition="right"
            className="bg-primary hover:bg-primary/90"
          >
            Get My Assessment Results
          </Button>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            This assessment provides preliminary estimates. Final scope and pricing will be determined during detailed consultation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadinessAssessment;