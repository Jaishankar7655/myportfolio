import React from "react";
import { Award, Book, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6 mt-10">
        {/* Profile Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-sky-500">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Let's Connect
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Book className="w-5 h-5 text-blue-500" />
            Send a Message
          </h3>
          <form
            className="space-y-4"
            action="https://formspree.io/f/movaqrrz"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                >
                  Your Name
                </label>
                <input
                  name="Name"
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded focus:outline-none focus:border-sky-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  name="Email"
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded focus:outline-none focus:border-sky-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
              
                htmlFor="subject"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded focus:outline-none focus:border-sky-500"
                placeholder="Project Discussion"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                name="message"
                className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 rounded focus:outline-none focus:border-sky-500"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-2 rounded hover:bg-sky-600 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Information Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-green-500" />
            Direct Contact
          </h3>
          <div className="space-y-3">
            <a
              href="mailto:jaishankar7655@gmail.com"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors"
            >
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mr-3">
                ✉️
              </span>
              jaishankar7655@gmail.com
            </a>
            <a
              href="tel:+919131705898"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors"
            >
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mr-3">
                📞
              </span>
              +91 9131705898
            </a>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mr-3">
                📍
              </span>
              Bhopal, MP, India
            </div>
          </div>
        </div>

        {/* Online Presence Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            Connect Online
          </h3>
          <div className="space-y-3">
            <a
              href="https://linkedin.com/in/jaishankar-jaiswal-14253926b"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors"
            >
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mr-3">
                💼
              </span>
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/Jaishankar7655"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors"
            >
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mr-3">
                🔗
              </span>
              GitHub Profile
            </a>
            <a
              href="https://jaishankar-port.netlify.app"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-sky-600 transition-colors"
            >
              <span className="w-8 h-8 bg-sky-100 dark:bg-sky-800 rounded-full flex items-center justify-center mr-3">
                🌐
              </span>
              Portfolio Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
