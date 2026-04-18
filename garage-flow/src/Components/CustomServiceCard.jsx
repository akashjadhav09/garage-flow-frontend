import React from "react";

const CustomServiceCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100 flex flex-col items-center text-center cursor-pointer group">

      {/* Image */}
      <div className="w-full h-24 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="py-3 px-3">
        <h3 className="text-xs font-semibold text-blue-900">{title}</h3>
        <p className="text-sm font-bold text-gray-800 mt-0.5">{price}</p>
      </div>
    </div>
  );
};

export default CustomServiceCard;