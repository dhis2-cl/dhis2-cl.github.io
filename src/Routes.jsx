import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import Homepage from './pages/homepage-dhis2-health-informatics-consultancy';
import DHIS2ImplementationServices from './pages/dhis2-implementation-services';
import CustomDevelopmentPortfolio from './pages/custom-development-portfolio';
import TrainingAcademyPage from './pages/training-academy-dhis2-certification-programs';
import KnowledgeCenterPage from './pages/knowledge-center-dhis2-expertise-hub';
import AboutUsPage from './pages/about-us-chilean-health-tech-pioneers';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/homepage-dhis2-health-informatics-consultancy" element={<Homepage />} />
        <Route path="/dhis2-implementation-services" element={<DHIS2ImplementationServices />} />
        <Route path="/custom-development-portfolio" element={<CustomDevelopmentPortfolio />} />
        <Route path="/training-academy-dhis2-certification-programs" element={<TrainingAcademyPage />} />
        <Route path="/knowledge-center-dhis2-expertise-hub" element={<KnowledgeCenterPage />} />
        <Route path="/about-us-chilean-health-tech-pioneers" element={<AboutUsPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
