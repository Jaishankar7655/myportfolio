import React from 'react';
import { User, MapPin, Mail, Phone, Github, Linkedin, Globe, Award, Code, Heart } from 'lucide-react';

const AboutSection = ({ darkMode }) => {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Bhopal, MP, India" },
    { icon: <Mail className="w-4 h-4" />, label: "Email", value: "jaishankar7655@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+91 9131705898" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", url: "https://linkedin.com/in/jaishankar-jaiswal-14253926b" },
    { icon: <Github className="w-4 h-4" />, label: "GitHub", url: "https://github.com/Jaishankar7655" },
   
  ];

  const achievements = [
    "Won first prize in Web Development at Netligent Technology",
    "B.Tech in Computer Science with CGPA: 7.5",
    "Successfully completed 10-month Full Stack Developer course",
    "Active participant in hackathons and coding competitions",
    "Sports enthusiast with leadership experience in kabaddi"
  ];

  const coreCompetencies = [
    "Full Stack Web Development",
    "API Development & Integration",
    "Database Design & Management",
    "Performance Optimization",
    "Agile Methodologies",
    "Problem Solving & Debugging"
  ];

  const personalQualities = [
    "Analytical thinking",
    "Collaborative team player",
    "Strong leadership skills",
    "Excellent communication",
    "Highly adaptable",
    "Continuous learner"
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          About <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Me</span>
        </h2>
        
        {/* Main Introduction */}
        <div className={`${cardClasses} rounded-2xl p-8 mb-8`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-500/20' : 'bg-blue-500/20'}`}>
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Jaishankar Prasad Jaiswal
              </h3>
              <p className={`${darkMode ? 'text-orange-400' : 'text-blue-600'} font-medium`}>
                Full Stack Web Developer
              </p>
            </div>
          </div>
          
          <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
            Passionate Full Stack Web Developer with expertise in modern web technologies, seeking to leverage 
            skills in frontend, backend, and database technologies to create innovative, user-centric web solutions. 
            Dedicated to developing scalable, high-performance applications with dynamic animations while 
            continuously expanding technical knowledge and staying current with industry trends.
          </p>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
                  {contact.icon}
                </div>
                <div>
                  <p className={`text-xs ${darkMode ? 'text-white/50' : 'text-gray-400'}`}>
                    {contact.label}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  darkMode 
                    ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30' 
                    : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30'
                }`}
              >
                {social.icon}
                <span className="text-sm font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Current Role and Career Objective */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className={`${cardClasses} rounded-2xl p-8`}>
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
              <Code className="w-5 h-5" />
              Current Role
            </h3>
            <div className="space-y-3">
              <h4 className={`font-medium text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Full Stack Web Developer
              </h4>
              <p className={darkMode ? 'text-white/70' : 'text-gray-600'}>
                Cynctech IT Solutions, Bhopal
              </p>
              <p className={`text-sm ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
                Since September 15, 2024
              </p>
              <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Developing and maintaining web applications using modern technologies including React, 
                Django, and various databases. Working on client projects with focus on performance, 
                scalability, and user experience.
              </p>
            </div>
          </div>
          
          <div className={`${cardClasses} rounded-2xl p-8`}>
            <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
              <Heart className="w-5 h-5" />
              What Drives Me
            </h3>
            <p className={`leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              I'm passionate about creating innovative web solutions that make a real difference. 
              My goal is to build scalable, high-performance applications that not only meet technical 
              requirements but also provide exceptional user experiences. I believe in continuous 
              learning and staying updated with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>
        </div>

        {/* Core Competencies and Personal Qualities */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className={`${cardClasses} rounded-2xl p-8`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
              Core Competencies
            </h3>
            <div className="space-y-2">
              {coreCompetencies.map((competency, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-orange-400' : 'bg-blue-500'}`}></span>
                  <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {competency}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${cardClasses} rounded-2xl p-8`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
              Personal Qualities
            </h3>
            <div className="space-y-2">
              {personalQualities.map((quality, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-orange-400' : 'bg-blue-500'}`}></span>
                  <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    {quality}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className={`${cardClasses} rounded-2xl p-8`}>
          <h3 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
            <Award className="w-5 h-5" />
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${darkMode ? 'bg-orange-400' : 'bg-blue-500'} flex-shrink-0`}></div>
                <span className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;