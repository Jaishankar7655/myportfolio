import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = ({ darkMode }) => {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorLightRef = useRef(null);

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
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <>
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

      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="fixed top-0 left-0 w-full h-screen -z-10"
        style={{ 
          background: darkMode 
            ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
        }}
      />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl md:max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className={`inline-flex items-center mt-32 md:mt-0 ${darkMode ? 'bg-white/10' : 'bg-gray-900/10'} backdrop-blur-md rounded-full px-4 py-2 mb-6 border ${darkMode ? 'border-white/20' : 'border-gray-200/20'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className={`${darkMode ? 'text-white/80' : 'text-gray-700'} text-xs sm:text-sm`}>Available for Hire</span>
            </div>
            
            <h1 className={`font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'} text-3xl sm:text-5xl md:text-7xl`}>
              <span className="block">Jaishankar</span>
              <span className={`block text-transparent bg-clip-text ${darkMode ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-indigo-500'}`}>
                Prasad Jaiswal
              </span>
            </h1>
            
            <p className={`text-lg sm:text-xl md:text-2xl mb-8 ${darkMode ? 'text-orange-400' : 'text-blue-600'}`}>
              Full Stack Web Developer
            </p>
            
            <p className={`text-base sm:text-lg mb-12 max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-white/60' : 'text-gray-600'}`}>
              Passionate about creating innovative, user-centric web solutions with expertise in 
              frontend, backend, and database technologies. Building scalable applications with 
              dynamic animations and modern technologies.
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 ${darkMode ? 'text-white/60' : 'text-gray-600'} text-xs sm:text-base`}>
            <span>📍 Bhopal, MP, India</span>
            <span>📧 jaishankar7655@gmail.com</span>
            <span>📱 +91 9131705898</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="https://github.com/Jaishankar7655" 
               className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'} text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base`}>
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/jaishankar-jaiswal-14253926b" 
               className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;