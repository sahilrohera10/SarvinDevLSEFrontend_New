"use client";

import React from "react";
import LocationSearch from "../LocationSearch";
import SearchBar from "../SearchBar";

const GlobalSearch = ({
  placeholder = "Search for products, services and creators nearby",
  searchValue = "",
  setSearchValue = () => {},
}) => {
  return (
    <div>
      {" "}
      <SearchBar
        text={placeholder}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default GlobalSearch;
