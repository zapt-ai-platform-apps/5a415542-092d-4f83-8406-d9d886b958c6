import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
              alt="TaskFlow Logo" 
              className="w-8 h-8" 
            />
            <span className="text-xl font-bold text-blue-600">TaskFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 text-blue-600 font-medium" 
                  : "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/tasks" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 text-blue-600 font-medium" 
                  : "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              Tasks
            </NavLink>
            <NavLink 
              to="/completed" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 text-blue-600 font-medium" 
                  : "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              Completed
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 text-blue-600 font-medium" 
                  : "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              }
              end
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/tasks" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 text-blue-600 font-medium" 
                  : "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Tasks
            </NavLink>
            <NavLink 
              to="/completed" 
              className={({ isActive }) => 
                isActive 
                  ? "px-3 py-2 text-blue-600 font-medium" 
                  : "px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Completed
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}