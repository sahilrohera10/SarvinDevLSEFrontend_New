"use client";

import React, { useState } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

// const options = [
//   { value: "option1", label: "Option 1" },
//   { value: "option2", label: "Option 2" },
//   { value: "option3", label: "Option 3" },
// ];
const filters = [
  {
    filterCategory: "Audience Age",
    filterOptions: ["18-24", "24-32", "33-40", "41-48"],
  },
  {
    filterCategory: "Brand Category",
    filterOptions: ["Clothing", "Luxary", "Electronics", "Lifestyle"],
  },
];

const Filters = ({ setOpenModal,openModal }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [isChecked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([20, 80]);
  const [filterName, setFilterName] = useState("");

  const filterHandler = (e) => {
    setFilterName(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.name in selectedOption) {
      let value = selectedOption[e.target.name];
      setSelectedOption({
        ...selectedOption,
        [e.target.name]: [...value, e.target.value],
      });
    } else {
      setSelectedOption({
        ...selectedOption,
        [e.target.name]: [e.target.value],
      });
    }
    console.log(selectedOption);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleSelectChange = (e) => {};
  const closeModal = (e) => {
    setOpenModal(!openModal);
  };

  const handleApplyFilters = () => {
    // Add logic to apply filters based on selected options, checkboxes, sliders, etc.
    console.log("Selected Option:", selectedOption);
    console.log("Checkbox State:", isChecked);
    console.log("Slider Value:", sliderValue);
  };

  return (
    <div
      id="filter-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "786px",
        gap: "32px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Filters</h2>
        <button id="closeButton" onClick={closeModal}>
          Close
        </button>
      </div>

      <div style={{ display: "flex", gap: "24px" }}>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            borderRadius: "4px",
            padding: "16px 32px 16px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "30%",
          }}
        >
          {filters.map((filter) => {
            return (
              <div style={{ marginBottom: "16px" }}>
                <button onClick={filterHandler} value={filter.filterCategory}>
                  {filter.filterCategory}
                </button>
              </div>
            );
          })}
        </div>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",

            borderRadius: "4px",
            padding: "16px 32px 16px 32px",
            width: "70%",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {filters
            .filter((filter) => {
              return filter.filterCategory == filterName;
            })
            .map((filter) => {
              return filter.filterOptions.map((option) => {
                return (
                  <div key={option} style={{ marginBottom: "16px" }}>
                    {" "}
                    <input
                      lable={filter.filterCategory}
                      type="checkbox"
                      name={filter.filterCategory}
                      value={option}
                      onChange={handleCheckboxChange}
                    />
                    {option}
                  </div>
                );
              });
            })}
        </div>
      </div>

      <button
        style={{
          alignSelf: "center",
          textAlign: "center",
          display: "inline-block",
          position: "relative",
          textDecoration: "none",
          color: "white",
          backgroundColor: "blue",
          fontWeight: "medium",
          fontSize: "16px",
          padding: "16px 8px",
          width: "150px",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
