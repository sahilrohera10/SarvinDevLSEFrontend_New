"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function SortByComponent() {
  const [selectedOption, setSelectedOption] = useState("Popular");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const options = [
    "Popular",
    "Relevant",
    "Distance",
    "A-Z",
    "Rating",
    "Recently Joined",
    "Experience",
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className={
          "flex w-160 h-37 flex-shrink-0 items-center space-x-1 cursor-pointer border border-solid border-indigo-500 px-2 py-1 bg-white "
        }
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="text-gray-600 text-xs ">Sort By</span>
        <span className={`text-sm text-black font-bold`}>{selectedOption}</span>
        <FiChevronDown
          className={`ml-2 text-black ${
            dropdownOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>

      {dropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option}
                className={`${
                  selectedOption === option
                    ? "font-bold text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                } block px-4 py-2 text-sm cursor-pointer`}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
