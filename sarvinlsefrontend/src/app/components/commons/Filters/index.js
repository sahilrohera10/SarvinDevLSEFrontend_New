"use client";

import React, { useState } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Filters = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState([20, 80]);

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
    <div>
      <h2>Filter Component</h2>
      <Select
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
      </div>

      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
