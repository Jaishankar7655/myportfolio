import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Hero({ darkMode }) {
  return (
    <section className="h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className={`inline-flex items-center mt-[200px] md:mt-0 ${darkMode ? 'bg-white/10' : 'bg-gray-900/10'} backdrop-blur-md rounded-full px-4 py-2 mb-6 border ${darkMode ? 'border-white/20' : 'border-gray-200/20'}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className={`${darkMode ? 'text-white/80' : 'text-gray-700'} text-sm`}>Available for Hire</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="block">Jaishankar</span>
            <span className={`block text-transparent bg-clip-text ${darkMode ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'}`}>
              Prasad Jaiswal
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
            Full Stack Web Developer
          </p>
          
          <p className={`text-lg mb-12 max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
            Passionate about creating innovative, user-centric web solutions with expertise in 
            frontend, backend, and database technologies. Building scalable applications with 
            dynamic animations and modern technologies.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
          <span>📍 Bhopal, MP, India</span>
          <span>📧 jaishankar7655@gmail.com</span>
          <span>📱 +91 9131705898</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/Jaishankar7655" 
             className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} px-8 py-3 rounded-full transition-all hover:scale-105 flex items-center gap-2`}>
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="https://linkedin.com/in/jaishankar-jaiswal-14253926b" 
             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all hover:scale-105 flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;