import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityForum = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const forumStats = [
    { label: 'Active Members', value: '1,200+', icon: 'Users' },
    { label: 'Discussions', value: '3,500+', icon: 'MessageSquare' },
    { label: 'Solutions Shared', value: '2,800+', icon: 'CheckCircle' },
    { label: 'Countries', value: '15+', icon: 'Globe' }
  ];

  const recentDiscussions = [
    {
      id: 1,
      title: 'Best practices for DHIS2 mobile data collection in rural areas',
      author: {
        name: 'Dr. Carmen Silva',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
        role: 'Implementation Specialist',
        location: 'Santiago, Chile'
      },
      category: 'Mobile Data Collection',
      replies: 23,
      views: 156,
      lastActivity: '2 hours ago',
      tags: ['Mobile', 'Rural Health', 'Best Practices'],
      excerpt: 'I\'m looking for advice on implementing mobile data collection in remote Chilean health facilities. What are the key considerations for connectivity and user training?',
      isAnswered: false,
      isPinned: true
    },
    {
      id: 2,
      title: 'Integration challenges with Chilean HIS systems',
      author: {
        name: 'Miguel Torres',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        role: 'System Administrator',
        location: 'Valparaíso, Chile'
      },
      category: 'System Integration',
      replies: 18,
      views: 89,
      lastActivity: '4 hours ago',
      tags: ['Integration', 'HIS', 'Chile'],
      excerpt: 'Has anyone successfully integrated DHIS2 with the national Chilean health information systems? Looking for technical guidance and lessons learned.',
      isAnswered: true,
      isPinned: false
    },
    {
      id: 3,
      title: 'Data quality validation rules for maternal health indicators',
      author: {
        name: 'Ana Rodríguez',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
        role: 'Data Analyst',
        location: 'Concepción, Chile'
      },
      category: 'Data Quality',
      replies: 31,
      views: 203,
      lastActivity: '6 hours ago',
      tags: ['Data Quality', 'Maternal Health', 'Validation'],
      excerpt: 'Sharing validation rules I\'ve developed for maternal health indicators. Would love feedback and suggestions for improvements.',
      isAnswered: true,
      isPinned: false
    }
  ];

  const popularTopics = [
    {
      id: 1,
      title: 'DHIS2 Configuration for Chilean Health Indicators',
      posts: 145,
      followers: 89,
      icon: 'Settings',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Mobile Data Collection Best Practices',
      posts: 98,
      followers: 67,
      icon: 'Smartphone',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'System Administration & Maintenance',
      posts: 76,
      followers: 54,
      icon: 'Shield',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Data Analytics & Visualization',
      posts: 112,
      followers: 78,
      icon: 'BarChart',
      color: 'bg-orange-500'
    }
  ];

  const expertContributors = [
    {
      id: 1,
      name: 'Dr. María Elena Rodríguez',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      role: 'DHIS2 Core Team Member',
      contributions: 234,
      reputation: 4.9,
      specialties: ['Implementation', 'Training', 'Best Practices']
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'Senior Technical Architect',
      contributions: 189,
      reputation: 4.8,
      specialties: ['System Architecture', 'Integration', 'Performance']
    },
    {
      id: 3,
      name: 'Ana Patricia Silva',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      role: 'Data Analytics Expert',
      contributions: 156,
      reputation: 4.7,
      specialties: ['Analytics', 'Dashboards', 'Data Quality']
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Community Forum
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Connect with DHIS2 professionals across Chile and Latin America. Share knowledge, get help, and collaborate on solutions.
          </p>
        </div>

        {/* Forum Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {forumStats?.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl border border-border shadow-elevation-sm p-6 text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
                <Icon name={stat?.icon} size={20} />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
              <div className="text-text-secondary text-sm">{stat?.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Forum Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-muted rounded-lg p-1">
              {[
                { id: 'recent', name: 'Recent Discussions', icon: 'Clock' },
                { id: 'popular', name: 'Popular Topics', icon: 'TrendingUp' },
                { id: 'answered', name: 'Answered', icon: 'CheckCircle' }
              ]?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 justify-center ${
                    activeTab === tab?.id
                      ? 'bg-white text-primary shadow-elevation-sm'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>

            {/* Recent Discussions */}
            {activeTab === 'recent' && (
              <div className="space-y-4">
                {recentDiscussions?.map((discussion) => (
                  <div key={discussion?.id} className="bg-card rounded-xl border border-border shadow-elevation-sm hover:shadow-elevation transition-all duration-300 p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <Image
                          src={discussion?.author?.avatar}
                          alt={discussion?.author?.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-text-primary hover:text-primary cursor-pointer">
                              {discussion?.title}
                            </h3>
                            {discussion?.isPinned && (
                              <Icon name="Pin" size={14} color="var(--color-primary)" />
                            )}
                            {discussion?.isAnswered && (
                              <Icon name="CheckCircle" size={14} color="var(--color-success)" />
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary">
                            <span className="font-medium">{discussion?.author?.name}</span>
                            <span>•</span>
                            <span>{discussion?.author?.role}</span>
                            <span>•</span>
                            <span>{discussion?.author?.location}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {discussion?.category}
                      </span>
                    </div>

                    {/* Content */}
                    <p className="text-text-secondary mb-4 line-clamp-2">
                      {discussion?.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageSquare" size={14} />
                          <span>{discussion?.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={14} />
                          <span>{discussion?.views} views</span>
                        </div>
                      </div>
                      <span className="text-sm text-text-secondary">
                        {discussion?.lastActivity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Popular Topics */}
            {activeTab === 'popular' && (
              <div className="grid gap-4">
                {popularTopics?.map((topic) => (
                  <div key={topic?.id} className="bg-card rounded-xl border border-border shadow-elevation-sm hover:shadow-elevation transition-all duration-300 p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-12 h-12 ${topic?.color} text-white rounded-lg`}>
                        <Icon name={topic?.icon} size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                          {topic?.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <span>{topic?.posts} posts</span>
                          <span>•</span>
                          <span>{topic?.followers} followers</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA to Join */}
            <div className="bg-gradient-to-r from-primary/5 to-dhis2-purple/5 rounded-xl border border-primary/20 p-6 text-center">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Join the Conversation
              </h3>
              <p className="text-text-secondary mb-4">
                Share your expertise, ask questions, and connect with the DHIS2 community
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="default" 
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="font-cta"
                >
                  Start Discussion
                </Button>
                <Button 
                  variant="outline" 
                  iconName="UserPlus"
                  iconPosition="left"
                  className="font-cta"
                >
                  Join Community
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Expert Contributors */}
            <div className="bg-card rounded-xl border border-border shadow-elevation p-6">
              <h3 className="text-lg font-bold text-text-primary mb-6">Expert Contributors</h3>
              <div className="space-y-4">
                {expertContributors?.map((expert) => (
                  <div key={expert?.id} className="flex items-start space-x-3">
                    <Image
                      src={expert?.avatar}
                      alt={expert?.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary text-sm">{expert?.name}</h4>
                      <p className="text-text-secondary text-xs mb-1">{expert?.role}</p>
                      <div className="flex items-center space-x-2 text-xs text-text-secondary">
                        <span>{expert?.contributions} contributions</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={10} color="var(--color-accent)" className="fill-current" />
                          <span>{expert?.reputation}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {expert?.specialties?.slice(0, 2)?.map((specialty, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-xl border border-border shadow-elevation p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="Plus"
                  iconPosition="left"
                  className="justify-start"
                >
                  New Discussion
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="Search"
                  iconPosition="left"
                  className="justify-start"
                >
                  Search Forum
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="Bell"
                  iconPosition="left"
                  className="justify-start"
                >
                  Notification Settings
                </Button>
              </div>
            </div>

            {/* Forum Guidelines */}
            <div className="bg-muted/50 rounded-xl border border-border p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-text-secondary">
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span>Be respectful and professional</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span>Search before posting</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span>Use descriptive titles</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Icon name="CheckCircle" size={14} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                  <span>Share knowledge generously</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForum;