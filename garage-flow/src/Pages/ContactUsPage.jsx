import React from "react";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md px-6 md:px-10 py-8 my-2">

      <h2 className="text-lg font-bold text-gray-800 mb-5">Contact Us</h2>

      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Left – Info */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-700">1234 Main Street, Anytown, IN</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-blue-600 flex-shrink-0 text-sm" />
            <p className="text-sm text-gray-700">Call Us : <span className="font-semibold">9548889666</span></p>
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-blue-600 flex-shrink-0 text-sm" />
            <p className="text-sm text-gray-700">Open : <span className="font-semibold">Mon – Sat: 10AM – 8PM</span></p>
          </div>

          <div className="flex flex-col gap-2 mt-3 max-w-[180px]">
            <button className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:scale-[0.98] transition-all text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow">
              <FaPhone size={12} /> Call Us
            </button>
            <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow">
              <FaWhatsapp size={14} /> WhatsApp Us
            </button>
          </div>
        </div>

        {/* Right – Map embed */}
        <div className="flex-1 min-h-[160px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Contact Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sin!4v1234567890"
            className="w-full h-44 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUsPage;