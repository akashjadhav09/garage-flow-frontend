import React from "react";

const OurGarageIntroBanner = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md px-6 md:px-10 py-8 my-2">

      <h2 className="text-lg font-bold text-gray-800 mb-5">Our Garage</h2>

      <div className="flex flex-col md:flex-row gap-6 items-start">

        {/* Left – Info */}
        <div className="flex-1 flex flex-col gap-3">

          {/* Address */}
          <div className="flex items-start gap-3">
            <span className="text-blue-600 mt-0.5 text-base">📍</span>
            <div>
              <p className="text-sm font-medium text-gray-700">1234 Main Street, Anytown, IN</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-base">📞</span>
            <p className="text-sm font-medium text-gray-700">Call Us : <span className="font-semibold">9876643710</span></p>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-base">🕐</span>
            <p className="text-sm font-medium text-gray-700">Open : Mon-Sat: 9 AM – 7 PM</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-3 max-w-[180px]">
            <button className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:scale-[0.98] transition-all text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow">
              📞 Call Now
            </button>
            <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:scale-[0.98] transition-all text-white font-semibold py-2.5 px-4 rounded-lg text-sm shadow">
              💬 WhatsApp Us
            </button>
          </div>
        </div>

        {/* Right – Map placeholder */}
        <div className="flex-1 min-h-[160px] rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center">
          <iframe
            title="Garage Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sin!4v1234567890"
            className="w-full h-40 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default OurGarageIntroBanner;