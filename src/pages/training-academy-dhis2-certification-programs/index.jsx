import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CertificationPathways from './components/CertificationPathways';
import LearningPlatform from './components/LearningPlatform';
import InstructorProfiles from './components/InstructorProfiles';
import StudentTestimonials from './components/StudentTestimonials';
import CorporateTraining from './components/CorporateTraining';
import ResourceLibrary from './components/ResourceLibrary';
import CommunityForum from './components/CommunityForum';

const TrainingAcademyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CertificationPathways />
        <LearningPlatform />
        <InstructorProfiles />
        <StudentTestimonials />
        <CorporateTraining />
        <ResourceLibrary />
        <CommunityForum />
      </main>
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-dhis2-purple rounded-lg">
                  <span className="text-white font-bold text-sm">DS</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">DHIS2 Solutions</h3>
                  <p className="text-sm text-secondary-foreground/80">Chile</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 text-sm">
                Leading DHIS2 implementation and training partner in Chile, empowering health organizations with world-class expertise.
              </p>
            </div>

            {/* Training Programs */}
            <div>
              <h4 className="font-semibold mb-4">Training Programs</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Foundation Level</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Implementation Specialist</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">System Administrator</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Corporate Training</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Resource Library</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Community Forum</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Training Videos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Certification Guide</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Santiago, Chile</li>
                <li>+56 2 2345 6789</li>
                <li>training@dhis2solutions.cl</li>
                <li>
                  <div className="flex space-x-3 mt-4">
                    <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {new Date()?.getFullYear()} DHIS2 Solutions Chile. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrainingAcademyPage;