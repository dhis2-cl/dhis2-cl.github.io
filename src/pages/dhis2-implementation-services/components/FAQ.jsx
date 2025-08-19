import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "Implementation",
      question: "How long does a typical DHIS2 implementation take in Chile?",
      answer: `Implementation timelines vary based on complexity:\n\n• Standard Implementation: 6-12 months\n• Enterprise Integration: 9-15 months\n• Custom Development: 12-18 months\n\nFactors affecting timeline include current system complexity, data migration requirements, FONASA integration needs, and user training scope. We provide detailed timeline estimates after our initial assessment.`
    },
    {
      id: 2,
      category: "Data Migration",
      question: "Can you migrate data from our existing health information systems?",
      answer: `Yes, we specialize in complex data migration from various systems:\n\n• Legacy health information systems\n• Excel-based data management\n• Multiple disconnected databases\n• Paper-based records (with digitization)\n\nOur migration process includes data mapping, validation, quality assurance, and integrity testing. We maintain 99.5% data integrity during migration and provide detailed migration reports.`
    },
    {
      id: 3,
      category: "Compliance",
      question: "How do you ensure compliance with MINSAL regulations and Chilean health data laws?",
      answer: `We have extensive experience with Chilean healthcare compliance:\n\n• MINSAL reporting standards integration\n• Chilean health data protection laws\n• FONASA system compatibility\n• Regional health network requirements\n\nOur team includes compliance specialists who stay current with regulatory changes. All implementations include built-in compliance frameworks and automated reporting to meet MINSAL requirements.`
    },
    {
      id: 4,
      category: "Training",
      question: "What training and support do you provide to our staff?",
      answer: `Comprehensive training programs tailored to your needs:\n\n• Administrator training (40-120 hours depending on tier)\n• End-user training sessions\n• Train-the-trainer programs\n• Custom training materials in Spanish\n• Ongoing support and refresher sessions\n\nTraining includes hands-on practice, documentation, and certification. We also provide 24/7 support with guaranteed response times based on your service tier.`
    },
    {
      id: 5,
      category: "Integration",
      question: "Can DHIS2 integrate with our existing FONASA and other health systems?",
      answer: `Yes, we specialize in Chilean health system integrations:\n\n• FONASA system integration for billing and patient data\n• Laboratory information systems (LIS)\n• Hospital information systems (HIS)\n• Electronic health records (EHR)\n• Pharmacy management systems\n\nWe use secure APIs and real-time synchronization to ensure seamless data flow between systems while maintaining data security and compliance.`
    },
    {
      id: 6,
      category: "Costs",
      question: "What factors influence the implementation cost?",
      answer: `Implementation costs depend on several factors:\n\n• System complexity and customization needs\n• Number of users and facilities\n• Data migration complexity\n• Integration requirements (FONASA, legacy systems)\n• Training scope and duration\n• Ongoing support level\n\nWe provide transparent pricing with detailed breakdowns. Our readiness assessment tool gives preliminary cost estimates, and final pricing is determined during consultation.`
    },
    {
      id: 7,
      category: "Support",
      question: "What ongoing support and maintenance do you provide?",
      answer: `Comprehensive ongoing support options:\n\n• 24/7 technical support with guaranteed response times\n• Regular system updates and security patches\n• Performance monitoring and optimization\n• User support and additional training\n• Backup and disaster recovery services\n• Compliance updates for regulatory changes\n\nSupport packages range from basic email support to dedicated account management with on-site visits.`
    },
    {
      id: 8,
      category: "Security",
      question: "How do you ensure data security and patient privacy?",
      answer: `We implement enterprise-grade security measures:\n\n• End-to-end encryption for data transmission\n• Role-based access controls\n• Audit trails for all system activities\n• Regular security assessments and penetration testing\n• Compliance with Chilean data protection laws\n• Secure cloud hosting with Chilean data residency\n• Backup and disaster recovery protocols\n\nAll security measures are designed to meet or exceed Chilean healthcare data protection requirements.`
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about DHIS2 implementation in Chile. Can't find what you're looking for? Contact our experts directly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories?.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-card border border-border rounded-lg shadow-clinical hover:shadow-clinical-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {faq?.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq?.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <Icon
                      name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      className="text-muted-foreground transition-transform duration-200"
                    />
                  </div>
                </div>
              </button>

              {openFAQ === faq?.id && (
                <div className="px-6 pb-6 border-t border-border">
                  <div className="pt-4">
                    <div className="prose prose-sm max-w-none">
                      {faq?.answer?.split('\n')?.map((paragraph, index) => (
                        <p key={index} className="text-muted-foreground mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center">
          <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our DHIS2 experts are ready to discuss your specific requirements and provide detailed answers to your implementation questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200">
              <Icon name="Calendar" size={16} className="mr-2" />
              Schedule Expert Consultation
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-foreground font-medium rounded-lg hover:bg-muted transition-colors duration-200">
              <Icon name="Mail" size={16} className="mr-2" />
              Email Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;