import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/Home" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/Home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
        <div className="px-4 py-2 flex flex-col space-y-3">
          <Link
            to="/Home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;