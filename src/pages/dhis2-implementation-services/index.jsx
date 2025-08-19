import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ImplementationTimeline from './components/ImplementationTimeline';
import ChileChallenges from './components/ChileChallenges';
import ReadinessAssessment from './components/ReadinessAssessment';
import ServiceTiers from './components/ServiceTiers';
import ClientTestimonials from './components/ClientTestimonials';
import FAQ from './components/FAQ';
import ConsultationBooking from './components/ConsultationBooking';

const DHIS2ImplementationServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Icon name="Award" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Chile's Leading DHIS2 Implementation Partner
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              DHIS2 Implementation
              <span className="block text-primary">Services in Chile</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your health data management with our proven DHIS2 implementation methodology. 
              We navigate Chilean healthcare complexities, ensuring seamless integration with FONASA, 
              MINSAL compliance, and regional health network requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                iconName="Calendar" 
                iconPosition="left"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download" 
                iconPosition="left"
              >
                Download Implementation Guide
              </Button>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Successful Implementations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} className="text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">On-time Delivery</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">MINSAL Compliance</div>
            </div>
          </div>
        </div>
      </section>
      {/* Implementation Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImplementationTimeline />
        </div>
      </section>
      {/* Chile-Specific Challenges */}
      <ChileChallenges />
      {/* Readiness Assessment */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReadinessAssessment />
        </div>
      </section>
      {/* Service Tiers */}
      <ServiceTiers />
      {/* Client Testimonials */}
      <ClientTestimonials />
      {/* FAQ Section */}
      <FAQ />
      {/* Consultation Booking */}
      <ConsultationBooking />
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Icon name="Rocket" size={64} className="text-primary-foreground mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Health Data Management?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join leading Chilean health organizations who have successfully implemented DHIS2 
            with our expert guidance. Start your transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              iconName="Phone" 
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Call +56 2 XXXX XXXX
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Mail" 
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Email Our Experts
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Icon name="Activity" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-lg font-bold text-foreground">DHIS2 Chile</div>
                  <div className="text-xs text-muted-foreground">Health Data Excellence</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Chile's premier DHIS2 implementation partner, transforming health data systems 
                across the country with expert-guided solutions.
              </p>
              <div className="flex space-x-4">
                <Icon name="Mail" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="Phone" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="MapPin" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">DHIS2 Implementation</li>
                <li className="hover:text-primary cursor-pointer">Custom Development</li>
                <li className="hover:text-primary cursor-pointer">System Integration</li>
                <li className="hover:text-primary cursor-pointer">Training & Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Santiago, Chile</li>
                <li>+56 2 XXXX XXXX</li>
                <li>info@dhis2chile.cl</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date()?.getFullYear()} DHIS2 Chile. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DHIS2ImplementationServices;