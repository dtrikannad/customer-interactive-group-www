import React, { useState } from 'react';

const SolutionOverview = () => {
  const [activePhase, setActivePhase] = useState(0);

  const solutionPillars = [
    {
      icon: '🎯',
      title: 'Strategic Customer Success Planning',
      shortDesc: 'Fortune 500-proven frameworks tailored to your business',
      fullDesc: 'We analyze your customer journey, segment your base using enterprise methodologies, and create a comprehensive CS strategy with clear KPIs, playbooks, and success metrics that align with your revenue goals.',
      benefits: [
        'Customer segmentation models used by Oracle & Salesforce',
        'Revenue expansion roadmaps with predictable outcomes',
        'Board-ready CS strategy with measurable ROI projections',
        'Risk scoring systems that prevent churn before it happens'
      ],
      deliverables: ['CS Strategy Blueprint', 'Customer Journey Maps', 'Segmentation Models', 'Success Metrics Dashboard']
    },
    {
      icon: '⚙️',
      title: 'Process Optimization',
      shortDesc: 'Streamlined workflows that scale with your growth',
      fullDesc: 'Transform chaotic, manual processes into efficient, repeatable systems. We implement the same operational frameworks that helped DocuSign and Cisco scale their CS operations to serve millions of customers.',
      benefits: [
        'Automated customer health monitoring and alerts',
        'Standardized playbooks for onboarding, expansion, and renewal',
        'Escalation workflows that prevent issues from becoming crises',
        'Cross-functional alignment between sales, support, and CS teams'
      ],
      deliverables: ['Process Maps', 'Automation Workflows', 'Team Playbooks', 'SOP Documentation']
    },
    {
      icon: '👥',
      title: 'Team Training & Development',
      shortDesc: 'Upskill your team with enterprise-grade CS competencies',
      fullDesc: 'Your team learns the exact methodologies our founder used to build and scale CS programs at industry leaders. From consultative selling techniques to advanced customer psychology, we transfer 15+ years of enterprise knowledge.',
      benefits: [
        'Certification in proven CS methodologies and frameworks',
        'Advanced customer conversation and expansion techniques',
        'Data-driven decision making and customer health analysis',
        'Leadership coaching for CS managers and directors'
      ],
      deliverables: ['Training Modules', 'Certification Programs', 'Coaching Sessions', 'Performance Frameworks']
    },
    {
      icon: '💻',
      title: 'Technology Implementation',
      shortDesc: 'Right-sized tech stack that grows with your business',
      fullDesc: 'We help you select, implement, and optimize CS technology that matches your scale and budget. No over-engineering—just the essential tools and integrations that drive results from day one.',
      benefits: [
        'CS platform selection and implementation guidance',
        'Integration with existing CRM and support systems',
        'Custom dashboards and reporting for executive visibility',
        'Scalable tech architecture that grows with your customer base'
      ],
      deliverables: ['Tech Stack Audit', 'Platform Recommendations', 'Implementation Plan', 'Custom Dashboards']
    }
  ];

  const methodology = {
    phases: [
      {
        title: 'Discovery & Assessment',
        duration: '2-3 weeks',
        description: 'Deep dive into your current state, customer data, and business objectives',
        activities: ['Customer base analysis', 'Process audit', 'Team capability assessment', 'Technology stack review']
      },
      {
        title: 'Strategy Design',
        duration: '3-4 weeks',
        description: 'Create your custom CS strategy using Fortune 500 frameworks',
        activities: ['Customer segmentation', 'Journey mapping', 'Success metrics definition', 'Playbook development']
      },
      {
        title: 'Implementation',
        duration: '8-12 weeks',
        description: 'Roll out processes, train teams, and implement technology solutions',
        activities: ['Process deployment', 'Team training', 'Technology setup', 'Performance monitoring']
      },
      {
        title: 'Optimization',
        duration: 'Ongoing',
        description: 'Continuous improvement and scaling based on data and results',
        activities: ['Performance analysis', 'Process refinement', 'Advanced training', 'Scale planning']
      }
    ]
  };

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            The CIG Solution
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How CIG Transforms Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Customer Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We don't just give you theory—we implement the exact frameworks and methodologies that powered customer success at Oracle, Salesforce, Cisco, and DocuSign. Proven at enterprise scale, optimized for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500" />
              <span>Fortune 500 Proven</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500" />
              <span>Rapid Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500" />
              <span>Measurable ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="text-green-500" />
              <span>Scalable Framework</span>
            </div>
          </div>
        </div>

        {/* Solution Pillars */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Four Pillars of Customer Success Transformation
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {solutionPillars.map((pillar, index) => (
              <SolutionPillarCard key={index} pillar={pillar} />
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven Methodology
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The same consultative approach that helped enterprise companies scale from hundreds to millions of customers—adapted for your mid-market business.
            </p>
          </div>

          {/* Phase Timeline */}
          <div className="relative">
            <div className="flex justify-between items-center mb-8 overflow-x-auto">
              {methodology.phases.map((phase, index) => (
                <div key={index} className="flex-1 min-w-[200px]">
                  <button
                    onClick={() => setActivePhase(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activePhase === index
                        ? 'bg-white shadow-lg transform scale-105'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        activePhase === index ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{phase.title}</h4>
                        <p className="text-sm text-gray-600">{phase.duration}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Active Phase Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {methodology.phases[activePhase].title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {methodology.phases[activePhase].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {methodology.phases[activePhase].activities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Customer Success?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stop guessing and start implementing proven strategies that have scaled customer success at the world's leading companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg">
              Schedule Your Strategy Session
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Download Framework Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Solution Pillar Card Component
const SolutionPillarCard = ({ pillar }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-4xl">{pillar.icon}</div>
        <div className="flex-1">
          <h4 className="text-xl font-bold text-gray-900 mb-2">
            {pillar.title}
          </h4>
          <p className="text-gray-600 font-medium">
            {pillar.shortDesc}
          </p>
        </div>
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {pillar.fullDesc}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 mb-4"
      >
        {isExpanded ? 'Hide Details' : 'View Benefits & Deliverables'} →
      </button>

      {isExpanded && (
        <div className="space-y-6 pt-4 border-t border-gray-100">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Key Benefits:</h5>
            <ul className="space-y-2">
              {pillar.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Deliverables:</h5>
            <div className="flex flex-wrap gap-2">
              {pillar.deliverables.map((deliverable, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper Component
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default SolutionOverview;