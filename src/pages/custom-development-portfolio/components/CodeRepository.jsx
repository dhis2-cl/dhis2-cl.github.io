import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeRepository = () => {
  const [activeRepo, setActiveRepo] = useState('maternal-tracker');
  const [activeFile, setActiveFile] = useState('tracker-config.js');

  const repositories = {
    'maternal-tracker': {
      name: 'Maternal Health Tracker',
      description: 'Complete DHIS2 tracker program for maternal health monitoring with offline support',
      language: 'JavaScript',
      stars: 45,
      forks: 12,
      files: [
        'tracker-config.js',
        'offline-sync.js',
        'risk-calculator.js',
        'notification-service.js'
      ]
    },
    'analytics-dashboard': {
      name: 'Advanced Analytics Dashboard',
      description: 'Real-time health analytics dashboard with custom visualizations',
      language: 'React',
      stars: 38,
      forks: 8,
      files: [
        'dashboard-config.jsx',
        'chart-components.jsx',
        'data-processor.js',
        'export-utils.js'
      ]
    },
    'mobile-connector': {
      name: 'Mobile Data Connector',
      description: 'Android app integration module for seamless data synchronization',
      language: 'Kotlin',
      stars: 29,
      forks: 6,
      files: [
        'SyncManager.kt',
        'DataValidator.kt',
        'OfflineStorage.kt',
        'ApiClient.kt'
      ]
    }
  };

  const codeExamples = {
    'tracker-config.js': {
      language: 'javascript',
      content: `// DHIS2 Maternal Health Tracker Configuration
const maternalHealthTracker = {
  program: {
    id: 'maternal_health_program',
    name: 'Programa de Salud Materna',
    programType: 'WITH_REGISTRATION',
    categoryCombo: 'default',
    
    // Multi-language support
    translations: {
      es: 'Programa de Salud Materna',
      qu: 'Warmi Qhali Kay Programa',
      en: 'Maternal Health Program'
    },
    
    // Program stages
    programStages: [
      {
        id: 'antenatal_visit',
        name: 'Control Prenatal',
        repeatable: true,
        minDaysFromStart: 0,
        
        // Data elements for antenatal care
        programStageDataElements: [
          {
            dataElement: 'gestational_age',
            compulsory: true,
            allowProvidedElsewhere: false
          },
          {
            dataElement: 'blood_pressure_systolic',
            compulsory: true,
            allowProvidedElsewhere: false
          },
          {
            dataElement: 'risk_factors',
            compulsory: false,
            allowProvidedElsewhere: true
          }
        ]
      }
    ],
    
    // Offline synchronization settings
    offlineConfig: {
      enabled: true,
      syncInterval: 300000, // 5 minutes
      maxRetries: 3,
      compressionEnabled: true
    }
  },
  
  // Risk assessment algorithm
  calculateRiskScore: (data) => {
    let riskScore = 0;
    
    // Age-based risk
    if (data.age < 18 || data.age > 35) riskScore += 2;
    
    // Blood pressure risk
    if (data.systolic > 140 || data.diastolic > 90) riskScore += 3;
    
    // Previous complications
    if (data.previousComplications) riskScore += 2;
    
    return {
      score: riskScore,
      level: riskScore >= 5 ? 'HIGH' : riskScore >= 3 ? 'MEDIUM' : 'LOW',
      recommendations: generateRecommendations(riskScore)
    };
  }
};

export default maternalHealthTracker;`
    },
    'offline-sync.js': {
      language: 'javascript',
      content: `// Offline Synchronization Manager
class OfflineSyncManager {
  constructor(dhis2Config) {
    this.config = dhis2Config;
    this.pendingSync = new Map();
    this.syncInProgress = false;
    this.retryAttempts = new Map();
  }
  
  // Queue data for offline sync
  async queueForSync(entityType, data, operation = 'CREATE') {
    const syncItem = {
      id: this.generateSyncId(),
      entityType,
      data,
      operation,
      timestamp: new Date().toISOString(),
      attempts: 0
    };
    
    // Store in IndexedDB for persistence
    await this.storeOfflineData(syncItem);
    this.pendingSync.set(syncItem.id, syncItem);
    
    // Attempt immediate sync if online
    if (navigator.onLine) {
      this.attemptSync();
    }
    
    return syncItem.id;
  }
  
  // Sync pending data with DHIS2 server
  async attemptSync() {
    if (this.syncInProgress || !navigator.onLine) return;
    
    this.syncInProgress = true;
    const syncResults = [];
    
    for (const [id, item] of this.pendingSync) {
      try {
        const result = await this.syncSingleItem(item);
        syncResults.push({ id, success: true, result });
        
        // Remove from pending queue on success
        this.pendingSync.delete(id);
        await this.removeOfflineData(id);
        
      } catch (error) {
        item.attempts++;
        syncResults.push({ id, success: false, error: error.message });
        
        // Remove after max retries
        if (item.attempts >= this.config.maxRetries) {
          this.pendingSync.delete(id);
          await this.moveToFailedQueue(item);
        }
      }
    }
    
    this.syncInProgress = false;
    this.notifySyncComplete(syncResults);
    
    return syncResults;
  }
  
  // Sync individual item with DHIS2 API
  async syncSingleItem(item) {
    const endpoint = this.getApiEndpoint(item.entityType);
    const method = this.getHttpMethod(item.operation);
    
    const response = await fetch(\`\${this.config.baseUrl}/\${endpoint}\`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${this.config.accessToken}\`
      },
      body: JSON.stringify(item.data)
    });
    
    if (!response.ok) {
      throw new Error(\`Sync failed: \${response.statusText}\`);
    }
    
    return await response.json();
  }
}

export default OfflineSyncManager;`
    },
    'risk-calculator.js': {
      language: 'javascript',
      content: `// Advanced Risk Assessment Calculator
class MaternalRiskCalculator {
  constructor() {
    this.riskFactors = {
      age: { weight: 0.15, thresholds: { low: 18, high: 35 } },
      bloodPressure: { weight: 0.25, thresholds: { systolic: 140, diastolic: 90 } },
      bmi: { weight: 0.20, thresholds: { low: 18.5, high: 30 } },
      previousComplications: { weight: 0.30 },
      gestationalDiabetes: { weight: 0.25 },
      multiplePregnancy: { weight: 0.20 }
    };
    
    this.culturalFactors = {
      indigenous: { accessBarriers: 0.15, languageBarriers: 0.10 },
      rural: { distanceToFacility: 0.20, transportationIssues: 0.15 },
      socioeconomic: { lowIncome: 0.10, educationLevel: 0.08 }
    };
  }
  
  // Calculate comprehensive risk score
  calculateRisk(patientData, culturalContext = {}) {
    let medicalRisk = this.calculateMedicalRisk(patientData);
    let socialRisk = this.calculateSocialRisk(culturalContext);
    let geographicRisk = this.calculateGeographicRisk(patientData.location);
    
    const totalRisk = {
      medical: medicalRisk,
      social: socialRisk,
      geographic: geographicRisk,
      overall: (medicalRisk.score * 0.6) + (socialRisk.score * 0.25) + (geographicRisk.score * 0.15)
    };
    
    return {
      ...totalRisk,
      level: this.getRiskLevel(totalRisk.overall),
      recommendations: this.generateRecommendations(totalRisk),
      nextVisit: this.calculateNextVisitDate(totalRisk.overall),
      alerts: this.generateAlerts(totalRisk)
    };
  }
  
  // Medical risk factors calculation
  calculateMedicalRisk(data) {
    let score = 0;
    let factors = [];
    
    // Age-based risk
    if (data.age < this.riskFactors.age.thresholds.low || 
        data.age > this.riskFactors.age.thresholds.high) {
      score += this.riskFactors.age.weight;
      factors.push(\`Age: \${data.age} years\`);
    }
    
    // Blood pressure risk
    if (data.bloodPressure.systolic > this.riskFactors.bloodPressure.thresholds.systolic ||
        data.bloodPressure.diastolic > this.riskFactors.bloodPressure.thresholds.diastolic) {
      score += this.riskFactors.bloodPressure.weight;
      factors.push(\`Hypertension: \${data.bloodPressure.systolic}/\${data.bloodPressure.diastolic}\`);
    }
    
    // BMI risk
    if (data.bmi < this.riskFactors.bmi.thresholds.low || 
        data.bmi > this.riskFactors.bmi.thresholds.high) {
      score += this.riskFactors.bmi.weight;
      factors.push(\`BMI: \${data.bmi}\`);
    }
    
    // Previous complications
    if (data.previousComplications && data.previousComplications.length > 0) {
      score += this.riskFactors.previousComplications.weight;
      factors.push(\`Previous complications: \${data.previousComplications.join(', ')}\`);
    }
    
    return { score: Math.min(score, 1.0), factors };
  }
  
  // Generate culturally appropriate recommendations
  generateRecommendations(riskData) {
    const recommendations = [];
    
    if (riskData.overall >= 0.7) {
      recommendations.push({
        priority: 'HIGH',
        action: 'Immediate referral to specialist',
        timeframe: 'Within 24 hours',
        culturalNote: 'Arrange transportation and interpreter if needed'
      });
    }
    
    if (riskData.social.score > 0.5) {
      recommendations.push({
        priority: 'MEDIUM',
        action: 'Social support assessment',
        timeframe: 'Next visit',
        culturalNote: 'Consider family involvement and cultural practices'
      });
    }
    
    return recommendations;
  }
}

export default MaternalRiskCalculator;`
    }
  };

  const currentRepo = repositories?.[activeRepo];
  const currentCode = codeExamples?.[activeFile] || codeExamples?.['tracker-config.js'];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg">
              <Icon name="Github" size={24} color="white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Open Source
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Interactive Code Repository
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our actual DHIS2 modules with syntax highlighting and detailed documentation. 
            All code is production-tested and ready for implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Repository List */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Repositories
              </h3>
              
              {Object.entries(repositories)?.map(([key, repo]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveRepo(key);
                    setActiveFile(repo?.files?.[0]);
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeRepo === key
                      ? 'bg-card border-primary shadow-clinical'
                      : 'bg-background border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm">
                      {repo?.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="Star" size={12} />
                      <span>{repo?.stars}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {repo?.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-xs text-muted-foreground">
                        {repo?.language}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Icon name="GitFork" size={12} />
                      <span>{repo?.forks}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Viewer */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border shadow-clinical overflow-hidden">
              {/* Repository Header */}
              <div className="bg-muted px-6 py-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Folder" size={20} color="var(--color-primary)" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {currentRepo?.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Clone
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      View on GitHub
                    </Button>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-2">
                  {currentRepo?.description}
                </p>
              </div>

              {/* File Tabs */}
              <div className="bg-surface px-6 py-2 border-b border-border">
                <div className="flex space-x-1 overflow-x-auto">
                  {currentRepo?.files?.map((file) => (
                    <button
                      key={file}
                      onClick={() => setActiveFile(file)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                        activeFile === file
                          ? 'bg-card text-foreground shadow-clinical'
                          : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                      }`}
                    >
                      <Icon name="FileCode" size={14} />
                      <span>{file}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Content */}
              <div className="relative">
                <div className="absolute top-4 right-4 z-10">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    iconName="Copy"
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    Copy
                  </Button>
                </div>
                
                <div className="bg-gray-900 text-gray-100 p-6 overflow-x-auto">
                  <pre className="text-sm leading-relaxed">
                    <code className="language-javascript">
                      {currentCode?.content}
                    </code>
                  </pre>
                </div>
              </div>

              {/* File Actions */}
              <div className="bg-muted px-6 py-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Language: {currentCode?.language}</span>
                    <span>•</span>
                    <span>Lines: {currentCode?.content?.split('\n')?.length}</span>
                    <span>•</span>
                    <span>Size: {(currentCode?.content?.length / 1024)?.toFixed(1)}KB</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      iconName="MessageSquare"
                    >
                      Discuss
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      iconName="FileText"
                    >
                      Documentation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeRepository;