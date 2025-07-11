import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here (e.g., emailjs, API call)
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center px-4 py-12 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="w-full max-w-lg bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Contact <span className={darkMode ? 'text-orange-500' : 'text-blue-500'}>Me</span>
        </h2>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold">
            Thank you for reaching out! I will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                darkMode
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;