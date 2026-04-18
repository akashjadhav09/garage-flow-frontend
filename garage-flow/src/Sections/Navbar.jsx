// components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen]                   = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const navigate = useNavigate();

  const handleAdminPanelRoute = () => { navigate("/adminPanel"); setIsAdminPanelOpen(true); };
  const handleSignInRoute     = () => navigate("/");

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm ${isAdminPanelOpen ? "hidden" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg">🚗</span>
            <span className="font-bold text-base text-gray-800">Logo</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Services</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">About Us</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>

            <button
              onClick={handleAdminPanelRoute}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Admin
            </button>

            <button
              onClick={handleSignInRoute}
              className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow-sm"
            >
              Login
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 shadow-md">
          <div className="flex flex-col gap-3 pt-3">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 font-medium py-1">Services</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 font-medium py-1">About Us</a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 font-medium py-1">Contact</a>
            <button onClick={handleAdminPanelRoute} className="text-left text-sm text-gray-600 hover:text-blue-600 font-medium py-1">Admin</button>
            <button
              onClick={handleSignInRoute}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors mt-1"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;