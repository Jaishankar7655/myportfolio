import React from 'react';
import { ServerOff } from 'lucide-react';

const AcademicSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const academicProjects = [
    {
      title: "Academic Digital Classroom",
      description: "File sharing and notes sharing application for educational purposes with secure user management.",
      tech: ["Django", "Python", "MySQL"],
      category: "Academic Project",
      icon: <ServerOff className="w-6 h-6 text-red-400" />,
      status: "Server Offline"
    },
    {
      title: "Full Ecommerce Application",
      description: "Complete ecommerce solution with JWT authentication, OTP verification, and forgot password functionality.",
      tech: ["Django", "REST API", "JWT", "OTP"],
      category: "Academic Project",
      icon: <ServerOff className="w-6 h-6 text-red-400" />,
      status: "Server Offline"
    }
  ];

  return (
    <section className="py-10 px-4" id='academic'>
      <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Academic Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {academicProjects.map((project, idx) => (
          <div key={idx} className={`rounded-lg p-6 flex flex-col gap-2 ${cardClasses}`}>
            <div className="flex items-center gap-2">
              {project.icon}
              <span className="font-semibold">{project.title}</span>
              <span className="ml-auto text-xs px-2 py-1 rounded bg-red-100 text-red-500">{project.status}</span>
            </div>
            <p className="text-sm mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs bg-gray-200/70 dark:bg-gray-700/50 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 mt-2">{project.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicSection;