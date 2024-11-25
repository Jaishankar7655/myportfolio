import React from 'react';
import { Award, Book, Briefcase, Code, Database, Globe } from 'lucide-react';
import pic from '../assets/images/pic.jpg'

const About = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "RGPV University",
      year: "2022-2026",
      description: "Focused on core computer science concepts, web development, and software engineering principles."
    }
  ];

  const interests = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Web Development",
      description: "Building modern web applications with cutting-edge technologies"
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      title: "Backend Systems",
      description: "Designing robust and scalable backend architectures"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Full Stack Development",
      description: "Creating end-to-end solutions for complex problems"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-6 mt-10">
        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-sky-500">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={pic}
              alt="Jaishankar Prasad Jaiswal"
              className="w-48 h-48 rounded-2xl object-cover shadow-lg border-4 border-white"
            />
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Jaishankar Prasad Jaiswal
              </h1>
              <h2 className="text-2xl text-sky-600 dark:text-sky-400 mb-4">
                Full Stack Web Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                A passionate Full Stack Web Developer based in Bhopal, MP, India. 
                With expertise in frontend, backend, and database technologies, 
                I create innovative, user-centric web solutions. My goal is to 
                develop scalable, high-performance applications while continuously 
                expanding my technical knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Book className="w-5 h-5 text-blue-500" />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h4>
                    <p className="text-blue-600">{edu.field}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Interests */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-500" />
            Professional Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  {interest.icon}
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">{interest.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            Certifications & Achievements
          </h3>
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Full Stack Development</h4>
              <p className="text-gray-600 dark:text-gray-300">Completed comprehensive training in modern web development technologies</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Python Programming</h4>
              <p className="text-gray-600 dark:text-gray-300">Advanced certification in Python programming and web frameworks</p>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default About;
