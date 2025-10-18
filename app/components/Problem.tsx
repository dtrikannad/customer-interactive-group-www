import React, { useState } from 'react';

const ProblemStatement = () => {
  const [activeTab, setActiveTab] = useState('financial');

  const painPoints = [
    {
      icon: '🔄',
      title: 'Reactive Fire-Fighting Instead of Proactive Growth',
      description: 'Your team spends their days responding to escalations instead of preventing them. Customer issues surprise you rather than being anticipated and addressed early.',
      stat: '40% more time on crisis management'
    },
    {
      icon: '📉',
      title: 'Churn Rates That Drain Your Growth Engine',
      description: 'You\'re acquiring new customers, but they\'re walking out the back door faster than expected. Each lost customer represents months of sales effort and thousands in acquisition costs—gone.',
      stat: '23% higher churn rates'
    },
    {
      icon: '💰',
      title: 'Untapped Revenue Sitting in Your Customer Base',
      description: 'Your existing customers have expansion potential, but without systematic identification and nurturing, you\'re leaving money on the table while spending more to acquire new logos.',
      stat: '60-70% missed expansion revenue'
    },
    {
      icon: '🚫',
      title: 'Scaling Chaos: No Formal Customer Success Strategy',
      description: 'Customer success activities are scattered across sales, support, and account management. There\'s no unified approach, consistent methodology, or clear ownership of customer outcomes.',
      stat: 'Breaks down at 100-150 customers'
    }
  ];

  const impactData = {
    financial: [
      { metric: '23%', description: 'Higher churn rates without formal CS processes' },
      { metric: '5-7x', description: 'More expensive to replace vs. retain customers' },
      { metric: '60-70%', description: 'Missed expansion revenue from existing base' }
    ],
    operational: [
      { metric: '100-150', description: 'Customer limit before manual management breaks' },
      { metric: '40%', description: 'More time spent on crisis vs. growth activities' },
      { metric: '91%', description: 'Of customers leave without complaining first' }
    ],
    competitive: [
      { metric: '2.3x', description: 'Faster growth with proactive CS programs' },
      { metric: '91%', description: 'Of unhappy customers won\'t tell you before leaving' },
      { metric: '500', description: 'Customers where old methods become bottlenecks' }
    ]
  };

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            The Customer Success Challenge
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Manual Approach That Got You Here 
            <span className="text-red-600"> Won't Scale You</span> to Where You're Going
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mid-market companies face a critical inflection point: as your customer base grows, 
            the cracks in relationship-based management begin to show—and they're costly.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            The Four Critical Pain Points
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 mt-1">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {point.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-2 rounded-lg text-sm font-semibold">
                      <TrendingDownIcon />
                      {point.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost of Inaction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Cost of Inaction
            </h3>
            <p className="text-lg text-gray-600">
              Here's what the data reveals about companies without structured customer success programs:
            </p>
          </div>

          {/* Impact Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(impactData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Impact
              </button>
            ))}
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {impactData[activeTab].map((item: any, index: any) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  {item.metric}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Line CTA */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl text-center border-2 border-red-100">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                The Bottom Line:
              </h4>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                What worked when you had <strong>50 customers</strong> becomes your biggest 
                growth bottleneck at <strong>500 customers</strong>.
              </p>
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Stop the Revenue Leak - Get Your Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Components
const TrendingDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
  </svg>
);

export default ProblemStatement;