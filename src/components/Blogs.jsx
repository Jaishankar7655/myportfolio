import React, { useState } from "react";
import billing from "../assets/Images/billing.png";
import country from "../assets/Images/country.png";
import ecommerce from "../assets/Images/ecommerce.png";
import quiz from "../assets/Images/quiz.png";
import todo from "../assets/Images/To-do list.png";
import truba from "../assets/Images/truba.png";

const BlogProjects = () => {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A comprehensive platform with fully integrated frontend, backend, and database. Features include OTP-based registration, validation, user authentication, and a seamless payment system.",
      tech: ["React", "Django", "MySQL", "REST API"],
      features: [
        "User authentication system",
        "OTP-based registration",
        "Product catalog management",
        "Secure payment integration",
        "Order tracking system",
      ],
      category: "Full Stack",
      images: [ecommerce, billing],
    },
    {
      title: "Country Information Website",
      description:
        "A real-time data platform built with frontend and backend REST API integration, providing detailed information about countries worldwide.",
      tech: ["React", "REST API", "Tailwind CSS"],
      features: [
        "Real-time data fetching",
        "Interactive country search",
        "Detailed country statistics",
        "Responsive design",
      ],
      category: "Frontend",
      images: [country],
    },
    {
      title: "Quiz Website",
      description:
        "An interactive quiz platform engineered using HTML, CSS, and JavaScript, offering engaging learning experiences.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Multiple quiz categories",
        "Score tracking",
        "Timer functionality",
        "Results analysis",
      ],
      category: "Frontend",
      images: [quiz],
    },
    {
      title: "Stationary Management System",
      description:
        "A comprehensive inventory and payment management platform for stationary businesses.",
      tech: ["HTML", "CSS", "JavaScript", "MySQL"],
      features: [
        "Inventory tracking",
        "Payment processing",
        "Stock management",
        "Sales reporting",
      ],
      category: "Full Stack",
      images: [billing],
    },
    {
      title: "Event Management System",
      description:
        "A startup project developing a unique platform for vendors and service providers in event management. Currently in development with 50% frontend completion.",
      tech: ["React", "Django", "Tailwind CSS"],
      features: [
        "Vendor management",
        "Service provider listings",
        "Event planning tools",
        "Booking system",
      ],
      category: "In Progress",
      images: [truba, todo],
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6 relative top-10">
          {/* Dark Mode Toggle */}
          {/* Header Section */}
          <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm border-l-4 border-sky-500">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
              My Projects
            </h1>
            <p className="text-sky-600 dark:text-sky-400 text-lg">
              Showcasing my journey through web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border-l-4 border-sky-500 hover:shadow-md transition-shadow"
              >
                <div className="md:flex">
                  {/* Project Images */}
                  <div className="md:w-1/3">
                    <div className="h-48 bg-gray-100 dark:bg-gray-600 relative">
                      {project.images && project.images.length > 0 && (
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <span className="absolute top-2 right-2 bg-sky-500 text-white px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies Used:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-sky-50 dark:bg-sky-900 text-sky-600 dark:text-sky-400 px-2 py-1 rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Features:
                      </h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Additional Images */}
                    {project.images && project.images.length > 1 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Additional Images:
                        </h3>
                        <div className="flex space-x-2 overflow-x-auto">
                          {project.images.slice(1).map((img, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={img}
                              alt={`${project.title} - ${imgIndex + 2}`}
                              className="w-20 h-20 object-cover rounded"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogProjects;
