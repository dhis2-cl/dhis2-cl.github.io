import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const FeaturedCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('challenge');

  const tabs = [
    { id: 'challenge', label: 'Challenge', icon: 'AlertTriangle' },
    { id: 'approach', label: 'Technical Approach', icon: 'Settings' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'outcomes', label: 'Outcomes', icon: 'TrendingUp' }
  ];

  const tabContent = {
    challenge: {
      title: "Rural Maternal Health Crisis",
      content: `Chilean rural clinics faced critical challenges in maternal health monitoring:\n\n• 40% data loss due to connectivity issues\n• Manual paper-based tracking causing delays\n• No indigenous language support (Mapuche/Quechua)\n• Limited mobile device compatibility\n• Complex pregnancy risk assessment protocols`,
      metrics: [
        { label: "Data Loss Rate", value: "40%", trend: "negative" },
        { label: "Manual Processes", value: "85%", trend: "negative" },
        { label: "Language Barriers", value: "60%", trend: "negative" }
      ]
    },
    approach: {
      title: "Innovative Technical Solution",
      content: `Our comprehensive approach addressed each challenge systematically:\n\n• Offline-first architecture with smart synchronization\n• Progressive Web App for cross-device compatibility\n• Multi-language support with cultural adaptations\n• Automated risk scoring algorithms\n• Real-time notification system for high-risk cases`,
      metrics: [
        { label: "Offline Capability", value: "100%", trend: "positive" },
        { label: "Device Support", value: "95%", trend: "positive" },
        { label: "Language Coverage", value: "3", trend: "positive" }
      ]
    },
    architecture: {
      title: "Robust System Architecture",
      content: `Built on DHIS2's flexible platform with custom enhancements:\n\n• Custom tracker program with 15 data elements\n• Android app with offline synchronization\n• Web dashboard with real-time analytics\n• SMS gateway integration for alerts\n• Blockchain pilot for data integrity verification`,
      metrics: [
        { label: "API Endpoints", value: "25", trend: "positive" },
        { label: "Data Elements", value: "15", trend: "positive" },
        { label: "Sync Efficiency", value: "98%", trend: "positive" }
      ]
    },
    outcomes: {
      title: "Measurable Health Impact",
      content: `Transformative results achieved within 6 months of deployment:\n\n• 99.2% data completeness across all facilities\n• 60% reduction in data entry time\n• 45% improvement in high-risk case identification\n• 100% user adoption rate\n• Zero data loss incidents since implementation`,
      metrics: [
        { label: "Data Completeness", value: "99.2%", trend: "positive" },
        { label: "Time Reduction", value: "60%", trend: "positive" },
        { label: "User Adoption", value: "100%", trend: "positive" }
      ]
    }
  };

  const currentContent = tabContent?.[activeTab];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
              <Icon name="Award" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Award-Winning Solution
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Maternal Health Tracker for Rural Clinics
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our flagship custom development project that revolutionized maternal health monitoring 
            across 50+ rural clinics in Chile's most remote regions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-2xl shadow-clinical-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=800&fit=crop"
                  alt="Rural clinic healthcare worker using DHIS2 maternal health tracker on tablet"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon name="MapPin" size={16} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-foreground">Región de La Araucanía</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Deployed across 50+ rural health facilities
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-success mb-1">6 months</div>
                  <div className="text-sm text-muted-foreground">Development Time</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-2xl font-bold text-primary mb-1">3 languages</div>
                  <div className="text-sm text-muted-foreground">Supported</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-muted rounded-lg">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-card text-foreground shadow-clinical'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span className="hidden sm:inline">{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-clinical">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {currentContent?.title}
              </h3>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="prose prose-gray max-w-none">
                    {currentContent?.content?.split('\n')?.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {currentContent?.metrics?.map((metric, index) => (
                    <div key={index} className="bg-surface rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          {metric?.label}
                        </span>
                        <Icon 
                          name={metric?.trend === 'positive' ? 'TrendingUp' : 'TrendingDown'} 
                          size={16} 
                          color={metric?.trend === 'positive' ? 'var(--color-success)' : 'var(--color-error)'}
                        />
                      </div>
                      <div className={`text-2xl font-bold ${
                        metric?.trend === 'positive' ? 'text-success' : 'text-error'
                      }`}>
                        {metric?.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                variant="default" 
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                className="bg-primary hover:bg-primary/90"
              >
                View Live Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Github"
                iconPosition="left"
              >
                Explore Code Repository
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                iconName="FileText"
                iconPosition="left"
              >
                Technical Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;