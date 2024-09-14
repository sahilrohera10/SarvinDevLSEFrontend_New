import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Podium from "../icons/score.png";
import Select from "react-select";

const FilterComponent = ({ setOpenModal, openModal, filters }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    if (filters.length > 0) {
      const defaultFilter = filters[0].filterCategory;
      setFilterName(defaultFilter);
      setSelectedOption({ [defaultFilter]: [] });
    }
  }, [filters]);

  const filterHandler = (e) => {
    const newFilterName = e.target.value;

    // Reset the selectedOption when changing the filter
    setSelectedOption((prevSelectedOption) => ({
      [newFilterName]: prevSelectedOption[newFilterName] || [],
    }));

    setFilterName(newFilterName);
  };

  const handleOptionClick = (filterCategory, option) => {
    setSelectedOption((prevSelectedOption) => {
      const currentOptions = prevSelectedOption[filterCategory] || [];
      const isSelected = currentOptions.includes(option);
      const updatedOptions = isSelected
        ? currentOptions.filter((opt) => opt !== option)
        : [...currentOptions, option];

      return { ...prevSelectedOption, [filterCategory]: updatedOptions };
    });
  };

  const handleApplyFilters = () => {
    console.log("Selected Option:", selectedOption);
  };

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const getSelectOptions = (options) =>
    options.map((option) => ({ value: option, label: option }));
  console.log(selectedOption);
  const renderFilterOptions = (filter) => {
    if (filter.filterCategory === "Brand Category") {
      const options = getSelectOptions(filter.filterOptions);
      return (
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
          value={selectedOption[filter.filterCategory]?.map((option) => ({
            value: option,
            label: option,
          }))}
          onChange={(selected) => {
            const selectedValues = selected.map((option) => option.value);
            setSelectedOption((prevSelectedOption) => ({
              ...prevSelectedOption,
              [filter.filterCategory]: selectedValues,
            }));
          }}
          options={options}
          placeholder="Select Categories Here..."
        />
      );
    }
    return filter.filterOptions.map((option) => (
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
          onClick={() => handleOptionClick(filter.filterCategory, option)}
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
            fontWeight: selectedOption[filter.filterCategory]?.includes(option)
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
  };

  return (
    <div
      id="filter-container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "786px",
        gap: "32px",
        backgroundColor: "#F8F9FF",
        borderRadius: "12px",
        overflow: "hidden",
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
            flexDirection: "column",
            alignItems: "flex-start",
            width: "30%",
            backgroundColor: "#ffffff",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {filters.map((filter) => (
            <div
              key={filter.filterCategory}
              style={{
                marginBottom: "16px",
                fontWeight: 600,
                width: "100%",
                backgroundColor:
                  filterName === filter.filterCategory
                    ? "#f8d7da"
                    : "transparent",
                color:
                  filterName === filter.filterCategory ? "#e65c55" : "#333333",
                border: "1px solid #e1e1e1",
                padding: "8px 16px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
            >
              <button
                onClick={filterHandler}
                value={filter.filterCategory}
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
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            borderRadius: "8px",
            padding: "16px",
            width: "70%",
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            backgroundColor: "#ffffff",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {filters
            .filter((filter) => filter.filterCategory === filterName)
            .flatMap((filter) => renderFilterOptions(filter))}
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
          backgroundColor: "#0360CE",
          fontWeight: "bold",
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
