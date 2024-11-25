import React, { useState, useEffect } from 'react';
import { Book, Briefcase, Code, Database, Globe, Award } from 'lucide-react';

const Services = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development utilizing modern frontend and backend technologies. Creating scalable solutions with React, Django, and robust databases.",
      features: [
        "Custom Web Applications",
        "RESTful API Development",
        "Database Design & Integration",
        "Responsive UI/UX Implementation"
      ],
      borderColor: "border-sky-500"
    },
    {
      title: "Frontend Development",
      description: "Creating engaging user interfaces with modern frameworks and libraries. Specializing in responsive design and interactive user experiences.",
      features: [
        "React Applications",
        "HTML5/CSS3 Development",
        "Tailwind CSS Styling",
        "GSAP Animations"
      ],
      borderColor: "border-blue-500"
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications with Django. Implementing secure authentication, data management, and API integrations.",
      features: [
        "Django Framework",
        "REST API Development",
        "Database Management",
        "Authentication Systems"
      ],
      borderColor: "border-indigo-500"
    },
    {
      title: "E-commerce Solutions",
      description: "Developing comprehensive e-commerce platforms with integrated payment systems, product management, and user authentication.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Shopping Cart Implementation",
        "Order Processing Systems"
      ],
      borderColor: "border-purple-500"
    },
    {
      title: "Web Application Maintenance",
      description: "Providing ongoing support and maintenance for web applications, ensuring optimal performance and security.",
      features: [
        "Performance Optimization",
        "Security Updates",
        "Bug Fixing",
        "Feature Enhancement"
      ],
      borderColor: "border-violet-500"
    },
    {
      title: "Custom Solutions",
      description: "Developing tailored solutions for specific business needs, from content management systems to specialized tools.",
      features: [
        "Custom CMS Development",
        "Integration Services",
        "Business Process Automation",
        "Technical Consulting"
      ],
      borderColor: "border-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto mt-10">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-sky-500 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            My Services
          </h1>
          <p className="text-sky-600 dark:text-sky-400 text-lg">
            Comprehensive Web Development Solutions
          </p>
          <button onClick={toggleDarkMode} className="mt-4 text-blue-500">
            Toggle Dark Mode
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 ${service.borderColor} hover:shadow-md transition-shadow`}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-indigo-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
            Let's Work Together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Looking for a custom solution for your project? I'm here to help turn your ideas into reality.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:jaishankar7655@gmail.com"
              className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://jaishankar-port.netlify.app"
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full mt-6"></div>
      </div>
    </div>
  );
};

export default Services;
