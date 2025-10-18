import { useState } from 'react';
import { Link } from 'react-router';
import EmailCapture from './EmailCapture';  // Update path as needed

const Header = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };
  return (
  
    <>
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">
                Customer Interactive Group
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#problem"
                onClick={(e) => handleNavClick(e, 'problem')}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Problem
              </a>
              <a
                href="#solution"
                onClick={(e) => handleNavClick(e, 'solution')}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Solution
              </a>
              <a
                href="#our-process"
                onClick={(e) => handleNavClick(e, 'our-process')}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Our Process
              </a>
              <a
                href="#case-studies"
                onClick={(e) => handleNavClick(e, 'case-studies')}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Case Studies
              </a>
              <a
                href="#why-cig"
                onClick={(e) => handleNavClick(e, 'why-cig')}
                className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Why CIG
              </a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Grow Revenue Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#problem"
                  onClick={(e) => handleNavClick(e, 'problem')}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Problem
                </a>
                <a
                  href="#solution"
                  onClick={(e) => handleNavClick(e, 'solution')}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Solution
                </a>
                <a
                  href="#our-process"
                  onClick={(e) => handleNavClick(e, 'our-process')}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Our Process
                </a>
                <a
                  href="#case-studies"
                  onClick={(e) => handleNavClick(e, 'case-studies')}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Case Studies
                </a>
                <a
                  href="#why-cig"
                  onClick={(e) => handleNavClick(e, 'why-cig')}
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Why CIG
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
                >
                  Grow Revenue Now
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>


      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <EmailCapture onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </>
    
  );
};

export default Header;