import React from 'react';
import { Globe, Briefcase, Server, Code, ExternalLink } from 'lucide-react';

const ProjectsSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const industrialProjects = [
    {
      title: "One Touch Moments",
      description: "Complete event management platform connecting users with vendors for seamless bookings, including hotels, makeup artists, DJs, and more.",
      tech: ["React", "Tailwind CSS", "REST API"],
      category: "Industrial Project",
      icon: <Globe className="w-6 h-6" />,
      links: [
        { url: "https://onetouchmoments.com/", label: "Main Site" },
        { url: "https://vendor.onetouchmoments.com/", label: "Vendor Portal" }
      ]
    },
    {
      title: "NGO Management System",
      description: "Developed using Django and Python for creating certificates, appointment letters, and ID cards with secure login and session management.",
      tech: ["Django", "Python", "MySQL"],
      category: "Industrial Project",
      icon: <Briefcase className="w-6 h-6" />,
      links: [
        { url: "https://aghorakhadaujjain.com/", label: "Visit Site" }
      ]
    },
    {
      title: "Vehicle Solution",
      description: "Interactive website showcasing services including car washing, repairs, and spare parts pricing with bill management system.",
      tech: ["React", "Tailwind CSS"],
      category: "Industrial Project",
      icon: <Server className="w-6 h-6" />,
      links: [
        { url: "https://vehiclesolution.in/", label: "Main Site" },
        { url: "https://jobcard.vehiclesolution.in/", label: "Bill Management" }
      ]
    },
    {
      title: "Cynctech IT Solutions",
      description: "Interactive and dynamic website with advanced animation tools to deliver an engaging user experience.",
      tech: ["React", "GSAP", "Tailwind CSS"],
      category: "Industrial Project",
      icon: <Code className="w-6 h-6" />,
      links: [
        { url: "https://cynctech.in/", label: "Visit Site" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Industrial <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {industrialProjects.map((project, index) => (
            <div key={index} className={`${cardClasses} rounded-xl p-6 hover:${darkMode ? 'bg-white/10' : 'bg-white/80'} transition-all group hover:scale-105`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-500/20' : 'bg-blue-500/20'}`}>
                  {project.icon}
                </div>
                <span className={`${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-600'} px-3 py-1 rounded-full text-xs`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 group-hover:${darkMode ? 'text-orange-400' : 'text-blue-600'} transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              
              <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={`${darkMode ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'} px-2 py-1 rounded text-xs`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.links.map((link, linkIndex) => (
                  <a 
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-blue-600 hover:text-blue-700'} text-sm font-medium transition-colors`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;