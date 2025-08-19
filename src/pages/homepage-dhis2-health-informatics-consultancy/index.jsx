import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import InteractiveMap from './components/InteractiveMap';
import ServicesOverview from './components/ServicesOverview';
import TestimonialCarousel from './components/TestimonialCarousel';
import KnowledgeCenterPreview from './components/KnowledgeCenterPreview';
import PartnershipBadges from './components/PartnershipBadges';
import ConsultationWidget from './components/ConsultationWidget';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>DHIS2 Solutions Chile - Transforming Health Data into Health Outcomes</title>
        <meta name="description" content="Chile's leading DHIS2 implementation partner. Expert health informatics consultancy specializing in DHIS2 implementation, custom development, and training for government agencies and healthcare organizations." />
        <meta name="keywords" content="DHIS2, health informatics, Chile, implementation, health data, digital health, consultancy, training, support" />
        <meta property="og:title" content="DHIS2 Solutions Chile - Health Informatics Consultancy" />
        <meta property="og:description" content="Transforming health data into health outcomes through expert DHIS2 implementation and support services in Chile." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-dhis2-health-informatics-consultancy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <InteractiveMap />
          <ServicesOverview />
          <TestimonialCarousel />
          <KnowledgeCenterPreview />
          <PartnershipBadges />
        </main>

        <ConsultationWidget />
      </div>
    </>
  );
};

export default Homepage;