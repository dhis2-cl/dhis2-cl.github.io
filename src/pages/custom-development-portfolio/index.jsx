import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedCaseStudy from './components/FeaturedCaseStudy';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import CodeRepository from './components/CodeRepository';
import InnovationLab from './components/InnovationLab';
import ClientTestimonials from './components/ClientTestimonials';
import TechnicalConsultation from './components/TechnicalConsultation';

const CustomDevelopmentPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedCaseStudy />
        <TechnicalCapabilities />
        <CodeRepository />
        <InnovationLab />
        <ClientTestimonials />
        <TechnicalConsultation />
      </main>
    </div>
  );
};

export default CustomDevelopmentPortfolio;