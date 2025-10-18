import React from 'react';

const WhyCIG: React.FC = () => {
  const differentiators = [
    {
      icon: "📊",
      title: "15+ Years of Experience",
      description: "Progressive career growth across healthcare, telecommunications, security, and cloud technology industries."
    },
    {
      icon: "🏆",
      title: "Proven Track Record",
      description: "Led teams of 35+ practitioners, managed multi-million dollar initiatives, and consistently exceeded retention goals."
    },
    {
      icon: "🔧",
      title: "Comprehensive Methodology",
      description: "From building customer success organizations from scratch to optimizing existing operations with proven frameworks."
    },
    {
      icon: "🚀",
      title: "Industry Leadership",
      description: "Senior leadership experience at industry giants: DocuSign, Cisco, Salesforce, Oracle, and Guidewire."
    }
  ];

  const achievements = [
    "Redesigned Digital CX experience for seamless customer journeys",
    "Led consolidation of Customer Success offerings across multiple teams",
    "Implemented new CS packages to increase Time to Value",
    "Designed account segmentation models for enhanced success strategies",
    "Established trusted advisory relationships with C-level executives"
  ];

  return (
    <section id="why-cig" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customer Interactive Group brings unparalleled expertise to help businesses 
            overcome their customer success challenges with proven methodologies and industry leadership.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Founder Credentials */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Led by Industry Veteran
              </h3>
              <p className="text-gray-600 mb-6">
                Our founder brings over 15 years of progressive leadership experience, 
                having held senior positions at some of the world's most respected technology companies.
              </p>
              
              {/* Company Logos/Names */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { name: "DocuSign", role: "Director, Customer Success Strategy & Analytics" },
                  { name: "Cisco", role: "Senior Manager, Customer Success" },
                  { name: "Guidewire", role: "Senior Manager, Global Customer Success" },
                  { name: "Salesforce", role: "Customer Success Management" }
                ].map((company, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">{company.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{company.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-700">DocuSign</div>
            <div className="text-2xl font-bold text-gray-700">Cisco</div>
            <div className="text-2xl font-bold text-gray-700">Salesforce</div>
            <div className="text-2xl font-bold text-gray-700">Oracle</div>
            <div className="text-2xl font-bold text-gray-700">Guidewire</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Customer Success?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you're building from scratch or optimizing existing operations, 
            CIG has the expertise and proven methodology to drive your success.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyCIG;