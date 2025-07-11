import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <button
        onClick={() => scrollToSection('about')}
        className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors text-left`}
      >
        About
      </button>
      <button
        onClick={() => scrollToSection('skills')}
        className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors text-left`}
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors text-left`}
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection('experience')}
        className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors text-left`}
      >
        Experience
      </button>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        darkMode ? 'bg-black/10' : 'bg-white/10'
      } backdrop-blur-xl border-b ${
        darkMode ? 'border-white/5' : 'border-gray-200/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Branding */}
          <div className="text-2xl font-bold flex-shrink-0">
            <span className={darkMode ? 'text-orange-500' : 'text-blue-500'}>JSK</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>Dev</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">{navLinks}</div>

          {/* Theme toggle & mobile menu button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              } transition-all`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 pt-2 ${
            darkMode ? 'bg-black/90' : 'bg-white/90'
          } backdrop-blur-xl border-b ${
            darkMode ? 'border-white/5' : 'border-gray-200/20'
          }`}
        >
          <div className="flex flex-col space-y-4">{navLinks}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;