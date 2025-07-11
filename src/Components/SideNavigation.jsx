import React from 'react';
import { User, Code, Briefcase, Award } from 'lucide-react';

const SideNavigation = ({ darkMode, getCurrentSection }) => {
  const navigationSections = [
    { id: "about", icon: <User className="w-4 h-4" />, label: "About" },
    { id: "skills", icon: <Code className="w-4 h-4" />, label: "Skills" },
    { id: "projects", icon: <Briefcase className="w-4 h-4" />, label: "Projects" },
    { id: "academic", icon: <Award className="w-4 h-4" />, label: "Academic" },
    { id: "experience", icon: <Award className="w-4 h-4" />, label: "Experience" }
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {navigationSections.map((section, index) => (
          <a
            key={index}
            href={`#${section.id}`}
            className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
              getCurrentSection() === index
                ? `${darkMode ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-gradient-to-br from-blue-500 to-indigo-500'} scale-110 shadow-lg`
                : `${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/80 hover:bg-white'} hover:scale-105`
            }`}
          >
            <div className={`${getCurrentSection() === index ? 'text-white' : darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              {section.icon}
            </div>
            
            {/* Tooltip */}
            <div className={`absolute left-16 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'
            }`}>
              {section.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;