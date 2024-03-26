import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.css"; // Import your CSS file
import { FaChevronDown } from "react-icons/fa";
import Modal from "../modal";

const Dropdown = ({ text = "Title", children, modalView = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  if (modalView) {
    return (
      <div className="dropdown-wrapper">
        <button
          className=" flex dropdown-btn text-center justify-center gap-2"
          onClick={toggleDropdown}
        >
          {text} <FaChevronDown />
        </button>
        <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
          <div
            style={{
              backgroundColor: "#fff",
              height: "80vh",
            }}
          >
            <Modal openModal={isOpen} setOpenModal={setIsOpen} animation="four">
              {children}
            </Modal>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdown-wrapper">
        <button
          className=" flex dropdown-btn text-center justify-center gap-2"
          onClick={toggleDropdown}
        >
          {text} <FaChevronDown />
        </button>
        <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
          <div
            style={{
              backgroundColor: "#fff",
              height: "80vh",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
};

export default Dropdown;
