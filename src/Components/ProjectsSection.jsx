import React from 'react';
import { Globe, Briefcase, Server, Code, ExternalLink, BookOpen, Laptop, FileText } from 'lucide-react';

const ProjectsSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const industrialProjects = [
    {
      title: "One Touch Moments",
      description: "Complete event management platform connecting users with vendors for seamless bookings, including hotels, makeup artists, DJs, and more. Built with React and powered by REST API.",
      tech: ["React", "Tailwind CSS", "REST API"],
      category: "Industrial Project",
      icon: <Globe className="w-6 h-6" />,
      links: [
        { url: "https://onetouchmoments.com/", label: "Main Site" },
        { url: "https://vendor.onetouchmoments.com/", label: "Vendor Portal" }
      ],
      features: [
        "Real-time vendor booking system",
        "Separate user and vendor portals",
        "Seamless payment integration",
        "Event management dashboard"
      ]
    },
    {
      title: "NGO Management System",
      description: "Developed using Django and Python for creating certificates, appointment letters, and ID cards with secure login, session management, and URL security.",
      tech: ["Django", "Python", "MySQL"],
      category: "Industrial Project",
      icon: <Briefcase className="w-6 h-6" />,
      links: [
        { url: "https://aghorakhadaujjain.com/", label: "Visit Site" }
      ],
      features: [
        "Certificate generation system",
        "Secure user authentication",
        "Session management",
        "ID card creation module"
      ]
    },
    {
      title: "Vehicle Solution",
      description: "Interactive website showcasing services including car washing, repairs, and spare parts pricing with dedicated bill management system.",
      tech: ["React", "Tailwind CSS"],
      category: "Industrial Project",
      icon: <Server className="w-6 h-6" />,
      links: [
        { url: "https://vehiclesolution.in/", label: "Main Site" },
        { url: "https://jobcard.vehiclesolution.in/", label: "Bill Management" }
      ],
      features: [
        "Service showcase platform",
        "Invoice management system",
        "Pricing calculator",
        "Job card generation"
      ]
    },
    {
      title: "Cynctech IT Solutions",
      description: "Interactive and dynamic website with advanced animation tools to deliver an engaging user experience for IT solutions company.",
      tech: ["React", "GSAP", "Tailwind CSS"],
      category: "Industrial Project",
      icon: <Code className="w-6 h-6" />,
      links: [
        { url: "https://cynctech.in/", label: "Visit Site" }
      ],
      features: [
        "Advanced GSAP animations",
        "Responsive design",
        "Interactive user interface",
        "Performance optimized"
      ]
    }
  ];

  const academicProjects = [
    {
      title: "Country Information Website",
      description: "Built a real-time data platform using frontend and backend REST API to display comprehensive country information and statistics.",
      tech: ["JavaScript", "REST API", "HTML", "CSS"],
      category: "Academic Project",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "Real-time country data fetching",
        "Interactive search functionality",
        "Responsive design",
        "REST API integration"
      ]
    },
    {
      title: "Restaurant Bill Generator",
      description: "Created a dynamic billing system for restaurants with menu management, order processing, and automated bill generation.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Academic Project",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Dynamic menu display",
        "Order calculation system",
        "Bill generation",
        "Interactive user interface"
      ]
    },
    {
      title: "Personal Portfolio",
      description: "Showcased skills in front-end development with JavaScript and GSAP animations, featuring responsive design and interactive elements.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      category: "Academic Project",
      icon: <Laptop className="w-6 h-6" />,
      links: [
        { url: "https://codeformme.netlify.app/", label: "Visit Portfolio" }
      ],
      features: [
        "GSAP animations",
        "Responsive design",
        "Interactive elements",
        "Skills showcase"
      ]
    },
    {
      title: "Digital Classroom",
      description: "Created a digital classroom platform to manage notes and share files via classroom codes and links for educational purposes.",
      tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
      category: "Academic Project",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Classroom code system",
        "File sharing functionality",
        "Note management",
        "User authentication"
      ]
    }
  ];

  const ProjectCard = ({ project, index }) => (
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
      
      <div className="mb-4">
        <h4 className={`font-medium mb-2 text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Key Features:
        </h4>
        <ul className={`text-xs space-y-1 ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
          {project.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-2">
              <span className={`w-1 h-1 rounded-full mt-1.5 ${darkMode ? 'bg-orange-400' : 'bg-blue-500'} flex-shrink-0`}></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span key={techIndex} className={`${darkMode ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'} px-2 py-1 rounded text-xs`}>
            {tech}
          </span>
        ))}
      </div>
      
      {project.links && (
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
      )}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Projects</span>
        </h2>
        
        {/* Industrial Projects */}
        <div className="mb-16">
          <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Industrial <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {industrialProjects.map((project, index) => (
              <ProjectCard key={`industrial-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
        
        {/* Academic Projects */}
        <div>
          <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Academic <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {academicProjects.map((project, index) => (
              <ProjectCard key={`academic-${index}`} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;