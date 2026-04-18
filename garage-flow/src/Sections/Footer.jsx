import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-10 px-6 md:px-12 pt-10 pb-6">

      {/* Top – Logo */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-xl">🚗</span>
        <span className="font-bold text-lg text-gray-800">GarageFlow</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-600">

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-800 text-sm mb-3">Contact Us</h3>
          <div className="flex flex-col gap-2.5 text-sm">
            <div className="flex items-center gap-2.5">
              <FaPhone size={12} className="text-blue-500 flex-shrink-0" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FaEnvelope size={12} className="text-blue-500 flex-shrink-0" />
              <span>info@garageflow.com</span>
            </div>
            <div className="flex items-start gap-2.5">
              <FaMapMarkerAlt size={12} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <span>1234 Main St, Anytown, IN</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 text-sm mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {["Home", "Services", "About Us", "Contact"].map((l) => (
              <li key={l} className="hover:text-blue-600 cursor-pointer transition-colors">{l}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-800 text-sm mb-3">Our Services</h3>
          <ul className="flex flex-col gap-2 text-sm">
            {["Oil Change", "Brake Repair", "Car Wash", "Tire Services"].map((s) => (
              <li key={s} className="hover:text-blue-600 cursor-pointer transition-colors">{s}</li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-gray-800 text-sm mb-3">Stay Updated</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 mb-2"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all text-white text-sm font-semibold py-2 rounded-lg">
            Subscribe
          </button>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-6" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <div className="flex gap-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-600 transition-colors" />
          <FaTwitter   className="cursor-pointer hover:text-sky-500 transition-colors" />
          <FaYoutube   className="cursor-pointer hover:text-red-500 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors" />
        </div>
        <p>© 2024 GarageFlow. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;