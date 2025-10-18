import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target, Award } from 'lucide-react';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "TechFlow Solutions",
      logo: "/api/placeholder/120/60",
      industry: "SaaS",
      challenge: "High churn rate of 25% annually and declining Net Promoter Score of -12, leading to significant revenue loss and poor customer satisfaction.",
      solution: "Implemented comprehensive customer health scoring system, redesigned onboarding process, and established proactive customer success workflows with personalized touchpoints.",
      results: {
        churnReduction: 68,
        npsIncrease: 45,
        revenueGrowth: 32,
        csat: 89
      },
      testimonial: {
        text: "CIG transformed our entire approach to customer success. The results speak for themselves - we've never seen such dramatic improvements in customer satisfaction and retention.",
        author: "Sarah Chen",
        title: "VP of Customer Success",
        photo: "/api/placeholder/60/60"
      },
      timeline: "6 months"
    },
    {
      id: 2,
      client: "DataCore Analytics",
      logo: "/api/placeholder/120/60",
      industry: "Data Analytics",
      challenge: "Poor product adoption rates with only 34% of customers using core features, resulting in low customer lifetime value and expansion revenue.",
      solution: "Developed feature adoption framework, created interactive product tours, implemented usage-based customer segmentation, and launched targeted education campaigns.",
      results: {
        adoptionIncrease: 156,
        expansionRevenue: 78,
        timeToValue: 45,
        customerHealth: 92
      },
      testimonial: {
        text: "The strategic approach CIG brought to our customer success operations was exactly what we needed. Our customers are now fully leveraging our platform's capabilities.",
        author: "Michael Rodriguez",
        title: "Chief Customer Officer",
        photo: "/api/placeholder/60/60"
      },
      timeline: "4 months"
    },
    {
      id: 3,
      client: "GrowthLab Inc",
      logo: "/api/placeholder/120/60",
      industry: "Marketing Technology",
      challenge: "Inconsistent customer experience across touchpoints and lack of predictive insights leading to reactive rather than proactive customer management.",
      solution: "Built unified customer journey mapping, implemented predictive analytics for at-risk account identification, and established customer success playbooks for each lifecycle stage.",
      results: {
        experienceScore: 87,
        earlyWarning: 94,
        teamEfficiency: 63,
        retentionRate: 94
      },
      testimonial: {
        text: "CIG didn't just consult - they became true partners in our transformation. The predictive capabilities they built have revolutionized how we manage customer relationships.",
        author: "Emma Thompson",
        title: "Director of Customer Experience",
        photo: "/api/placeholder/60/60"
      },
      timeline: "8 months"
    }
  ];

  const MetricCard = ({ label, value, suffix = "%", icon: Icon, color }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <Icon className={`w-8 h-8 ${color}`} />
        <span className={`text-2xl font-bold ${color}`}>
          {value}{suffix}
        </span>
      </div>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
    </div>
  );

  const currentCase = caseStudies[activeCase];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped leading companies transform their customer success operations 
            and achieve measurable business growth
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-full p-2 shadow-lg border border-gray-200">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {study.client}
              </button>
            ))}
          </div>
        </div>

        {/* Main Case Study Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Case Study Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <img
                  src={currentCase.logo}
                  alt={`${currentCase.client} logo`}
                  className="h-12 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{currentCase.client}</h3>
                  <span className="text-blue-600 font-medium">{currentCase.industry}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Target className="w-5 h-5 text-red-500 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{currentCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-5 h-5 text-blue-500 mr-2" />
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{currentCase.solution}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-medium">Project Timeline:</span>
                    <span className="ml-2">{currentCase.timeline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Dashboard */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
                Quantifiable Results
              </h4>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentCase.id === 1 && (
                  <>
                    <MetricCard
                      label="Churn Reduction"
                      value={currentCase.results.churnReduction}
                      icon={TrendingUp}
                      color="text-green-600"
                    />
                    <MetricCard
                      label="NPS Increase"
                      value={currentCase.results.npsIncrease}
                      suffix=" pts"
                      icon={Users}
                      color="text-blue-600"
                    />
                    <MetricCard
                      label="Revenue Growth"
                      value={currentCase.results.revenueGrowth}
                      icon={Award}
                      color="text-purple-600"
                    />
                    <MetricCard
                      label="CSAT Score"
                      value={currentCase.results.csat}
                      icon={Target}
                      color="text-orange-600"
                    />
                  </>
                )}

                {currentCase.id === 2 && (
                  <>
                    <MetricCard
                      label="Feature Adoption"
                      value={currentCase.results.adoptionIncrease}
                      icon={TrendingUp}
                      color="text-green-600"
                    />
                    <MetricCard
                      label="Expansion Revenue"
                      value={currentCase.results.expansionRevenue}
                      icon={Award}
                      color="text-purple-600"
                    />
                    <MetricCard
                      label="Time to Value Reduction"
                      value={currentCase.results.timeToValue}
                      icon={Target}
                      color="text-orange-600"
                    />
                    <MetricCard
                      label="Customer Health Score"
                      value={currentCase.results.customerHealth}
                      icon={Users}
                      color="text-blue-600"
                    />
                  </>
                )}

                {currentCase.id === 3 && (
                  <>
                    <MetricCard
                      label="Experience Score"
                      value={currentCase.results.experienceScore}
                      suffix="/100"
                      icon={Users}
                      color="text-blue-600"
                    />
                    <MetricCard
                      label="Early Warning Accuracy"
                      value={currentCase.results.earlyWarning}
                      icon={Target}
                      color="text-orange-600"
                    />
                    <MetricCard
                      label="Team Efficiency"
                      value={currentCase.results.teamEfficiency}
                      icon={TrendingUp}
                      color="text-green-600"
                    />
                    <MetricCard
                      label="Retention Rate"
                      value={currentCase.results.retentionRate}
                      icon={Award}
                      color="text-purple-600"
                    />
                  </>
                )}
              </div>

              {/* Key Metrics Summary */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-3">Key Impact Metrics</h5>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">ROI Achievement</span>
                  <span className="font-semibold text-green-600">312% in Year 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-gray-900 text-white p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                <img
                  src={currentCase.testimonial.photo}
                  alt={currentCase.testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="flex-1 text-center lg:text-left">
                  <blockquote className="text-lg lg:text-xl italic mb-4 leading-relaxed">
                    "{currentCase.testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">
                      {currentCase.testimonial.author}
                    </div>
                    <div className="text-gray-300">
                      {currentCase.testimonial.title}, {currentCase.client}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveCase(activeCase > 0 ? activeCase - 1 : caseStudies.length - 1)}
            className="p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => setActiveCase(activeCase < caseStudies.length - 1 ? activeCase + 1 : 0)}
            className="p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Overall Stats */}
        <div className="mt-20 bg-blue-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Cumulative Impact Across All Clients</h3>
            <p className="text-blue-100 text-lg">
              Measurable results that drive business growth
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">47%</div>
              <div className="text-blue-100">Average Churn Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$2.8M</div>
              <div className="text-blue-100">Additional ARR Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">156%</div>
              <div className="text-blue-100">Average ROI in Year 1</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24+</div>
              <div className="text-blue-100">Enterprise Clients Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;