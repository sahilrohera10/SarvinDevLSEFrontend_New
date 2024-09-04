import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Podium from "../icons/score.png";

const FilterComponent = ({ setOpenModal, openModal, filters }) => {
  const [selectedOption, setSelectedOption] = useState({});
  const [filterName, setFilterName] = useState("");
  // Assuming you have state for modal

  useEffect(() => {
    if (filters.length > 0) {
      const defaultFilter = filters[0].filterCategory;
      setFilterName(defaultFilter);
      const defaultOptions =
        filters.find((filter) => filter.filterCategory === defaultFilter)
          ?.filterOptions || [];
      setSelectedOption({ [defaultFilter]: defaultOptions });
    }
  }, [filters]);

  const filterHandler = (e) => {
    setFilterName(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setSelectedOption((prevSelectedOption) => {
      const currentOptions = prevSelectedOption[name] || [];
      const isSelected = currentOptions.includes(value);
      const updatedOptions = isSelected
        ? currentOptions.filter((option) => option !== value)
        : [...currentOptions, value];

      return { ...prevSelectedOption, [name]: updatedOptions };
    });
  };

  const handleApplyFilters = () => {
    console.log("Selected Option:", selectedOption);
  };

  const closeModal = () => {
    setOpenModal(!openModal);
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
          <div> Apply Filters Here</div>
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
                style={{}}
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
            flexDirection: "column",
            backgroundColor: "#ffffff",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {filters
            .filter((filter) => filter.filterCategory === filterName)
            .flatMap((filter) =>
              filter.filterOptions.map((option) => (
                <div
                  key={option}
                  style={{
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    style={{
                      marginRight: "12px",
                      fontFamily: "sans-serif",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    type="checkbox"
                    name={filter.filterCategory}
                    value={option}
                    checked={
                      selectedOption[filter.filterCategory]?.includes(option) ||
                      false
                    }
                    onChange={handleCheckboxChange}
                  />
                  <label
                    style={{
                      cursor: "pointer",
                      backgroundColor: selectedOption[
                        filter.filterCategory
                      ]?.includes(option)
                        ? "#f8d7da"
                        : "transparent",
                      color: selectedOption[filter.filterCategory]?.includes(
                        option
                      )
                        ? "#e65c55"
                        : "#333333",
                      borderRadius: "8px",
                      padding: "6px 12px",
                      transition:
                        "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
                      border: "1px dotted",
                      fontWeight: selectedOption[
                        filter.filterCategory
                      ]?.includes(option)
                        ? 500
                        : 600,
                    }}
                  >
                    {option}
                  </label>
                </div>
              ))
            )}
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
