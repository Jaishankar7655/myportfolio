import React from 'react';
import { Briefcase, Calendar, MapPin, Award, Code, Users } from 'lucide-react';

const ExperienceSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Cynctech IT Solutions",
      location: "Bhopal, MP",
      duration: "September 2024 - Present",
      type: "Full-time",
      description: "Currently developing and maintaining web applications using modern technologies. Working on various client projects including interactive websites with advanced animations and dynamic user experiences.",
      responsibilities: [
        "Developing responsive web applications using React and Tailwind CSS",
        "Building REST APIs and backend services",
        "Implementing advanced animations with GSAP",
        "Maintaining and optimizing existing web applications",
        "Collaborating with team members on project deliverables"
      ],
      tech: ["React", "Tailwind CSS", "GSAP", "REST API", "JavaScript"],
      icon: <Code className="w-6 h-6" />,
      achievements: [
        "Successfully delivered multiple client projects",
        "Improved application performance and user experience"
      ]
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Netligent Technology Pvt Ltd",
      location: "Bhopal, MP",
      duration: "3 Months",
      type: "Internship",
      description: "Completed comprehensive internship gaining hands-on experience in full-stack web development. Participated in real-world projects and won first prize in web development competition.",
      responsibilities: [
        "Developed web applications using modern frameworks",
        "Worked on both frontend and backend components",
        "Participated in code reviews and team meetings",
        "Implemented responsive design principles",
        "Collaborated on multiple development projects"
      ],
      tech: ["JavaScript", "React", "Django", "Python", "MySQL"],
      icon: <Briefcase className="w-6 h-6" />,
      achievements: [
        "Won first prize in Web Development competition",
        "Successfully completed 10-month Full Stack Developer course",
        "Gained practical experience in SDLC and Agile methodologies"
      ]
    },
    {
      title: "JavaScript Developer Intern",
      company: "Truba Institute",
      location: "Bhopal, MP",
      duration: "21 Days",
      type: "Internship",
      description: "Intensive JavaScript internship focused on developing interactive web applications. Acquired practical skills in modern JavaScript development and web technologies.",
      responsibilities: [
        "Developed interactive web applications using JavaScript",
        "Implemented DOM manipulation and event handling",
        "Created responsive user interfaces",
        "Worked on JavaScript frameworks and libraries",
        "Participated in daily coding challenges"
      ],
      tech: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
      icon: <Users className="w-6 h-6" />,
      achievements: [
        "Successfully completed intensive JavaScript bootcamp",
        "Developed multiple interactive web applications",
        "Enhanced problem-solving and debugging skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Professional <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className={`${cardClasses} rounded-xl p-6 hover:${darkMode ? 'bg-white/10' : 'bg-white/80'} transition-all group hover:scale-[1.02]`}>
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left side - Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-500/20' : 'bg-blue-500/20'}`}>
                      {experience.icon}
                    </div>
                    <div>
                      <span className={`${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-600'} px-3 py-1 rounded-full text-xs`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-2 group-hover:${darkMode ? 'text-orange-400' : 'text-blue-600'} transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {experience.title}
                  </h3>
                  
                  <h4 className={`text-lg font-medium mb-3 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
                    {experience.company}
                  </h4>
                  
                  <div className="space-y-2 mb-4">
                    <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      <Calendar className="w-4 h-4" />
                      {experience.duration}
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`${darkMode ? 'bg-white/10 text-white/80' : 'bg-gray-100 text-gray-700'} px-2 py-1 rounded text-xs`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Right side - Details */}
                <div className="lg:w-2/3">
                  <p className={`mb-4 text-sm leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {experience.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Responsibilities:
                    </h5>
                    <ul className={`text-sm space-y-1 ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <span className={`w-1 h-1 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-blue-500'} flex-shrink-0`}></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className={`font-semibold mb-2 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      <Award className="w-4 h-4" />
                      Key Achievements:
                    </h5>
                    <ul className={`text-sm space-y-1 ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className={`w-1 h-1 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-blue-500'} flex-shrink-0`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;