"use client";

import React from "react";
import LocationSearch from "../LocationSearch";
import SearchBar from "../SearchBar";

const GlobalSearch = ({
  placeholder = "Search for products, services and creators nearby",
}) => {
  return (
    <div>
      {" "}
      <SearchBar text={placeholder} />
    </div>
  );
};

export default GlobalSearch;
