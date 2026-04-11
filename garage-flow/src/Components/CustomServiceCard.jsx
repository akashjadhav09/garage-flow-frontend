import React from "react";

const CustomServiceCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-44 hover:shadow-lg transition duration-300 border">

      {/* Image */}
      <div className="flex justify-center mb-3">
        <img
          src={image}
          alt={title}
          className="w-24 h-16 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-center text-blue-900 font-semibold">
        {title}
      </h3>

      {/* Price */}
      <p className="text-center text-gray-700 font-medium mt-1">
        {price}
      </p>
    </div>
  );
};

export default CustomServiceCard;