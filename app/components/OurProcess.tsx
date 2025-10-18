import React from 'react';

const OurProcess = () => {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "We analyze your current systems, challenges, and goals to understand your unique needs.",
      timeline: "1-2 weeks",
      deliverables: ["Current state analysis", "Requirements documentation", "Success metrics definition"]
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "Create a customized roadmap tailored to your business objectives and constraints.",
      timeline: "1-2 weeks",
      deliverables: ["Strategic roadmap", "Resource allocation plan", "Risk assessment"]
    },
    {
      step: 3,
      title: "Implementation Planning",
      description: "Detailed project planning with clear milestones, timelines, and resource requirements.",
      timeline: "1 week",
      deliverables: ["Project timeline", "Resource assignments", "Communication protocols"]
    },
    {
      step: 4,
      title: "Execution & Training",
      description: "Execute the plan while providing comprehensive training to ensure team adoption.",
      timeline: "4-8 weeks",
      deliverables: ["Solution implementation", "Team training sessions", "Documentation"]
    },
    {
      step: 5,
      title: "Launch & Optimization",
      description: "Go-live support with continuous monitoring and optimization for peak performance.",
      timeline: "2-3 weeks",
      deliverables: ["Launch support", "Performance monitoring", "Initial optimizations"]
    },
    {
      step: 6,
      title: "Ongoing Support",
      description: "Continuous partnership with regular check-ins, updates, and strategic guidance.",
      timeline: "Ongoing",
      deliverables: ["Regular health checks", "Continuous improvements", "Strategic consultation"]
    }
  ];

  return (
    <section id="our-process" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven 6-step process ensures successful outcomes through collaboration,
            transparency, and continuous support every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((process, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {process.step}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {process.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                {process.description}
              </p>

              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                  Timeline: {process.timeline}
                </span>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">What You'll Receive:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {process.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Timeline Expectations & What to Expect
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Typical Project Timeline
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Discovery Phase</span>
                  <span className="text-blue-600">Weeks 1-2</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Planning Phase</span>
                  <span className="text-blue-600">Weeks 3-5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Implementation</span>
                  <span className="text-blue-600">Weeks 6-13</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Launch & Support</span>
                  <span className="text-blue-600">Week 14+</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                What Clients Can Expect
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Regular communication and progress updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Transparent reporting on milestones and deliverables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Dedicated project manager and support team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Flexible approach that adapts to your business needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Comprehensive training and knowledge transfer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Post-launch support and continuous optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;