import React from 'react';

const SkillsSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "C++", "Shell"], color: "bg-blue-500" },
    { category: "Frontend", items: ["HTML", "CSS", "React", "Tailwind", "GSAP"], color: "bg-green-500" },
    { category: "Backend", items: ["Django", "REST API", "Serializer"], color: "bg-purple-500" },
    { category: "Database", items: ["SQL", "MySQL"], color: "bg-yellow-500" },
    { category: "Tools", items: ["Git", "GitHub", "VScode", "Linux"], color: "bg-red-500" },
    { category: "AWS", items: ["EC2", "S3", "VPC", "RDS", "Lambda"], color: "bg-orange-500" }
  ];

  return (
    <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Technical <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className={`${cardClasses} rounded-xl p-6 hover:${darkMode ? 'bg-white/10' : 'bg-white/80'} transition-all group`}>
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${skillGroup.color} mr-3`}></div>
                <h3 className={`text-lg font-semibold group-hover:${darkMode ? 'text-orange-400' : 'text-blue-600'} transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`${darkMode ? 'bg-white/10 hover:bg-orange-500/20 text-white/80 hover:text-orange-300' : 'bg-gray-100 hover:bg-blue-500/20 text-gray-700 hover:text-blue-600'} px-3 py-1 rounded-full text-sm transition-all cursor-default`}>
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