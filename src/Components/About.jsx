import React from 'react';

function About({ darkMode }) {
  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          About <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${cardClasses} rounded-2xl p-8`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>Career Objective</h3>
            <p className={`leading-relaxed ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Full Stack Web Developer seeking to leverage expertise in frontend, backend and databases 
              technologies to create innovative, user-centric web solutions. Passionate about developing 
              scalable, high-performance applications with dynamic animations while continuously expanding 
              technical knowledge.
            </p>
          </div>
          
          <div className={`${cardClasses} rounded-2xl p-8`}>
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>Current Role</h3>
            <div className="space-y-2">
              <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full Stack Web Developer</h4>
              <p className={darkMode ? 'text-white/70' : 'text-gray-600'}>Cynctech IT Solutions, Bhopal</p>
              <p className={`text-sm ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>Since September 15, 2024</p>
            </div>
            <p className={`mt-4 text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Developing and maintaining web applications using modern technologies and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;