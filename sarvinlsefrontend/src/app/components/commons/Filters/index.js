"use client";

import React, { useState, useEffect } from "react";
import { FaRupeeSign, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Podium from "../../commons/icons/score.png";
import Select from "react-select";

const FilterComponent = ({
  setOpenModal,
  openModal,
  filters,
  selectedOptionAudienceAge = [],
  setSelectedOptionAudienceAge = () => {},
  selectedOptionAudienceGender = [],
  setSelectedOptionAudienceGender = () => {},
  selectedOptionBrandCategory = [],
  setSelectedOptionBrandCategory = () => {},
  selectedOptionSocialMedia = [],
  setSelectedOptionSocialMedia = () => {},
  selectedOptionPromotionType = [],
  setSelectedOptionPromotionType = () => {},
  selectedOptionInfluencerGender = [],
  setSelectedOptionInfluencerGender = () => {},
}) => {
  const [selectedOption, setSelectedOption] = useState(filters[0]);
  // const [selectedOptionBrandCategory, setSelectedOptionBrandCategory] =
  //   useState([]);
  // const [selectedOptionAudienceAge, setSelectedOptionAudienceAge] = useState(
  //   []
  // );
  // const [selectedOptionSocialMedia, setSelectedOptionSocialMedia] = useState(
  //   []
  // );
  // const [selectedOptionAudienceGender, setSelectedOptionAudienceGender] =
  //   useState([]);
  // const [selectedOptionPromotionType, setSelectedOptionPromotionType] =
  //   useState([]);
  // const [selectedOptionInfluencerGender, setSelectedOptionInfluencerGender] =
  //   useState([]);
  const [minValue, setMinValue] = useState(10); // Initial minimum value
  const [maxValue, setMaxValue] = useState(90); // Initial maximum value
  const minLimit = 0; // Minimum possible value for range
  const maxLimit = 1000;
  const [filterName, setFilterName] = useState("");

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  // Ensure that the maximum value does not fall below the minimum value
  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  const optionsViewer = (filters, selectedOption) => {
    return filters
      .filter(
        (filter) => filter.filterCategory === selectedOption.filterCategory
      )
      .map((filter) => renderFilterOptions(filter));
  };

  const handleOptionClick = (filter, index) => {
    if (filter.filterCategory === "Audience Age") {
      setSelectedOptionAudienceAge((prevSelected) => [
        ...prevSelected, // Spread the previous state
        filter.filterSelectedOptions[index], // Add the new selected option
      ]);
    } else if (filter.filterCategory === "Social Platforms") {
      setSelectedOptionSocialMedia((prevSelected) => [
        ...prevSelected, // Spread the previous state
        filter.filterSelectedOptions[index], // Add the new selected option
      ]);
    } else if (filter.filterCategory === "Audience Gender") {
      setSelectedOptionAudienceGender((prevSelected) => [
        ...prevSelected, // Spread the previous state
        filter.filterSelectedOptions[index], // Add the new selected option
      ]);
    } else if (filter.filterCategory === "Influencer Gender") {
      setSelectedOptionInfluencerGender((prevSelected) => [
        ...prevSelected, // Spread the previous state
        filter.filterSelectedOptions[index], // Add the new selected option
      ]);
    } else if (filter.filterCategory === "Promotion Type") {
      setSelectedOptionPromotionType((prevSelected) => [
        ...prevSelected, // Spread the previous state
        filter.filterSelectedOptions[index], // Add the new selected option
      ]);
    }
  };

  const handleApplyFilters = () => {
    console.log("Selected Option:", selectedOption);
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const getSelectOptions = (filter) => {
    if (
      filter?.filterOptions &&
      Array.isArray(filter.filterOptions) &&
      filter.filterOptions.length > 0
    ) {
      return filter.filterOptions.map((option, index) => ({
        value: filter?.filterSelectedOptions?.[index] || "", // Provide a fallback for value
        label: option,
      }));
    }
    return []; // Return an empty array if no options exist
  };

  const renderFilterOptions = (filter) => {
    if (filter.filterCategory === "Brand Category") {
      const options = getSelectOptions(filter);

      return (
        <>
          <div
            style={{
              backgroundColor: "#fff",
              color: "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 600,

              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            Brand Category
          </div>

          <Select
            isMulti
            styles={{
              container: (provided) => ({
                ...provided,
                width: "100%", // Make select component full width
              }),
              control: (provided) => ({
                ...provided,
                width: "100%", // Ensure control element is full width
                border: "1px solid #e1e1e1",
                boxShadow: "none",
                borderRadius: "8px",
                "&:hover": {
                  border: "1px solid #e1e1e1",
                },
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 9999, // Ensure dropdown is above other elements
              }),
            }}
            value={options.value}
            onChange={(selected) => {
              const selectedValues = selected.map((option) => option.value);
              setSelectedOptionBrandCategory(selectedValues);
            }}
            options={options}
            placeholder="Select Categories Here..."
          />
        </>
      );
    } else if (filter.filterCategory === "Audience Age") {
      return filter.filterOptions.map((option, index) => (
        <div
          key={option}
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => handleOptionClick(filter, index)}
            style={{
              backgroundColor: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? "#f8d7da"
                : "#f8f9ff",
              color: selectedOption[filter.filterCategory]?.includes(option)
                ? "#000"
                : "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? 500
                : 600,
              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            {option}
          </button>
        </div>
      ));
    } else if (filter.filterCategory === "Social Platforms") {
      return filter.filterOptions.map((option, index) => (
        <div
          key={option}
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => handleOptionClick(filter, index)}
            style={{
              backgroundColor: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? "#f8d7da"
                : "#f8f9ff",
              color: selectedOption[filter.filterCategory]?.includes(option)
                ? "#000"
                : "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? 500
                : 600,
              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            {option}
          </button>
        </div>
      ));
    } else if (filter.filterCategory === "Audience Gender") {
      return filter.filterOptions.map((option, index) => (
        <div
          key={option}
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => handleOptionClick(filter, index)}
            style={{
              backgroundColor: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? "#f8d7da"
                : "#f8f9ff",
              color: selectedOption[filter.filterCategory]?.includes(option)
                ? "#000"
                : "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? 500
                : 600,
              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            {option}
          </button>
        </div>
      ));
    } else if (filter.filterCategory === "Influencer Gender") {
      return filter.filterOptions.map((option, index) => (
        <div
          key={option}
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => handleOptionClick(filter, index)}
            style={{
              backgroundColor: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? "#f8d7da"
                : "#f8f9ff",
              color: selectedOption[filter.filterCategory]?.includes(option)
                ? "#000"
                : "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? 500
                : 600,
              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            {option}
          </button>
        </div>
      ));
    } else if (filter.filterCategory === "Promotion Type") {
      return filter.filterOptions.map((option, index) => (
        <div
          key={option}
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => handleOptionClick(filter, index)}
            style={{
              backgroundColor: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? "#f8d7da"
                : "#f8f9ff",
              color: selectedOption[filter.filterCategory]?.includes(option)
                ? "#000"
                : "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: selectedOption[filter.filterCategory]?.includes(
                option
              )
                ? 500
                : 600,
              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            {option}
          </button>
        </div>
      ));
    } else if (filter.filterCategory === "Reward Cost Range") {
      return (
        <div className="w-full p-4">
          <div
            style={{
              backgroundColor: "#fff",
              color: "#333333",
              border: "1px solid #e1e1e1",
              borderRadius: "8px",
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 600,

              transition: "background-color 0.3s ease, color 0.3s ease",
              width: "100%",
            }}
          >
            Reward Cost Range
          </div>

          <div className="flex justify-between my-10">
            <div>
              <label className="text-lg font-medium text-gray-700 flex align-bottom">
                Min Value: <FaRupeeSign />
                {minValue}
              </label>
            </div>
            <div>
              <label className="text-lg font-medium text-gray-700 flex">
                Max Value: <FaRupeeSign />
                {maxValue}
              </label>
            </div>
          </div>

          {/* Range Sliders */}
          <div className="relative flex items-center space-x-4">
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={minValue}
              onChange={handleMinChange}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min={minLimit}
              max={maxLimit}
              value={maxValue}
              onChange={handleMaxChange}
              className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Visual Min/Max Display */}
          <div className="flex justify-between mt-4">
            <span className="text-sm text-gray-500 flex gap-1 align-middle">
              <FaRupeeSign />
              {minLimit}
            </span>
            <span className="text-sm text-gray-500 flex gap-1 align-middle">
              <FaRupeeSign />
              {maxLimit}
            </span>
          </div>

          {/* Display of selected range */}
          <div className="mt-4 text-center text-lg font-medium text-gray-700 bg-gray-200 rounded">
            Selected Range: Rs. {minValue} - Rs. {maxValue}
          </div>
        </div>
      );
    } else {
      return;
    }
  };

  return (
    <div
      id="filter-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "786px",

        gap: "32px",
        border: "0.5px dashed",
        padding: "40px",
        backgroundColor: "#F8F9FF",
        borderRadius: "12px",

        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div
        style={{
          fontSize: 30,
          fontWeight: 400,
          margin: "0px 20px",
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div>Apply Filters Here</div>
          <Image src={Podium} alt="podium" width={34} height={34} />
        </div>
        <div>
          <button
            id="closeButton"
            onClick={closeModal}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
          >
            <FaTimes style={{ fontSize: "24px" }} />
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "24px" }}>
        <div
          style={{
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
            borderRadius: "8px",
            padding: "16px",
            display: "flex",
            height: "50vh",
            overflow: "auto",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "30%",
            backgroundColor: "#ffffff",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {filters.map((filter) => (
            <button
              onClick={() => setSelectedOption(filter)}
              key={filter.filterCategory}
              style={{
                marginBottom: "16px",
                fontWeight: 600,
                width: "100%",
                backgroundColor:
                  selectedOption.filterCategory === filter.filterCategory
                    ? "#f8d7da"
                    : "transparent",
                color:
                  selectedOption.filterCategory === filter.filterCategory
                    ? "#e65c55"
                    : "#333333",
                border: "1px solid #e1e1e1",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              <div
                value={filter}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  color: "inherit",
                  cursor: "pointer",
                  fontWeight: "inherit",
                }}
              >
                {filter.filterCategory}
              </div>
            </button>
          ))}
        </div>

        <div
          style={{
            borderRadius: "8px",
            padding: "16px",
            width: "70%",
            height: "50vh",
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            transition: "box-shadow 0.3s ease",
            overflow: "auto",
          }}
        >
          {optionsViewer(filters, selectedOption)}
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
          backgroundColor: "#e65c55",
          fontSize: "16px",
          padding: "12px 24px",
          width: "150px",
          borderRadius: "8px",
          overflow: "hidden",
          transition: "background-color 0.3s ease, transform 0.3s ease",
          cursor: "pointer",
          border: "none",
        }}
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;
