import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Customer Relationships Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Sustainable Growth
              </span>
            </h1>
            
            {/* Subheadline */}
            <h2 className="text-xl lg:text-2xl text-gray-700 font-medium">
              Stop guessing at customer success strategy. We deliver the exact methodologies and frameworks used by Fortune 500 companies to drive retention and exponential growth.
            </h2>
            
            {/* Value Proposition */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Our founder spent 15+ years building and scaling customer success programs at industry leaders like Oracle, Salesforce, Cisco, and DocuSign. We'll adapt these proven, enterprise-grade strategies specifically for your business to maximize customer lifetime value and accelerate revenue growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => {
                  // Add your primary CTA logic here
                  console.log('Get Your Custom Strategy clicked');
                }}
              >
                Get Your Custom Strategy
              </button>
              <button 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={() => {
                  // Add your secondary CTA logic here
                  console.log('View Success Stories clicked');
                }}
              >
                View Success Stories
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                {[
                  '15+ Years at Industry Leaders',
                  'Enterprise-Proven Methods',
                  'Global Scale Experience',
                  'Board-Presented ROI'
                ].map((indicator, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="font-medium">{indicator}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image/video */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <TeamIcon />
                  </div>
                  <p className="text-gray-600 font-medium">Hero Image/Video</p>
                  <p className="text-sm text-gray-500 mt-1">Satisfied customers or team</p>
                </div>
              </div>
            </div>
            
            {/* Floating testimonial card */}
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable CheckIcon component
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
    <path 
      fillRule="evenodd" 
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
      clipRule="evenodd"
    />
  </svg>
);

// Reusable TeamIcon component
const TeamIcon = () => (
  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// Testimonial card component
const TestimonialCard = () => (
  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
        JD
      </div>
      <div>
        <p className="font-semibold text-gray-900">John Doe</p>
        <p className="text-sm text-gray-600">VP Customer Success</p>
      </div>
    </div>
    <p className="text-sm text-gray-700">
      "Increased our retention by 34% in just 6 months using their proven frameworks."
    </p>
  </div>
);

export default Hero;