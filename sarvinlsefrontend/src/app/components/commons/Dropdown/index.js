import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.css"; // Import your CSS file

const Dropdown = ({ text = "Title", options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-wrapper">
      <button
        className=" flex dropdown-btn text-center justify-center"
        onClick={toggleDropdown}
      >
        {text}
      </button>
      <ul className={`dropdown-content ${isOpen ? "open" : ""}`}>
        <li key="1" onClick={() => console.log(option)}>
          vfvf
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
