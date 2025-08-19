import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-dhis2-purple to-primary/80 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-glass">
                  <Icon name="GraduationCap" size={24} color="white" />
                </div>
                <span className="text-white/80 font-medium">DHIS2 Training Academy</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master DHIS2 with
                <span className="block text-accent font-accent"> Certified Training</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Advance your career with comprehensive DHIS2 certification programs designed for Chilean healthcare professionals. From foundation concepts to advanced implementation strategies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Certified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Learning Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90 font-cta"
              >
                Browse Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10 font-cta"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-glass rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Learning Dashboard</h3>
                  <Icon name="TrendingUp" size={20} color="white" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Foundation Level</span>
                    <span className="text-sm text-accent">Completed</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Implementation Specialist</span>
                    <span className="text-sm text-white/80">In Progress</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">System Administrator</span>
                    <span className="text-sm text-white/60">Locked</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white/40 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;