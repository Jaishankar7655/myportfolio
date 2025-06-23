import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sun, Moon, Code, Briefcase, User, Award, Mail, Phone, Github, Linkedin, Globe, ExternalLink, Server, ServerOff } from 'lucide-react';

function LandingPage() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorLightRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Three.js setup for hero section only
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: darkMode ? 0xff6b35 : 0x3b82f6,
      transparent: true,
      opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add floating code symbols
    const shapes = [];
    const symbols = ['{}', '<>', '/>', '()'];
    
    for (let i = 0; i < 8; i++) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 64;
      canvas.height = 64;
      
      context.fillStyle = darkMode ? '#ff6b35' : '#3b82f6';
      context.font = '24px monospace';
      context.textAlign = 'center';
      context.fillText(symbols[i % symbols.length], 32, 40);
      
      const texture = new THREE.CanvasTexture(canvas);
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.7 });
      const sprite = new THREE.Sprite(material);
      
      sprite.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      sprite.scale.set(0.5, 0.5, 0.5);
      
      scene.add(sprite);
      shapes.push(sprite);
    }

    camera.position.z = 5;

    // Mouse move and cursor light effect
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Update cursor light position
      if (cursorLightRef.current) {
        cursorLightRef.current.style.left = event.clientX + 'px';
        cursorLightRef.current.style.top = event.clientY + 'px';
      }
    };

    // Scroll handler
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Only animate if in hero section
      if (window.scrollY < window.innerHeight) {
        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;
        particlesMesh.rotation.x += mouseRef.current.y * 0.00005;
        particlesMesh.rotation.y += mouseRef.current.x * 0.00005;

        shapes.forEach((shape, index) => {
          shape.rotation.z += 0.005;
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.0005;
          shape.position.x += Math.cos(Date.now() * 0.001 + index) * 0.0005;
        });

        camera.position.x += (mouseRef.current.x * 0.3 - camera.position.x) * 0.03;
        camera.position.y += (mouseRef.current.y * 0.3 - camera.position.y) * 0.03;
      }

      renderer.render(scene, camera);
    };

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [darkMode]);

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

  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "C++", "Shell"], color: "bg-blue-500" },
    { category: "Frontend", items: ["HTML", "CSS", "React", "Tailwind", "GSAP"], color: "bg-green-500" },
    { category: "Backend", items: ["Django", "REST API", "Serializer"], color: "bg-purple-500" },
    { category: "Database", items: ["SQL", "MySQL"], color: "bg-yellow-500" },
    { category: "Tools", items: ["Git", "GitHub", "VScode", "Linux"], color: "bg-red-500" },
    { category: "AWS", items: ["EC2", "S3", "VPC", "RDS", "Lambda"], color: "bg-orange-500" }
  ];

  const navigationSections = [
    { id: "about", icon: <User className="w-4 h-4" />, label: "About" },
    { id: "skills", icon: <Code className="w-4 h-4" />, label: "Skills" },
    { id: "projects", icon: <Briefcase className="w-4 h-4" />, label: "Projects" },
    { id: "academic", icon: <Award className="w-4 h-4" />, label: "Academic" },
    { id: "experience", icon: <Award className="w-4 h-4" />, label: "Experience" }
  ];

  const getCurrentSection = () => {
    const sections = ['about', 'skills', 'projects', 'academic', 'experience'];
    const scrollPosition = scrollY + 200;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element && element.offsetTop <= scrollPosition) {
        return i;
      }
    }
    return 0;
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClasses = darkMode 
    ? "bg-gray-900 text-white"
    : "bg-gray-50 text-gray-900";

  const cardClasses = darkMode
    ? "bg-white/5 backdrop-blur-md border border-white/10"
    : "bg-white backdrop-blur-md border border-gray-200 shadow-lg";

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Cursor Light Effect */}
      <div 
        ref={cursorLightRef}
        className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-screen"
        style={{
          background: darkMode 
            ? 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(255,107,53,0.05) 30%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 30%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(1px)'
        }}
      />

      {/* Three.js Background - Only for Hero */}
      <div 
        ref={mountRef} 
        className="fixed top-0 left-0 w-full h-screen -z-10"
        style={{ 
          background: darkMode 
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
          clipPath: scrollY > 100 ? 'polygon(0 0, 100% 0, 100% 0, 0 0)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
      />

      {/* Left Side Navigation Scroller */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {navigationSections.map((section, index) => (
            <a
              key={index}
              href={`#${section.id}`}
              className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                getCurrentSection() === index
                  ? `${darkMode ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-gradient-to-br from-blue-500 to-indigo-500'} scale-110 shadow-lg`
                  : `${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/80 hover:bg-white'} hover:scale-105`
              }`}
            >
              <div className={`${getCurrentSection() === index ? 'text-white' : darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                {section.icon}
              </div>
              
              {/* Tooltip */}
              <div className={`absolute left-16 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-gray-900 text-white'
              }`}>
                {section.label}
              </div>
            </a>
          ))}
        </div>
      </div>


      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-black/10' : 'bg-white/10'} backdrop-blur-xl border-b ${darkMode ? 'border-white/5' : 'border-gray-200/20'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className={darkMode ? "text-orange-500" : "text-blue-500"}>JSK</span>
              <span className={darkMode ? "text-white" : "text-gray-900"}>Dev</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>About</a>
              <a href="#skills" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Skills</a>
              <a href="#projects" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Projects</a>
              <a href="#academic" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Academic</a>
              <a href="#experience" className={`${darkMode ? 'text-white/70 hover:text-orange-500' : 'text-gray-600 hover:text-blue-500'} transition-colors`}>Experience</a>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} transition-all`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
             
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
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
                 className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} text-white px-8 py-3 rounded-full transition-all hover:scale-105 flex items-center gap-2`}>
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

        {/* Rest of the page */}
        <div className={themeClasses}>
          {/* About Section */}
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

          {/* Skills Section */}
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

          {/* Industrial Projects Section */}
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

          {/* Academic Projects Section */}
          <section id="academic" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-gray-100'}`}>
            <div className="max-w-6xl mx-auto">
              <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Academic <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Projects</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {academicProjects.map((project, index) => (
                  <div key={index} className={`${cardClasses} rounded-xl p-6 hover:${darkMode ? 'bg-white/10' : 'bg-white/80'} transition-all group hover:scale-105`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-500/20' : 'bg-red-500/20'}`}>
                        {project.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`${darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-500/20 text-red-600'} px-3 py-1 rounded-full text-xs`}>
                          {project.status}
                        </span>
                        <span className={`${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-600'} px-3 py-1 rounded-full text-xs`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
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
                    
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-red-400' : 'text-red-600'} text-sm`}>
                      <ServerOff className="w-4 h-4" />
                      <span>Server is currently offline</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Experience & <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Education</span>
              </h2>
              
              <div className="space-y-8">
                {/* Current Job */}
                <div className={`${cardClasses} rounded-xl p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full Stack Web Developer</h3>
                      <p className={darkMode ? 'text-orange-400' : 'text-blue-600'}>Cynctech IT Solutions, Bhopal</p>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">Current</span>
                  </div>
                  <p className={`mb-2 ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Since September 15, 2024</p>
                  <p className={darkMode ? 'text-white/70' : 'text-gray-600'}>Developing and maintaining web applications using modern technologies.</p>
                </div>

                {/* Internships */}
                <div className={`${cardClasses} rounded-xl p-6`}>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Internships</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full Stack Web Developer Intern</h4>
                      <p className={`text-sm ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>Netligent Technology Pvt Ltd (3 months)</p>
                      <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Gained hands-on experience in full stack development</p>
                    </div>
                    <div>
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>JavaScript Intern</h4>
                      <p className={`text-sm ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>Truba Institute, Bhopal (21 days)</p>
                      <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Acquired practical JavaScript skills, developing interactive web applications</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className={`${cardClasses} rounded-xl p-6`}>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
                  <div>
                    <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>B.Tech in Computer Science</h4>
                    <p className={`text-sm ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>Truba Institute of Engineering and Information Technology</p>
                    <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>CGPA: 7.5</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className={`${cardClasses} rounded-xl p-6`}>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h3>
                  <ul className={`space-y-2 ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                    <li>🏆 Won first prize in Web-development at Netligent Technology</li>
                    <li>🎯 Actively engaged in hackathons with excellence in problem-solving</li>
                    <li>🏃‍♂️ Sports enthusiast with leadership in kabaddi</li>
                    <li>💼 Completed Full Stack Developer course at Netligent Technology (10 Months)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-gray-100'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's <span className={darkMode ? "text-orange-500" : "text-blue-500"}>Connect</span>
              </h2>
              <p className={`mb-12 max-w-2xl mx-auto ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
                Ready to bring your ideas to life with modern web technologies. 
                Let's discuss your next project!
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:jaishankar7655@gmail.com" 
                   className={`${darkMode ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'} text-white px-8 py-4 rounded-full hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2`}>
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a href="tel:+919131705898" 
                   className={`${darkMode ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20' : 'bg-white backdrop-blur-md border border-gray-200 text-gray-900 hover:bg-gray-50'} px-8 py-4 rounded-full transition-all flex items-center gap-2`}>
                  <Phone className="w-4 h-4" />
                  Call Me
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className={`py-8 border-t ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <p className={darkMode ? 'text-white/50' : 'text-gray-500'}>
                © 2024 Jaishankar Prasad Jaiswal. Built with React & Three.js
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
    );

}
export default LandingPage