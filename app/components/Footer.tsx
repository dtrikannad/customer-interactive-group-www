import React, { useState } from 'react';
import { Link } from 'react-router';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info & Contact */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Customer Interactive Group
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Helping businesses overcome customer success challenges with proven methodologies 
                and 15+ years of industry expertise.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-white mb-3">Contact Information</h4>
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@customerinteractivegroup.com" className="hover:text-blue-400 transition-colors">
                  info@customerinteractivegroup.com
                </a>
              </div>
              
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>San Francisco Bay Area</span>
              </div>
              
              <div className="flex items-center text-gray-300 text-sm">
                <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+1-555-CIG-HELP" className="hover:text-blue-400 transition-colors">
                  +1 (555) CIG-HELP
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#our-process" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#why-cig" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Why Choose CIG
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/whitepapers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Webinars & Events
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  CS Tools & Templates
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest customer success insights and strategies delivered to your inbox.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-green-800 text-green-100 px-3 py-2 rounded-md text-sm">
                ✓ Successfully subscribed!
              </div>
            )}

            {/* Social Media Links */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/customer-interactive-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                
                <a
                  href="https://twitter.com/cig_success"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                
                <a
                  href="https://youtube.com/@customerinteractivegroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.23 7.102c.16-.773.16-2.386.16-2.386s0-1.614-.16-2.386a2.003 2.003 0 00-1.414-1.414c-.773-.16-2.386-.16-2.386-.16s-1.614 0-2.386.16a2.003 2.003 0 00-1.414 1.414c-.16.773-.16 2.386-.16 2.386v1.106c0 0 0 1.614.16 2.386a2.003 2.003 0 001.414 1.414c.773.16 2.386.16 2.386.16s1.614 0 2.386-.16a2.003 2.003 0 001.414-1.414zM8.667 10.5l4.084-2.292-4.084-2.292v4.584z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Customer Interactive Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;