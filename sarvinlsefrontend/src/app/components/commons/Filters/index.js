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

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([20, 80]);
  const [filterName, setFilterName] = useState("");

  const filterHandler = (e) => {
    setFilterName(e.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleApplyFilters = () => {
    // Add logic to apply filters based on selected options, checkboxes, sliders, etc.
    console.log("Selected Option:", selectedOption);
    console.log("Checkbox State:", isChecked);
    console.log("Slider Value:", sliderValue);
  };

  return (
    <div
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
        <button>Close</button>
      </div>
      {/* <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        isMulti
        placeholder="Select Options"
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Check me
        </label>
      </div>

      <div>
        <Slider range defaultValue={[20, 80]} onChange={handleSliderChange} />
      </div> */}

      <div style={{ display: "flex", gap: "24px" }}>
        <div
          style={{
            backgroundColor: "grey",
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
            backgroundColor: "grey",
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
              return filter.filterOptions.map((filter) => {
                return (
                  <div key={filter} style={{ marginBottom: "16px" }}>
                    {" "}
                    <input
                      type="checkbox"
                      // onChange={handleCheckboxChange}
                    />
                    {filter}
                  </div>
                );
              });
            })}
        </div>
      </div>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
