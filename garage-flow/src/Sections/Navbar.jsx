// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { label: "Services",  href: "#services"  },
  { label: "About Us",  href: "#garage"    },
  { label: "Contact",   href: "#contact"   },
];

const Navbar = () => {
  const [open, setOpen]               = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  // Shrink navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section while scrolling
  useEffect(() => {
    const sectionIds = ["home", "services", "add-vehicle", "book-service", "bookings", "garage", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const linkClass = (href) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return `text-sm font-medium transition-colors cursor-pointer ${
      isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
    }`;
  };

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-200 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 focus:outline-none"
          >
            <span className="text-lg">🚗</span>
            <span className="font-bold text-base text-gray-800">Logo</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={linkClass(link.href)}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => navigate("/adminPanel")}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Admin
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white text-sm font-semibold px-4 py-1.5 rounded-lg shadow-sm"
            >
              Login
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden bg-white border-t border-gray-100 px-5 pb-5 shadow-lg">
          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm font-medium text-gray-600 hover:text-blue-600 py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { navigate("/adminPanel"); setOpen(false); }}
              className="text-left text-sm font-medium text-gray-600 hover:text-blue-600 py-2 transition-colors"
            >
              Admin
            </button>
            <button
              onClick={() => navigate("/")}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
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