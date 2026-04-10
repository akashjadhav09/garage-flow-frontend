// components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🚗</span>
            <span className="font-semibold text-lg">Logo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    Home
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    Services
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    About Us
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                    Contact
                </a>

            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>

            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;