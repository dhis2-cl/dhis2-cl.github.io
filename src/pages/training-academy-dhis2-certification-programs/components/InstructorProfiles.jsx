import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InstructorProfiles = () => {
  const instructors = [
    {
      id: 1,
      name: "Dr. María Elena Rodríguez",
      title: "Lead DHIS2 Trainer & Implementation Specialist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      experience: "12 years",
      certifications: ["DHIS2 Core Team Certified", "WHO Digital Health Expert", "Chilean Ministry of Health Advisor"],
      specializations: ["Health System Strengthening", "Data Quality Assurance", "Training Program Development"],
      bio: `Dr. Rodríguez has led over 50 DHIS2 implementations across Chile and Latin America. She specializes in adapting DHIS2 to local health system requirements and has trained over 1,000 health professionals.`,
      achievements: [
        "Led Chile\'s national DHIS2 rollout",
        "Developed Spanish DHIS2 curriculum",
        "Published 15+ research papers on health informatics"
      ],
      languages: ["Spanish (Native)", "English (Fluent)", "Portuguese (Conversational)"]
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      title: "Senior Technical Trainer & System Architect",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      experience: "8 years",
      certifications: ["DHIS2 Core Developer", "AWS Solutions Architect", "Scrum Master"],
      specializations: ["System Architecture", "API Integration", "Performance Optimization"],
      bio: `Carlos brings deep technical expertise from his background in software development and system architecture. He has designed and implemented complex DHIS2 integrations for major Chilean health organizations.`,
      achievements: [
        "Architected Chile\'s largest DHIS2 deployment",
        "Created advanced integration frameworks",
        "Mentored 200+ technical professionals"
      ],
      languages: ["Spanish (Native)", "English (Fluent)"]
    },
    {
      id: 3,
      name: "Ana Patricia Silva",
      title: "Health Data Analytics Trainer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      experience: "10 years",
      certifications: ["DHIS2 Analytics Expert", "Public Health MPH", "Data Science Certificate"],
      specializations: ["Data Visualization", "Epidemiological Analysis", "Dashboard Design"],
      bio: `Ana combines public health expertise with advanced analytics skills to help organizations transform raw health data into actionable insights. She has designed analytics frameworks for multiple Chilean health regions.`,
      achievements: [
        "Designed national health dashboards",
        "Trained 500+ data analysts",
        "Improved data quality by 40% across implementations"
      ],
      languages: ["Spanish (Native)", "English (Advanced)", "French (Basic)"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Expert Instructors
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Learn from certified DHIS2 experts with extensive Chilean implementation experience
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {instructors?.map((instructor) => (
            <div key={instructor?.id} className="bg-card rounded-2xl border border-border shadow-elevation hover:shadow-elevation-lg transition-all duration-300 overflow-hidden">
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-primary/5 to-dhis2-purple/5 border-b border-border">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <Image
                      src={instructor?.avatar}
                      alt={instructor?.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-elevation-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-white flex items-center justify-center">
                      <Icon name="Check" size={12} color="white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {instructor?.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-2">
                      {instructor?.title}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={12} />
                        <span>{instructor?.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Award" size={12} />
                        <span>{instructor?.certifications?.length} Certs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Bio */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {instructor?.bio}
                </p>

                {/* Specializations */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor?.specializations?.map((spec, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">Key Achievements</h4>
                  <div className="space-y-2">
                    {instructor?.achievements?.slice(0, 2)?.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={12} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor?.languages?.map((language, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-text-secondary text-xs rounded"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">Certifications</h4>
                  <div className="space-y-2">
                    {instructor?.certifications?.slice(0, 2)?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Award" size={12} color="var(--color-accent)" />
                        <span className="text-text-secondary text-xs">{cert}</span>
                      </div>
                    ))}
                    {instructor?.certifications?.length > 2 && (
                      <div className="text-xs text-primary font-medium">
                        +{instructor?.certifications?.length - 2} more certifications
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-dhis2-purple/5 rounded-2xl border border-primary/20 p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Learn from the Best
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our instructors bring real-world experience from successful DHIS2 implementations across Chile and Latin America. Get personalized guidance and mentorship throughout your learning journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-cta">
                <Icon name="MessageCircle" size={16} />
                <span>Meet Our Instructors</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-300 font-cta">
                <Icon name="Calendar" size={16} />
                <span>Schedule 1-on-1 Session</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfiles;