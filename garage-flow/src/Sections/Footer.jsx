import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl mx-6 my-10 px-8 pt-14 pb-8 relative overflow-hidden">

      {/* Top Logo */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-6 bg-blue-900 rounded-full relative">
            <div className="absolute inset-1 bg-red-500 rounded-full"></div>
          </div>
          <h1 className="text-2xl font-semibold text-blue-900">Logo</h1>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-blue-900">

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaPhone size={14} />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={14} />
              <span>info@garage.com</span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt size={14} />
              <span>1234 Main St,<br />Anytown, USA</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Our Services</h2>
          <ul className="space-y-3 text-sm">
            <li>Oil Change</li>
            <li>Brake Repair</li>
            <li>Car Wash</li>
            <li>Tire Services</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Subscribe</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:outline-none mb-4"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
            Subscribe
          </button>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-blue-300 my-8"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-900 gap-4">

        {/* Social Icons */}
        <div className="flex gap-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaTwitter className="cursor-pointer hover:text-blue-600" />
          <FaYoutube className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-blue-600" />
        </div>

        {/* Copyright */}
        <p>© 2024 Garage. All rights reserved.</p>
      </div>

      {/* Decorative Images (Optional) */}
      <img
        src="/car-left.png"
        alt="car-left"
        className="hidden md:block absolute bottom-0 left-0 w-40 opacity-90"
      />
      <img
        src="/car-right.png"
        alt="car-right"
        className="hidden md:block absolute bottom-0 right-0 w-48 opacity-90"
      />

    </footer>
  );
};

export default Footer;