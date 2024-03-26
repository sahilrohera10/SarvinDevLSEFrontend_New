import React, { useState } from "react";

function ViewSwitcher({ isListView = false, setIsListView = () => {} }) {
  const toggleView = () => {
    setIsListView((prevState) => !prevState);
  };

  return (
    <div className="bg-white text-gray-500 border-2 border-gray-200 rounded-full inline-flex">
      <button
        className={`inline-flex items-center bg-gray-200 transition-colors duration-200 ease-in focus:outline-none hover:text-[#f27430] focus:text-[#f27430] rounded-l-full px-4 py-2 ${
          !isListView ? "active bg-white" : ""
        }`}
        onClick={toggleView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-current w-4 h-4"
        >
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
      <button
        className={`inline-flex items-center bg-gray-200 transition-colors duration-300 ease-in focus:outline-none hover:text-[#f27430] focus:text-[#f27430] rounded-r-full px-4 py-2 ${
          isListView ? "active bg-white" : ""
        }`}
        onClick={toggleView}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fill-current w-4 h-4"
        >
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}

export default ViewSwitcher;
