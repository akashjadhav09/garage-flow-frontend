// components/CustomDropdown.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomDropdown = ({ options = [], placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Selected Box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center px-4 py-3 bg-white rounded-lg shadow cursor-pointer border"
      >
        <span className="text-gray-700">
          {selected || placeholder}
        </span>
        <FaChevronDown className="text-gray-600" />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg z-50 border">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;