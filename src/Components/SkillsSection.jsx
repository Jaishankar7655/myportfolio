import React from 'react';
import { Code, Palette, Server, Database, Settings, Cloud, Zap } from 'lucide-react';

const SkillsSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const categoryIcons = {
    Languages: <Code className="w-5 h-5" />,
    Frontend: <Palette className="w-5 h-5" />,
    Backend: <Server className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    Tools: <Settings className="w-5 h-5" />,
    AWS: <Cloud className="w-5 h-5" />,
    Core: <Zap className="w-5 h-5" />
  };

  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "C++", "Shell"] },
    { category: "Frontend", items: ["HTML", "CSS", "React", "Tailwind CSS", "Bootstrap", "GSAP"] },
    { category: "Backend", items: ["Django", "REST API", "Serializer"] },
    { category: "Database", items: ["SQL", "MySQL"] },
    { category: "Tools", items: ["Git", "GitHub", "VScode", "Linux", "Redhat"] },
    { category: "AWS", items: ["EC2", "S3", "VPC", "RDS", "IAM", "Lambda" ,"etc ."] },
    { category: "Core", items: ["Agile", "SDLC", "API Development", "Debugging", "Performance Optimization"] }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Technical <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`${cardClasses} rounded-xl p-6 hover:${darkMode ? 'bg-white/10' : 'bg-white/80'} transition-all group hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-600'}`}>
                  {categoryIcons[skillGroup.category]}
                </div>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? 'bg-white/10 text-white/80'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;