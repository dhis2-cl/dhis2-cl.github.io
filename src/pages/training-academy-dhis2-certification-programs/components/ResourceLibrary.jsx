import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: 'Grid3X3' },
    { id: 'videos', name: 'Training Videos', icon: 'Play' },
    { id: 'guides', name: 'Configuration Guides', icon: 'BookOpen' },
    { id: 'templates', name: 'Templates', icon: 'FileText' },
    { id: 'assessments', name: 'Assessment Tools', icon: 'CheckSquare' }
  ];

  const resources = [
    {
      id: 1,
      title: 'DHIS2 Foundation Course - Complete Video Series',
      category: 'videos',
      type: 'Video Series',
      duration: '8 hours',
      language: 'Spanish',
      description: 'Comprehensive video tutorial series covering DHIS2 basics with Chilean health system examples.',
      downloads: 1250,
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      tags: ['Beginner', 'Foundation', 'Spanish'],
      lastUpdated: '2025-01-15'
    },
    {
      id: 2,
      title: 'Chilean Health Indicators Configuration Guide',
      category: 'guides',
      type: 'PDF Guide',
      duration: '45 min read',
      language: 'Spanish/English',
      description: 'Step-by-step guide for configuring Chilean national health indicators in DHIS2.',
      downloads: 890,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      tags: ['Configuration', 'Chile', 'Indicators'],
      lastUpdated: '2025-01-10'
    },
    {
      id: 3,
      title: 'Hospital Data Entry Template',
      category: 'templates',
      type: 'Excel Template',
      duration: 'Ready to use',
      language: 'Spanish',
      description: 'Pre-configured data entry template for Chilean hospital reporting requirements.',
      downloads: 650,
      rating: 4.7,
      thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
      tags: ['Hospital', 'Template', 'Data Entry'],
      lastUpdated: '2025-01-08'
    },
    {
      id: 4,
      title: 'DHIS2 System Administrator Certification Exam',
      category: 'assessments',
      type: 'Online Assessment',
      duration: '2 hours',
      language: 'Spanish/English',
      description: 'Comprehensive assessment tool for DHIS2 system administrator certification.',
      downloads: 420,
      rating: 4.9,
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      tags: ['Assessment', 'Certification', 'Advanced'],
      lastUpdated: '2025-01-12'
    },
    {
      id: 5,
      title: 'Mobile Data Collection Best Practices',
      category: 'videos',
      type: 'Webinar Recording',
      duration: '1.5 hours',
      language: 'Spanish',
      description: 'Expert webinar on implementing mobile data collection in rural Chilean health facilities.',
      downloads: 780,
      rating: 4.6,
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
      tags: ['Mobile', 'Rural Health', 'Best Practices'],
      lastUpdated: '2025-01-05'
    },
    {
      id: 6,
      title: 'Data Quality Assurance Checklist',
      category: 'templates',
      type: 'Checklist Template',
      duration: '30 min',
      language: 'Spanish',
      description: 'Comprehensive checklist for ensuring data quality in DHIS2 implementations.',
      downloads: 920,
      rating: 4.8,
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tags: ['Quality', 'Checklist', 'Implementation'],
      lastUpdated: '2025-01-14'
    }
  ];

  const filteredResources = resources?.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource?.category === activeCategory;
    const matchesSearch = resource?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         resource?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Video Series': case'Webinar Recording':
        return 'Play';
      case 'PDF Guide':
        return 'FileText';
      case 'Excel Template': case'Checklist Template':
        return 'Download';
      case 'Online Assessment':
        return 'CheckSquare';
      default:
        return 'File';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Resource Library
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Access comprehensive training materials, templates, and tools to support your DHIS2 learning journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} color="var(--color-text-secondary)" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-card text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setActiveCategory(category?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category?.id
                      ? 'bg-primary text-white shadow-elevation-sm'
                      : 'bg-card text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  <span>{category?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredResources?.map((resource) => (
            <div key={resource?.id} className="bg-card rounded-2xl border border-border shadow-elevation hover:shadow-elevation-lg transition-all duration-300 overflow-hidden">
              {/* Thumbnail */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={resource?.thumbnail}
                  alt={resource?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/90 backdrop-blur-glass text-text-primary text-xs font-medium rounded-full">
                    <Icon name={getTypeIcon(resource?.type)} size={12} />
                    <span>{resource?.type}</span>
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center space-x-1 px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    <Icon name="Star" size={10} className="fill-current" />
                    <span>{resource?.rating}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
                  {resource?.title}
                </h3>
                
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {resource?.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{resource?.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Globe" size={12} />
                      <span>{resource?.language}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Download" size={12} />
                    <span>{resource?.downloads}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource?.tags?.slice(0, 3)?.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">
                    Updated {new Date(resource.lastUpdated)?.toLocaleDateString()}
                  </span>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-1 px-3 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200 text-sm font-medium">
                      <Icon name="Eye" size={14} />
                      <span>Preview</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-2 bg-primary text-white hover:bg-primary/90 rounded-lg transition-colors duration-200 text-sm font-medium">
                      <Icon name="Download" size={14} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} color="var(--color-text-secondary)" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">No resources found</h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your search terms or category filter
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-dhis2-purple/5 rounded-2xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Need Additional Resources?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team can create custom training materials and resources tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="font-cta"
            >
              Request Custom Resource
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Mail"
              iconPosition="left"
              className="font-cta"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;