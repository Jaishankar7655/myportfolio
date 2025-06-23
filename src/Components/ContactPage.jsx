import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

function ContactPage() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorLightRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Three.js setup for animated background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const shapes = [];
    const geometries = [
      new THREE.SphereGeometry(0.1, 8, 6),
      new THREE.BoxGeometry(0.15, 0.15, 0.15),
      new THREE.ConeGeometry(0.1, 0.2, 6),
      new THREE.OctahedronGeometry(0.12)
    ];

    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.1 + Math.random() * 0.1, 0.7, 0.5),
        transparent: true,
        opacity: 0.6,
        wireframe: Math.random() > 0.5
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      
      mesh.userData = {
        initialPosition: mesh.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        }
      };
      
      scene.add(mesh);
      shapes.push(mesh);
    }

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xff6b35,
      transparent: true,
      opacity: 0.4
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 8;

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      if (cursorLightRef.current) {
        cursorLightRef.current.style.left = event.clientX + 'px';
        cursorLightRef.current.style.top = event.clientY + 'px';
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate particles
      particlesMesh.rotation.x += 0.0002;
      particlesMesh.rotation.y += 0.0003;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Floating motion
        shape.position.y = shape.userData.initialPosition.y + Math.sin(Date.now() * 0.001 + index) * 0.5;
        shape.position.x = shape.userData.initialPosition.x + Math.cos(Date.now() * 0.0008 + index) * 0.3;
      });

      // Camera movement based on mouse
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.02;

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
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "jaishankar7655@gmail.com",
      href: "mailto:jaishankar7655@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9131705898",
      href: "tel:+919131705898",
      description: "Call me for urgent matters"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bhopal, MP, India",
      href: "#",
      description: "Available for local meetups"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/Jaishankar7655",
      color: "hover:bg-gray-700"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://linkedin.com/in/jaishankar-jaiswal-14253926b",
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <>
      {/* Cursor Light Effect */}
      <div 
        ref={cursorLightRef}
        className="fixed w-96 h-96 pointer-events-none z-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(255,107,53,0.05) 30%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(1px)'
        }}
      />

      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)'
        }}
      />

      {/* Navigation */}
      

      {/* Main Content */}
      <div className="relative z-10 min-h-screen pt-20">
        {/* Header Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-white/80 text-sm">Ready to Collaborate</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Connect</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Want to discuss opportunities? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={index}
                    href={method.href}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group hover:scale-105 hover:border-orange-500/30"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                      <p className="text-orange-400 font-medium mb-2">{method.value}</p>
                      <p className="text-white/60 text-sm">{method.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Social Links */}
        <section id="contact" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Send me a <span className="text-orange-500">Message</span>
                  </h2>
                  <p className="text-white/70">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                {isSubmitted && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center space-x-3">
                    <CheckCircle className="text-green-400" size={20} />
                    <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-white/40" size={20} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      required
                      rows="6"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all resize-vertical"
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Links & Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Connect on <span className="text-orange-500">Social</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all group ${social.color}`}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent size={20} className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{social.title}</h4>
                            <p className="text-white/60 text-sm">Follow my work and projects</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Quick Info</h4>
                  <div className="space-y-3 text-white/70">
                    <p>🕒 <strong>Response Time:</strong> Usually within 24 hours</p>
                    <p>🌍 <strong>Timezone:</strong> IST (GMT+5:30)</p>
                    <p>💼 <strong>Availability:</strong> Open for new projects</p>
                    <p>🚀 <strong>Speciality:</strong> Full Stack Web Development</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Ready to Start?</h4>
                  <p className="text-white/70 mb-6">
                    Let's discuss your project requirements and bring your ideas to life with modern web technologies.
                  </p>
                  <a
                    href="tel:+919131705898"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:scale-105"
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        {/* Footer */}
        <footer className="py-12 border-t border-white/10 mt-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-6">
              <div className="text-2xl font-bold text-white mb-2">
                <span className="text-orange-500">JSK</span>
                <span className="text-white">Dev</span>
              </div>
              <p className="text-white/60">Full Stack Web Developer</p>
            </div>
            <p className="text-white/50">
              © 2024 Jaishankar Prasad Jaiswal. Built with React & Three.js
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default ContactPage;