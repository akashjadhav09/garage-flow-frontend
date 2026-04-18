// components/CustomDropdown.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomDropdown = ({ options = [], placeholder, onSelect }) => {
  const [isOpen, setIsOpen]     = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full">

      {/* Trigger */}
      <div
        onClick={() => setIsOpen((o) => !o)}
        className={`flex justify-between items-center px-3 py-2.5 bg-white rounded-lg cursor-pointer border text-sm transition-colors
          ${isOpen ? "border-blue-500 ring-2 ring-blue-100" : "border-gray-300 hover:border-blue-400"}`}
      >
        <span className={selected ? "text-gray-800 font-medium" : "text-gray-400"}>
          {selected || placeholder}
        </span>
        <FaChevronDown
          className={`text-gray-400 text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-lg z-50 border border-gray-100 max-h-52 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors
                ${selected === option
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50"}`}
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