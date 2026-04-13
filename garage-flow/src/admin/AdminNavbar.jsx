// components/AdminPanelNavbar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPanelNavbar = ({ setActivePage }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  
  const handleHomePageRoute = ()=> {
    navigate("/home")
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl">🚗</span>
            <span className="font-semibold text-lg">Logo</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
                <button onClick={() => setActivePage("dashboard")} className="text-gray-600 hover:text-blue-600">
                    Dashboard
                </button>
                <button onClick={() => setActivePage("bookings")} className="text-gray-600 hover:text-blue-600">
                    Bookings
                </button>
                <button onClick={() => setActivePage("services")} className="text-gray-600 hover:text-blue-600">
                    Services
                </button>
                <button onClick={() => setActivePage("settings")} className="text-gray-600 hover:text-blue-600">
                    Garage Setting
                </button>

            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
                    onClick={handleHomePageRoute}>
              Home
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
            <button onClick={() => setActivePage("dashboard")} className="text-left text-gray-600 hover:text-blue-600">
              Dashboard
            </button>
            <button onClick={() => setActivePage("bookings")} className="text-left text-gray-600 hover:text-blue-600">
              Bookings
            </button>
            <button onClick={() => setActivePage("services")} className="text-left text-gray-600 hover:text-blue-600">
              Services
            </button>
            <button onClick={() => setActivePage("settings")} className="text-left text-gray-600 hover:text-blue-600">
              Garage Setting
            </button>

            <button className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={handleHomePageRoute}>
              Home
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AdminPanelNavbar;