import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Navigation({ darkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#academic", label: "Academic" },
    { href: "#experience", label: "Experience" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-xl border-b ${darkMode ? 'border-white/5' : 'border-gray-200/20'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className={darkMode ? "text-orange-500" : "text-blue-500"}>JSK</span>
              <span className={darkMode ? "text-white" : "text-gray-900"}>Dev</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} transition-all`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <a 
                href="mailto:jaishankar7655@gmail.com" 
                className={`hidden sm:block ${darkMode ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} text-white px-6 py-2 rounded-full hover:shadow-lg transition-all`}
              >
                Contact
              </a>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className={`md:hidden p-2 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} transition-all`}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          ></div>
          
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl transform transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold">
                  <span className={darkMode ? "text-orange-500" : "text-blue-500"}>JSK</span>
                  <span className={darkMode ? "text-white" : "text-gray-900"}>Dev</span>
                </div>
                <button
                  onClick={closeMenu}
                  className={`p-2 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} transition-all`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-6">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={closeMenu}
                      className={`block text-lg font-medium ${darkMode ? 'text-white hover:text-orange-500' : 'text-gray-900 hover:text-blue-500'} transition-colors`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
              
              {/* Contact Button */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <a 
                  href="mailto:jaishankar7655@gmail.com"
                  onClick={closeMenu}
                  className={`block w-full text-center ${darkMode ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} text-white px-6 py-3 rounded-full hover:shadow-lg transition-all`}
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;