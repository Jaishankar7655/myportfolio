import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-xl border-b ${darkMode ? 'border-white/5' : 'border-gray-200/20'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className={darkMode ? "text-orange-500" : "text-blue-500"}>JSK</span>
            <span className={darkMode ? "text-white" : "text-gray-900"}>Dev</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Home</a>
            <a href="#about" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>About</a>
            <a href="#skills" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Skills</a>
            <a href="#projects" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Projects</a>
            <a href="#academic" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Academic</a>
            <a href="#experience" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Experience</a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} transition-all`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;