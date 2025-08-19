import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CategoryFilter from './components/CategoryFilter';
import FeaturedArticles from './components/FeaturedArticles';
import TechnicalDocumentation from './components/TechnicalDocumentation';
import WebinarSection from './components/WebinarSection';
import CommunityForum from './components/CommunityForum';
import NewsletterSection from './components/NewsletterSection';

const KnowledgeCenterPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleSearch = () => {
    if (searchQuery?.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality here
    }
  };

  const pageContent = {
    en: {
      title: "Knowledge Center - DHIS2 Expertise Hub | DHIS2 Solutions Chile",
      description: "Access comprehensive DHIS2 implementation guides, technical documentation, and best practices tailored for Chilean healthcare systems. Expert resources for successful health informatics projects.",
      keywords: "DHIS2 knowledge center, implementation guides, technical documentation, Chilean healthcare, health informatics, DHIS2 best practices, system integration, data validation"
    },
    es: {
      title: "Centro de Conocimiento - Hub de Experiencia DHIS2 | DHIS2 Solutions Chile",
      description: "Accede a guías completas de implementación DHIS2, documentación técnica y mejores prácticas adaptadas para sistemas de salud chilenos. Recursos expertos para proyectos exitosos de informática de salud.",
      keywords: "centro conocimiento DHIS2, guías implementación, documentación técnica, salud chilena, informática salud, mejores prácticas DHIS2, integración sistemas, validación datos"
    }
  };

  const content = pageContent?.[currentLanguage];

  return (
    <>
      <Helmet>
        <title>{content?.title}</title>
        <meta name="description" content={content?.description} />
        <meta name="keywords" content={content?.keywords} />
        <meta property="og:title" content={content?.title} />
        <meta property="og:description" content={content?.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dhis2solutions.cl/knowledge-center-dhis2-expertise-hub" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content?.title} />
        <meta name="twitter:description" content={content?.description} />
        <link rel="canonical" href="https://dhis2solutions.cl/knowledge-center-dhis2-expertise-hub" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content={currentLanguage} />
        <meta name="geo.region" content="CL" />
        <meta name="geo.country" content="Chile" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection 
            currentLanguage={currentLanguage}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          
          <CategoryFilter 
            currentLanguage={currentLanguage}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <FeaturedArticles currentLanguage={currentLanguage} />
          
          <TechnicalDocumentation currentLanguage={currentLanguage} />
          
          <WebinarSection currentLanguage={currentLanguage} />
          
          <CommunityForum currentLanguage={currentLanguage} />
          
          <NewsletterSection currentLanguage={currentLanguage} />
        </main>
      </div>
    </>
  );
};

export default KnowledgeCenterPage;