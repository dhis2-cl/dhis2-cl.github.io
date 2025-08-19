import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-lg -rotate-6"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-white/20 rounded-lg -rotate-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg">
                <Icon name="Code2" size={24} color="white" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Technical Excellence
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Custom DHIS2 Development
              <span className="block text-accent mt-2">Portfolio</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Showcasing our technical mastery through innovative DHIS2 solutions that transform health data systems across Chile. From complex tracker programs to cutting-edge integrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="default" 
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                View Live Demos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Download Portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-white/80">Custom Modules</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">200+</div>
                <div className="text-sm text-white/80">Health Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">99.2%</div>
                <div className="text-sm text-white/80">Data Completeness</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-white/60 text-sm">DHIS2 Custom Module</span>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400 mb-2">// Maternal Health Tracker</div>
                  <div className="text-white/80 mb-1">
                    <span className="text-blue-400">const</span> tracker = {'{'}
                  </div>
                  <div className="text-white/80 ml-4 mb-1">
                    <span className="text-yellow-400">program:</span> <span className="text-green-300">"maternal_health"</span>,
                  </div>
                  <div className="text-white/80 ml-4 mb-1">
                    <span className="text-yellow-400">offline:</span> <span className="text-blue-300">true</span>,
                  </div>
                  <div className="text-white/80 ml-4 mb-1">
                    <span className="text-yellow-400">languages:</span> <span className="text-green-300">["es", "qu"]</span>
                  </div>
                  <div className="text-white/80">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-lg flex items-center justify-center shadow-lg animate-pulse-health">
              <Icon name="Smartphone" size={24} color="white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="Database" size={20} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;