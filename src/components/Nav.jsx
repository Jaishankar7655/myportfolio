import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Home, Info, Briefcase, Book, Mail } from "lucide-react";

const NavLink = ({ to, children, icon: Icon, toggleMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "bg-indigo-700 text-white"
          : "text-gray-300 hover:bg-indigo-600 hover:text-white"
      }`}
      onClick={() => {
        if (window.innerWidth < 768) {
          toggleMenu();
        }
      }}
    >
      <Icon className="mr-2 h-5 w-5" />
      {children}
    </Link>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-indigo-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-200 transition-colors duration-200">
              My Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" icon={Home} toggleMenu={toggleMenu}>Home</NavLink>
              <NavLink to="/about" icon={Info} toggleMenu={toggleMenu}>About</NavLink>
              <NavLink to="/services" icon={Briefcase} toggleMenu={toggleMenu}>Services</NavLink>
              <NavLink to="/blogs" icon={Book} toggleMenu={toggleMenu}>Blogs</NavLink>
              <NavLink to="/contact" icon={Mail} toggleMenu={toggleMenu}>Contact Us</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" icon={Home} toggleMenu={toggleMenu}>Home</NavLink>
            <NavLink to="/about" icon={Info} toggleMenu={toggleMenu}>About</NavLink>
            <NavLink to="/services" icon={Briefcase} toggleMenu={toggleMenu}>Services</NavLink>
            <NavLink to="/blogs" icon={Book} toggleMenu={toggleMenu}>Blogs</NavLink>
            <NavLink to="/contact" icon={Mail} toggleMenu={toggleMenu}>Contact Us</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
